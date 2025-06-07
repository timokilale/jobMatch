const prisma = require('../prisma');

class SkillsAnalysisService {
  constructor() {
    this.trainingProviders = [
      {
        name: 'Coursera',
        baseUrl: 'https://www.coursera.org',
        type: 'online'
      },
      {
        name: 'Udemy',
        baseUrl: 'https://www.udemy.com',
        type: 'online'
      },
      {
        name: 'LinkedIn Learning',
        baseUrl: 'https://www.linkedin.com/learning',
        type: 'online'
      },
      {
        name: 'edX',
        baseUrl: 'https://www.edx.org',
        type: 'online'
      }
    ];
  }

  // Analyze skill gaps for a specific applicant
  async analyzeSkillGaps(applicantId) {
    try {
      // Get applicant's current skills and categories
      const applicant = await prisma.applicant.findUnique({
        where: { id: applicantId },
        include: {
          categories: true,
          skills: {
            include: {
              skillMaster: true
            }
          },
          generalSkills: true,
          languages: true,
          qualifications: true,
          experiences: true
        }
      });

      if (!applicant) {
        throw new Error('Applicant not found');
      }

      // Get job-based market demand for applicant's categories
      const marketDemand = await this.getJobBasedMarketDemand(applicant.categories);

      // Analyze current skills
      const currentSkills = this.extractCurrentSkills(applicant);

      // Identify skill gaps based on actual job requirements
      const skillGaps = await this.identifyJobBasedSkillGaps(currentSkills, marketDemand);

      // Generate training recommendations
      const trainingRecommendations = await this.generateTrainingRecommendations(skillGaps);

      // Generate career path suggestions
      const careerPaths = await this.generateCareerPathSuggestions(applicant, currentSkills, marketDemand);

      return {
        applicantId,
        currentSkills,
        marketDemand,
        skillGaps,
        trainingRecommendations,
        careerPaths,
        analysisDate: new Date(),
        overallScore: this.calculateOverallScore(currentSkills, marketDemand)
      };
    } catch (error) {
      console.error('Error analyzing skill gaps:', error);
      throw error;
    }
  }

  // Extract current skills from applicant profile
  extractCurrentSkills(applicant) {
    const skills = {
      technical: [],
      computer: [],
      soft: [],
      general: [],
      languages: [],
      education: [],
      experience: [],
      categories: []
    };

    // Primary source: GeneralSkill table (unified skills system)
    if (applicant.generalSkills && applicant.generalSkills.length > 0) {
      applicant.generalSkills.forEach(skill => {
        const skillData = {
          name: skill.skill,
          proficiency: skill.proficiency,
          description: skill.description,
          category: skill.description,
          type: 'general'
        };

        // Categorize skills based on their description/category
        switch (skill.description) {
          case 'Computer Skills':
            skills.computer.push(skillData);
            break;
          case 'Technical':
            skills.technical.push(skillData);
            break;
          case 'Soft Skills':
            skills.soft.push(skillData);
            break;
          default:
            skills.general.push(skillData);
        }
      });
    }

    // Legacy ApplicantSkill table
    if (applicant.skills && applicant.skills.length > 0) {
      const legacySkills = applicant.skills.map(skill => {
        return {
          name: skill.skillMaster?.name || skill.skill,
          proficiency: skill.proficiency,
          type: 'technical'
        };
      }).filter(skill => skill.name); // Only include skills with valid names

      skills.technical.push(...legacySkills);
    }

    // Combine all skills for easier processing
    skills.allSkills = [
      ...skills.technical,
      ...skills.computer,
      ...skills.soft,
      ...skills.general
    ];

    // Language skills
    skills.languages = applicant.languages.map(lang => ({
      name: lang.language,
      proficiency: {
        speak: lang.speakLevel,
        read: lang.readLevel,
        write: lang.writeLevel
      },
      type: 'language'
    }));

    // Education background
    skills.education = applicant.qualifications.map(qual => ({
      level: qual.level,
      field: qual.fieldOfStudy,
      institution: qual.institution,
      type: 'education'
    }));

    // Work experience
    skills.experience = applicant.experiences.map(exp => ({
      title: exp.jobTitle,
      institution: exp.companyName,
      duration: this.calculateDuration(exp.startDate, exp.endDate),
      type: 'experience'
    }));

    // Categories/interests
    skills.categories = applicant.categories.map(cat => ({
      name: cat.name,
      type: 'category'
    }));

    return skills;
  }

