const jwt = require('jsonwebtoken');
const prisma = require('../prisma');

const auth = (roles = []) => {
  return async (req, res, next) => {
    try {
      const token = req.header('Authorization').replace('Bearer ', '');
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      const user = await prisma.user.findUnique({
        where: { id: decoded.userId }
      });

      if (!user || (roles.length && !roles.includes(user.role))) {
        throw new Error();
      }

      req.user = user;
      next();
    } catch (error) {
      res.status(401).send({ error: 'Authentication required' });
    }
  };
};

module.exports = auth;