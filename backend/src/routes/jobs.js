const express = require('express');
const router = express.Router();
const { createJob, getEmployerJobs, updateJob, deleteJob} = require('../controllers/jobs');

router.post('/', createJob);
router.get('/:employerId', getEmployerJobs);
router.put('/:id', updateJob);
router.delete('/:id', deleteJob);

module.exports = router;
