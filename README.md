# Job Match - Employment Facilitation Platform

A comprehensive job matching system built for the Tanzanian job market, connecting job seekers with employers through intelligent matching algorithms and comprehensive profile management.

## System Overview

Job Match is a full-stack web application that facilitates employment connections through advanced job matching, skills analysis, and market insights. The system serves both job applicants and employers with role-based dashboards and features.

## Core Features

### User Management
- Role-based authentication system (Applicants, Employers, Admin)
- Secure JWT authentication with HTTP-only cookies
- User profile management with comprehensive data collection
- Account activation and password management

### For Job Applicants
- Comprehensive profile creation with personal information, qualifications, and skills
- Academic qualifications management with document upload support
- Work experience tracking with detailed employment history
- Language proficiency assessment and certification
- Skills management with proficiency levels and experience tracking
- CV generation and preview functionality
- Job application tracking and status monitoring
- Intelligent job recommendations based on skills and preferences
- Skills gap analysis with training recommendations
- Market insights and employment trend analysis
- Real-time notifications for application updates
- Live chat support system

### For Employers
- Company profile management and branding
- Job posting creation with detailed requirements
- Candidate management and application review
- Interview scheduling and tracking
- Analytics dashboard with hiring metrics
- Market analytics and employment forecasting
- Notification system for new applications
- CV access for applicants who have applied to their jobs

### Machine Learning and Analytics
- Intelligent job matching based on skills similarity scoring
- Skills gap analysis with personalized training suggestions
- Employment trend forecasting using historical data
- Market demand analysis for skills and job categories
- Career path recommendations based on market trends
- Automated notification system with smart timing

### Communication System
- Real-time chat widget with WebSocket support
- Intelligent chatbot with keyword-based responses
- Agent escalation for complex support queries
- Typing indicators and message status tracking

## Technical Architecture

### Frontend Stack
- React 19.1.0 with functional components and hooks
- Redux Toolkit for state management
- Tailwind CSS for responsive styling
- React Router for navigation
- Axios for API communication
- FontAwesome for icons

### Backend Stack
- Node.js with Express.js framework
- Prisma ORM for database management
- MySQL database with normalized schema
- JWT authentication with bcrypt password hashing
- Multer for file upload handling
- WebSocket support for real-time features

### Database Schema
The system uses a normalized MySQL database with the following key entities:
- Users (authentication and role management)
- Applicants (job seeker profiles and data)
- Employers (company profiles and hiring data)
- Jobs (job postings with requirements)
- Applications (job application tracking)
- Skills (normalized skills management)
- Qualifications (academic and professional credentials)
- Notifications (real-time communication)
- Chat system (support and messaging)
- Market analytics (trends and forecasting data)

## API Endpoints

### Authentication
- POST /api/auth/register/applicant - Applicant registration
- POST /api/auth/register/employer - Employer registration
- POST /api/auth/login - User authentication
- POST /api/auth/logout - User logout

### User Management
- GET /api/applicants/:id - Get applicant profile
- PUT /api/applicants/:id - Update applicant profile
- GET /api/employers/:id - Get employer profile
- PUT /api/employers/:id - Update employer profile

### Job Management
- POST /api/jobs - Create job posting
- GET /api/jobs/:employerId - Get employer jobs
- GET /api/jobs/applicant/:id/jobs - Get filtered jobs for applicant
- PUT /api/jobs/:id - Update job posting
- DELETE /api/jobs/:id - Delete job posting

### Application Management
- POST /api/applications - Submit job application
- GET /api/applications/applicant/:id - Get applicant applications
- GET /api/applications/employer/:id - Get employer applications
- PUT /api/applications/:id/status - Update application status

### Skills and Qualifications
- GET /api/skills/:applicantId - Get applicant skills
- POST /api/skills - Add new skill
- PUT /api/skills/:id - Update skill
- DELETE /api/skills/:id - Delete skill
- GET /api/qualifications/:applicantId - Get qualifications
- POST /api/qualifications - Add qualification with file upload

### Analytics and Insights
- GET /api/market/analytics - Market analytics data
- GET /api/skill-gap-analysis/:applicantId - Skills gap analysis
- GET /api/forecasting/trends - Employment trend forecasting
- GET /api/forecasting/skills - Skills demand forecasting

