# JobMatch Platform - Setup Guide

This guide will help you set up the JobMatch platform on a new machine after cloning from GitHub.

## Prerequisites

Before starting, ensure you have the following installed:

- **Node.js** (v16 or higher) - [Download here](https://nodejs.org/)
- **MySQL** (v8.0 or higher) - [Download here](https://dev.mysql.com/downloads/)
- **Git** - [Download here](https://git-scm.com/)
- **Code Editor** (VS Code recommended) - [Download here](https://code.visualstudio.com/)

## 1. Clone the Repository

```bash
git clone <your-github-repo-url>
cd jobMatch
```

## 2. Backend Setup

### Install Dependencies
```bash
cd backend
npm install
```

### Database Setup

1. **Create MySQL Database:**
   ```sql
   CREATE DATABASE jobmatch_db;
   ```

2. **Create Environment File:**
   Create a `.env` file in the `backend` folder:
   ```env
   # Database Configuration
   DATABASE_URL="mysql://username:password@localhost:3306/jobmatch_db"
   
   # JWT Secret (generate a random string)
   JWT_SECRET="your-super-secret-jwt-key-here"
   
   # Environment
   NODE_ENV="development"
   
   # Server Port
   PORT=5000
   ```

   **Replace:**
   - `username` with your MySQL username
   - `password` with your MySQL password
   - `your-super-secret-jwt-key-here` with a random secret key

### Generate Prisma Client
```bash
npx prisma generate
```

### Run Database Migrations
```bash
npx prisma db push
```

### Seed the Database (Optional but Recommended)
```bash
npm run seed
```

This will create sample data including:
- Test users (employers and job seekers)
- Job categories
- Sample job postings
- Sample applications
- Skills data

### Start Backend Server
```bash
npm start
```

The backend should now be running on `http://localhost:5000`

## 3. Frontend Setup

### Install Dependencies
```bash
cd ../  # Go back to root directory
npm install
```

### Start Frontend Development Server
```bash
npm start
```

The frontend should now be running on `http://localhost:3000`

## 4. Test the Setup

### Test Accounts (if you ran the seed)

**Job Seekers:**
- Email: `john.doe@email.com`
- Password: `password123`

**Employers:**
- Email: `admin@techcorp.com`
- Password: `password123`

### Verify Everything Works:

1. **Frontend loads** at `http://localhost:3000`
2. **Backend API responds** at `http://localhost:5000`
3. **Database connection** works (check console for errors)
4. **Login functionality** works with test accounts
5. **Registration** works for new users

## 5. Common Issues & Solutions

### Issue: "Cannot connect to database"
**Solution:** 
- Check MySQL is running
- Verify DATABASE_URL in `.env` file
- Ensure database `jobmatch_db` exists

### Issue: "Prisma client not found"
**Solution:**
```bash
cd backend
npx prisma generate
```

### Issue: "JWT_SECRET not defined"
**Solution:**
- Add JWT_SECRET to your `.env` file
- Restart the backend server

### Issue: "Port already in use"
**Solution:**
- Change PORT in `.env` file
- Or kill the process using the port

### Issue: "Module not found"
**Solution:**
```bash
# For backend
cd backend && npm install

# For frontend  
cd ../ && npm install
```

## 6. Development Workflow

### Making Changes:

1. **Backend changes:** Server auto-restarts with nodemon
2. **Frontend changes:** Browser auto-refreshes with React dev server
3. **Database changes:** Run `npx prisma db push` after schema changes

### Useful Commands:

```bash
# View database in browser
cd backend && npx prisma studio

# Reset database (careful - deletes all data!)
cd backend && npx prisma db push --force-reset

# Re-seed database
cd backend && npm run seed

# Check backend logs
cd backend && npm start

# Build for production
npm run build
```

## 7. Project Structure

```
jobMatch/
├── backend/                 # Node.js/Express backend
│   ├── src/
│   │   ├── controllers/     # API route handlers
│   │   ├── middleware/      # Authentication, etc.
│   │   ├── routes/         # API routes
│   │   └── services/       # Business logic
│   ├── prisma/             # Database schema & migrations
│   └── .env               # Environment variables
├── src/                    # React frontend
│   ├── components/         # React components
│   ├── hooks/             # Custom React hooks
│   ├── redux/             # State management
│   └── api/               # API calls
└── public/                # Static assets
```

## 8. Key Features Available

After setup, you'll have access to:

✅ **User Authentication** (Login/Register for Job Seekers & Employers)
✅ **Job Posting & Management** (Employers can post jobs)
✅ **Job Applications** (Job seekers can apply)
✅ **Skills Management** (Add/edit skills and qualifications)
✅ **Analytics Dashboard** (Real-time employer analytics)
✅ **Market Insights** (Job market analysis)
✅ **CV/Resume Builder** (Profile management)
✅ **Notifications System** (Application updates)

## 9. Production Deployment

For production deployment, you'll need to:

1. Set up a production MySQL database
2. Configure environment variables for production
3. Build the frontend: `npm run build`
4. Deploy backend to a service like Heroku, AWS, or DigitalOcean
5. Deploy frontend to Netlify, Vercel, or similar
6. Update CORS settings for production domains

## 10. Support

If you encounter issues:

1. Check the console for error messages
2. Verify all environment variables are set correctly
3. Ensure all dependencies are installed
4. Check that MySQL is running and accessible
5. Review the database connection string

## Environment Variables Reference

```env
# Required
DATABASE_URL="mysql://user:pass@localhost:3306/jobmatch_db"
JWT_SECRET="your-secret-key"

# Optional
NODE_ENV="development"
PORT=5000
```

That's it! You should now have a fully functional JobMatch platform running locally. 🚀
