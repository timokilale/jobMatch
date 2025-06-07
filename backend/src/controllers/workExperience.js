const prisma = require('../prisma');
const { validateHistoricalDateRange } = require('../utils/dateValidation');

exports.createWorkExperience = async (req, res) => {
  try {
    const {
      applicantId,
      companyName,
      location,
      jobTitle,
      startDate,
      endDate,
      responsibilities,
      supervisorName,
      supervisorContact
    } = req.body;

    // Validate required fields
    if (!applicantId || !companyName || !jobTitle || !startDate) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    // Use the utility function for date validation
    const dateValidation = validateHistoricalDateRange(startDate, endDate);
    if (!dateValidation.isValid) {
      return res.status(400).json({ error: dateValidation.error });
    }

    const experience = await prisma.workExperience.create({
      data: {
        companyName,
        location,
        jobTitle,
        startDate: new Date(startDate),
        endDate: endDate ? new Date(endDate) : null,
        responsibilities,
        supervisorName,
        supervisorContact,
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
    const { startDate, endDate } = req.body;

    // Validate dates if provided
    if (startDate || endDate) {
      const dateValidation = validateHistoricalDateRange(startDate, endDate);
      if (!dateValidation.isValid) {
        return res.status(400).json({ error: dateValidation.error });
      }
    }

    const data = {
      ...req.body,
      startDate: startDate ? new Date(startDate) : undefined,
      endDate: endDate ? new Date(endDate) : undefined,
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