### Notifications
- GET /api/notifications/:userId - Get user notifications
- PUT /api/notifications/:id/read - Mark notification as read
- GET /api/notification-settings/:applicantId - Get notification preferences
- PUT /api/notification-settings/:applicantId - Update notification preferences

### File Management
- POST /api/pdf/generate-cv/:applicantId - Generate CV PDF
- File uploads supported for qualifications and documents

## Development Setup

### Prerequisites
- Node.js 16+ and npm
- MySQL 8.0+
- Python 3.8+ (for ML services)

### Backend Setup
1. Navigate to backend directory:
   ```bash
   cd backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create environment file:
   ```bash
   cp .env.example .env
   ```

4. Configure environment variables:
   ```env
   DATABASE_URL="mysql://username:password@localhost:3306/job_match"
   JWT_SECRET="your_jwt_secret_key"
   PORT=5000
   FRONTEND_URL="http://localhost:3000"
   ```

5. Setup database:
   ```bash
   # Create database
   mysql -u root -p -e "CREATE DATABASE job_match;"

   # Generate Prisma client
   npx prisma generate

   # Run migrations
   npx prisma migrate dev

   # Seed initial data
   npm run seed
   ```

6. Start backend server:
   ```bash
   npm run dev
   ```

### Frontend Setup
1. Navigate to project root and install dependencies:
   ```bash
   npm install
   ```

2. Start development server:
   ```bash
   npm start
   ```

### Python Services Setup
1. Navigate to Python services directory:
   ```bash
   cd backend/python_services
   ```

2. Create virtual environment:
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```

3. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```

4. Start Python service:
   ```bash
   python app.py
   ```

## Deployment Configuration

### Environment Variables
Required environment variables for production:

#### Backend (.env)
```env
DATABASE_URL="mysql://user:password@host:port/database"
JWT_SECRET="secure_random_string"
PORT=5000
NODE_ENV="production"
FRONTEND_URL="https://yourdomain.com"
TWILIO_ACCOUNT_SID="your_twilio_sid"
TWILIO_AUTH_TOKEN="your_twilio_token"
TWILIO_PHONE_NUMBER="your_twilio_phone"
EMAIL_SERVICE_API_KEY="your_email_api_key"
```

#### Python Services (.env)
```env
DATABASE_URL="mysql://user:password@host:port/database"
FLASK_ENV="production"
PORT=5001
```

### Production Deployment
1. Build frontend for production:
   ```bash
   npm run build
   ```

2. Configure reverse proxy (nginx/Apache) to serve static files and proxy API requests

3. Setup SSL certificates for HTTPS

4. Configure database with proper indexing and optimization

5. Setup monitoring and logging systems

## Testing

### Running Tests
```bash
# Backend tests
cd backend && npm test

# Frontend tests
npm test

# Python service tests
cd backend/python_services && python -m pytest
```

### Test Coverage
The system includes comprehensive testing for:
- API endpoints and business logic
- Database operations and migrations
- Authentication and authorization
- Frontend components and user interactions
- ML algorithms and data processing

## Performance Considerations

### Database Optimization
- Proper indexing on frequently queried fields
- Connection pooling for database connections
- Query optimization for complex joins
- Regular database maintenance and cleanup

### Frontend Optimization
- Code splitting and lazy loading
- Image optimization and compression
- Caching strategies for API responses
- Mobile-first responsive design

### Backend Optimization
- API response caching
- Database query optimization
- File upload size limits and validation
- Rate limiting for API endpoints

## Security Features

### Data Protection
- Password hashing with bcrypt
- JWT token expiration and refresh
- Input validation and sanitization
- SQL injection prevention through Prisma ORM
- File upload validation and restrictions

### Privacy Compliance
- User consent management
- Data anonymization for analytics
- Audit logging for sensitive operations
- GDPR-compliant data handling

## Monitoring and Maintenance

### System Monitoring
- Application performance monitoring
- Database performance tracking
- Error logging and alerting
- User activity analytics

### Regular Maintenance
- Database backup and recovery procedures
- Security updates and patches
- Performance optimization reviews
- Data cleanup and archival processes

## Support and Documentation

### User Support
- In-app chat support system
- Comprehensive user guides
- FAQ and troubleshooting resources
- Email support for complex issues

### Developer Documentation
- API documentation with examples
- Database schema documentation
- Deployment guides and best practices
- Contributing guidelines for development team

