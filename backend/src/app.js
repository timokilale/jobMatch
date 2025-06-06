require('dotenv').config();
const express = require('express');
const cors = require('cors');
const http = require('http');
const prisma = require('./prisma');
const routes = require('./routes');
const cookieParser = require('cookie-parser');
const qualificationRouter = require('./routes/qualifications');
const ChatService = require('./services/chatService');

const app = express();
const server = http.createServer(app);


// Middleware
app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
  allowedHeaders: [
    'Content-Type', 
    'Authorization', 
    'Accept',
    'Content-Disposition',
    'Access-Control-Allow-Origin',   
  ],
  exposedHeaders: [
    'Content-Disposition',
    'Access-Control-Allow-Origin',
  ],
  preflightContinue: false,
  optionsSuccessStatus: 204, 
}));
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));



// Routes
app.use('/api', routes);
app.use('/uploads', express.static('uploads'));
app.use('/api/qualifications', qualificationRouter);
app.use('/api/experiences', require('./routes/workExperience'));
app.use('/api/languages', require('./routes/languageProficiency'));
app.use('/api/skills', require('./routes/computerSkill'));
app.use('/api/jobs', require('./routes/jobs'));
app.use('/api/applications', require('./routes/applications'));
app.use('/api/categories', require('./routes/categories'));
app.use('/api/pdf', require('./routes/pdf'));


// Error Handling
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Internal server error' });
});

// Initialize Chat Service
const chatService = new ChatService(server);

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log('Chat service initialized');
  prisma.$connect()
    .then(() => console.log('Connected to database'))
    .catch(err => console.error('Database connection error:', err));
});

