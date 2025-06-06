const express = require('express');
const router = express.Router();
const prisma = require('../prisma');
const { validateFutureDate } = require('../utils/dateValidation');
const auth = require('../middleware/auth');

// Schedule an interview
router.post('/schedule', auth(), async (req, res) => {
  try {
    const {
      applicationId,
      scheduledAt,
      duration,
      location,
      type,
      notes,
      interviewers,
      employerId
    } = req.body;

    // Validate required fields
    if (!applicationId || !scheduledAt || !employerId) {
      return res.status(400).json({
        error: 'Missing required fields: applicationId, scheduledAt, employerId'
      });
    }

    // Validate scheduled date is in the future
    const dateValidation = validateFutureDate(scheduledAt);
    if (!dateValidation.isValid) {
      return res.status(400).json({ error: dateValidation.error });
    }

    // Check if application exists and belongs to the employer
    const application = await prisma.application.findFirst({
      where: {
        id: parseInt(applicationId),
        job: {
          employerId: parseInt(employerId)
        }
      },
      include: {
        applicant: {
          include: {
            user: true
          }
        },
        job: {
          include: {
            employer: true
          }
        }
      }
    });

    if (!application) {
      return res.status(404).json({ error: 'Application not found or access denied' });
    }

    // Create interview record
    const interview = await prisma.interview.create({
      data: {
        applicationId: parseInt(applicationId),
        scheduledAt: new Date(scheduledAt),
        duration: parseInt(duration) || 60,
        location: location || '',
        type: type || 'in-person',
        notes: notes || '',
        interviewers: interviewers || '',
        status: 'SCHEDULED'
      }
    });

    // Update application status to INTERVIEW
    await prisma.application.update({
      where: { id: parseInt(applicationId) },
      data: { status: 'INTERVIEW' }
    });

    // Create notification for applicant
    await prisma.notification.create({
      data: {
        type: 'INTERVIEW_SCHEDULED',
        title: 'Interview Scheduled',
        message: `Your interview for ${application.job.title} at ${application.job.employer.companyName} has been scheduled for ${new Date(scheduledAt).toLocaleDateString()}.`,
        applicantId: application.applicant.id,
        applicationId: parseInt(applicationId)
      }
    });

    // Create notification for employer
    await prisma.notification.create({
      data: {
        type: 'INTERVIEW_SCHEDULED',
        title: 'Interview Scheduled',
        message: `Interview scheduled with ${application.applicant.fullName} for ${application.job.title} on ${new Date(scheduledAt).toLocaleDateString()}.`,
        employerId: parseInt(employerId),
        applicationId: parseInt(applicationId)
      }
    });

    res.status(201).json({
      ...interview,
      application: {
        id: application.id,
        applicant: {
          fullName: application.applicant.fullName,
          email: application.applicant.user.email
        },
        job: {
          title: application.job.title,
          company: application.job.employer.companyName
        }
      }
    });

  } catch (error) {
    console.error('Error scheduling interview:', error);
    res.status(500).json({ 
      error: 'Failed to schedule interview',
      details: error.message 
    });
  }
});

// Get interviews for an employer
router.get('/employer/:employerId', auth(), async (req, res) => {
  try {
    const employerId = parseInt(req.params.employerId);

    const interviews = await prisma.interview.findMany({
      where: {
        application: {
          job: {
            employerId: employerId
          }
        }
      },
      include: {
        application: {
          include: {
            applicant: {
              include: {
                user: true
              }
            },
            job: true
          }
        }
      },
      orderBy: {
        scheduledAt: 'asc'
      }
    });

    res.json(interviews);
  } catch (error) {
    console.error('Error fetching interviews:', error);
    res.status(500).json({ 
      error: 'Failed to fetch interviews',
      details: error.message 
    });
  }
});

// Update interview status
router.patch('/:interviewId/status', auth(), async (req, res) => {
  try {
    const interviewId = parseInt(req.params.interviewId);
    const { status } = req.body;

    const validStatuses = ['SCHEDULED', 'COMPLETED', 'CANCELLED', 'RESCHEDULED'];
    if (!validStatuses.includes(status)) {
      return res.status(400).json({ error: 'Invalid status' });
    }

    const interview = await prisma.interview.update({
      where: { id: interviewId },
      data: { status },
      include: {
        application: {
          include: {
            applicant: {
              include: {
                user: true
              }
            },
            job: {
              include: {
                employer: true
              }
            }
          }
        }
      }
    });

    // Create notification for status change
    await prisma.notification.create({
      data: {
        type: 'INTERVIEW_SCHEDULED',
        title: 'Interview Status Updated',
        message: `Your interview status for ${interview.application.job.title} has been updated to ${status.toLowerCase()}.`,
        applicantId: interview.application.applicant.id,
        applicationId: interview.application.id
      }
    });

    res.json(interview);
  } catch (error) {
    console.error('Error updating interview status:', error);
    res.status(500).json({ 
      error: 'Failed to update interview status',
      details: error.message 
    });
  }
});

module.exports = router;
