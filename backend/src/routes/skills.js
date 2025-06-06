const express = require('express');
const prisma = require('../prisma');
const auth = require('../middleware/auth');

const router = express.Router();

// Get all skills for the authenticated applicant
router.get('/', auth, async (req, res) => {
  try {
    const applicant = await prisma.applicant.findUnique({
      where: { userId: req.user.id }
    });

    if (!applicant) {
      return res.status(404).json({ error: 'Applicant profile not found' });
    }

    const skills = await prisma.skill.findMany({
      where: { applicantId: applicant.id },
      orderBy: [
        { category: 'asc' },
        { name: 'asc' }
      ]
    });

    res.json(skills);
  } catch (error) {
    console.error('Error fetching skills:', error);
    res.status(500).json({ error: 'Failed to fetch skills' });
  }
});

// Add a new skill
router.post('/', auth, async (req, res) => {
  try {
    const { name, proficiency, category } = req.body;

    if (!name || !proficiency) {
      return res.status(400).json({ error: 'Name and proficiency are required' });
    }

    const applicant = await prisma.applicant.findUnique({
      where: { userId: req.user.id }
    });

    if (!applicant) {
      return res.status(404).json({ error: 'Applicant profile not found' });
    }

    // Check if skill already exists
    const existingSkill = await prisma.skill.findFirst({
      where: {
        applicantId: applicant.id,
        name: { equals: name, mode: 'insensitive' }
      }
    });

    if (existingSkill) {
      return res.status(400).json({ error: 'Skill already exists' });
    }

    const skill = await prisma.skill.create({
      data: {
        name: name.trim(),
        proficiency,
        category: category || 'Other',
        applicantId: applicant.id
      }
    });

    res.status(201).json(skill);
  } catch (error) {
    console.error('Error adding skill:', error);
    res.status(500).json({ error: 'Failed to add skill' });
  }
});

// Update a skill
router.put('/:id', auth, async (req, res) => {
  try {
    const { id } = req.params;
    const { name, proficiency, category } = req.body;

    if (!name || !proficiency) {
      return res.status(400).json({ error: 'Name and proficiency are required' });
    }

    const applicant = await prisma.applicant.findUnique({
      where: { userId: req.user.id }
    });

    if (!applicant) {
      return res.status(404).json({ error: 'Applicant profile not found' });
    }

    // Check if skill belongs to the user
    const existingSkill = await prisma.skill.findFirst({
      where: {
        id: parseInt(id),
        applicantId: applicant.id
      }
    });

    if (!existingSkill) {
      return res.status(404).json({ error: 'Skill not found' });
    }

    // Check if another skill with the same name exists (excluding current skill)
    const duplicateSkill = await prisma.skill.findFirst({
      where: {
        applicantId: applicant.id,
        name: { equals: name, mode: 'insensitive' },
        id: { not: parseInt(id) }
      }
    });

    if (duplicateSkill) {
      return res.status(400).json({ error: 'A skill with this name already exists' });
    }

    const updatedSkill = await prisma.skill.update({
      where: { id: parseInt(id) },
      data: {
        name: name.trim(),
        proficiency,
        category: category || 'Other'
      }
    });

    res.json(updatedSkill);
  } catch (error) {
    console.error('Error updating skill:', error);
    res.status(500).json({ error: 'Failed to update skill' });
  }
});

// Delete a skill
router.delete('/:id', auth, async (req, res) => {
  try {
    const { id } = req.params;

    const applicant = await prisma.applicant.findUnique({
      where: { userId: req.user.id }
    });

    if (!applicant) {
      return res.status(404).json({ error: 'Applicant profile not found' });
    }

    // Check if skill belongs to the user
    const existingSkill = await prisma.skill.findFirst({
      where: {
        id: parseInt(id),
        applicantId: applicant.id
      }
    });

    if (!existingSkill) {
      return res.status(404).json({ error: 'Skill not found' });
    }

    await prisma.skill.delete({
      where: { id: parseInt(id) }
    });

    res.json({ message: 'Skill deleted successfully' });
  } catch (error) {
    console.error('Error deleting skill:', error);
    res.status(500).json({ error: 'Failed to delete skill' });
  }
});

// Get skill statistics
router.get('/stats', auth, async (req, res) => {
  try {
    const applicant = await prisma.applicant.findUnique({
      where: { userId: req.user.id }
    });

    if (!applicant) {
      return res.status(404).json({ error: 'Applicant profile not found' });
    }

    const stats = await prisma.skill.groupBy({
      by: ['category', 'proficiency'],
      where: { applicantId: applicant.id },
      _count: true
    });

    const categoryStats = {};
    const proficiencyStats = {};

    stats.forEach(stat => {
      // Category stats
      if (!categoryStats[stat.category]) {
        categoryStats[stat.category] = 0;
      }
      categoryStats[stat.category] += stat._count;

      // Proficiency stats
      if (!proficiencyStats[stat.proficiency]) {
        proficiencyStats[stat.proficiency] = 0;
      }
      proficiencyStats[stat.proficiency] += stat._count;
    });

    const totalSkills = await prisma.skill.count({
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
