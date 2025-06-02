# Job matching system
This project uses javascript and a react framework assisted with react-Redux state management in frontend as well as tailwind css.
Backend is using Express js, Prisma schema ORM

## Project set up 
go to backend 
cd backend then create a .env file

## touch.env
then add these configurations in it 
DATABASE_URL="mysql://root@localhost:3306/job_match"
JWT_SECRET="dev_secret_key"
PORT=5000

## Database set up and migrations
## 1. Create database called job_match
## 2. Install prisma CLI and client
  run : i. npm install prisma --save-dev
        ii. npm install @prisma/client

## 3. Initialize prisma in backend and run migrations
     in your backend terminal run to initialize prisma
    run : i. npx prisma init
          ii. npx peisma generate
          iii. npx prisma migrate dev
following above will migate all database tables from prisma schema to database created automatically
## then run 
npm run seed:categories


## Start up your project
Run npm run dev (backend) and npm start(frontend)
to start up project

