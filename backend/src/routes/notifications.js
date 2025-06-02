const express = require('express');
const router = express.Router();
const notificationsController = require('../controllers/notifications');

// Get notifications for applicant
router.get('/applicant/:applicantId', notificationsController.getApplicantNotifications);

// Get notifications for employer
router.get('/employer/:employerId', notificationsController.getEmployerNotifications);

// Mark single notification as read
router.patch('/:notificationId/read', notificationsController.markNotificationAsRead);

// Mark all notifications as read for a user
router.patch('/mark-all-read', notificationsController.markAllNotificationsAsRead);

// Create notification (for testing or admin purposes)
router.post('/', notificationsController.createNotification);

// Cleanup expired notifications (for maintenance)
router.delete('/cleanup', notificationsController.cleanupExpiredNotifications);

module.exports = router;