  // Get job-based market demand for specific categories
  async getJobBasedMarketDemand(categories) {
    const categoryNames = categories.map(cat => cat.name);
    console.log('Getting job-based market demand for categories:', categoryNames);

    // Get active jobs in the user's categories with their requirements (3NF normalized)
    const jobs = await prisma.job.findMany({
      where: {
        status: 'ACTIVE',
        categories: {
          some: {
            name: { in: categoryNames }
          }
        }
      },
      include: {
        categories: true,
        employer: true,
        requirements: {
          include: {
            skillMaster: true
          }
        }
      }
    });

    // If no category-specific jobs, get all active jobs
    if (jobs.length === 0) {
      console.log('No category-specific jobs found, getting all active jobs');
      const allJobs = await prisma.job.findMany({
        where: { status: 'ACTIVE' },
        include: {
          categories: true,
          employer: true,
          requirements: {
            include: {
              skillMaster: true
            }
          }
        },
        take: 50 // Limit to recent 50 jobs
      });
      jobs.push(...allJobs);
    }

    // Extract skill requirements from jobs using normalized structure
    const skillRequirements = [];

    jobs.forEach(job => {
      // Use actual job requirements from normalized table
      job.requirements.forEach(req => {
        skillRequirements.push({
          skillName: req.skillMaster.name,
          skillCategory: req.skillMaster.category,
          importance: req.importance.toLowerCase(),
          proficiencyLevel: req.proficiencyLevel,
          yearsRequired: req.yearsRequired,
          jobTitle: job.title,
          jobId: job.id,
          requirementId: req.id
        });
      });
    });

    // Get existing skill demand data from normalized database
    const existingSkillDemand = await prisma.skillDemand.findMany({
      include: {
        skillMaster: true
      },
      orderBy: { demandScore: 'desc' },
      take: 50
    });

    // Calculate demand scores based on frequency and importance
    const skillDemandMap = {};

    // Add skills from job analysis
    skillRequirements.forEach(req => {
      const skill = req.skillName.toLowerCase();
      if (!skillDemandMap[skill]) {
        skillDemandMap[skill] = {
          skillName: req.skillName,
          skillCategory: req.skillCategory,
          demandScore: 0,
          jobCount: 0,
          importance: { required: 0, preferred: 0, nice_to_have: 0 },
          avgYearsRequired: 0,
          totalYearsRequired: 0,
          requirementCount: 0
        };
      }

      skillDemandMap[skill].jobCount++;
      skillDemandMap[skill].importance[req.importance.toLowerCase()]++;
      skillDemandMap[skill].requirementCount++;

      // Track years of experience required
      if (req.yearsRequired) {
        skillDemandMap[skill].totalYearsRequired += req.yearsRequired;
        skillDemandMap[skill].avgYearsRequired =
          skillDemandMap[skill].totalYearsRequired / skillDemandMap[skill].requirementCount;
      }

      // Calculate demand score based on frequency and importance
      let importanceWeight = 1;
      if (req.importance === 'required') importanceWeight = 3;
      else if (req.importance === 'preferred') importanceWeight = 2;
      else importanceWeight = 1;

      skillDemandMap[skill].demandScore += importanceWeight;
    });

    // Add existing skill demand data
    existingSkillDemand.forEach(skillData => {
      const skill = skillData.skillMaster.name.toLowerCase();
      if (!skillDemandMap[skill]) {
        skillDemandMap[skill] = {
          skillName: skillData.skillMaster.name,
          skillCategory: skillData.skillMaster.category,
          demandScore: skillData.demandScore,
          jobCount: Math.round(skillData.demandScore / 10),
          importance: { required: 1, preferred: 2, nice_to_have: 1 },
          avgYearsRequired: 2,
          growth: skillData.growth
        };
      } else {
        // Enhance existing data with market demand info
        skillDemandMap[skill].marketDemandScore = skillData.demandScore;
        skillDemandMap[skill].growth = skillData.growth;
      }
    });

    // Convert to array and normalize scores
    const highDemandSkills = Object.values(skillDemandMap)
      .map(skill => {
        // Calculate normalized demand score
        const jobBasedScore = jobs.length > 0 ?
          Math.min((skill.demandScore / jobs.length) * 100, 100) : 0;

        // Combine job-based score with market demand score if available
        const finalScore = skill.marketDemandScore ?
          (jobBasedScore * 0.7 + skill.marketDemandScore * 0.3) :
          jobBasedScore;

        return {
          ...skill,
          demandScore: finalScore,
          jobBasedScore: jobBasedScore,
          marketDemandScore: skill.marketDemandScore,
          demandLevel: finalScore > 70 ? 'High' : finalScore > 40 ? 'Medium' : 'Low'
        };
      })
      .filter(skill => skill.demandScore > 5) // Lower threshold to include more skills
      .sort((a, b) => b.demandScore - a.demandScore);

    const result = {
      totalJobs: jobs.length,
      totalRequirements: skillRequirements.length,
      skillRequirements,
      highDemandSkills: highDemandSkills.slice(0, 20), // Top 20 skills
      categories: categoryNames,
      skillCategories: [...new Set(highDemandSkills.map(s => s.skillCategory))],
      lastUpdated: new Date(),
      dataSource: 'Normalized 3NF Database'
    };

    console.log('Job-based market demand result (3NF normalized):', {
      totalJobs: result.totalJobs,
      totalRequirements: result.totalRequirements,
      skillRequirementsCount: result.skillRequirements.length,
      highDemandSkillsCount: result.highDemandSkills.length,
      skillCategories: result.skillCategories.length
    });

    return result;
  }

