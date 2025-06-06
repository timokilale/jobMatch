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
          computerSkills: true,
          languageProficiencies: true,
          academicQualifications: true,
          workExperiences: true
        }
      });

      if (!applicant) {
        throw new Error('Applicant not found');
      }

      // Get market demand for applicant's categories
      const marketDemand = await this.getMarketDemandForCategories(applicant.categories);
      
      // Analyze current skills
      const currentSkills = this.extractCurrentSkills(applicant);
      
      // Identify skill gaps
      const skillGaps = await this.identifySkillGaps(currentSkills, marketDemand);
      
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
    skills.technical = applicant.computerSkills.map(skill => ({
      name: skill.skill,
      proficiency: skill.proficiency,
      type: 'technical'
    }));

    // Language skills
    skills.languages = applicant.languageProficiencies.map(lang => ({
      name: lang.language,
      proficiency: {
        speak: lang.speak,
        read: lang.read,
        write: lang.write
      },
      type: 'language'
    }));

    // Education background
    skills.education = applicant.academicQualifications.map(qual => ({
      level: qual.level,
      field: qual.fieldOfStudy,
      institution: qual.institution,
      type: 'education'
    }));

    // Work experience
    skills.experience = applicant.workExperiences.map(exp => ({
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

  // Get market demand for specific categories
  async getMarketDemandForCategories(categories) {
    const categoryNames = categories.map(cat => cat.name);
    
    // Get skill demand data
    const skillDemand = await prisma.skillDemand.findMany({
      where: {
        OR: categoryNames.map(name => ({
          skillName: { contains: name }
        }))
      }
    });

    // Get job market trends
    const marketTrends = await prisma.marketTrend.findMany({
      where: {
        industry: { in: categoryNames },
        metric: 'job_postings'
      },
      orderBy: { date: 'desc' },
      take: 10
    });

    return {
      skillDemand,
      marketTrends,
      highDemandSkills: this.identifyHighDemandSkills(skillDemand),
      growingIndustries: this.identifyGrowingIndustries(marketTrends)
    };
  }

  // Identify skill gaps by comparing current skills with market demand
  async identifySkillGaps(currentSkills, marketDemand) {
    const gaps = {
      critical: [], // Skills essential for target roles
      important: [], // Skills that would significantly improve prospects
      nice_to_have: [] // Skills that would be beneficial
    };

    // Get high-demand skills not in current skill set
    const currentSkillNames = [
      ...currentSkills.technical.map(s => s.name.toLowerCase()),
      ...currentSkills.categories.map(s => s.name.toLowerCase())
    ];

    marketDemand.highDemandSkills.forEach(skill => {
      const skillName = skill.skillName.toLowerCase();
      
      if (!currentSkillNames.some(current => current.includes(skillName) || skillName.includes(current))) {
        const gap = {
          skillName: skill.skillName,
          demandScore: skill.demandScore,
          growthRate: skill.growth,
          priority: this.calculateSkillPriority(skill),
          estimatedLearningTime: this.estimateLearningTime(skill.skillName),
          difficulty: this.estimateSkillDifficulty(skill.skillName)
        };

        if (skill.demandScore > 80) {
          gaps.critical.push(gap);
        } else if (skill.demandScore > 60) {
          gaps.important.push(gap);
        } else {
          gaps.nice_to_have.push(gap);
        }
      }
    });

    return gaps;
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
    // Simple scoring algorithm
    const totalSkills = currentSkills.technical.length + currentSkills.categories.length;
    const demandAlignment = marketDemand.highDemandSkills.length > 0 ? 
      Math.min(totalSkills / marketDemand.highDemandSkills.length, 1) : 0;
    
    return Math.round(demandAlignment * 100);
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
