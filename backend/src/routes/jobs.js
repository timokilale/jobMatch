const express = require('express');
const router = express.Router();
const { createJob, getEmployerJobs, getApplicantJobs, updateJob, deleteJob} = require('../controllers/jobs');

router.post('/', createJob);
router.get('/:employerId', getEmployerJobs);
router.get('/applicant/:id/jobs', getApplicantJobs)
router.put('/:id', updateJob);
router.delete('/:id', deleteJob);

module.exports = router;
