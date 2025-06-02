const express = require('express');
const router = express.Router();
const auth = require ('../middleware/auth');
const { registerApplicant, registerEmployer, login } = require('../controllers/authController');
const qualificationsRoutes = require('./qualifications');
const notificationsController = require('../controllers/notifications');
const cvRoutes = require('./cv');

// Auth Routes
router.post('/auth/login', login);
router.post('/auth/register/applicant', registerApplicant);
router.post('/auth/register/employer', registerEmployer);

router.get('/me', auth(), async (req, res) => {
  const { user } = req;
  res.json({
    role: user.role,
    user: {
      email: user.email,
      ...(user.role === 'APPLICANT' ? user.applicant : user.employer)
      }
    });
  });

  

  router.post('/logout', (req, res) => {
    res.clearCookie('token', {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'Lax',
    });
    res.json({ message: 'Logged out' });
  });


// Qualifications Routes
router.use('/qualifications', qualificationsRoutes);
router.use('/cv', cvRoutes);
module.exports = router;