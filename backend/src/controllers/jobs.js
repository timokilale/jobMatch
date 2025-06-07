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
    // Add pagination parameters
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 20;
    const skip = (page - 1) * limit;

    const applicant = await prisma.applicant.findUnique({
      where: { id: applicantId},
      include: { categories: true}
    });

    if (!applicant) {
      return res.status(404).json({ error: 'Applicant not found'});
    }

    // Get applicant's selected category IDs
    const selectedCategoryIds = applicant.categories.map(cat => cat.id);

    // If no categories selected, show all jobs (fallback for users who haven't set preferences)
    // Otherwise, show only jobs from selected categories
    const whereCondition = {
      status: {
        in: ['ACTIVE', 'PAUSED'] // Show active and paused jobs, exclude drafts, closed, and expired
      }
    };

    // Add category filtering if user has selected categories
    if (selectedCategoryIds.length > 0) {
      whereCondition.categories = {
        some: {
          id: {
            in: selectedCategoryIds
          }
        }
      };
    }

    const jobs = await prisma.job.findMany({
      where: whereCondition,
      include: {
        employer: {
          select: {
            companyName: true,
          }
        },
        categories: true,
      },
      orderBy: {
        createdAt: 'desc' // Show newest jobs first
      },
      skip: skip,
      take: limit
    });

    console.log(`✅ Applicant ${applicantId} has ${selectedCategoryIds.length} selected categories:`,
      applicant.categories.map(cat => cat.name).join(', ') || 'None');
    console.log(`Found ${jobs.length} jobs for applicant ${applicantId}`);

    const jobsWithCompany = jobs.map(job => ({
      ...job,
      company: job.employer.companyName
    }));

    // Get total count of jobs matching the same filter criteria
    const totalJobs = await prisma.job.count({
      where: whereCondition
    });

    const categoryInfo = selectedCategoryIds.length > 0
      ? `from ${selectedCategoryIds.length} selected categories`
      : 'from all categories (no preferences set)';

    console.log(`Returning ${jobsWithCompany.length} jobs out of ${totalJobs} total available jobs ${categoryInfo}`);

    res.json({
      jobs: jobsWithCompany,
      pagination: {
        page,
        limit,
        total: totalJobs,
        totalPages: Math.ceil(totalJobs / limit)
      }
    });
  } catch (error) {
    console.error('Error fetching jobs for applicant:', error);
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