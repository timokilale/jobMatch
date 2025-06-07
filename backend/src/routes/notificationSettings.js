const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const {
  getNotificationSettings,
  updateNotificationSettings,
  updateSingleSetting
} = require('../controllers/notificationSettings');

// Get notification settings for authenticated applicant
router.get('/', auth(), getNotificationSettings);

// Update all notification settings
router.put('/', auth(), updateNotificationSettings);

// Update a single notification setting
router.patch('/single', auth(), updateSingleSetting);

module.exports = router;
