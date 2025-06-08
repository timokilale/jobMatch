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
  validateCertificateRequired,
} = require('../controllers/qualifications');


router.post('/',  upload.single('certificate'), validateQualification, validateCertificateRequired, createAcademicQualification);
router.get('/:applicantId', getAcademicQualifications);
router.put('/:id', upload.single('certificate'), validateQualification, validateCertificateRequired, updateAcademicQualification);
router.delete('/:id', deleteAcademicQualification);



module.exports = router;