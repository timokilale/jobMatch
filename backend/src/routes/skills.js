const express = require('express');
const prisma = require('../prisma');
const auth = require('../middleware/auth');

const router = express.Router();

// Get all skills for the authenticated applicant (modernized to use ApplicantSkill + SkillMaster)
router.get('/', auth(), async (req, res) => {
  try {
    const applicant = await prisma.applicant.findUnique({
      where: { userId: req.user.id }
    });

    if (!applicant) {
      return res.status(404).json({ error: 'Applicant profile not found' });
    }

    const skills = await prisma.applicantSkill.findMany({
      where: { applicantId: applicant.id },
      include: {
        skillMaster: true
      },
      orderBy: [
        { skillMaster: { name: 'asc' } }
      ]
    });

    // Transform to match frontend expectations
    const transformedSkills = skills.map(skill => ({
      id: skill.id,
      skill: skill.skillMaster.name,
      proficiency: skill.proficiency,
      description: skill.skillMaster.category,
      category: skill.skillMaster.category,
      yearsExperience: skill.yearsExperience,
      lastUsed: skill.lastUsed,
      isCertified: skill.isCertified,
      certificationName: skill.certificationName,
      skillMasterId: skill.skillMasterId,
      createdAt: skill.createdAt,
      updatedAt: skill.updatedAt
    }));

    res.json(transformedSkills);
  } catch (error) {
    console.error('Error fetching skills:', error);
    res.status(500).json({ error: 'Failed to fetch skills' });
  }
});

// Add a new skill (modernized to use ApplicantSkill + SkillMaster)
router.post('/', auth(), async (req, res) => {
  try {
    const {
      skill: name,
      proficiency,
      description: category,
      yearsExperience,
      lastUsed,
      isCertified,
      certificationName
    } = req.body;

    if (!name || !proficiency) {
      return res.status(400).json({ error: 'Name and proficiency are required' });
    }

    // Validate proficiency level (convert to enum format)
    const proficiencyMap = {
      'Beginner': 'BEGINNER',
      'Intermediate': 'INTERMEDIATE',
      'Advanced': 'ADVANCED',
      'Expert': 'EXPERT'
    };

    const enumProficiency = proficiencyMap[proficiency];
    if (!enumProficiency) {
      return res.status(400).json({ error: 'Invalid proficiency level' });
    }

    // Validate skill name length
    if (name.trim().length < 2) {
      return res.status(400).json({ error: 'Skill name must be at least 2 characters long' });
    }

    if (name.trim().length > 100) {
      return res.status(400).json({ error: 'Skill name must be less than 100 characters' });
    }

    const applicant = await prisma.applicant.findUnique({
      where: { userId: req.user.id }
    });

    if (!applicant) {
      return res.status(404).json({ error: 'Applicant profile not found' });
    }

    // Check if user already has this skill
    const existingSkill = await prisma.applicantSkill.findFirst({
      where: {
        applicantId: applicant.id,
        skillMaster: {
          name: { equals: name.trim(), mode: 'insensitive' }
        }
      },
      include: { skillMaster: true }
    });

    if (existingSkill) {
      return res.status(400).json({ error: 'Skill already exists' });
    }

    // Find or create skill in SkillMaster
    let skillMaster = await prisma.skillMaster.findFirst({
      where: {
        name: { equals: name.trim(), mode: 'insensitive' }
      }
    });

    if (!skillMaster) {
      // Create new skill in SkillMaster
      skillMaster = await prisma.skillMaster.create({
        data: {
          name: name.trim(),
          category: category || 'Technical',
          description: `User-added skill: ${name.trim()}`,
          isActive: true
        }
      });
    }

    // Create ApplicantSkill record
    const applicantSkill = await prisma.applicantSkill.create({
      data: {
        applicantId: applicant.id,
        skillMasterId: skillMaster.id,
        proficiency: enumProficiency,
        yearsExperience: yearsExperience ? parseInt(yearsExperience) : null,
        lastUsed: lastUsed ? new Date(lastUsed) : null,
        isCertified: Boolean(isCertified),
        certificationName: certificationName || null
      },
      include: {
        skillMaster: true
      }
    });

    // Transform response to match frontend expectations
    const transformedSkill = {
      id: applicantSkill.id,
      skill: applicantSkill.skillMaster.name,
      proficiency: applicantSkill.proficiency,
      description: applicantSkill.skillMaster.category,
      category: applicantSkill.skillMaster.category,
      yearsExperience: applicantSkill.yearsExperience,
      lastUsed: applicantSkill.lastUsed,
      isCertified: applicantSkill.isCertified,
      certificationName: applicantSkill.certificationName,
      skillMasterId: applicantSkill.skillMasterId,
      createdAt: applicantSkill.createdAt,
      updatedAt: applicantSkill.updatedAt
    };

    res.status(201).json(transformedSkill);
  } catch (error) {
    console.error('Error adding skill:', error);
    res.status(500).json({ error: 'Failed to add skill' });
  }
});

