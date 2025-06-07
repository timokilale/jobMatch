const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const {
  getSkillGapAnalysis,
  updateSkillProgress
} = require('../controllers/skillGapAnalysis');

// Get real skill gap analysis based on user's selected categories
router.get('/', auth(), getSkillGapAnalysis);

// Update skill learning progress (for future features)
router.post('/progress', auth(), updateSkillProgress);

module.exports = router;
