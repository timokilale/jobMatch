const prisma = require('../prisma');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const PrivacyManager = require('../services/privacyManager');

const privacyManager = new PrivacyManager();


const registerApplicant = async (req, res) => {
  try {
    const { email, password, fullName, nida, categoryIds } = req.body;

    // Validate NIDA number
    if (!nida || typeof nida !== 'string') {
      return res.status(400).json({
        error: 'NIDA number is required'
      });
    }

    // Remove any spaces or dashes and validate format
    const cleanNida = nida.replace(/[\s-]/g, '');

    // NIDA should be exactly 20 digits
    if (!/^\d{20}$/.test(cleanNida)) {
      return res.status(400).json({
        error: 'NIDA number must be exactly 20 digits'
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    
    const user = await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
        role: 'APPLICANT',
        applicant: {
          create: {
            fullName,
            nida: cleanNida, // Use the cleaned NIDA number
            categories: {
              connect: categoryIds.map(id => ({ id }))
            }
          }
        }
      },
      include: { applicant: true }
    });

    // Grant default consents for new users
    try {
      await privacyManager.recordConsent(user.id, 'analytics', true, 'Default consent granted during registration for analytics features');
      await privacyManager.recordConsent(user.id, 'job_matching', true, 'Default consent granted during registration for job matching features');
      await privacyManager.recordConsent(user.id, 'profile_data', true, 'Default consent granted during registration for profile data processing');
    } catch (consentError) {
      console.error('Error granting default consents:', consentError);
      // Don't fail registration if consent fails, but log it
    }

    // Generate JWT
    const token = jwt.sign(
      { userId: user.id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: '1h' }
    );

    res.cookie('token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production', 
      sameSite: 'Lax',
      maxAge: 3600000 
    });

    res.status(201).json({ 
      role: 'APPLICANT',
      token: token,
      user: {
        ...user.applicant,
        email: user.email
      }
     });
  } catch (error) {
    console.error('Registration error:', error);
    if (error.code === 'P2002') {
      // Handle unique constraint violations
      const target = error.meta?.target;
      if (target && target.includes('nida')) {
        return res.status(400).json({
          error: 'This NIDA number is already registered'
        });
      } else if (target && target.includes('email')) {
        return res.status(400).json({
          error: 'This email address is already registered'
        });
      } else {
        return res.status(400).json({
          error: `${target ? target.join(', ') : 'Field'} already exists`
        });
      }
    }
    res.status(400).json({
      error: error.message || 'Registration failed' });
  }
};

const registerEmployer = async (req, res) => {
  try {
    const { email, password, companyName, address } = req.body;
    
    const hashedPassword = await bcrypt.hash(password, 10);
    
    const user = await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
        role: 'EMPLOYER',
        employer: {
          create: {
            companyName,
            address
          }
        }
      },
      include: { employer: true }
    });

    // Grant default consents for new employers
    try {
      await privacyManager.recordConsent(user.id, 'analytics', true, 'Default consent granted during registration for analytics features');
      await privacyManager.recordConsent(user.id, 'job_matching', true, 'Default consent granted during registration for job matching features');
      await privacyManager.recordConsent(user.id, 'profile_data', true, 'Default consent granted during registration for profile data processing');
    } catch (consentError) {
      console.error('Error granting default consents:', consentError);
      // Don't fail registration if consent fails, but log it
    }

    const token = jwt.sign(
      { userId: user.id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: '1h' }
    );

    res.cookie('token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production', 
      sameSite: 'Lax',
      maxAge: 3600000 
    });

    res.status(201).json({ 
      role: 'EMPLOYER',
      token: token,
      user: {
        ...user.employer ,
        email: user.email
      },
    });
  } catch (error) {
    console.error('Employer registration error:', error);
    
    if (error.code === 'P2002') {
      return res.status(400).json({
        error: `${error.meta.target.join(', ')} already exists`
      });
    }

    res.status(400).json({ error: error.message });
  }
};

const login = async (req, res) => {
  try {
    const { email, password, selectedRole } = req.body;

    const user = await prisma.user.findUnique({
      where: { email },
      include: {
        applicant: true,
        employer: true
      }
    });

    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    // Validate selected role matches user's actual role
    if (selectedRole) {
      const expectedRole = selectedRole === 'applicant' ? 'APPLICANT' : 'EMPLOYER';
      if (user.role !== expectedRole) {
        const actualRoleDisplay = user.role === 'APPLICANT' ? 'Job Seeker' : 'Employer';
        const selectedRoleDisplay = selectedRole === 'applicant' ? 'Job Seeker' : 'Employer';
        return res.status(401).json({
          error: `Role mismatch: You selected ${selectedRoleDisplay} but your account is registered as ${actualRoleDisplay}. Please select the correct role or use the appropriate account.`
        });
      }
    }

    const token = jwt.sign(
      { userId: user.id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: '1h' }
    );

    res.cookie('token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production', 
      sameSite: 'Lax',
      maxAge: 24 * 60 * 60 * 1000,
    });

    const responsePayload = {
      role: user.role,
      token: token,
      user: {
        email: user.email,
        ...(user.role === 'APPLICANT' ? user.applicant : user.employer),
      },
    };

    res.json(responsePayload);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const logout = async (req, res) => {
  res.clearCookie('token');
  res.json({ message: 'Logged out successfully' });
};
module.exports = { registerApplicant, registerEmployer, login, logout };