  // Identify skill gaps based on actual job requirements
  async identifyJobBasedSkillGaps(currentSkills, marketDemand) {
    const gaps = {
      critical: [], // Skills essential for target roles
      important: [], // Skills that would significantly improve prospects
      nice_to_have: [] // Skills that would be beneficial
    };

    // Get current skill names from actual skills only (exclude categories as fallback)
    const currentSkillNames = [
      ...currentSkills.technical.map(s => s.name.toLowerCase()),
      ...currentSkills.computer.map(s => s.name.toLowerCase()),
      ...currentSkills.soft.map(s => s.name.toLowerCase()),
      ...currentSkills.general.map(s => s.name.toLowerCase())
      // Removed categories from skill matching - they are interests, not skills
    ];

    console.log('Current user skills:', currentSkillNames);
    console.log('Job market skills:', marketDemand.highDemandSkills.map(s => s.skillName));

    marketDemand.highDemandSkills.forEach(skill => {
      const skillName = skill.skillName.toLowerCase();

      // Check if user has this skill (exact matching only)
      const hasSkill = currentSkillNames.includes(skillName);

      if (!hasSkill) {
        const gap = {
          skillName: skill.skillName,
          demandScore: skill.demandScore,
          jobCount: skill.jobCount,
          importance: skill.importance,
          estimatedLearningTime: this.estimateLearningTime(skill.skillName),
          difficulty: this.estimateSkillDifficulty(skill.skillName)
        };

        // Categorize based on demand score and job frequency
        if (skill.demandScore > 70 && skill.importance.required > 2) {
          gaps.critical.push(gap);
        } else if (skill.demandScore > 40 && skill.importance.preferred > 1) {
          gaps.important.push(gap);
        } else {
          gaps.nice_to_have.push(gap);
        }
      }
    });

    console.log('Skill gaps identified:', {
      critical: gaps.critical.length,
      important: gaps.important.length,
      nice_to_have: gaps.nice_to_have.length
    });

    return gaps;
  }

  // Helper method for flexible skill matching
  isSkillSimilar(userSkill, jobSkill) {
    const synonyms = {
      'javascript': ['js', 'node.js', 'react', 'vue', 'angular'],
      'python': ['django', 'flask', 'pandas', 'numpy'],
      'java': ['spring', 'hibernate'],
      'sql': ['mysql', 'postgresql', 'database'],
      'microsoft office': ['excel', 'word', 'powerpoint', 'office'],
      'project management': ['scrum', 'agile', 'kanban']
    };

    // Remove flexible skill matching - use exact matching only
    return userSkill === jobSkill;
  }

