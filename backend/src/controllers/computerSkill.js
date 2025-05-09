const prisma = require('../prisma');

exports.createSkill = async (req, res) => {
  const { applicantId, skill, proficiency } = req.body;

  try {
    const skillEntry = await prisma.computerSkill.create({
      data: { applicantId: parseInt(applicantId), skill, proficiency }
    });
    res.status(201).json(skillEntry);
  } catch (error) {
    res.status(500).json({ error: 'Failed to add computer skill' });
  }
};

exports.getSkills = async (req, res) => {
  try {
    const applicantId = parseInt(req.params.applicantId);
    const skills = await prisma.computerSkill.findMany({ where: { applicantId } });
    res.json(skills);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch computer skills' });
  }
};
