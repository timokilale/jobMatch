const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const {
  analyzeSkillGaps,
  getTrainingRecommendations,
  getCareerPathSuggestions,
  getSkillDemandAnalysis,
  getPersonalizedSkillRecommendations,
  updateSkillDemandData,
  getSkillsGapSummary
} = require('../controllers/skillsAnalysis');

// Public routes
router.get('/demand', getSkillDemandAnalysis);
router.get('/training', getTrainingRecommendations);

// Protected routes (authentication required)
router.get('/gaps/:applicantId', auth(), analyzeSkillGaps);
router.get('/career-paths/:applicantId', auth(), getCareerPathSuggestions);
router.get('/recommendations', auth(), getPersonalizedSkillRecommendations);
router.get('/summary', auth(), getSkillsGapSummary);

// Admin routes
router.post('/demand', auth(), updateSkillDemandData);

module.exports = router;
