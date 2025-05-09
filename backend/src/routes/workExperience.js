const express = require('express');
const router = express.Router();
const { createWorkExperience, getWorkExperience } = require('../controllers/workExperience');

router.post('/', createWorkExperience);
router.get('/:applicantId', getWorkExperience);

module.exports = router;
