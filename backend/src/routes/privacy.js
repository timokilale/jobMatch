const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const {
  recordConsent,
  getUserConsents,
  exportUserData,
  deleteUserData,
  getPrivacyDashboard,
  updatePrivacyPreferences,
  getDataProcessingActivities,
  checkConsent,
  getBiasAnalysis
} = require('../controllers/privacy');

// All routes require authentication
router.use(auth());

// Consent management
router.post('/consent', recordConsent);
router.get('/consents', getUserConsents);
router.put('/preferences', updatePrivacyPreferences);
router.get('/consent/:consentType', checkConsent);

// Data rights (GDPR)
router.get('/export', exportUserData);
router.delete('/delete', deleteUserData);

// Privacy dashboard
router.get('/dashboard', getPrivacyDashboard);

// Data processing transparency
router.get('/processing-activities', getDataProcessingActivities);

// Bias analysis
router.get('/bias-analysis', getBiasAnalysis);

module.exports = router;
