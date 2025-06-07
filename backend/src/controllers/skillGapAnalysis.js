const prisma = require('../prisma');

// Get real skill gap analysis based on user's selected categories
exports.getSkillGapAnalysis = async (req, res) => {
  try {
    const applicant = await prisma.applicant.findUnique({
      where: { userId: req.user.id },
      include: {
        categories: true,
        skills: {
          include: {
            skillMaster: true
          }
        }
      }
    });

    if (!applicant) {
      return res.status(404).json({ error: 'Applicant profile not found' });
    }

    // Get user's current skills
    const userSkills = applicant.skills.map(us => ({
      id: us.skillMaster.id,
      name: us.skillMaster.name,
      category: us.skillMaster.category,
      proficiencyLevel: us.proficiency
    }));

    // Get selected category IDs
    const selectedCategoryIds = applicant.categories.map(cat => cat.id);

    if (selectedCategoryIds.length === 0) {
      return res.json({
        userSkills: userSkills,
        skillGaps: [],
        marketDemand: [],
        trainingRecommendations: [],
        summary: {
          totalUserSkills: userSkills.length,
          totalMarketSkills: 0,
          skillGaps: 0,
          matchPercentage: 0,
          selectedCategories: 0
        },
        message: 'Please select job categories in Settings to see skill gap analysis'
      });
    }

    // Get all job requirements from jobs in user's selected categories
    const jobRequirements = await prisma.jobRequirement.findMany({
      where: {
        job: {
          categories: {
            some: {
              id: {
                in: selectedCategoryIds
              }
            }
          },
          status: 'ACTIVE'
        }
      },
      include: {
        skillMaster: true,
        job: {
          include: {
            categories: true,
            employer: {
              select: {
                companyName: true
              }
            }
          }
        }
      }
    });

    // Aggregate skill demand data
    const skillDemandMap = new Map();
    const jobsBySkill = new Map();

    jobRequirements.forEach(req => {
      const skillId = req.skillMaster.id;
      const skillName = req.skillMaster.name;
      const skillCategory = req.skillMaster.category;
      
      if (!skillDemandMap.has(skillId)) {
        skillDemandMap.set(skillId, {
          id: skillId,
          name: skillName,
          category: skillCategory,
          demandCount: 0,
          jobs: [],
          companies: new Set(),
          categories: new Set(),
          requiredLevel: req.proficiencyLevel || 'INTERMEDIATE',
          importance: req.importance || 'Medium'
        });
        jobsBySkill.set(skillId, new Set());
      }

      const skillData = skillDemandMap.get(skillId);
      const jobSet = jobsBySkill.get(skillId);

      if (!jobSet.has(req.job.id)) {
        skillData.demandCount++;
        skillData.jobs.push({
          id: req.job.id,
          title: req.job.title,
          company: req.job.employer.companyName,
          requiredLevel: req.proficiencyLevel
        });
        skillData.companies.add(req.job.employer.companyName);
        req.job.categories.forEach(cat => skillData.categories.add(cat.name));
        jobSet.add(req.job.id);
      }
    });

    // Convert to array and sort by demand
    const marketDemand = Array.from(skillDemandMap.values())
      .map(skill => ({
        ...skill,
        companies: Array.from(skill.companies),
        categories: Array.from(skill.categories),
        demandScore: Math.min(100, (skill.demandCount / Math.max(1, jobRequirements.length / 10)) * 100)
      }))
      .sort((a, b) => b.demandCount - a.demandCount);

    // Find skill gaps (skills in market demand but not in user's skills)
    const userSkillIds = new Set(userSkills.map(s => s.id));
    const skillGaps = marketDemand.filter(skill => !userSkillIds.has(skill.id));

    // Generate training recommendations for top skill gaps
    const trainingRecommendations = skillGaps.slice(0, 20).map(skill => {
      const courseName = generateCourseName(skill.name, skill.category);
      const courseUrl = generateCourseraUrl(skill.name);
      
      return {
        skillId: skill.id,
        skillName: skill.name,
        skillCategory: skill.category,
        demandCount: skill.demandCount,
        demandScore: skill.demandScore,
        priority: skill.demandCount > 5 ? 'High' : skill.demandCount > 2 ? 'Medium' : 'Low',
        training: {
          courseName: courseName,
          provider: 'Coursera',
          url: courseUrl,
          estimatedDuration: getEstimatedDuration(skill.category),
          difficulty: skill.requiredLevel || 'Intermediate'
        },
        impact: {
          potentialJobs: skill.demandCount,
          companies: skill.companies.length,
          categories: skill.categories
        }
      };
    });

    // Calculate summary statistics
    const totalMarketSkills = marketDemand.length;
    const totalSkillGaps = skillGaps.length;
    const matchPercentage = totalMarketSkills > 0 
      ? Math.round(((totalMarketSkills - totalSkillGaps) / totalMarketSkills) * 100)
      : 0;

    console.log(`✅ Skill gap analysis for applicant ${applicant.id}:`);
    console.log(`   - User skills: ${userSkills.length}`);
    console.log(`   - Market skills: ${totalMarketSkills}`);
    console.log(`   - Skill gaps: ${totalSkillGaps}`);
    console.log(`   - Match percentage: ${matchPercentage}%`);

    res.json({
      userSkills: userSkills,
      skillGaps: skillGaps.slice(0, 50), // Limit to top 50 gaps
      marketDemand: marketDemand.slice(0, 30), // Top 30 in-demand skills
      trainingRecommendations: trainingRecommendations,
      summary: {
        totalUserSkills: userSkills.length,
        totalMarketSkills: totalMarketSkills,
        skillGaps: totalSkillGaps,
        matchPercentage: matchPercentage,
        selectedCategories: selectedCategoryIds.length,
        topSkillGap: skillGaps[0]?.name || 'None',
        topDemandSkill: marketDemand[0]?.name || 'None'
      }
    });

  } catch (error) {
    console.error('Error in skill gap analysis:', error);
    res.status(500).json({ error: 'Failed to analyze skill gaps' });
  }
};

