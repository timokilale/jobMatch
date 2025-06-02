// src/controllers/jobs.js
const prisma = require('../prisma');

exports.createJob = async (req, res) => {
  const {  title, description, location, employerId, status = 'Draft', categoryIds = []} = req.body;
  try {
    const job = await prisma.job.create({
      data: {
        title,
        description,
        location,
        status,
        employerId: parseInt(employerId),
        categories: {
          connect: categoryIds.map(id => ({ id }))
        }
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
    const jobs = await prisma.job.findMany({ 
      where: { employerId },
      include: { 
        employer: {
          select: {
            companyName: true,
          }
        }
      },
      skip: parseInt(req.query.skip) || 0,
      take: parseInt(req.query.take) || 10,
    });
    res.json(jobs);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch jobs' });
  }
};

exports.getApplicantJobs = async (req, res) => {
  const applicantId = parseInt(req.params.id);
  try {
    const applicant = await prisma.applicant.findUnique({
      where: { id: applicantId},
      include: { categories: true}
    });

    if (!applicant) {
      return res.status(404).json({ error: 'Applicant not found'});
    }

    const jobs = await prisma.job.findMany({
      where: {
        categories: {
          some: {
            id: {
              in: applicant.categories.map(cat => cat.id)
            }
          }
        }
      },
      include: {
        employer: {
          select: {
            companyName: true,
          }
        },
        categories: true,
      },
    });

    const jobsWithCompany = jobs.map(job => ({
      ...job,
      company: job.employer.companyName
    }));
    res.json(jobsWithCompany);
  } catch (error) {
    console.error('Error feching jobs for applicant:', error);
    res.status(500).json({ error: 'Internal server error'});
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