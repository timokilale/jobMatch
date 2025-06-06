const { PrismaClient } = require('../prisma/generated/prisma-client-js');
const prisma = new PrismaClient({
    // Disable query logging in production for better performance
    log: process.env.NODE_ENV === 'development' ? ['warn', 'error'] : ['error'],
});

prisma.$connect()
    .then(() => {
        console.log('Connected to the database');
    })
    .catch((error) => {
        console.error('Error connecting to the database:', error);
    });
    
module.exports = prisma;