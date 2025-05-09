const express = require('express');
const router = express.Router();
const { createJob, getEmployerJobs } = require('../controllers/jobs');

router.post('/', createJob);
router.get('/:employerId', getEmployerJobs);

module.exports = router;
