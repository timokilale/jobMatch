const prisma = require('../prisma');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


const registerApplicant = async (req, res) => {
  try {
    const { email, password, fullName, nida, categoryIds } = req.body;
    
    const hashedPassword = await bcrypt.hash(password, 10);
    
    const user = await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
        role: 'APPLICANT',
        applicant: {
          create: {
            fullName,
            nida,
            categories: {
              connect: categoryIds.map(id => ({ id }))
            }
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

    res.cookie('token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production', 
      sameSite: 'Lax',
      maxAge: 3600000 
    });

    res.status(201).json({ 
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

    res.cookie('token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production', 
      sameSite: 'Lax',
      maxAge: 3600000 
    });

    res.status(201).json({ 
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

    res.cookie('token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production', 
      sameSite: 'Lax',
      maxAge: 3600000 
    });

    const responsePayload = {
      role: user.role,
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

module.exports = { registerApplicant, registerEmployer, login };