// Update a skill (modernized to use ApplicantSkill + SkillMaster)
router.put('/:id', auth(), async (req, res) => {
  try {
    const { id } = req.params;
    const {
      skill: name,
      proficiency,
      description: category,
      yearsExperience,
      lastUsed,
      isCertified,
      certificationName
    } = req.body;

    if (!name || !proficiency) {
      return res.status(400).json({ error: 'Name and proficiency are required' });
    }

    // Validate proficiency level (convert to enum format)
    const proficiencyMap = {
      'Beginner': 'BEGINNER',
      'Intermediate': 'INTERMEDIATE',
      'Advanced': 'ADVANCED',
      'Expert': 'EXPERT'
    };

    const enumProficiency = proficiencyMap[proficiency];
    if (!enumProficiency) {
      return res.status(400).json({ error: 'Invalid proficiency level' });
    }

    // Validate skill name length
    if (name.trim().length < 2) {
      return res.status(400).json({ error: 'Skill name must be at least 2 characters long' });
    }

    if (name.trim().length > 100) {
      return res.status(400).json({ error: 'Skill name must be less than 100 characters' });
    }

    const applicant = await prisma.applicant.findUnique({
      where: { userId: req.user.id }
    });

    if (!applicant) {
      return res.status(404).json({ error: 'Applicant profile not found' });
    }

    // Check if the skill exists and belongs to the user
    const existingApplicantSkill = await prisma.applicantSkill.findFirst({
      where: {
        id: parseInt(id),
        applicantId: applicant.id
      },
      include: { skillMaster: true }
    });

    if (!existingApplicantSkill) {
      return res.status(404).json({ error: 'Skill not found' });
    }

    // Check if another skill with the same name already exists (excluding current skill)
    const duplicateSkill = await prisma.applicantSkill.findFirst({
      where: {
        applicantId: applicant.id,
        id: { not: parseInt(id) },
        skillMaster: {
          name: { equals: name.trim(), mode: 'insensitive' }
        }
      }
    });

    if (duplicateSkill) {
      return res.status(400).json({ error: 'A skill with this name already exists' });
    }

    // Find or create skill in SkillMaster if name changed
    let skillMaster = existingApplicantSkill.skillMaster;
    if (skillMaster.name.toLowerCase() !== name.trim().toLowerCase()) {
      skillMaster = await prisma.skillMaster.findFirst({
        where: {
          name: { equals: name.trim(), mode: 'insensitive' }
        }
      });

      if (!skillMaster) {
        // Create new skill in SkillMaster
        skillMaster = await prisma.skillMaster.create({
          data: {
            name: name.trim(),
            category: category || 'Technical',
            description: `User-added skill: ${name.trim()}`,
            isActive: true
          }
        });
      }
    }

    // Update ApplicantSkill record
    const updatedApplicantSkill = await prisma.applicantSkill.update({
      where: { id: parseInt(id) },
      data: {
        skillMasterId: skillMaster.id,
        proficiency: enumProficiency,
        yearsExperience: yearsExperience ? parseInt(yearsExperience) : null,
        lastUsed: lastUsed ? new Date(lastUsed) : null,
        isCertified: Boolean(isCertified),
        certificationName: certificationName || null
      },
      include: {
        skillMaster: true
      }
    });

    // Transform response to match frontend expectations
    const transformedSkill = {
      id: updatedApplicantSkill.id,
      skill: updatedApplicantSkill.skillMaster.name,
      proficiency: updatedApplicantSkill.proficiency,
      description: updatedApplicantSkill.skillMaster.category,
      category: updatedApplicantSkill.skillMaster.category,
      yearsExperience: updatedApplicantSkill.yearsExperience,
      lastUsed: updatedApplicantSkill.lastUsed,
      isCertified: updatedApplicantSkill.isCertified,
      certificationName: updatedApplicantSkill.certificationName,
      skillMasterId: updatedApplicantSkill.skillMasterId,
      createdAt: updatedApplicantSkill.createdAt,
      updatedAt: updatedApplicantSkill.updatedAt
    };

    res.json(transformedSkill);
  } catch (error) {
    console.error('Error updating skill:', error);
    res.status(500).json({ error: 'Failed to update skill' });
  }
});