  // Generate training recommendations for identified skill gaps
  async generateTrainingRecommendations(skillGaps) {
    const recommendations = [];

    // Process critical skills first
    for (const skill of skillGaps.critical) {
      const courses = await this.findTrainingCourses(skill.skillName);
      recommendations.push({
        skill: skill.skillName,
        priority: 'critical',
        courses: courses.slice(0, 3), // Top 3 recommendations
        estimatedCost: this.estimateTrainingCost(courses),
        estimatedTime: skill.estimatedLearningTime,
        difficulty: skill.difficulty
      });
    }

    // Process important skills
    for (const skill of skillGaps.important) {
      const courses = await this.findTrainingCourses(skill.skillName);
      recommendations.push({
        skill: skill.skillName,
        priority: 'important',
        courses: courses.slice(0, 2), // Top 2 recommendations
        estimatedCost: this.estimateTrainingCost(courses),
        estimatedTime: skill.estimatedLearningTime,
        difficulty: skill.difficulty
      });
    }

    return recommendations;
  }

  // Find training courses for a specific skill
  async findTrainingCourses(skillName) {
    // Return empty array - no mock data
    return [];
  }

  // Generate career path suggestions
  async generateCareerPathSuggestions(applicant, currentSkills, marketDemand) {
    const suggestions = [];

    // Analyze current categories and suggest career progressions
    for (const category of applicant.categories) {
      const careerPath = await this.generateCareerPathForCategory(category.name, currentSkills, marketDemand);
      suggestions.push(careerPath);
    }

    return suggestions;
  }

  async generateCareerPathForCategory(categoryName, currentSkills, marketDemand) {
    // Return empty career path - no mock data
    return {
      category: categoryName,
      currentLevel: this.assessCurrentLevel(currentSkills, categoryName),
      careerLevels: [],
      recommendedNextSteps: [],
      marketOutlook: this.getMarketOutlook(categoryName, marketDemand)
    };
  }

  // Helper methods
  calculateDuration(startDate, endDate) {
    const start = new Date(startDate);
    const end = endDate ? new Date(endDate) : new Date();
    const months = (end.getFullYear() - start.getFullYear()) * 12 + (end.getMonth() - start.getMonth());
    return `${months} months`;
  }

  identifyHighDemandSkills(skillDemand) {
    return skillDemand
      .filter(skill => skill.demandScore > 50)
      .sort((a, b) => b.demandScore - a.demandScore);
  }

  identifyGrowingIndustries(marketTrends) {
    // Simple growth calculation
    return marketTrends
      .filter(trend => trend.value > 0)
      .sort((a, b) => b.value - a.value);
  }

  calculateSkillPriority(skill) {
    return (skill.demandScore * 0.7) + (skill.growth * 0.3);
  }

  estimateLearningTime(skillName) {
    // Return null - no estimation without real data
    return null;
  }

  estimateSkillDifficulty(skillName) {
    // Return null - no estimation without real data
    return null;
  }

  estimateTrainingCost(courses) {
    if (!courses.length) return 0;
    const avgCost = courses.reduce((sum, course) => sum + course.price, 0) / courses.length;
    return Math.round(avgCost);
  }

