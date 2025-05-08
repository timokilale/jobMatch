// routes/qualifications.js
const express = require('express');
const router = express.Router();
const upload = require('../middleware/uploadMiddleware');
const { 
  createAcademicQualification,
  getAcademicQualifications
} = require('../controllers/qualifications');


router.post('/',  upload.single('certificate'), createAcademicQualification);
router.get('/:applicantId', getAcademicQualifications);

module.exports = router;