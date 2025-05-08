const express = require('express');
const router = express.Router();
const { registerApplicant, registerEmployer, login } = require('../controllers/authController');
const { createJob, getJobs } = require('../controllers/jobController');
const auth = require('../middleware/auth');
const qualificationsRoutes = require('./qualifications');

// Auth Routes
router.post('/auth/register/applicant', registerApplicant);
router.post('/auth/register/employer', registerEmployer);
router.post('/auth/login', login);

// Job Routes
router.post('/jobs', auth(['EMPLOYER']), createJob);
router.get('/jobs', getJobs);

// Qualifications Routes
router.use('/qualifications', qualificationsRoutes);

module.exports = router;