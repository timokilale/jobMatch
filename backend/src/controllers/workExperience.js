const prisma = require('../prisma');

exports.createWorkExperience = async (req, res) => {
  try {
    const {
      applicantId,
      institution,
      institutionAddress,
      jobTitle,
      startDate,
      endDate,
      duties,
      supervisorName,
      supervisorTel,
      supervisorAddress
    } = req.body;

    const experience = await prisma.workExperience.create({
      data: {
        institution,
        institutionAddress,
        jobTitle,
        startDate: new Date(startDate),
        endDate: endDate ? new Date(endDate) : null,
        duties,
        supervisorName,
        supervisorTel,
        supervisorAddress,
        applicantId: parseInt(applicantId)
      }
    });

    res.status(201).json(experience);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to add work experience' });
  }
};

exports.getWorkExperience = async (req, res) => {
  try {
    const applicantId = parseInt(req.params.applicantId);
    const experiences = await prisma.workExperience.findMany({ where: { applicantId } });
    res.json(experiences);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch work experiences' });
  }
};

exports.updateWorkExperience = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const data = {
      ...req.body,
      startDate: req.body.startDate ? new Date(req.body.startDate) : undefined,
      endDate: req.body.endDate ? new Date(req.body.endDate) : undefined,
    };
    const updated = await prisma.workExperience.update({
      where: { id },
      data
    });
    res.json(updated);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to update work experience' });
  }
};


exports.deleteWorkExperience = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    await prisma.workExperience.delete({ where: { id } });
    res.json({ message: 'Deleted' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to delete work experience' });
  }
};
