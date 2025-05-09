const express = require('express');
const router = express.Router();
const { registerApplicant, registerEmployer, login } = require('../controllers/authController');
const qualificationsRoutes = require('./qualifications');

// Auth Routes
router.post('/auth/register/applicant', registerApplicant);
router.post('/auth/register/employer', registerEmployer);
router.post('/auth/login', login);



// Qualifications Routes
router.use('/qualifications', qualificationsRoutes);

module.exports = router;