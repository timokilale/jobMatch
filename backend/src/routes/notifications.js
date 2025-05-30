const express = require('express');
const router = express.Router();
const notificationsController = require('../controllers/notifications');

// Get notifications for applicant
router.get('/applicant/:applicantId', notificationsController.getApplicantNotifications);