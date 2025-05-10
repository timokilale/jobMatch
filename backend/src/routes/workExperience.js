const express = require('express');
const router = express.Router();
const { createWorkExperience, getWorkExperience, updateWorkExperience, deleteWorkExperience } = require('../controllers/workExperience');

router.post('/', createWorkExperience);
router.get('/:applicantId', getWorkExperience);
router.put('/:id', updateWorkExperience);
router.delete('/:id', deleteWorkExperience);


module.exports = router;
