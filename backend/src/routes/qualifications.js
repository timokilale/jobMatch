// routes/qualifications.js
const express = require('express');
const router = express.Router();
const upload = require('../middleware/uploadMiddleware');
const { 
  createAcademicQualification,
  getAcademicQualifications,
  updateAcademicQualification,
  deleteAcademicQualification,
  validateQualification,
} = require('../controllers/qualifications');


router.post('/',  upload.single('certificate'), validateQualification, createAcademicQualification);
router.get('/:applicantId', getAcademicQualifications);
router.put('/:id', upload.single('certificate'), validateQualification, updateAcademicQualification);
router.delete('/:id', deleteAcademicQualification);

module.exports = router;