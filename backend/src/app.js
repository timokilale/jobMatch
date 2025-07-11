require('dotenv').config();
const express = require('express');
const cors = require('cors');
const http = require('http');
const path = require('path');
const prisma = require('./prisma');
const routes = require('./routes');
const cookieParser = require('cookie-parser');
const qualificationRouter = require('./routes/qualifications');
const ChatService = require('./services/chatService');

const app = express();
const server = http.createServer(app);


// Middleware
app.use(cors({
  origin: ['http://localhost:3000', 'http://localhost:3001', 'https://0f16-154-74-191-8.ngrok-free.app'],
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
app.use(express.json({ limit: '10mb' })); // Increase limit for large requests
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// Add request timeout middleware
app.use((req, res, next) => {
  res.setTimeout(30000, () => {
    res.status(408).json({ error: 'Request timeout' });
  });
  next();
});



// Routes
app.use('/api', routes);
// Serve uploaded files with proper headers
app.use('/uploads', (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
}, express.static(path.join(__dirname, 'uploads')));



app.use('/api/qualifications', qualificationRouter);
app.use('/api/experiences', require('./routes/workExperience'));
app.use('/api/languages', require('./routes/languageProficiency'));

app.use('/api/skills', require('./routes/skills')); // New general skills
app.use('/api/general-skills', require('./routes/generalSkills'));
app.use('/api/jobs', require('./routes/jobs'));
app.use('/api/applications', require('./routes/applications'));
app.use('/api/categories', require('./routes/categories'));
app.use('/api/applicant-categories', require('./routes/applicantCategories')); // New category management
app.use('/api/notification-settings', require('./routes/notificationSettings')); // Notification preferences
app.use('/api/skill-gap-analysis', require('./routes/skillGapAnalysis')); // Real skill gap analysis
app.use('/api/pdf', require('./routes/pdf'));
app.use('/api/market', require('./routes/marketAnalytics'));
app.use('/api/skills-analysis', require('./routes/skillsAnalysis'));
app.use('/api/privacy', require('./routes/privacy'));
app.use('/api/interviews', require('./routes/interviews'));
app.use('/api/emails', require('./routes/emails'));
app.use('/api/notifications', require('./routes/notifications'));
app.use('/api/forecasting', require('./routes/forecasting'));


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

