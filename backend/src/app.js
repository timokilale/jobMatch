require('dotenv').config();
const express = require('express');
const cors = require('cors');
const prisma = require('./prisma');
const routes = require('./routes');
const qualificationRouter = require('./routes/qualifications');

const app = express();


// Middleware
app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'Accept'],
  preflightContinue: false,
  optionsSuccessStatus: 204, 
}));

app.use(express.json());


  

// Routes
app.use('/api', routes);
app.use('/uploads', express.static('uploads'));
app.use('/api/qualifications', qualificationRouter);

// Error Handling
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Internal server error' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  prisma.$connect()
    .then(() => console.log('Connected to database'))
    .catch(err => console.error('Database connection error:', err));
});