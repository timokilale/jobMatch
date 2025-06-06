const prisma = require('../prisma');
const crypto = require('crypto');

class PrivacyManager {
  constructor() {
    this.consentTypes = {
      PROFILE_DATA: 'profile_data',
      JOB_MATCHING: 'job_matching',
      ANALYTICS: 'analytics',
      MARKETING: 'marketing',
      THIRD_PARTY_SHARING: 'third_party_sharing'
    };
    
    this.dataCategories = {
      PERSONAL: 'personal',
      PROFESSIONAL: 'professional',
      BEHAVIORAL: 'behavioral',
      TECHNICAL: 'technical'
    };
  }

  // Record user consent
  async recordConsent(userId, consentType, granted, purpose = null) {
    try {
      const consent = await prisma.userConsent.upsert({
        where: {
          userId_consentType: {
            userId: userId,
            consentType: consentType
          }
        },
        update: {
          granted: granted,
          grantedAt: granted ? new Date() : null,
          revokedAt: !granted ? new Date() : null,
          purpose: purpose,
          updatedAt: new Date()
        },
        create: {
          userId: userId,
          consentType: consentType,
          granted: granted,
          grantedAt: granted ? new Date() : null,
          purpose: purpose
        }
      });

      // Log consent change for audit trail
      await this.logConsentChange(userId, consentType, granted, purpose);
      
      return consent;
    } catch (error) {
      console.error('Error recording consent:', error);
      throw error;
    }
  }

  // Check if user has given consent for specific data usage
  async checkConsent(userId, consentType) {
    try {
      const consent = await prisma.userConsent.findUnique({
        where: {
          userId_consentType: {
            userId: userId,
            consentType: consentType
          }
        }
      });

      return consent ? consent.granted : false;
    } catch (error) {
      console.error('Error checking consent:', error);
      return false;
    }
  }

  // Get all consents for a user
  async getUserConsents(userId) {
    try {
      const consents = await prisma.userConsent.findMany({
        where: { userId: userId }
      });

      return consents.reduce((acc, consent) => {
        acc[consent.consentType] = {
          granted: consent.granted,
          grantedAt: consent.grantedAt,
          revokedAt: consent.revokedAt,
          purpose: consent.purpose
        };
        return acc;
      }, {});
    } catch (error) {
      console.error('Error getting user consents:', error);
      throw error;
    }
  }

  // Anonymize user data
  async anonymizeUserData(userId) {
    try {
      const anonymizedId = this.generateAnonymousId();
      
      // Create anonymized data record
      const user = await prisma.user.findUnique({
        where: { id: userId },
        include: {
          applicant: {
            include: {
              academicQualifications: true,
              workExperiences: true,
              computerSkills: true,
              languageProficiencies: true
            }
          },
          employer: true
        }
      });

      if (!user) {
        throw new Error('User not found');
      }

      // Store anonymized data for analytics
      const anonymizedData = {
        anonymousId: anonymizedId,
        role: user.role,
        createdAt: user.createdAt,
        profileData: this.anonymizeProfileData(user),
        dataCategories: this.categorizeUserData(user)
      };

      await prisma.anonymizedData.create({
        data: {
          anonymousId: anonymizedId,
          originalUserId: userId,
          anonymizedData: JSON.stringify(anonymizedData),
          createdAt: new Date()
        }
      });

      return anonymizedId;
    } catch (error) {
      console.error('Error anonymizing user data:', error);
      throw error;
    }
  }

  // Delete user data (Right to be forgotten)
  async deleteUserData(userId, deleteType = 'COMPLETE') {
    try {
      // First, anonymize data for analytics if needed
      if (deleteType === 'ANONYMIZE') {
        await this.anonymizeUserData(userId);
      }

      // Log deletion request
      await this.logDataDeletion(userId, deleteType);

      // Delete user data based on type
      if (deleteType === 'COMPLETE') {
        await this.completeDataDeletion(userId);
      } else if (deleteType === 'PARTIAL') {
        await this.partialDataDeletion(userId);
      }

      return {
        success: true,
        deletionType: deleteType,
        deletedAt: new Date()
      };
    } catch (error) {
      console.error('Error deleting user data:', error);
      throw error;
    }
  }

  // Export user data (Data portability)
  async exportUserData(userId) {
    try {
      const user = await prisma.user.findUnique({
        where: { id: userId },
        include: {
          applicant: {
            include: {
              academicQualifications: true,
              workExperiences: true,
              computerSkills: true,
              languageProficiencies: true,
              applications: {
                include: {
                  job: {
                    select: {
                      title: true,
                      description: true,
                      location: true
                    }
                  }
                }
              }
            }
          },
          employer: {
            include: {
              jobs: {
                include: {
                  applications: {
                    select: {
                      id: true,
                      status: true,
                      createdAt: true
                    }
                  }
                }
              }
            }
          },
          chatRooms: {
            include: {
              messages: true
            }
          }
        }
      });

      if (!user) {
        throw new Error('User not found');
      }

      // Structure exported data
      const exportData = {
        exportDate: new Date(),
        user: {
          id: user.id,
          email: user.email,
          role: user.role,
          createdAt: user.createdAt
        },
        profile: user.applicant || user.employer,
        activities: {
          applications: user.applicant?.applications || [],
          jobPostings: user.employer?.jobs || [],
          chatHistory: user.chatRooms
        },
        consents: await this.getUserConsents(userId)
      };

      // Log data export
      await this.logDataExport(userId);

      return exportData;
    } catch (error) {
      console.error('Error exporting user data:', error);
      throw error;
    }
  }

