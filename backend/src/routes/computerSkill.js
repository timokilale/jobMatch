const express = require('express');
const router = express.Router();
const { createSkill, getSkills } = require('../controllers/computerSkill');

router.post('/', createSkill);
router.get('/:applicantId', getSkills);

module.exports = router;
