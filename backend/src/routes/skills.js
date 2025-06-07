const express = require('express');
const prisma = require('../prisma');
const auth = require('../middleware/auth');

const router = express.Router();

// Get all skills for the authenticated applicant
router.get('/', auth(), async (req, res) => {
  try {
    const applicant = await prisma.applicant.findUnique({
      where: { userId: req.user.id }
    });

    if (!applicant) {
      return res.status(404).json({ error: 'Applicant profile not found' });
    }

    const skills = await prisma.generalSkill.findMany({
      where: { applicantId: applicant.id },
      orderBy: [
        { skill: 'asc' }
      ]
    });

    // Transform the data to match frontend expectations
    const transformedSkills = skills.map(skill => ({
      ...skill,
      name: skill.skill, // Map skill to name
      category: skill.description // Map description to category
    }));

    res.json(transformedSkills);
  } catch (error) {
    console.error('Error fetching skills:', error);
    res.status(500).json({ error: 'Failed to fetch skills' });
  }
});

// Add a new skill
router.post('/', auth(), async (req, res) => {
  try {
    const { name, proficiency, category } = req.body;

    if (!name || !proficiency) {
      return res.status(400).json({ error: 'Name and proficiency are required' });
    }

    // Validate proficiency level
    const validProficiencyLevels = ['Beginner', 'Intermediate', 'Advanced', 'Expert'];
    if (!validProficiencyLevels.includes(proficiency)) {
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

    // Check if skill already exists (case insensitive by getting all skills and comparing)
    const allUserSkills = await prisma.generalSkill.findMany({
      where: { applicantId: applicant.id },
      select: { skill: true }
    });

    const skillExists = allUserSkills.some(
      existingSkill => existingSkill.skill.toLowerCase() === name.trim().toLowerCase()
    );

    if (skillExists) {
      return res.status(400).json({ error: 'Skill already exists' });
    }

    const skill = await prisma.generalSkill.create({
      data: {
        skill: name.trim(),
        proficiency,
        description: category || 'Other',
        applicantId: applicant.id
      }
    });

    // Transform the response to match frontend expectations
    const transformedSkill = {
      ...skill,
      name: skill.skill, // Map skill to name
      category: skill.description // Map description to category
    };

    res.status(201).json(transformedSkill);
  } catch (error) {
    console.error('Error adding skill:', error);
    res.status(500).json({ error: 'Failed to add skill' });
  }
});

// Update a skill
router.put('/:id', auth(), async (req, res) => {
  try {
    const { id } = req.params;
    const { name, proficiency, category } = req.body;

    if (!name || !proficiency) {
      return res.status(400).json({ error: 'Name and proficiency are required' });
    }

    // Validate proficiency level
    const validProficiencyLevels = ['Beginner', 'Intermediate', 'Advanced', 'Expert'];
    if (!validProficiencyLevels.includes(proficiency)) {
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

    // Check if skill belongs to the user
    const existingSkill = await prisma.generalSkill.findFirst({
      where: {
        id: parseInt(id),
        applicantId: applicant.id
      }
    });

    if (!existingSkill) {
      return res.status(404).json({ error: 'Skill not found' });
    }

    // Check if another skill with the same name exists (excluding current skill)
    const allUserSkills = await prisma.generalSkill.findMany({
      where: {
        applicantId: applicant.id,
        id: { not: parseInt(id) }
      },
      select: { skill: true }
    });

    const skillExists = allUserSkills.some(
      existingSkill => existingSkill.skill.toLowerCase() === name.trim().toLowerCase()
    );

    if (skillExists) {
      return res.status(400).json({ error: 'A skill with this name already exists' });
    }

    const updatedSkill = await prisma.generalSkill.update({
      where: { id: parseInt(id) },
      data: {
        skill: name.trim(),
        proficiency,
        description: category || 'Other'
      }
    });

    // Transform the response to match frontend expectations
    const transformedSkill = {
      ...updatedSkill,
      name: updatedSkill.skill, // Map skill to name
      category: updatedSkill.description // Map description to category
    };

    res.json(transformedSkill);
  } catch (error) {
    console.error('Error updating skill:', error);
    res.status(500).json({ error: 'Failed to update skill' });
  }
});

// Delete a skill
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
    const existingSkill = await prisma.generalSkill.findFirst({
      where: {
        id: parseInt(id),
        applicantId: applicant.id
      }
    });

    if (!existingSkill) {
      return res.status(404).json({ error: 'Skill not found' });
    }

    await prisma.generalSkill.delete({
      where: { id: parseInt(id) }
    });

    res.json({ message: 'Skill deleted successfully' });
  } catch (error) {
    console.error('Error deleting skill:', error);
    res.status(500).json({ error: 'Failed to delete skill' });
  }
});

// Get skill statistics
router.get('/stats', auth(), async (req, res) => {
  try {
    const applicant = await prisma.applicant.findUnique({
      where: { userId: req.user.id }
    });

    if (!applicant) {
      return res.status(404).json({ error: 'Applicant profile not found' });
    }

    const stats = await prisma.generalSkill.groupBy({
      by: ['description', 'proficiency'],
      where: { applicantId: applicant.id },
      _count: true
    });

    const categoryStats = {};
    const proficiencyStats = {};

    stats.forEach(stat => {
      // Category stats (using description field)
      const category = stat.description || 'Other';
      if (!categoryStats[category]) {
        categoryStats[category] = 0;
      }
      categoryStats[category] += stat._count;

      // Proficiency stats
      if (!proficiencyStats[stat.proficiency]) {
        proficiencyStats[stat.proficiency] = 0;
      }
      proficiencyStats[stat.proficiency] += stat._count;
    });

    const totalSkills = await prisma.generalSkill.count({
      where: { applicantId: applicant.id }
    });

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

module.exports = router;
