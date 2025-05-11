const express = require('express');
const router = express.Router();
const { createSkill, getSkills, updateSkill, deleteSkill } = require('../controllers/computerSkill');

router.post('/', createSkill);
router.get('/:applicantId', getSkills);
router.put('/:id', updateSkill);
router.delete('/:id', deleteSkill);

module.exports = router;
