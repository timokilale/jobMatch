const prisma = require('../prisma');

const createJob = async (req, res) => {
  try {
    const job = await prisma.job.create({
      data: {
        ...req.body,
        employerId: req.user.id
      }
    });
    res.status(201).json(job);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getJobs = async (req, res) => {
  try {
    const jobs = await prisma.job.findMany({
      where: { status: 'ACTIVE' },
      orderBy: { createdAt: 'desc' }
    });
    res.json(jobs);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { createJob, getJobs };