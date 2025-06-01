const prisma = require('../prisma');
const { createStatusChangeNotification } = require('./notifications');

exports.applyToJob = async (req, res) => {
  const { applicantId, jobId } = req.body;

  if (!applicantId || !jobId) {
    return res.status(400).json({ error: 'Missing applicantId or jobId' });
  }

  if (isNaN(applicantId) || isNaN(jobId)) {
    return res.status(400).json({ error: 'IDs must be numeric' });
  }

  try {
    const [applicant, job] = await Promise.all([
      prisma.applicant.findUnique({ where: { id: parseInt(applicantId) } }),
      prisma.job.findUnique({ 
        where: { id: parseInt(jobId) },
        include: {
          employer: {
            select: {
              id: true,
              companyName: true
            }
          }
        }
      })
    ]);

    if (!applicant) return res.status(404).json({ error: 'Applicant not found' });
    if (!job) return res.status(404).json({ error: 'Job not found' });

    const application = await prisma.application.create({
      data: {
        applicantId: parseInt(applicantId),
        jobId: parseInt(jobId),
      }
    });

    // Create notification for employer about new application
    await prisma.notification.create({
      data: {
        type: 'NEW_APPLICATION',
        title: 'New Job Application',
        message: `${applicant.fullName} has applied for the position: ${job.title}`,
        employerId: job.employer.id,
        applicationId: application.id
      }
    });

    res.status(201).json(application);
  } catch (error) {
    console.error('Application Error:', error);

    if (error.code === 'P2002') {
      return res.status(409).json({ 
        error: 'Already applied to this job',
        message: 'This applicant has already applied to this job position'
      });
    }
    res.status(500).json({
      error: 'Application failed',
      details: error.message
    }); 
  }
};

exports.getApplicantApplications = async (req, res) => {
  try {
    const applicantId = parseInt(req.params.applicantId);

    if (isNaN(applicantId)) {
      return res.status(400).json({ error: "Invalid applicant ID format" });
    }

    const applications = await prisma.application.findMany({
      where: { 
        applicantId: parseInt(applicantId) 
      },
      include: { 
        job: {
          include: {
            employer: true
          }
        },
        applicant: {
          select: {
            fullName: true,
            user: {
              select: {
                email: true
              }
            }
          }
        }
      },
      orderBy: {
        createdAt: 'desc'
      }
    });
    res.json(applications);
  } catch (error) {
    console.error('Get Applications Error:', error);
    res.status(500).json({ 
      error: 'Failed to fetch applications',
      details: error.message
    });
  }
};

exports.getEmployerApplications = async (req, res) => {
  try {
    const employerId = parseInt(req.params.employerId);
    
    const applications = await prisma.application.findMany({
      where: {
        job: {
          employerId: employerId
        }
      },
      include: {
        job: {
          select: {
            title: true
          }
        },
        applicant: {
          select: {
            id: true,
            fullName: true,
            user: {
              select: {
                email: true
              }
            }
          }
        }
      },
      orderBy: {
        createdAt: 'desc'
      }
    });

    res.json(applications);
  } catch (error) {
    console.error('Error fetching employer applications:', error);
    res.status(500).json({ error: 'Failed to fetch applications' });
  }
};

// Updated application status endpoint for employer decisions
exports.updateApplicationStatus = async (req, res) => {
  try {
    const applicationId = parseInt(req.params.applicationId);
    const { status } = req.body;

    if (isNaN(applicationId)) {
      return res.status(400).json({ error: "Invalid application ID format" });
    }

    // Updated validation for employer decisions
    const validStatuses = ['APPLIED', 'REVIEWED', 'ACCEPTED', 'REJECTED'];
    if (!status || !validStatuses.includes(status.toUpperCase())) {
      return res.status(400).json({ 
        error: "Invalid status. Must be: APPLIED, REVIEWED, ACCEPTED, or REJECTED" 
      });
    }

    // Get the current application to check for status change
    const currentApplication = await prisma.application.findUnique({
      where: { id: applicationId }
    });

    if (!currentApplication) {
      return res.status(404).json({ error: 'Application not found' });
    }

    // Update the application status (convert to uppercase for consistency)
    const updatedApplication = await prisma.application.update({
      where: { id: applicationId },
      data: { status: status.toUpperCase() },
      include: {
        job: {
          include: {
            employer: true
          }
        },
        applicant: {
          select: {
            fullName: true,
            user: {
              select: {
                email: true
              }
            }
          }
        }
      }
    });

    // Create notification if status changed to accepted or rejected - PASS LOWERCASE VALUE
    const finalStatus = status.toUpperCase();
    if (currentApplication.status !== finalStatus && ['ACCEPTED', 'REJECTED'].includes(finalStatus)) {
      const notificationStatus = finalStatus === 'ACCEPTED' ? 'accepted' : 'rejected';
      await createStatusChangeNotification(applicationId, notificationStatus);
    }

    res.json(updatedApplication);
  } catch (error) {
    console.error('Update Application Status Error:', error);
    res.status(500).json({ 
      error: 'Failed to update application status',
      details: error.message
    });
  }
};


// Optional: Add a specific endpoint for employer decisions (accept/reject only)
exports.makeApplicationDecision = async (req, res) => {
  try {
    const applicationId = parseInt(req.params.applicationId);
    const { decision } = req.body; // 'accept' or 'reject'

    if (isNaN(applicationId)) {
      return res.status(400).json({ error: "Invalid application ID format" });
    }

    if (!decision || !['accept', 'reject'].includes(decision.toLowerCase())) {
      return res.status(400).json({ 
        error: "Invalid decision. Must be 'accept' or 'reject'" 
      });
    }

    // Get the current application
    const currentApplication = await prisma.application.findUnique({
      where: { id: applicationId }
    });

    if (!currentApplication) {
      return res.status(404).json({ error: 'Application not found' });
    }

    // Map decision to status
    const status = decision.toLowerCase() === 'accept' ? 'ACCEPTED' : 'REJECTED';

    // Update the application status
    const updatedApplication = await prisma.application.update({
      where: { id: applicationId },
      data: { status },
      include: {
        job: {
          include: {
            employer: true
          }
        },
        applicant: {
          select: {
            fullName: true,
            user: {
              select: {
                email: true
              }
            }
          }
        }
      }
    });

    // Create notification for status change - PASS LOWERCASE VALUE
    if (currentApplication.status !== status) {
      await createStatusChangeNotification(applicationId, decision.toLowerCase() === 'accept' ? 'accepted' : 'rejected');
    }

    res.json({
      ...updatedApplication,
      decision: decision.toLowerCase()
    });
  } catch (error) {
    console.error('Make Application Decision Error:', error);
    res.status(500).json({ 
      error: 'Failed to make application decision',
      details: error.message
    });
  }
};