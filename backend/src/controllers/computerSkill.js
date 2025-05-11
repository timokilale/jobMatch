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

exports.updateSkill = async (req, res) => {
  const { id } = req.params;
  const { skill, proficiency } = req.body;

  try {
    const updatedSkill = await prisma.computerSkill.update({
      where: { id: parseInt(id) },
      data: { skill, proficiency }
    });
    res.json(updatedSkill);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update skill' });
  }
};

exports.deleteSkill = async (req, res) => {
  const { id } = req.params;

  try {
    await prisma.computerSkill.delete({ where: { id: parseInt(id) } });
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete skill' });
  }
};