  calculateOverallScore(currentSkills, marketDemand) {
    // Job-based market alignment scoring
    const currentSkillNames = [
      ...currentSkills.technical.map(s => s.name.toLowerCase()),
      ...currentSkills.categories.map(s => s.name.toLowerCase()),
      ...(currentSkills.general || []).map(s => s.name.toLowerCase())
    ];

    console.log('Calculating job-based market alignment score:');
    console.log('Current skills:', currentSkillNames);
    console.log('Job market skills count:', marketDemand.highDemandSkills?.length || 0);
    console.log('Total jobs analyzed:', marketDemand.totalJobs || 0);

    // If no current skills, return 0
    if (currentSkillNames.length === 0) {
      console.log('No current skills found, returning 0');
      return 0;
    }

    // If no job market data, return 0
    if (!marketDemand.highDemandSkills || marketDemand.highDemandSkills.length === 0) {
      console.log('No job market data, returning 0');
      return 0;
    }

    // Calculate job-based skill matching
    let matchedSkillsScore = 0;
    let totalDemandScore = 0;
    let matchedSkillsCount = 0;
    let criticalSkillsMatched = 0;
    const matchedSkills = [];

    marketDemand.highDemandSkills.forEach(demandSkill => {
      const skillName = demandSkill.skillName.toLowerCase();
      const isMatched = currentSkillNames.some(current =>
        current.includes(skillName) ||
        skillName.includes(current) ||
        this.isSkillSimilar(current, skillName)
      );

      if (isMatched) {
        matchedSkillsScore += demandSkill.demandScore;
        matchedSkillsCount++;
        matchedSkills.push(skillName);

        // Count critical skills (required in multiple jobs)
        if (demandSkill.importance.required > 0) {
          criticalSkillsMatched++;
        }
      }
      totalDemandScore += demandSkill.demandScore;
    });

    console.log('Job-based skill matching results:');
    console.log('Matched skills:', matchedSkills);
    console.log('Matched skills count:', matchedSkillsCount);
    console.log('Critical skills matched:', criticalSkillsMatched);
    console.log('Total demand score:', totalDemandScore);
    console.log('Matched skills score:', matchedSkillsScore);

    // Calculate alignment percentage
    let alignmentScore = 0;

    if (matchedSkillsCount > 0) {
      // Base score: percentage of matched skills
      const skillMatchPercentage = (matchedSkillsCount / marketDemand.highDemandSkills.length) * 100;

      // Weighted score: consider the demand score of matched skills
      const weightedScore = totalDemandScore > 0 ? (matchedSkillsScore / totalDemandScore) * 100 : 0;

      // Critical skills bonus
      const criticalSkillsRatio = marketDemand.highDemandSkills.filter(s => s.importance.required > 0).length;
      const criticalBonus = criticalSkillsRatio > 0 ? (criticalSkillsMatched / criticalSkillsRatio) * 20 : 0;

      // Combine scores (50% skill match, 30% weighted demand, 20% critical skills)
      alignmentScore = (skillMatchPercentage * 0.5) + (weightedScore * 0.3) + criticalBonus;

      // Bonus for having diverse skills
      const skillDiversityBonus = Math.min(currentSkillNames.length / 10, 1) * 10;
      alignmentScore += skillDiversityBonus;

      console.log('Job-based alignment calculation:');
      console.log('Skill match percentage:', skillMatchPercentage);
      console.log('Weighted score:', weightedScore);
      console.log('Critical skills bonus:', criticalBonus);
      console.log('Skill diversity bonus:', skillDiversityBonus);
      console.log('Combined score:', alignmentScore);
    } else {
      // No skills match job requirements
      alignmentScore = 0;
      console.log('No skills matched job requirements, score: 0');
    }

    const finalScore = Math.round(Math.min(alignmentScore, 100));
    console.log('Final job-based market alignment score:', finalScore);
    return finalScore;
  }

  assessCurrentLevel(currentSkills, categoryName) {
    const experienceYears = currentSkills.experience.length;
    const technicalSkills = currentSkills.technical.length;
    
    if (experienceYears >= 5 && technicalSkills >= 5) return 'Senior Level';
    if (experienceYears >= 2 && technicalSkills >= 3) return 'Mid Level';
    return 'Entry Level';
  }

  getRecommendedNextSteps(categoryName) {
    return [];
  }

  getMarketOutlook(categoryName, marketDemand) {
    // Check if growingIndustries exists and has data
    if (marketDemand.growingIndustries && marketDemand.growingIndustries.length > 0) {
      const trend = marketDemand.growingIndustries.find(t =>
        t.industry.toLowerCase().includes(categoryName.toLowerCase())
      );
      return trend ? 'Growing' : 'Stable';
    }

    return 'Unknown';
  }
}

module.exports = SkillsAnalysisService;