// Helper function to generate course names
function generateCourseName(skillName, category) {
  const courseTemplates = {
    'Technical': [
      `Complete ${skillName} Bootcamp`,
      `${skillName} for Beginners`,
      `Master ${skillName} Programming`,
      `${skillName} Development Course`
    ],
    'Soft': [
      `${skillName} Skills for Professionals`,
      `Effective ${skillName} Training`,
      `${skillName} Mastery Course`,
      `Professional ${skillName} Development`
    ],
    'Language': [
      `${skillName} Language Course`,
      `Learn ${skillName} Fast`,
      `${skillName} for Business`,
      `Complete ${skillName} Program`
    ],
    'Industry-Specific': [
      `${skillName} Professional Certification`,
      `${skillName} Industry Training`,
      `Advanced ${skillName} Course`,
      `${skillName} Specialization`
    ]
  };

  const templates = courseTemplates[category] || courseTemplates['Technical'];
  return templates[Math.floor(Math.random() * templates.length)];
}

// Helper function to generate Coursera URLs
function generateCourseraUrl(skillName) {
  const searchTerm = skillName.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
  return `https://www.coursera.org/search?query=${encodeURIComponent(skillName)}&index=prod_all_launched_products_term_optimization`;
}

// Helper function to estimate course duration
function getEstimatedDuration(category) {
  const durations = {
    'Technical': '4-8 weeks',
    'Soft': '2-4 weeks',
    'Language': '8-12 weeks',
    'Industry-Specific': '6-10 weeks'
  };
  return durations[category] || '4-6 weeks';
}

// Get skill learning progress (for future implementation)
exports.updateSkillProgress = async (req, res) => {
  try {
    const { skillId, status } = req.body; // status: 'learning', 'completed'
    
    // This could be implemented to track user's learning progress
    // For now, return success
    res.json({ 
      success: true, 
      message: 'Skill progress updated',
      skillId: skillId,
      status: status
    });
  } catch (error) {
    console.error('Error updating skill progress:', error);
    res.status(500).json({ error: 'Failed to update skill progress' });
  }
};
