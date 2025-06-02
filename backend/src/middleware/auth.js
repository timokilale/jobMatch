// middleware/auth.js
const jwt = require('jsonwebtoken');
const prisma = require('../prisma');

const auth = (roles = []) => {
  return async (req, res, next) => {
    try {
      const token = req.cookies?.token;
      if (!token) {
        throw new Error('No token provided');
      }

      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      
      const user = await prisma.user.findUnique({
        where: { id: decoded.userId },
        include: { applicant: true, employer: true }
      });

      if (!user || (roles.length && !roles.includes(user.role))) {
        throw new Error('Unauthorized');
      }
      
      // Employer CV access validation
      if (req.originalUrl.includes('/cv/') && user.role === "EMPLOYER") {
        const applicantId = parseInt(req.params.id);

        const applicationCount = await prisma.application.count({
          where: {
            applicantId: applicantId,
            job: {
              employerId: user.employer.id
            }
          }
        });
        
        if (applicationCount === 0) {
          throw new Error('Unauthorized CV access');
        }
      }
      
      req.user = user; // Make sure to attach user to request
      next();
    } catch (error) {
      console.error('Auth error:', error.message);
      res.status(401).send({ error: 'Authentication required' });
    }
  };
};

module.exports = auth;