  // Bias detection in job recommendations
  async detectBias(recommendations, userDemographics) {
    try {
      const biasAnalysis = {
        overallBiasScore: 0,
        detectedBiases: [],
        recommendations: [],
        analysisDate: new Date()
      };

      // Analyze demographic representation
      const demographicBias = this.analyzeDemographicBias(recommendations, userDemographics);
      biasAnalysis.detectedBiases.push(...demographicBias);

      // Analyze salary bias
      const salaryBias = this.analyzeSalaryBias(recommendations);
      biasAnalysis.detectedBiases.push(...salaryBias);

      // Analyze industry bias
      const industryBias = this.analyzeIndustryBias(recommendations);
      biasAnalysis.detectedBiases.push(...industryBias);

      // Calculate overall bias score
      biasAnalysis.overallBiasScore = this.calculateBiasScore(biasAnalysis.detectedBiases);

      // Generate recommendations to reduce bias
      biasAnalysis.recommendations = this.generateBiasReductionRecommendations(biasAnalysis.detectedBiases);

      return biasAnalysis;
    } catch (error) {
      console.error('Error detecting bias:', error);
      throw error;
    }
  }

  // Helper methods
  generateAnonymousId() {
    return crypto.randomBytes(16).toString('hex');
  }

  anonymizeProfileData(user) {
    if (user.applicant) {
      return {
        type: 'applicant',
        qualificationsCount: user.applicant.academicQualifications?.length || 0,
        experienceCount: user.applicant.workExperiences?.length || 0,
        skillsCount: user.applicant.computerSkills?.length || 0,
        languagesCount: user.applicant.languageProficiencies?.length || 0
      };
    } else if (user.employer) {
      return {
        type: 'employer',
        jobPostingsCount: user.employer.jobs?.length || 0
      };
    }
    return {};
  }

  categorizeUserData(user) {
    const categories = [];
    
    if (user.email) categories.push(this.dataCategories.PERSONAL);
    if (user.applicant?.academicQualifications?.length) categories.push(this.dataCategories.PROFESSIONAL);
    if (user.applicant?.computerSkills?.length) categories.push(this.dataCategories.TECHNICAL);
    
    return categories;
  }

  async logConsentChange(userId, consentType, granted, purpose) {
    await prisma.auditLog.create({
      data: {
        userId: userId,
        action: 'CONSENT_CHANGE',
        details: JSON.stringify({
          consentType,
          granted,
          purpose
        }),
        timestamp: new Date()
      }
    });
  }

  async logDataDeletion(userId, deleteType) {
    await prisma.auditLog.create({
      data: {
        userId: userId,
        action: 'DATA_DELETION',
        details: JSON.stringify({ deleteType }),
        timestamp: new Date()
      }
    });
  }

  async logDataExport(userId) {
    await prisma.auditLog.create({
      data: {
        userId: userId,
        action: 'DATA_EXPORT',
        details: JSON.stringify({ exportDate: new Date() }),
        timestamp: new Date()
      }
    });
  }

  async completeDataDeletion(userId) {
    // Delete in correct order to handle foreign key constraints
    await prisma.application.deleteMany({ where: { applicantId: userId } });
    await prisma.academicQualification.deleteMany({ where: { applicantId: userId } });
    await prisma.workExperience.deleteMany({ where: { applicantId: userId } });
    await prisma.computerSkill.deleteMany({ where: { applicantId: userId } });
    await prisma.languageProficiency.deleteMany({ where: { applicantId: userId } });
    await prisma.applicant.deleteMany({ where: { userId: userId } });
    await prisma.employer.deleteMany({ where: { userId: userId } });
    await prisma.user.delete({ where: { id: userId } });
  }

  async partialDataDeletion(userId) {
    // Keep basic profile but remove sensitive data
    await prisma.user.update({
      where: { id: userId },
      data: {
        email: `deleted_${userId}@example.com`,
        password: 'DELETED'
      }
    });
  }

  analyzeDemographicBias(recommendations, demographics) {
    // Mock bias detection - in production, use sophisticated ML models
    const biases = [];
    
    if (recommendations.length < 5) {
      biases.push({
        type: 'RECOMMENDATION_COUNT',
        severity: 'LOW',
        description: 'Low number of recommendations may indicate bias'
      });
    }
    
    return biases;
  }

  analyzeSalaryBias(recommendations) {
    // Analyze salary distribution in recommendations
    return [];
  }

  analyzeIndustryBias(recommendations) {
    // Analyze industry diversity in recommendations
    return [];
  }

  calculateBiasScore(detectedBiases) {
    if (detectedBiases.length === 0) return 0;
    
    const severityScores = {
      'LOW': 1,
      'MEDIUM': 2,
      'HIGH': 3
    };
    
    const totalScore = detectedBiases.reduce((sum, bias) => {
      return sum + (severityScores[bias.severity] || 1);
    }, 0);
    
    return Math.min(totalScore / detectedBiases.length * 10, 100);
  }

  generateBiasReductionRecommendations(detectedBiases) {
    const recommendations = [];
    
    detectedBiases.forEach(bias => {
      switch (bias.type) {
        case 'RECOMMENDATION_COUNT':
          recommendations.push('Increase diversity in job recommendations');
          break;
        default:
          recommendations.push('Review recommendation algorithm for potential bias');
      }
    });
    
    return recommendations;
  }
}

module.exports = PrivacyManager;
