const SkillsAnalysisService = require('../services/skillsAnalysis');
const PrivacyManager = require('../services/privacyManager');
const prisma = require('../prisma');

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

    // Removed consent check - all users can access skill analysis
    const analysis = await skillsService.analyzeSkillGaps(parseInt(applicantId));

    // Optional: Detect potential bias in recommendations (without blocking access)
    let biasAnalysis = null;
    try {
      biasAnalysis = await privacyManager.detectBias(
        analysis.trainingRecommendations,
        { userId: userId }
      );
    } catch (error) {
      console.log('Bias analysis skipped:', error.message);
    }

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
        generalSkills: true, // Include unified skills
        skills: {
          include: {
            skillMaster: true
          }
        },
        languages: true,
        qualifications: true,
        experiences: true
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
    console.log('🔍 Getting skill demand analysis from real job requirements...');

    // Calculate skill demand from actual job requirements only
    const whereClause = category ? {
      categories: {
        some: {
          name: { contains: category, mode: 'insensitive' }
        }
      }
    } : {};

    const jobs = await prisma.job.findMany({
      where: {
        ...whereClause,
        status: 'ACTIVE'
      },
      include: {
        requirements: {
          include: {
            skillMaster: true
          }
        },
        categories: true
      }
    });

    // Calculate skill demand from job requirements
    const skillDemandMap = {};
    let totalRequirements = 0;

    jobs.forEach(job => {
      job.requirements.forEach(req => {
        totalRequirements++;
        const skillName = req.skillMaster.name;

        if (!skillDemandMap[skillName]) {
          skillDemandMap[skillName] = {
            skillName: skillName,
            demandScore: 0,
            jobCount: 0,
            category: req.skillMaster.category,
            importance: { required: 0, preferred: 0, nice_to_have: 0 }
          };
        }

        skillDemandMap[skillName].jobCount++;
        skillDemandMap[skillName].importance[req.importance.toLowerCase()]++;
      });
    });

    // Calculate demand scores and sort
    const skillDemand = Object.values(skillDemandMap).map(skill => {
      skill.demandScore = jobs.length > 0 ? (skill.jobCount / jobs.length) * 100 : 0;
      return skill;
    }).sort((a, b) => b.demandScore - a.demandScore).slice(0, 20);

    console.log(`✅ Analyzed ${jobs.length} jobs with ${totalRequirements} skill requirements`);

    res.json({
      skillDemand,
      marketTrends: [], // No sample market trends
      category: category || 'All Categories',
      timeframe,
      totalJobs: jobs.length,
      totalRequirements,
      dataSource: 'Real Job Requirements',
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

    // Removed consent check - all users can access skill recommendations

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
