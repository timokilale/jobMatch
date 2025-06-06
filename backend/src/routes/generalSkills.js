const express = require('express');
const router = express.Router();
const generalSkillsController = require('../controllers/generalSkills');
const auth = require('../middleware/auth');

// Create a new general skill
router.post('/', auth(), generalSkillsController.createGeneralSkill);

// Get general skills for a specific applicant
router.get('/applicant/:applicantId', auth(), generalSkillsController.getGeneralSkills);

// Update a general skill
router.put('/:id', auth(), generalSkillsController.updateGeneralSkill);

// Delete a general skill
router.delete('/:id', auth(), generalSkillsController.deleteGeneralSkill);

// Get all general skills (admin only)
router.get('/', auth(), generalSkillsController.getAllGeneralSkills);

module.exports = router;
