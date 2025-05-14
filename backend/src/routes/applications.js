const express = require('express');
const router = express.Router();
const { applyToJob, getApplicantApplications, getEmployerApplications } = require('../controllers/applications');

router.post('/', applyToJob);
router.get('/:applicantId', getApplicantApplications);
router.get('/employer/:employerId', getEmployerApplications);
module.exports = router;
