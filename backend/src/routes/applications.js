const express = require('express');
const router = express.Router();
const { applyToJob, getApplicantApplications } = require('../controllers/applications');

router.post('/', applyToJob);
router.get('/:applicantId', getApplicantApplications);

module.exports = router;
