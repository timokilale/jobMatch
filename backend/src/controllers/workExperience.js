const prisma = require('../prisma');

exports.createWorkExperience = async (req, res) => {
  try {
    const { applicantId, company, position, startDate, endDate, description } = req.body;

    const experience = await prisma.workExperience.create({
      data: {
        company,
        position,
        startDate: new Date(startDate),
        endDate: endDate ? new Date(endDate) : null,
        description,
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
