const express = require('express');
const router = express.Router();
const { 
    applyToJob, 
    getApplicantApplications, 
    getEmployerApplications,
    updateApplicationStatus,
    makeApplicationDecision
 } = require('../controllers/applications');

router.post('/', applyToJob);
router.get('/:applicantId', getApplicantApplications);
router.get('/employer/:employerId', getEmployerApplications);
router.patch('/:applicationId/decision', makeApplicationDecision);
router.patch('/:applicationId/status', updateApplicationStatus);
module.exports = router;
