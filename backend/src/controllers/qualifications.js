// controllers/qualifications.js
const path = require('path');
const prisma = require('../prisma');

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
   
    const qualification = await prisma.academicQualification.create({
      data: {
        level: educationLevel,
        country,
        institution,
        fieldOfStudy: program,
        startDate: new Date(startDate),
        endDate: endDate ? new Date(endDate) : null,
        applicantId: applicantId,
        certificateUrl: req.file ? `/uploads/${req.file.filename}` : null,  
      }
    });

    res.status(201).json(qualification);
  } catch (err) {
    console.error(err);
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
    });
    
    res.json(qualifications);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch qualifications' });
  }
};

module.exports = { 
  createAcademicQualification, 
  getAcademicQualifications 
};