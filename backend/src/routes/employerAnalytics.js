const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const { 
  getEmployerAnalytics, 
  getJobPerformance 
} = require('../controllers/employerAnalytics');

// All routes require employer authentication
router.get('/overview', auth(['EMPLOYER']), getEmployerAnalytics);
router.get('/job/:jobId', auth(['EMPLOYER']), getJobPerformance);

module.exports = router;
