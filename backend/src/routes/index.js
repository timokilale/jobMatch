const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const { registerApplicant, registerEmployer, login } = require('../controllers/authController');
const { createJob, getJobs } = require('../controllers/jobController');

// Auth Routes
router.post('/auth/register/applicant', registerApplicant);
router.post('/auth/register/employer', registerEmployer);
router.post('/auth/login', login);

// Job Routes
router.post('/jobs', auth(['EMPLOYER']), createJob);
router.get('/jobs', getJobs);

module.exports = router;