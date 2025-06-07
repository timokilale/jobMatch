const { PrismaClient } = require('../prisma/generated/prisma-client-js');
const prisma = new PrismaClient({
    // Disable query logging in production for better performance
    log: process.env.NODE_ENV === 'development' ? ['warn', 'error'] : ['error'],
    // Add connection timeout settings
    datasources: {
        db: {
            url: process.env.DATABASE_URL
        }
    },
    // Set transaction timeout
    transactionOptions: {
        maxWait: 5000, // 5 seconds
        timeout: 10000, // 10 seconds
    }
});

prisma.$connect()
    .then(() => {
        console.log('Connected to the database');
    })
    .catch((error) => {
        console.error('Error connecting to the database:', error);
    });
    
module.exports = prisma;