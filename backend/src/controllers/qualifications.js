// controllers/qualifications.js
const path = require('path');
const prisma = require('../prisma');
const { validateHistoricalDateRange } = require('../utils/dateValidation');

const createAcademicQualification = async (req, res) => {
  try {
    const applicantId = parseInt(req.body.applicantId);

    if (isNaN(applicantId)) {
      return res.status(400).json({ error: 'Invalid applicant ID' });
    }

    const {
      educationLevel,
      country,
      institution,
      program,
      startDate,
      endDate,
    } = req.body;

    // Find or create the country
    let countryRecord = await prisma.country.findFirst({
      where: { name: country }
    });

    if (!countryRecord) {
      // Create new country if it doesn't exist
      countryRecord = await prisma.country.create({
        data: {
          name: country,
          code: country.substring(0, 2).toUpperCase() // Simple code generation
        }
      });
    }

    const qualification = await prisma.academicQualification.create({
      data: {
        level: educationLevel,
        countryId: countryRecord.id,
        institution,
        fieldOfStudy: program,
        startDate: new Date(startDate),
        endDate: endDate ? new Date(endDate) : null,
        applicantId: applicantId,
        certificateUrl: req.file ? `uploads/${req.file.filename}` : null,
      }
    });

    res.status(201).json(qualification);
  } catch (err) {
    console.error('Create Academic Qualification Error:', err);
    res.status(500).json({ error: 'Failed to add qualification' });
  }
};

const getAcademicQualifications = async (req, res) => {
  try {
    const applicantId = parseInt(req.params.applicantId);

    if (isNaN(applicantId)) {
      return res.status(400).json({ error: 'Invalid applicant ID' });
    }

    const qualifications = await prisma.academicQualification.findMany({
      where: { applicantId },
      include: {
        country: true // Include country details
      }
    });

    res.json(qualifications);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch qualifications' });
  }
};

const validateQualification = (req, res, next) => {
  const { educationLevel, startDate, endDate } = req.body;

  if (!educationLevel || !startDate) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  // Use the utility function for date validation
  const dateValidation = validateHistoricalDateRange(startDate, endDate);
  if (!dateValidation.isValid) {
    return res.status(400).json({ error: dateValidation.error });
  }

  next();
};

const updateAcademicQualification = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const applicantId = parseInt(req.body.applicantId);
    if (isNaN(id) || isNaN(applicantId)) {
      return res.status(400).json({ error: 'Invalid ID(s)' });
    }

    const {
      educationLevel,
      country,
      institution,
      program,
      startDate,
      endDate
    } = req.body;

    // Find or create the country
    let countryRecord = await prisma.country.findFirst({
      where: { name: country }
    });

    if (!countryRecord) {
      // Create new country if it doesn't exist
      countryRecord = await prisma.country.create({
        data: {
          name: country,
          code: country.substring(0, 2).toUpperCase() // Simple code generation
        }
      });
    }

    const updatedQualification = await prisma.academicQualification.update({
      where: { id },
      data: {
        level: educationLevel,
        countryId: countryRecord.id,
        institution,
        fieldOfStudy: program,
        startDate: new Date(startDate),
        endDate: endDate ? new Date(endDate) : null,
        applicantId,
        ...(req.file && { certificateUrl: `uploads/${req.file.filename}` }),
      },
    });

    res.json(updatedQualification);
  } catch (error) {
    console.error('Update error:', error);
    res.status(500).json({ error: 'Failed to update qualification' });
  }
};


const deleteAcademicQualification = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    if (isNaN(id)) {
      return res.status(400).json({ error: 'Invalid qualification ID' });
    }

    await prisma.academicQualification.delete({
      where: { id },
    });

    res.sendStatus(204); // No Content
  } catch (error) {
    console.error('Delete error:', error);
    res.status(500).json({ error: 'Failed to delete qualification' });
  }
};


module.exports = { 
  createAcademicQualification, 
  getAcademicQualifications,
  validateQualification,
  updateAcademicQualification,
  deleteAcademicQualification
};