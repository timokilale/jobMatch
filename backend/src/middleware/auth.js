const jwt = require('jsonwebtoken');
const prisma = require('../prisma');

const auth = (roles = []) => {
  return async (req, res, next) => {
    try {
      const authHeader = req.headers.authorization;
      if (!authHeader || !authHeader.startsWith('Bearer ')) {
        throw new Error('No token provided');
      }

      const token = authHeader.split(' ')[1];
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      
      const user = await prisma.user.findUnique({
        where: { id: decoded.userId },
        include: { applicant: true, employer: true }
      });

      if (!user || (roles.length && !roles.includes(user.role))) {
        throw new Error('Unauthorized');
      }

      req.user = user;
      next();
    } catch (error) {
      console.error('Auth error:', error.message);
      res.status(401).send({ error: 'Authentication required' });
    }
  };
};

module.exports = auth;