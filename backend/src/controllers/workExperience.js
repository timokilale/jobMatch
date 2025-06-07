const prisma = require('../prisma');
const { validateHistoricalDateRange } = require('../utils/dateValidation');

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

    // Validate required fields
    if (!applicantId || !institution || !jobTitle || !startDate) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    // Use the utility function for date validation
    const dateValidation = validateHistoricalDateRange(startDate, endDate);
    if (!dateValidation.isValid) {
      return res.status(400).json({ error: dateValidation.error });
    }

    const experience = await prisma.workExperience.create({
      data: {
        companyName: institution, // Map institution to companyName
        location: institutionAddress, // Map institutionAddress to location
        jobTitle,
        startDate: new Date(startDate),
        endDate: endDate ? new Date(endDate) : null,
        responsibilities: duties, // Map duties to responsibilities
        supervisorName,
        supervisorContact: supervisorTel, // Map supervisorTel to supervisorContact
        applicantId: parseInt(applicantId)
      }
    });

    // Transform database fields back to frontend format
    const transformedExperience = {
      ...experience,
      institution: experience.companyName,
      institutionAddress: experience.location,
      duties: experience.responsibilities,
      supervisorTel: experience.supervisorContact,
    };

    res.status(201).json(transformedExperience);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to add work experience' });
  }
};

exports.getWorkExperience = async (req, res) => {
  try {
    const applicantId = parseInt(req.params.applicantId);
    const experiences = await prisma.workExperience.findMany({ where: { applicantId } });

    // Transform database fields back to frontend format
    const transformedExperiences = experiences.map(exp => ({
      ...exp,
      institution: exp.companyName, // Map companyName back to institution
      institutionAddress: exp.location, // Map location back to institutionAddress
      duties: exp.responsibilities, // Map responsibilities back to duties
      supervisorTel: exp.supervisorContact, // Map supervisorContact back to supervisorTel
    }));

    res.json(transformedExperiences);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch work experiences' });
  }
};

exports.updateWorkExperience = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const {
      startDate,
      endDate,
      institution,
      institutionAddress,
      duties,
      supervisorTel,
      ...otherFields
    } = req.body;

    // Validate dates if provided
    if (startDate || endDate) {
      const dateValidation = validateHistoricalDateRange(startDate, endDate);
      if (!dateValidation.isValid) {
        return res.status(400).json({ error: dateValidation.error });
      }
    }

    // Map frontend fields to schema fields
    const data = {
      ...otherFields,
      ...(institution && { companyName: institution }),
      ...(institutionAddress && { location: institutionAddress }),
      ...(duties && { responsibilities: duties }),
      ...(supervisorTel && { supervisorContact: supervisorTel }),
      startDate: startDate ? new Date(startDate) : undefined,
      endDate: endDate ? new Date(endDate) : undefined,
    };

    const updated = await prisma.workExperience.update({
      where: { id },
      data
    });

    // Transform database fields back to frontend format
    const transformedUpdated = {
      ...updated,
      institution: updated.companyName,
      institutionAddress: updated.location,
      duties: updated.responsibilities,
      supervisorTel: updated.supervisorContact,
    };

    res.json(transformedUpdated);
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
