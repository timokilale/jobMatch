const prisma = require('../prisma');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { Role } = require('../../prisma/generated/prisma-client-js');

const registerApplicant = async (req, res) => {
  try {
    const { email, password, fullName, nida } = req.body;
    
    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);
    
    // Create user and applicant
    const user = await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
        role: 'APPLICANT',
        applicant: {
          create: {
            fullName,
            nida
          }
        }
      },
      include: { applicant: true }
    });

    // Generate JWT
    const token = jwt.sign(
      { userId: user.id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: '1h' }
    );

    res.status(201).json({ 
      token,
      role: 'APPLICANT',
      user: {
        ...user.applicant,
        email: user.email
      }
     });
  } catch (error) {
    console.error('Registration error:', error);
    if (error.code === 'P2002') {
      return res.status(400).json({ 
        error: `${error.meta.target.join(', ')} already exists` 
      });
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

    const token = jwt.sign(
      { userId: user.id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: '1h' }
    );

    res.status(201).json({ 
      token,
      role: 'EMPLOYER',
      user: {
        ...user.employer ,
        email: user.email
      }
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
    const { email, password } = req.body;
    
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

    const token = jwt.sign(
      { userId: user.id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: '1h' }
    );

    const responsePayload = {
      token,
      role: user.role,
      user: null,
    };

    if (user.role === 'APPLICANT') {
      responsePayload.user = {
        ...user.applicant,
        email: user.email
        };
    } else if (user.role === 'EMPLOYER') {
      responsePayload.user = {
        ...user.employer,
        email: user.email
        };
    }

    res.json(responsePayload);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { registerApplicant, registerEmployer, login };