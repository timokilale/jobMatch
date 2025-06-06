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
          skills: true,
          generalSkills: true, // Include new general skills
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
      languages: [],
      education: [],
      experience: [],
      categories: []
    };

    // Technical skills from computer skills
    skills.technical = applicant.skills.map(skill => ({
      name: skill.skill,
      proficiency: skill.proficiency,
      type: 'technical'
    }));

    // Language skills
    skills.languages = applicant.languages.map(lang => ({
      name: lang.language,
      proficiency: {
        speak: lang.speak,
        read: lang.read,
        write: lang.write
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
      institution: exp.institution,
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

    // Get active jobs in the user's categories
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
        requirements: true,
        categories: true
      }
    });

    // If no category-specific jobs, get all active jobs
    if (jobs.length === 0) {
      console.log('No category-specific jobs found, getting all active jobs');
      const allJobs = await prisma.job.findMany({
        where: { status: 'ACTIVE' },
        include: {
          requirements: true,
          categories: true
        },
        take: 50 // Limit to recent 50 jobs
      });
      jobs.push(...allJobs);
    }

    // Extract skill requirements from jobs
    const skillRequirements = [];
    jobs.forEach(job => {
      job.requirements.forEach(req => {
        skillRequirements.push({
          skillName: req.skillName,
          importance: req.importance,
          proficiencyLevel: req.proficiencyLevel,
          jobTitle: job.title,
          jobId: job.id
        });
      });
    });

    // Calculate demand scores based on frequency and importance
    const skillDemandMap = {};
    skillRequirements.forEach(req => {
      const skill = req.skillName.toLowerCase();
      if (!skillDemandMap[skill]) {
        skillDemandMap[skill] = {
          skillName: req.skillName,
          demandScore: 0,
          jobCount: 0,
          importance: { required: 0, preferred: 0, nice_to_have: 0 }
        };
      }

      skillDemandMap[skill].jobCount++;
      skillDemandMap[skill].importance[req.importance.toLowerCase()]++;

      // Calculate demand score based on frequency and importance
      let importanceWeight = 1;
      if (req.importance === 'REQUIRED') importanceWeight = 3;
      else if (req.importance === 'PREFERRED') importanceWeight = 2;
      else importanceWeight = 1;

      skillDemandMap[skill].demandScore += importanceWeight;
    });

    // Convert to array and normalize scores
    const highDemandSkills = Object.values(skillDemandMap)
      .map(skill => ({
        ...skill,
        demandScore: Math.min((skill.demandScore / jobs.length) * 100, 100) // Normalize to 0-100
      }))
      .filter(skill => skill.demandScore > 10) // Only include skills with meaningful demand
      .sort((a, b) => b.demandScore - a.demandScore);

    const result = {
      totalJobs: jobs.length,
      skillRequirements,
      highDemandSkills,
      categories: categoryNames
    };

    console.log('Job-based market demand result:', {
      totalJobs: result.totalJobs,
      skillRequirementsCount: result.skillRequirements.length,
      highDemandSkillsCount: result.highDemandSkills.length
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

    // Get current skill names from all sources
    const currentSkillNames = [
      ...currentSkills.technical.map(s => s.name.toLowerCase()),
      ...currentSkills.categories.map(s => s.name.toLowerCase()),
      ...(currentSkills.general || []).map(s => s.name.toLowerCase())
    ];

    console.log('Current user skills:', currentSkillNames);
    console.log('Job market skills:', marketDemand.highDemandSkills.map(s => s.skillName));

    marketDemand.highDemandSkills.forEach(skill => {
      const skillName = skill.skillName.toLowerCase();

      // Check if user has this skill (flexible matching)
      const hasSkill = currentSkillNames.some(current =>
        current.includes(skillName) ||
        skillName.includes(current) ||
        this.isSkillSimilar(current, skillName)
      );

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
        if (skill.demandScore > 70 || skill.importance.required > 2) {
          gaps.critical.push(gap);
        } else if (skill.demandScore > 40 || skill.importance.preferred > 1) {
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

    for (const [key, values] of Object.entries(synonyms)) {
      if ((userSkill.includes(key) || values.some(v => userSkill.includes(v))) &&
          (jobSkill.includes(key) || values.some(v => jobSkill.includes(v)))) {
        return true;
      }
    }
    return false;
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
    // Mock course data - in production, integrate with actual course APIs
    const mockCourses = [
      {
        title: `Complete ${skillName} Course`,
        provider: 'Coursera',
        duration: '6 weeks',
        rating: 4.5,
        price: 49,
        url: `https://www.coursera.org/search?query=${encodeURIComponent(skillName)}`,
        level: 'Beginner to Advanced'
      },
      {
        title: `${skillName} Masterclass`,
        provider: 'Udemy',
        duration: '12 hours',
        rating: 4.3,
        price: 89,
        url: `https://www.udemy.com/courses/search/?q=${encodeURIComponent(skillName)}`,
        level: 'Intermediate'
      },
      {
        title: `Professional ${skillName} Certification`,
        provider: 'LinkedIn Learning',
        duration: '4 weeks',
        rating: 4.4,
        price: 29,
        url: `https://www.linkedin.com/learning/search?keywords=${encodeURIComponent(skillName)}`,
        level: 'Professional'
      }
    ];

    return mockCourses;
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
    // Mock career path data - in production, use ML models and real career data
    const careerLevels = [
      {
        level: 'Entry Level',
        roles: [`Junior ${categoryName} Specialist`, `${categoryName} Assistant`],
        requiredSkills: ['Basic knowledge', 'Communication skills'],
        salaryRange: '$30,000 - $45,000',
        timeToAchieve: '0-2 years'
      },
      {
        level: 'Mid Level',
        roles: [`${categoryName} Specialist`, `Senior ${categoryName} Associate`],
        requiredSkills: ['Advanced technical skills', 'Project management'],
        salaryRange: '$45,000 - $70,000',
        timeToAchieve: '2-5 years'
      },
      {
        level: 'Senior Level',
        roles: [`Senior ${categoryName} Manager`, `${categoryName} Lead`],
        requiredSkills: ['Leadership', 'Strategic thinking', 'Team management'],
        salaryRange: '$70,000 - $100,000',
        timeToAchieve: '5-8 years'
      }
    ];

    return {
      category: categoryName,
      currentLevel: this.assessCurrentLevel(currentSkills, categoryName),
      careerLevels,
      recommendedNextSteps: this.getRecommendedNextSteps(categoryName),
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
    // Mock estimation - in production, use ML models
    const timeEstimates = {
      'programming': '3-6 months',
      'data analysis': '2-4 months',
      'digital marketing': '1-3 months',
      'project management': '2-3 months'
    };
    
    const lowerSkill = skillName.toLowerCase();
    for (const [key, time] of Object.entries(timeEstimates)) {
      if (lowerSkill.includes(key)) return time;
    }
    
    return '2-4 months';
  }

  estimateSkillDifficulty(skillName) {
    // Mock difficulty assessment
    const difficulties = ['Beginner', 'Intermediate', 'Advanced'];
    return difficulties[Math.floor(Math.random() * difficulties.length)];
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

    // If no job market data, provide a baseline score
    if (!marketDemand.highDemandSkills || marketDemand.highDemandSkills.length === 0) {
      const baselineScore = Math.min(currentSkillNames.length * 15, 60);
      console.log('No job market data, returning baseline score:', baselineScore);
      return baselineScore;
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
      // No skills match job requirements, but give some credit for having skills
      alignmentScore = Math.min(currentSkillNames.length * 8, 25);
      console.log('No skills matched job requirements, giving baseline score:', alignmentScore);
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
    return [
      `Develop advanced ${categoryName} skills`,
      'Gain relevant certifications',
      'Build a portfolio of projects',
      'Network with industry professionals'
    ];
  }

  getMarketOutlook(categoryName, marketDemand) {
    const trend = marketDemand.growingIndustries.find(t => 
      t.industry.toLowerCase().includes(categoryName.toLowerCase())
    );
    
    return trend ? 'Growing' : 'Stable';
  }
}

module.exports = SkillsAnalysisService;
