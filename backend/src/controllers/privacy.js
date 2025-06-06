const PrivacyManager = require('../services/privacyManager');
const prisma = require('../prisma');

const privacyManager = new PrivacyManager();

// Record user consent
exports.recordConsent = async (req, res) => {
  try {
    const userId = req.user?.id;
    const { consentType, granted, purpose } = req.body;

    if (!consentType || granted === undefined) {
      return res.status(400).json({ error: 'consentType and granted are required' });
    }

    const consent = await privacyManager.recordConsent(userId, consentType, granted, purpose);
    
    res.json({
      success: true,
      consent: consent
    });
  } catch (error) {
    console.error('Error recording consent:', error);
    res.status(500).json({ error: 'Failed to record consent' });
  }
};

// Get user consents
exports.getUserConsents = async (req, res) => {
  try {
    const userId = req.user?.id;
    const consents = await privacyManager.getUserConsents(userId);
    
    res.json(consents);
  } catch (error) {
    console.error('Error getting user consents:', error);
    res.status(500).json({ error: 'Failed to get user consents' });
  }
};

// Export user data (GDPR Article 20 - Data Portability)
exports.exportUserData = async (req, res) => {
  try {
    const userId = req.user?.id;
    const exportData = await privacyManager.exportUserData(userId);
    
    // Set headers for file download
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Content-Disposition', `attachment; filename="user_data_export_${userId}_${Date.now()}.json"`);
    
    res.json(exportData);
  } catch (error) {
    console.error('Error exporting user data:', error);
    res.status(500).json({ error: 'Failed to export user data' });
  }
};

// Delete user data (GDPR Article 17 - Right to be Forgotten)
exports.deleteUserData = async (req, res) => {
  try {
    const userId = req.user?.id;
    const { deleteType = 'COMPLETE' } = req.body;

    // Validate delete type
    if (!['COMPLETE', 'PARTIAL', 'ANONYMIZE'].includes(deleteType)) {
      return res.status(400).json({ error: 'Invalid delete type' });
    }

    const result = await privacyManager.deleteUserData(userId, deleteType);
    
    res.json(result);
  } catch (error) {
    console.error('Error deleting user data:', error);
    res.status(500).json({ error: 'Failed to delete user data' });
  }
};

// Get privacy dashboard data
exports.getPrivacyDashboard = async (req, res) => {
  try {
    const userId = req.user?.id;
    
    // Get user consents
    const consents = await privacyManager.getUserConsents(userId);
    
    // Get audit logs for this user
    const auditLogs = await prisma.auditLog.findMany({
      where: { userId: userId },
      orderBy: { timestamp: 'desc' },
      take: 10
    });

    // Get data usage statistics
    const dataStats = await this.getDataUsageStats(userId);
    
    res.json({
      consents,
      auditLogs,
      dataStats,
      privacyScore: this.calculatePrivacyScore(consents),
      lastUpdated: new Date()
    });
  } catch (error) {
    console.error('Error getting privacy dashboard:', error);
    res.status(500).json({ error: 'Failed to get privacy dashboard' });
  }
};

// Update privacy preferences
exports.updatePrivacyPreferences = async (req, res) => {
  try {
    const userId = req.user?.id;
    const { preferences } = req.body;

    if (!preferences || typeof preferences !== 'object') {
      return res.status(400).json({ error: 'Valid preferences object is required' });
    }

    // Update each consent preference
    const results = [];
    for (const [consentType, granted] of Object.entries(preferences)) {
      const consent = await privacyManager.recordConsent(userId, consentType, granted);
      results.push(consent);
    }

    res.json({
      success: true,
      updatedConsents: results
    });
  } catch (error) {
    console.error('Error updating privacy preferences:', error);
    res.status(500).json({ error: 'Failed to update privacy preferences' });
  }
};

// Get data processing activities
exports.getDataProcessingActivities = async (req, res) => {
  try {
    const activities = [
      {
        activity: 'Job Matching',
        purpose: 'To match your skills and preferences with relevant job opportunities',
        dataUsed: ['Profile information', 'Skills', 'Work experience', 'Job preferences'],
        legalBasis: 'Legitimate interest',
        retention: '2 years after account deletion',
        thirdParties: ['Job recommendation algorithm']
      },
      {
        activity: 'Skills Analysis',
        purpose: 'To analyze skill gaps and provide training recommendations',
        dataUsed: ['Skills', 'Work experience', 'Education', 'Career goals'],
        legalBasis: 'Consent',
        retention: '1 year after consent withdrawal',
        thirdParties: ['Training content providers']
      },
      {
        activity: 'Market Analytics',
        purpose: 'To provide labor market insights and trends',
        dataUsed: ['Anonymized profile data', 'Job application patterns'],
        legalBasis: 'Legitimate interest',
        retention: 'Indefinitely (anonymized)',
        thirdParties: ['Market research partners']
      },
      {
        activity: 'Customer Support',
        purpose: 'To provide assistance and resolve issues',
        dataUsed: ['Contact information', 'Support interactions', 'Account data'],
        legalBasis: 'Contract performance',
        retention: '3 years after last interaction',
        thirdParties: ['Customer support platform']
      }
    ];

    res.json(activities);
  } catch (error) {
    console.error('Error getting data processing activities:', error);
    res.status(500).json({ error: 'Failed to get data processing activities' });
  }
};

