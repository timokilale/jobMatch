// src/controllers/jobs.js
const prisma = require('../prisma');

exports.createJob = async (req, res) => {
  const { title, description, location, employerId, status= 'Draft'} = req.body;
  try {
    const job = await prisma.job.create({
      data: {
        title,
        description,
        location,
        status,
        employerId: parseInt(employerId)
      }
    });
    res.status(201).json(job);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create job' });
  }
};

exports.getEmployerJobs = async (req, res) => {
  try {
    const employerId = parseInt(req.params.employerId);
    const jobs = await prisma.job.findMany({ where: { employerId } });
    res.json(jobs);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch jobs' });
  }
};

exports.updateJob = async (req, res) => {
  const jobId = parseInt(req.params.id);
  const { title, description, location, status } = req.body;
  
  try {
    const updatedJob = await prisma.job.update({
      where: { id: jobId },
      data: {
        title,
        description,
        location,
        status
      }
    });
    res.json(updatedJob);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update job' });
  }
};

exports.deleteJob = async (req, res) => {
  const jobId = parseInt(req.params.id);
  
  try {
    await prisma.job.delete({
      where: { id: jobId }
    });
    res.json({ message: 'Job deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete job' });
  }
};