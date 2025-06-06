const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const {
  getMarketOverview,
  getEmploymentTrends,
  getSkillDemand,
  getPersonalizedRecommendations,
  updateMarketData,
  getIndustryTrends,
  getSalaryTrends,
  getJobMarketForecast,
  getEmergingSkills,
  getMarketHealth
} = require('../controllers/marketAnalytics');

// Public routes (no authentication required)
router.get('/overview', getMarketOverview);
router.get('/trends', getEmploymentTrends);
router.get('/skills/demand', getSkillDemand);
router.get('/industry-trends', getIndustryTrends);
router.get('/salary-trends', getSalaryTrends);
router.get('/forecast', getJobMarketForecast);
router.get('/skills/emerging', getEmergingSkills);
router.get('/health', getMarketHealth);

// Protected routes (authentication required)
router.get('/recommendations', auth(), getPersonalizedRecommendations);

// Admin routes (for updating data - could be restricted to admin users)
router.post('/update', updateMarketData);

module.exports = router;
