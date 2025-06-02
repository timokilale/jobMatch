const prisma = require('../prisma');

// Get notifications for an applicant
exports.getApplicantNotifications = async (req, res) => {
  try {
    const applicantId = parseInt(req.params.applicantId);

    if (isNaN(applicantId)) {
      return res.status(400).json({ error: "Invalid applicant ID format" });
    }

    const notifications = await prisma.notification.findMany({
      where: { 
        applicantId: applicantId,
        OR: [
          { expiresAt: null },
          { expiresAt: { gt: new Date() } }
        ]
      },
      include: {
        application: {
          include: {
            job: {
              include: {
                employer: {
                  select: {
                    companyName: true
                  }
                }
              }
            }
          }
        }
      },
      orderBy: {
        createdAt: 'desc'
      }
    });

    res.json(notifications);
  } catch (error) {
    console.error('Get Notifications Error:', error);
    res.status(500).json({ 
      error: 'Failed to fetch notifications',
      details: error.message
    });
  }
};

// Get notifications for an employer
exports.getEmployerNotifications = async (req, res) => {
  try {
    const employerId = parseInt(req.params.employerId);

    if (isNaN(employerId)) {
      return res.status(400).json({ error: "Invalid employer ID format" });
    }

    const notifications = await prisma.notification.findMany({
      where: { 
        employerId: employerId,
        OR: [
          { expiresAt: null },
          { expiresAt: { gt: new Date() } }
        ]
      },
      include: {
        application: {
          include: {
            job: {
              select: {
                title: true
              }
            },
            applicant: {
              select: {
                fullName: true
              }
            }
          }
        }
      },
      orderBy: {
        createdAt: 'desc'
      }
    });

    res.json(notifications);
  } catch (error) {
    console.error('Get Employer Notifications Error:', error);
    res.status(500).json({ 
      error: 'Failed to fetch notifications',
      details: error.message
    });
  }
};

// Mark notification as read
exports.markNotificationAsRead = async (req, res) => {
  try {
    const notificationId = parseInt(req.params.notificationId);

    if (isNaN(notificationId)) {
      return res.status(400).json({ error: "Invalid notification ID format" });
    }

    const notification = await prisma.notification.update({
      where: { id: notificationId },
      data: { 
        isRead: true,
        readAt: new Date(),
        expiresAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000) // 7 days from now
      }
    });

    res.json(notification);
  } catch (error) {
    console.error('Mark Notification Read Error:', error);
    res.status(500).json({ 
      error: 'Failed to mark notification as read',
      details: error.message
    });
  }
};

// Mark all notifications as read for a user
exports.markAllNotificationsAsRead = async (req, res) => {
  try {
    const { userId, userType } = req.body; // userType: 'applicant' or 'employer'

    if (!userId || !userType) {
      return res.status(400).json({ error: "Missing userId or userType" });
    }

    const whereClause = userType === 'applicant' 
      ? { applicantId: parseInt(userId) }
      : { employerId: parseInt(userId) };

    const updatedNotifications = await prisma.notification.updateMany({
      where: {
        ...whereClause,
        isRead: false
      },
      data: { 
        isRead: true,
        readAt: new Date(),
        expiresAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000) // 7 days from now
      }
    });

    res.json({ 
      message: 'All notifications marked as read',
      count: updatedNotifications.count
    });
  } catch (error) {
    console.error('Mark All Notifications Read Error:', error);
    res.status(500).json({ 
      error: 'Failed to mark all notifications as read',
      details: error.message
    });
  }
};

// Create notification (usually called internally)
exports.createNotification = async (req, res) => {
  try {
    const { 
      type, 
      title, 
      message, 
      applicantId, 
      employerId, 
      applicationId 
    } = req.body;

    if (!type || !title || !message) {
      return res.status(400).json({ error: "Missing required fields: type, title, message" });
    }

    const notification = await prisma.notification.create({
      data: {
        type,
        title,
        message,
        applicantId: applicantId ? parseInt(applicantId) : null,
        employerId: employerId ? parseInt(employerId) : null,
        applicationId: applicationId ? parseInt(applicationId) : null
      }
    });

    res.status(201).json(notification);
  } catch (error) {
    console.error('Create Notification Error:', error);
    res.status(500).json({ 
      error: 'Failed to create notification',
      details: error.message
    });
  }
};

// Delete expired notifications
exports.cleanupExpiredNotifications = async (req, res) => {
  try {
    const deleted = await prisma.notification.deleteMany({
      where: {
        expiresAt: {
          lt: new Date()
        }
      }
    });

    res.json({ 
      message: 'Expired notifications cleaned up',
      deletedCount: deleted.count
    });
  } catch (error) {
    console.error('Cleanup Notifications Error:', error);
    res.status(500).json({ 
      error: 'Failed to cleanup expired notifications',
      details: error.message
    });
  }
};

// Helper function to create application status change notification
exports.createStatusChangeNotification = async (applicationId, newStatus) => {
  try {
    console.log('Creating status change notification for application:', applicationId, 'with status:', newStatus);
    
    const application = await prisma.application.findUnique({
      where: { id: applicationId },
      include: {
        job: {
          include: {
            employer: {
              select: {
                companyName: true
              }
            }
          }
        },
        applicant: {
          select: {
            id: true,
            fullName: true
          }
        }
      }
    });

    if (!application) {
      throw new Error('Application not found');
    }

    let title, message;
    if (newStatus === 'accepted') {
      title = 'Application Accepted';
      message = `Great news! Your application for ${application.job.title} at ${application.job.employer.companyName} has been accepted.`;
    } else if (newStatus === 'rejected') {
      title = 'Application Update';
      message = `Your application for ${application.job.title} at ${application.job.employer.companyName} has been rejected.`;
    } else {
      title = 'Application Status Update';
      message = `Your application status for ${application.job.title} has been updated to ${newStatus}.`;
    }

    const notification = await prisma.notification.create({
      data: {
        type: 'STATUS_CHANGE',
        title,
        message,
        applicantId: application.applicant.id,
        applicationId: applicationId
      }
    });

    console.log('Notification created successfully:', notification.id);
    return notification;
  } catch (error) {
    console.error('Create Status Change Notification Error:', error);
    throw error;
  }
};