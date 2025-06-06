# Job Matching System - Enhanced Employment Facilitation Platform

This project is a comprehensive job matching system that uses JavaScript and React framework with Redux state management for the frontend, styled with Tailwind CSS. The backend utilizes Express.js and Prisma ORM for robust data management.

## 🎯 System Features

### ✅ Current Features
- **Intelligent job matching** based on skills and categories
- **Real-time notifications** for applications and status updates
- **Comprehensive user profiles** with CV generation
- **Role-based access control** (Applicants & Employers)
- **Application tracking** and management
- **Basic analytics** for employers

### 🚀 Planned Enhancements
- **Labour market forecasting** and trend analysis
- **Live chat customer support** system
- **Digital literacy program** integration
- **Skills gap analysis** with training suggestions
- **Advanced ML-powered matching** algorithms
- **Enhanced mobile responsiveness**
- **Data privacy** and ethical AI implementation

## 📊 Machine Learning Features (Roadmap)
- **Intelligent job matching** with skill similarity scoring
- **Skills gap analysis** and personalized training recommendations
- **Career path recommendations** based on market trends
- **Employment trend forecasting** using historical data
- **Automated notifications** with smart timing

## 🔒 Key Concerns Addressed
- **Data privacy** compliance and user consent management
- **Algorithmic bias** detection and mitigation
- **Transparent AI** decision-making processes
- **Ethical design** principles throughout the system

## Project Setup

### Backend Configuration
Navigate to backend directory:
```bash
cd backend
```

Create a `.env` file with the following configurations:
```env
DATABASE_URL="mysql://root@localhost:3306/job_match"
JWT_SECRET="dev_secret_key"
PORT=5000
```

### Database Setup and Migrations

1. **Create database** called `job_match`

2. **Install Prisma CLI and client:**
   ```bash
   npm install prisma --save-dev
   npm install @prisma/client
   ```

3. **Initialize Prisma and run migrations:**
   ```bash
   npx prisma init
   npx prisma generate
   npx prisma migrate dev
   ```
   This will migrate all database tables from Prisma schema to the database automatically.

4. **Seed job categories:**
   ```bash
   npm run seed:categories
   ```

### Start the Project
- **Backend:** `npm run dev`
- **Frontend:** `npm start`

## 🏗️ Architecture Overview
- **Frontend:** React 19.1.0 + Redux Toolkit + Tailwind CSS
- **Backend:** Express.js + Prisma ORM + MySQL
- **Authentication:** JWT with HTTP-only cookies
- **File Management:** Multer for document uploads
- **Real-time Features:** WebSocket-ready architecture