// Delete a skill (modernized to use ApplicantSkill)
router.delete('/:id', auth(), async (req, res) => {
  try {
    const { id } = req.params;

    const applicant = await prisma.applicant.findUnique({
      where: { userId: req.user.id }
    });

    if (!applicant) {
      return res.status(404).json({ error: 'Applicant profile not found' });
    }

    // Check if skill belongs to the user
    const existingSkill = await prisma.applicantSkill.findFirst({
      where: {
        id: parseInt(id),
        applicantId: applicant.id
      }
    });

    if (!existingSkill) {
      return res.status(404).json({ error: 'Skill not found' });
    }

    await prisma.applicantSkill.delete({
      where: { id: parseInt(id) }
    });

    res.json({ message: 'Skill deleted successfully' });
  } catch (error) {
    console.error('Error deleting skill:', error);
    res.status(500).json({ error: 'Failed to delete skill' });
  }
});

// Get skill statistics (modernized to use ApplicantSkill + SkillMaster)
router.get('/stats', auth(), async (req, res) => {
  try {
    const applicant = await prisma.applicant.findUnique({
      where: { userId: req.user.id }
    });

    if (!applicant) {
      return res.status(404).json({ error: 'Applicant profile not found' });
    }

    const skills = await prisma.applicantSkill.findMany({
      where: { applicantId: applicant.id },
      include: {
        skillMaster: true
      }
    });

    const categoryStats = {};
    const proficiencyStats = {};

    skills.forEach(skill => {
      // Category stats
      const category = skill.skillMaster.category || 'Other';
      if (!categoryStats[category]) {
        categoryStats[category] = 0;
      }
      categoryStats[category] += 1;

      // Proficiency stats
      if (!proficiencyStats[skill.proficiency]) {
        proficiencyStats[skill.proficiency] = 0;
      }
      proficiencyStats[skill.proficiency] += 1;
    });

    const totalSkills = skills.length;

    res.json({
      totalSkills,
      categoryStats,
      proficiencyStats
    });
  } catch (error) {
    console.error('Error fetching skill stats:', error);
    res.status(500).json({ error: 'Failed to fetch skill statistics' });
  }
});

// Search skills in SkillMaster (for autocomplete/suggestions)
router.get('/search', auth(), async (req, res) => {
  try {
    const { q, category, limit = 20 } = req.query;

    if (!q || q.trim().length < 2) {
      return res.json([]);
    }

    const whereClause = {
      isActive: true,
      name: {
        contains: q.trim(),
        mode: 'insensitive'
      }
    };

    if (category && category !== 'all') {
      whereClause.category = category;
    }

    const skills = await prisma.skillMaster.findMany({
      where: whereClause,
      select: {
        id: true,
        name: true,
        category: true,
        description: true
      },
      orderBy: [
        { name: 'asc' }
      ],
      take: parseInt(limit)
    });

    res.json(skills);
  } catch (error) {
    console.error('Error searching skills:', error);
    res.status(500).json({ error: 'Failed to search skills' });
  }
});

// Get skill categories from SkillMaster
router.get('/categories', auth(), async (req, res) => {
  try {
    const categories = await prisma.skillMaster.groupBy({
      by: ['category'],
      where: { isActive: true },
      _count: {
        category: true
      },
      orderBy: {
        category: 'asc'
      }
    });

    const formattedCategories = categories.map(cat => ({
      name: cat.category,
      count: cat._count.category
    }));

    res.json(formattedCategories);
  } catch (error) {
    console.error('Error fetching skill categories:', error);
    res.status(500).json({ error: 'Failed to fetch skill categories' });
  }
});

module.exports = router;
