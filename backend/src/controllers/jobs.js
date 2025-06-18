// src/controllers/jobs.js
const prisma = require('../prisma');

// Helper function to map frontend status to backend enum
const mapStatusToEnum = (status) => {
  const statusMap = {
    'Draft': 'DRAFT',
    'Active': 'ACTIVE',
    'Paused': 'PAUSED',
    'Closed': 'CLOSED',
    'Expired': 'EXPIRED'
  };
  return statusMap[status] || 'DRAFT';
};

// Helper function to map backend enum to frontend status
const mapEnumToStatus = (enumStatus) => {
  const statusMap = {
    'DRAFT': 'Draft',
    'ACTIVE': 'Active',
    'PAUSED': 'Paused',
    'CLOSED': 'Closed',
    'EXPIRED': 'Expired'
  };
  return statusMap[enumStatus] || 'Draft';
};

exports.createJob = async (req, res) => {
  const {  title, description, location, employerId, status = 'Draft', categoryIds = [], requirements = []} = req.body;

  // Validation
  const errors = [];

  if (!title || title.trim().length === 0) {
    errors.push('Job title is required');
  }

  if (!description || description.trim().length === 0) {
    errors.push('Job description is required');
  }

  if (!employerId || isNaN(parseInt(employerId))) {
    errors.push('Valid employer ID is required');
  }

  // Filter out null/undefined category IDs and validate
  const validCategoryIds = categoryIds.filter(id => id !== null && id !== undefined && !isNaN(parseInt(id)));

  if (categoryIds.length > 0 && validCategoryIds.length === 0) {
    errors.push('Please select a valid category');
  }

  if (errors.length > 0) {
    return res.status(400).json({
      error: 'Validation failed',
      details: errors
    });
  }

  try {
    const jobData = {
      title: title.trim(),
      description: description.trim(),
      location: location ? location.trim() : null,
      status: mapStatusToEnum(status),
      employerId: parseInt(employerId)
    };

    // Only add categories if we have valid ones
    if (validCategoryIds.length > 0) {
      jobData.categories = {
        connect: validCategoryIds.map(id => ({ id: parseInt(id) }))
      };
    }

    const job = await prisma.job.create({
      data: jobData
    });

    // Create job requirements if provided
    if (requirements && requirements.length > 0) {
      const requirementPromises = requirements.map(async (req) => {
        // Find or create skill in SkillMaster
        let skillMaster = await prisma.skillMaster.findFirst({
          where: {
            name: { equals: req.skillName.trim() }
          }
        });

        if (!skillMaster) {
          skillMaster = await prisma.skillMaster.create({
            data: {
              name: req.skillName.trim(),
              category: 'Technical', // Default category
              isActive: true
            }
          });
        }

        return prisma.jobRequirement.create({
          data: {
            jobId: job.id,
            skillMasterId: skillMaster.id,
            importance: req.importance || 'PREFERRED',
            proficiencyLevel: req.proficiencyLevel || 'INTERMEDIATE',
            yearsRequired: req.yearsRequired ? parseInt(req.yearsRequired) : null,
            description: req.description || null
          }
        });
      });

      await Promise.all(requirementPromises);
    }

    // Fetch the complete job with requirements
    const completeJob = await prisma.job.findUnique({
      where: { id: job.id },
      include: {
        requirements: {
          include: {
            skillMaster: true
          }
        },
        categories: true
      }
    });

    // Map status back to frontend format
    const jobResponse = {
      ...completeJob,
      status: mapEnumToStatus(completeJob.status)
    };

    res.status(201).json(jobResponse);
  } catch (error) {
    console.error('Error creating job:', error);

    // Handle specific Prisma errors
    if (error.code === 'P2002') {
      return res.status(400).json({
        error: 'Validation failed',
        details: ['A job with this title already exists']
      });
    }

    if (error.code === 'P2025') {
      return res.status(400).json({
        error: 'Validation failed',
        details: ['Selected category does not exist']
      });
    }

    res.status(500).json({
      error: 'Failed to create job',
      details: ['An unexpected error occurred. Please try again.']
    });
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
        },
        requirements: {
          include: {
            skillMaster: true
          }
        },
        categories: true
      },
      skip: parseInt(req.query.skip) || 0,
      take: parseInt(req.query.take) || 10,
    });

    // Map status back to frontend format
    const jobsResponse = jobs.map(job => ({
      ...job,
      status: mapEnumToStatus(job.status)
    }));

    res.json(jobsResponse);
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
        requirements: {
          include: {
            skillMaster: true
          }
        }
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
      company: job.employer.companyName,
      status: mapEnumToStatus(job.status)
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
  const { title, description, location, status, categoryIds = [], requirements = [] } = req.body;

  // Validation
  const errors = [];

  if (!title || title.trim().length === 0) {
    errors.push('Job title is required');
  }

  if (!description || description.trim().length === 0) {
    errors.push('Job description is required');
  }

  // Filter out null/undefined category IDs and validate
  const validCategoryIds = categoryIds.filter(id => id !== null && id !== undefined && !isNaN(parseInt(id)));

  if (categoryIds.length > 0 && validCategoryIds.length === 0) {
    errors.push('Please select a valid category');
  }

  if (errors.length > 0) {
    return res.status(400).json({
      error: 'Validation failed',
      details: errors
    });
  }

  try {
    // First, delete existing requirements
    await prisma.jobRequirement.deleteMany({
      where: { jobId: jobId }
    });

    // Update job basic info
    const jobData = {
      title: title.trim(),
      description: description.trim(),
      location: location ? location.trim() : null,
      status: mapStatusToEnum(status)
    };

    // Handle categories - disconnect all and reconnect new ones
    if (validCategoryIds.length > 0) {
      // First disconnect all categories
      await prisma.job.update({
        where: { id: jobId },
        data: {
          categories: {
            set: [] // This disconnects all categories
          }
        }
      });

      // Then connect new categories
      jobData.categories = {
        connect: validCategoryIds.map(id => ({ id: parseInt(id) }))
      };
    }

    const updatedJob = await prisma.job.update({
      where: { id: jobId },
      data: jobData
    });

    // Create new requirements if provided
    if (requirements && requirements.length > 0) {
      const requirementPromises = requirements.map(async (req) => {
        // Find or create skill in SkillMaster
        let skillMaster = await prisma.skillMaster.findFirst({
          where: {
            name: { equals: req.skillName.trim() }
          }
        });

        if (!skillMaster) {
          skillMaster = await prisma.skillMaster.create({
            data: {
              name: req.skillName.trim(),
              category: 'Technical', // Default category
              isActive: true
            }
          });
        }

        return prisma.jobRequirement.create({
          data: {
            jobId: updatedJob.id,
            skillMasterId: skillMaster.id,
            importance: req.importance || 'PREFERRED',
            proficiencyLevel: req.proficiencyLevel || 'INTERMEDIATE',
            yearsRequired: req.yearsRequired ? parseInt(req.yearsRequired) : null,
            description: req.description || null
          }
        });
      });

      await Promise.all(requirementPromises);
    }

    // Fetch the complete updated job with requirements
    const completeJob = await prisma.job.findUnique({
      where: { id: jobId },
      include: {
        requirements: {
          include: {
            skillMaster: true
          }
        },
        categories: true
      }
    });

    // Map status back to frontend format
    const jobResponse = {
      ...completeJob,
      status: mapEnumToStatus(completeJob.status)
    };

    res.json(jobResponse);
  } catch (error) {
    console.error('Error updating job:', error);

    // Handle specific Prisma errors
    if (error.code === 'P2002') {
      return res.status(400).json({
        error: 'Validation failed',
        details: ['A job with this title already exists']
      });
    }

    if (error.code === 'P2025') {
      return res.status(400).json({
        error: 'Validation failed',
        details: ['Selected category does not exist']
      });
    }

    res.status(500).json({
      error: 'Failed to update job',
      details: ['An unexpected error occurred. Please try again.']
    });
  }
};

exports.deleteJob = async (req, res) => {
  const jobId = parseInt(req.params.id);

  try {
    // Use a transaction to ensure all related data is deleted properly
    await prisma.$transaction(async (prisma) => {
      // First, delete all applications for this job
      await prisma.application.deleteMany({
        where: { jobId: jobId }
      });

      // Then delete all interviews for this job
      await prisma.interview.deleteMany({
        where: { jobId: jobId }
      });

      // JobRequirements will be deleted automatically due to onDelete: Cascade
      // Finally, delete the job itself
      await prisma.job.delete({
        where: { id: jobId }
      });
    });

    res.json({ message: 'Job deleted successfully' });
  } catch (error) {
    console.error('Error deleting job:', error);
    res.status(500).json({ error: 'Failed to delete job' });
  }
};