// Check consent for specific activity
exports.checkConsent = async (req, res) => {
  try {
    const userId = req.user?.id;
    const { consentType } = req.params;

    const hasConsent = await privacyManager.checkConsent(userId, consentType);
    
    res.json({
      consentType,
      hasConsent,
      checkedAt: new Date()
    });
  } catch (error) {
    console.error('Error checking consent:', error);
    res.status(500).json({ error: 'Failed to check consent' });
  }
};

// Get bias analysis for user's recommendations
exports.getBiasAnalysis = async (req, res) => {
  try {
    const userId = req.user?.id;
    
    // Get recent job recommendations for this user
    const recentRecommendations = await this.getUserRecommendations(userId);
    
    // Analyze for bias
    const biasAnalysis = await privacyManager.detectBias(
      recentRecommendations,
      { userId: userId }
    );

    res.json(biasAnalysis);
  } catch (error) {
    console.error('Error getting bias analysis:', error);
    res.status(500).json({ error: 'Failed to get bias analysis' });
  }
};

// Helper methods
exports.getDataUsageStats = async (userId) => {
  try {
    const user = await prisma.user.findUnique({
      where: { id: userId },
      include: {
        applicant: {
          include: {
            applications: true,
            _count: {
              select: {
                academicQualifications: true,
                workExperiences: true,
                computerSkills: true
              }
            }
          }
        },
        employer: {
          include: {
            _count: {
              select: {
                jobs: true
              }
            }
          }
        }
      }
    });

    return {
      profileCompleteness: this.calculateProfileCompleteness(user),
      dataPoints: this.countDataPoints(user),
      lastActivity: user.updatedAt,
      accountAge: Math.floor((Date.now() - user.createdAt.getTime()) / (1000 * 60 * 60 * 24)) // days
    };
  } catch (error) {
    console.error('Error getting data usage stats:', error);
    return {};
  }
};

exports.calculatePrivacyScore = (consents) => {
  const totalConsents = Object.keys(consents).length;
  if (totalConsents === 0) return 100;

  const grantedConsents = Object.values(consents).filter(consent => consent.granted).length;
  return Math.round((grantedConsents / totalConsents) * 100);
};

exports.calculateProfileCompleteness = (user) => {
  let completeness = 0;
  let totalFields = 0;

  if (user.applicant) {
    totalFields = 6; // email, profile fields, skills, experience, education, languages
    
    if (user.email) completeness++;
    if (user.applicant.firstName && user.applicant.lastName) completeness++;
    if (user.applicant.computerSkills?.length > 0) completeness++;
    if (user.applicant.workExperiences?.length > 0) completeness++;
    if (user.applicant.academicQualifications?.length > 0) completeness++;
    if (user.applicant.languageProficiencies?.length > 0) completeness++;
  } else if (user.employer) {
    totalFields = 3; // email, company info, jobs posted
    
    if (user.email) completeness++;
    if (user.employer.companyName) completeness++;
    if (user.employer.jobs?.length > 0) completeness++;
  }

  return totalFields > 0 ? Math.round((completeness / totalFields) * 100) : 0;
};

exports.countDataPoints = (user) => {
  let count = 1; // email

  if (user.applicant) {
    count += user.applicant._count?.academicQualifications || 0;
    count += user.applicant._count?.workExperiences || 0;
    count += user.applicant._count?.computerSkills || 0;
    count += user.applicant.applications?.length || 0;
  } else if (user.employer) {
    count += user.employer._count?.jobs || 0;
  }

  return count;
};

exports.getUserRecommendations = async (userId) => {
  // Mock recommendations - in production, get actual recommendations
  return [
    { jobTitle: 'Software Developer', industry: 'Technology', salary: 75000 },
    { jobTitle: 'Data Analyst', industry: 'Technology', salary: 65000 },
    { jobTitle: 'Project Manager', industry: 'Technology', salary: 80000 }
  ];
};
