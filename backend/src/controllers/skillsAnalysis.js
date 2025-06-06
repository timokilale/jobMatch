const SkillsAnalysisService = require('../services/skillsAnalysis');
const PrivacyManager = require('../services/privacyManager');

const skillsService = new SkillsAnalysisService();
const privacyManager = new PrivacyManager();

// Analyze skill gaps for an applicant
exports.analyzeSkillGaps = async (req, res) => {
  try {
    const { applicantId } = req.params;
    const userId = req.user?.id;

    // Check if user has permission to access this data
    if (req.user.role === 'APPLICANT' && req.user.applicant?.id !== parseInt(applicantId)) {
      return res.status(403).json({ error: 'Access denied' });
    }

    // Check consent for analytics
    const hasConsent = await privacyManager.checkConsent(userId, 'analytics');
    if (!hasConsent) {
      return res.status(403).json({ 
        error: 'Analytics consent required',
        consentRequired: 'analytics'
      });
    }

    const analysis = await skillsService.analyzeSkillGaps(parseInt(applicantId));
    
    // Detect potential bias in recommendations
    const biasAnalysis = await privacyManager.detectBias(
      analysis.trainingRecommendations,
      { userId: userId }
    );

    res.json({
      ...analysis,
      biasAnalysis: biasAnalysis
    });
  } catch (error) {
    console.error('Error analyzing skill gaps:', error);
    res.status(500).json({ error: 'Failed to analyze skill gaps' });
  }
};

// Get training recommendations for specific skills
exports.getTrainingRecommendations = async (req, res) => {
  try {
    const { skills } = req.query; // Comma-separated list of skills
    
    if (!skills) {
      return res.status(400).json({ error: 'Skills parameter is required' });
    }

    const skillList = skills.split(',').map(skill => skill.trim());
    const recommendations = [];

    for (const skill of skillList) {
      const courses = await skillsService.findTrainingCourses(skill);
      recommendations.push({
        skill: skill,
        courses: courses.slice(0, 3) // Top 3 recommendations
      });
    }

    res.json(recommendations);
  } catch (error) {
    console.error('Error getting training recommendations:', error);
    res.status(500).json({ error: 'Failed to get training recommendations' });
  }
};

// Get career path suggestions
exports.getCareerPathSuggestions = async (req, res) => {
  try {
    const { applicantId } = req.params;
    const userId = req.user?.id;

    // Check permissions
    if (req.user.role === 'APPLICANT' && req.user.applicant?.id !== parseInt(applicantId)) {
      return res.status(403).json({ error: 'Access denied' });
    }

    // Get applicant data
    const applicant = await prisma.applicant.findUnique({
      where: { id: parseInt(applicantId) },
      include: {
        categories: true,
        computerSkills: true,
        languageProficiencies: true,
        academicQualifications: true,
        workExperiences: true
      }
    });

    if (!applicant) {
      return res.status(404).json({ error: 'Applicant not found' });
    }

    const currentSkills = skillsService.extractCurrentSkills(applicant);
    const marketDemand = await skillsService.getMarketDemandForCategories(applicant.categories);
    const careerPaths = await skillsService.generateCareerPathSuggestions(applicant, currentSkills, marketDemand);

    res.json(careerPaths);
  } catch (error) {
    console.error('Error getting career path suggestions:', error);
    res.status(500).json({ error: 'Failed to get career path suggestions' });
  }
};

// Get skill demand analysis
exports.getSkillDemandAnalysis = async (req, res) => {
  try {
    const { category, timeframe = '6months' } = req.query;
    
    // Get skill demand data
    const skillDemand = await prisma.skillDemand.findMany({
      where: category ? {
        OR: [
          { skillName: { contains: category } },
          { industry: { contains: category } }
        ]
      } : {},
      orderBy: { demandScore: 'desc' },
      take: 20
    });

    // Get market trends
    const marketTrends = await prisma.marketTrend.findMany({
      where: {
        industry: category || undefined,
        date: {
          gte: new Date(Date.now() - 6 * 30 * 24 * 60 * 60 * 1000) // Last 6 months
        }
      },
      orderBy: { date: 'desc' }
    });

    res.json({
      skillDemand,
      marketTrends,
      category: category || 'All Categories',
      timeframe,
      lastUpdated: new Date()
    });
  } catch (error) {
    console.error('Error getting skill demand analysis:', error);
    res.status(500).json({ error: 'Failed to get skill demand analysis' });
  }
};

// Get personalized skill recommendations
exports.getPersonalizedSkillRecommendations = async (req, res) => {
  try {
    const userId = req.user?.id;
    const applicantId = req.user?.applicant?.id;

    if (!applicantId) {
      return res.status(400).json({ error: 'Only applicants can get personalized recommendations' });
    }

    // Check consent
    const hasConsent = await privacyManager.checkConsent(userId, 'job_matching');
    if (!hasConsent) {
      return res.status(403).json({ 
        error: 'Job matching consent required',
        consentRequired: 'job_matching'
      });
    }

    const analysis = await skillsService.analyzeSkillGaps(applicantId);
    
    // Extract top recommendations
    const recommendations = {
      criticalSkills: analysis.skillGaps.critical.slice(0, 3),
      importantSkills: analysis.skillGaps.important.slice(0, 3),
      trainingRecommendations: analysis.trainingRecommendations.slice(0, 5),
      careerPaths: analysis.careerPaths.slice(0, 2),
      overallScore: analysis.overallScore
    };

    res.json(recommendations);
  } catch (error) {
    console.error('Error getting personalized recommendations:', error);
    res.status(500).json({ error: 'Failed to get personalized recommendations' });
  }
};

// Update skill demand data (admin endpoint)
exports.updateSkillDemandData = async (req, res) => {
  try {
    const { skillName, demandScore, growth, industry } = req.body;

    if (!skillName || demandScore === undefined) {
      return res.status(400).json({ error: 'skillName and demandScore are required' });
    }

    const skillDemand = await prisma.skillDemand.upsert({
      where: { skillName },
      update: {
        demandScore,
        growth: growth || 0,
        industry,
        lastUpdated: new Date()
      },
      create: {
        skillName,
        demandScore,
        growth: growth || 0,
        industry,
        jobCount: 0
      }
    });

    res.json(skillDemand);
  } catch (error) {
    console.error('Error updating skill demand data:', error);
    res.status(500).json({ error: 'Failed to update skill demand data' });
  }
};

// Get skills gap summary for dashboard
exports.getSkillsGapSummary = async (req, res) => {
  try {
    const applicantId = req.user?.applicant?.id;

    if (!applicantId) {
      return res.status(400).json({ error: 'Only applicants can get skills gap summary' });
    }

    const analysis = await skillsService.analyzeSkillGaps(applicantId);
    
    const summary = {
      totalGaps: analysis.skillGaps.critical.length + analysis.skillGaps.important.length,
      criticalGaps: analysis.skillGaps.critical.length,
      importantGaps: analysis.skillGaps.important.length,
      overallScore: analysis.overallScore,
      topRecommendations: analysis.trainingRecommendations.slice(0, 3).map(rec => ({
        skill: rec.skill,
        priority: rec.priority,
        estimatedTime: rec.estimatedTime
      })),
      nextSteps: analysis.careerPaths.length > 0 ? 
        analysis.careerPaths[0].recommendedNextSteps?.slice(0, 3) : []
    };

    res.json(summary);
  } catch (error) {
    console.error('Error getting skills gap summary:', error);
    res.status(500).json({ error: 'Failed to get skills gap summary' });
  }
};
