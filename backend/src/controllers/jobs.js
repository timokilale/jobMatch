// src/controllers/jobs.js
const prisma = require('../prisma');

exports.createJob = async (req, res) => {
  const { title, description, location, employerId } = req.body;
  try {
    const job = await prisma.job.create({
      data: {
        title,
        description,
        location,
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
