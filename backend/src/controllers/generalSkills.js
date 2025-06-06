const prisma = require('../prisma');

// Create a new general skill
exports.createGeneralSkill = async (req, res) => {
  const { applicantId, skill, description, proficiency } = req.body;

  try {
    const generalSkill = await prisma.generalSkill.create({
      data: { 
        applicantId: parseInt(applicantId), 
        skill, 
        description,
        proficiency 
      }
    });
    res.status(201).json(generalSkill);
  } catch (error) {
    console.error('Error creating general skill:', error);
    res.status(500).json({ error: 'Failed to add general skill' });
  }
};

// Get all general skills for an applicant
exports.getGeneralSkills = async (req, res) => {
  try {
    const applicantId = parseInt(req.params.applicantId);
    const generalSkills = await prisma.generalSkill.findMany({ 
      where: { applicantId },
      orderBy: { createdAt: 'desc' }
    });
    res.json(generalSkills);
  } catch (error) {
    console.error('Error fetching general skills:', error);
    res.status(500).json({ error: 'Failed to fetch general skills' });
  }
};

// Update a general skill
exports.updateGeneralSkill = async (req, res) => {
  const { id } = req.params;
  const { skill, description, proficiency } = req.body;

  try {
    const updatedSkill = await prisma.generalSkill.update({
      where: { id: parseInt(id) },
      data: { skill, description, proficiency }
    });
    res.json(updatedSkill);
  } catch (error) {
    console.error('Error updating general skill:', error);
    res.status(500).json({ error: 'Failed to update general skill' });
  }
};

// Delete a general skill
exports.deleteGeneralSkill = async (req, res) => {
  const { id } = req.params;

  try {
    await prisma.generalSkill.delete({
      where: { id: parseInt(id) }
    });
    res.json({ message: 'General skill deleted successfully' });
  } catch (error) {
    console.error('Error deleting general skill:', error);
    res.status(500).json({ error: 'Failed to delete general skill' });
  }
};

// Get all general skills (for admin/analytics)
exports.getAllGeneralSkills = async (req, res) => {
  try {
    const generalSkills = await prisma.generalSkill.findMany({
      include: {
        applicant: {
          select: {
            id: true,
            fullName: true
          }
        }
      },
      orderBy: { createdAt: 'desc' }
    });
    res.json(generalSkills);
  } catch (error) {
    console.error('Error fetching all general skills:', error);
    res.status(500).json({ error: 'Failed to fetch general skills' });
  }
};
