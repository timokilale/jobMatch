const { PrismaClient } = require('./generated/prisma-client-js');
const bcrypt = require('bcrypt');
const prisma = new PrismaClient();

// Helper function to generate random dates
const randomDate = (start, end) => {
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
};

// Helper function to generate random past date
const randomPastDate = (daysAgo) => {
  const now = new Date();
  const past = new Date(now.getTime() - (daysAgo * 24 * 60 * 60 * 1000));
  return randomDate(past, now);
};

const categories = [
  {
    name: 'Information Technology',
    description: 'Software development, IT support, network administration, etc.'
  },
  {
    name: 'Healthcare',
    description: 'Medical, nursing, pharmacy, and other healthcare positions'
  },
  {
    name: 'Education',
    description: 'Teaching, administration, and support roles in educational institutions'
  },
  {
    name: 'Finance',
    description: 'Banking, accounting, financial analysis, and investment roles'
  },
  {
    name: 'Hospitality',
    description: 'Hotels, restaurants, tourism, and customer service'
  },
  {
    name: 'Manufacturing',
    description: 'Production, quality control, and assembly line positions'
  },
  {
    name: 'Marketing',
    description: 'Digital marketing, branding, social media, and advertising'
  },
  {
    name: 'Sales',
    description: 'B2B sales, retail, account management, and business development'
  },
  {
    name: 'Engineering',
    description: 'Civil, mechanical, electrical, and other engineering disciplines'
  },
  {
    name: 'Transportation',
    description: 'Driving, logistics, shipping, and fleet management'
  },
  {
    name: 'Construction',
    description: 'Building, architecture, and skilled trades'
  },
  {
    name: 'Legal',
    description: 'Attorneys, paralegals, and legal support roles'
  }
];

// Sample users data
const users = [
  // Employers
  { email: 'admin@techcorp.com', password: 'password123', role: 'EMPLOYER' },
  { email: 'hr@healthplus.com', password: 'password123', role: 'EMPLOYER' },
  { email: 'recruiter@edutech.com', password: 'password123', role: 'EMPLOYER' },
  { email: 'hiring@financegroup.com', password: 'password123', role: 'EMPLOYER' },
  { email: 'manager@hotelchain.com', password: 'password123', role: 'EMPLOYER' },
  { email: 'director@manufacturing.com', password: 'password123', role: 'EMPLOYER' },
  { email: 'lead@marketingpro.com', password: 'password123', role: 'EMPLOYER' },
  { email: 'sales@salesforce.com', password: 'password123', role: 'EMPLOYER' },
  { email: 'chief@engineering.com', password: 'password123', role: 'EMPLOYER' },
  { email: 'ops@logistics.com', password: 'password123', role: 'EMPLOYER' },
  { email: 'pm@construction.com', password: 'password123', role: 'EMPLOYER' },
  { email: 'partner@lawfirm.com', password: 'password123', role: 'EMPLOYER' },

  // Applicants
  { email: 'john.doe@email.com', password: 'password123', role: 'APPLICANT' },
  { email: 'jane.smith@email.com', password: 'password123', role: 'APPLICANT' },
  { email: 'mike.johnson@email.com', password: 'password123', role: 'APPLICANT' },
  { email: 'sarah.wilson@email.com', password: 'password123', role: 'APPLICANT' },
  { email: 'david.brown@email.com', password: 'password123', role: 'APPLICANT' },
  { email: 'lisa.davis@email.com', password: 'password123', role: 'APPLICANT' },
  { email: 'robert.miller@email.com', password: 'password123', role: 'APPLICANT' },
  { email: 'emily.garcia@email.com', password: 'password123', role: 'APPLICANT' },
  { email: 'james.martinez@email.com', password: 'password123', role: 'APPLICANT' },
  { email: 'amanda.rodriguez@email.com', password: 'password123', role: 'APPLICANT' },
  { email: 'chris.anderson@email.com', password: 'password123', role: 'APPLICANT' },
  { email: 'nicole.taylor@email.com', password: 'password123', role: 'APPLICANT' }
];

// Sample employers data
const employers = [
  { companyName: 'TechCorp Solutions', address: '123 Tech Street, Silicon Valley, CA' },
  { companyName: 'HealthPlus Medical Center', address: '456 Health Ave, Medical District, NY' },
  { companyName: 'EduTech Learning', address: '789 Education Blvd, University City, TX' },
  { companyName: 'Finance Group International', address: '321 Wall Street, Financial District, NY' },
  { companyName: 'Grand Hotel Chain', address: '654 Hospitality Lane, Tourism District, FL' },
  { companyName: 'Advanced Manufacturing Inc', address: '987 Industrial Park, Manufacturing Zone, MI' },
  { companyName: 'MarketingPro Agency', address: '147 Creative Street, Arts District, CA' },
  { companyName: 'SalesForce Dynamics', address: '258 Commerce Ave, Business Park, IL' },
  { companyName: 'Engineering Excellence', address: '369 Innovation Drive, Tech Hub, WA' },
  { companyName: 'Global Logistics Solutions', address: '741 Transport Way, Logistics Center, GA' },
  { companyName: 'Premier Construction Group', address: '852 Builder Street, Construction Zone, CO' },
  { companyName: 'Elite Law Firm', address: '963 Justice Avenue, Legal District, DC' }
];

// Sample applicants data
const applicants = [
  { fullName: 'John Doe', nida: '19900101001' },
  { fullName: 'Jane Smith', nida: '19920215002' },
  { fullName: 'Mike Johnson', nida: '19880330003' },
  { fullName: 'Sarah Wilson', nida: '19950712004' },
  { fullName: 'David Brown', nida: '19870925005' },
  { fullName: 'Lisa Davis', nida: '19930418006' },
  { fullName: 'Robert Miller', nida: '19910806007' },
  { fullName: 'Emily Garcia', nida: '19940123008' },
  { fullName: 'James Martinez', nida: '19890517009' },
  { fullName: 'Amanda Rodriguez', nida: '19960829010' },
  { fullName: 'Chris Anderson', nida: '19860304011' },
  { fullName: 'Nicole Taylor', nida: '19970611012' }
];

// Seeding functions
const seedCategories = async () => {
  console.log('Seeding job categories...');
  const createdCategories = [];

  for (const category of categories) {
    const existing = await prisma.jobCategory.findFirst({
      where: { name: category.name }
    });

    if (!existing) {
      const created = await prisma.jobCategory.create({
        data: category
      });
      createdCategories.push(created);
      console.log(`Created category: ${category.name}`);
    } else {
      createdCategories.push(existing);
      console.log(`Category already exists: ${category.name}`);
    }
  }

  return createdCategories;
};

const seedUsers = async () => {
  console.log('Seeding users...');
  const createdUsers = [];

  for (const userData of users) {
    const existing = await prisma.user.findFirst({
      where: { email: userData.email }
    });

    if (!existing) {
      const hashedPassword = await bcrypt.hash(userData.password, 10);
      const user = await prisma.user.create({
        data: {
          email: userData.email,
          password: hashedPassword,
          role: userData.role
        }
      });
      createdUsers.push(user);
      console.log(`Created user: ${userData.email}`);
    } else {
      createdUsers.push(existing);
      console.log(`User already exists: ${userData.email}`);
    }
  }

  return createdUsers;
};

const seedEmployers = async (usersList) => {
  console.log('Seeding employers...');
  const employerUsers = usersList.filter(user => user.role === 'EMPLOYER');
  const createdEmployers = [];

  for (let i = 0; i < employers.length && i < employerUsers.length; i++) {
    const existing = await prisma.employer.findFirst({
      where: { userId: employerUsers[i].id }
    });

    if (!existing) {
      const employer = await prisma.employer.create({
        data: {
          companyName: employers[i].companyName,
          address: employers[i].address,
          userId: employerUsers[i].id
        }
      });
      createdEmployers.push(employer);
      console.log(`Created employer: ${employers[i].companyName}`);
    } else {
      createdEmployers.push(existing);
      console.log(`Employer already exists: ${employers[i].companyName}`);
    }
  }

  return createdEmployers;
};

const seedApplicants = async (usersList, categoriesList) => {
  console.log('Seeding applicants...');
  const applicantUsers = usersList.filter(user => user.role === 'APPLICANT');
  const createdApplicants = [];

  for (let i = 0; i < applicants.length && i < applicantUsers.length; i++) {
    const existing = await prisma.applicant.findFirst({
      where: { userId: applicantUsers[i].id }
    });

    if (!existing) {
      // Randomly assign 2-3 categories to each applicant
      const randomCategories = categoriesList
        .sort(() => 0.5 - Math.random())
        .slice(0, Math.floor(Math.random() * 3) + 2);

      const applicant = await prisma.applicant.create({
        data: {
          fullName: applicants[i].fullName,
          nida: applicants[i].nida,
          userId: applicantUsers[i].id,
          categories: {
            connect: randomCategories.map(cat => ({ id: cat.id }))
          }
        }
      });
      createdApplicants.push(applicant);
      console.log(`Created applicant: ${applicants[i].fullName}`);
    } else {
      createdApplicants.push(existing);
      console.log(`Applicant already exists: ${applicants[i].fullName}`);
    }
  }

  return createdApplicants;
};

const seedJobs = async (employersList, categoriesList) => {
  console.log('Seeding jobs...');
  const jobTitles = [
    'Senior Software Developer', 'Registered Nurse', 'Elementary School Teacher', 'Financial Analyst',
    'Hotel Manager', 'Production Supervisor', 'Digital Marketing Specialist', 'Sales Representative',
    'Civil Engineer', 'Logistics Coordinator', 'Construction Project Manager', 'Legal Assistant',
    'Frontend Developer', 'Medical Technician', 'High School Math Teacher', 'Investment Advisor',
    'Restaurant Manager', 'Quality Control Inspector', 'Social Media Manager', 'Account Executive',
    'Mechanical Engineer', 'Warehouse Supervisor', 'Site Foreman', 'Paralegal',
    'DevOps Engineer', 'Physical Therapist', 'Special Education Teacher', 'Credit Analyst'
  ];

  const jobDescriptions = [
    'We are looking for an experienced professional to join our dynamic team.',
    'Excellent opportunity for career growth in a supportive environment.',
    'Join our innovative company and make a real impact in your field.',
    'Seeking a dedicated individual with strong problem-solving skills.',
    'Great benefits package and competitive salary offered.',
    'Work with cutting-edge technology and industry leaders.',
    'Collaborative work environment with opportunities for advancement.',
    'Make a difference while building your career with us.'
  ];

  const locations = [
    'New York, NY', 'Los Angeles, CA', 'Chicago, IL', 'Houston, TX',
    'Phoenix, AZ', 'Philadelphia, PA', 'San Antonio, TX', 'San Diego, CA',
    'Dallas, TX', 'San Jose, CA', 'Austin, TX', 'Jacksonville, FL'
  ];

  const statuses = ['ACTIVE', 'DRAFT', 'CLOSED'];
  const createdJobs = [];

  for (let i = 0; i < 30; i++) { // Create 30 jobs
    const randomEmployer = employersList[Math.floor(Math.random() * employersList.length)];
    const randomCategory = categoriesList[Math.floor(Math.random() * categoriesList.length)];
    const randomTitle = jobTitles[Math.floor(Math.random() * jobTitles.length)];
    const randomDescription = jobDescriptions[Math.floor(Math.random() * jobDescriptions.length)];
    const randomLocation = locations[Math.floor(Math.random() * locations.length)];
    const randomStatus = statuses[Math.floor(Math.random() * statuses.length)];

    const job = await prisma.job.create({
      data: {
        title: randomTitle,
        description: randomDescription,
        location: randomLocation,
        status: randomStatus,
        applicationCount: Math.floor(Math.random() * 20),
        employerId: randomEmployer.id,
        categories: {
          connect: [{ id: randomCategory.id }]
        },
        createdAt: randomPastDate(60), // Jobs created within last 60 days
        updatedAt: randomPastDate(30)
      }
    });
    createdJobs.push(job);
  }

  console.log(`Created ${createdJobs.length} jobs`);
  return createdJobs;
};

const seedApplications = async (applicantsList, jobsList) => {
  console.log('Seeding applications...');
  const statuses = ['APPLIED', 'UNDER_REVIEW', 'INTERVIEWED', 'REJECTED', 'ACCEPTED'];
  const createdApplications = [];

  // Create 50 applications
  for (let i = 0; i < 50; i++) {
    const randomApplicant = applicantsList[Math.floor(Math.random() * applicantsList.length)];
    const randomJob = jobsList[Math.floor(Math.random() * jobsList.length)];
    const randomStatus = statuses[Math.floor(Math.random() * statuses.length)];

    // Check if application already exists
    const existing = await prisma.application.findFirst({
      where: {
        applicantId: randomApplicant.id,
        jobId: randomJob.id
      }
    });

    if (!existing) {
      const application = await prisma.application.create({
        data: {
          status: randomStatus,
          jobId: randomJob.id,
          applicantId: randomApplicant.id,
          createdAt: randomPastDate(30) // Applications within last 30 days
        }
      });
      createdApplications.push(application);
    }
  }

  console.log(`Created ${createdApplications.length} applications`);
  return createdApplications;
};

const seedQualifications = async (applicantsList) => {
  console.log('Seeding academic qualifications...');
  const levels = ['High School', 'Bachelor', 'Master', 'PhD', 'Certificate', 'Diploma'];
  const institutions = [
    'University of California', 'Harvard University', 'MIT', 'Stanford University',
    'Yale University', 'Princeton University', 'Columbia University', 'University of Chicago',
    'New York University', 'University of Pennsylvania', 'Duke University', 'Northwestern University'
  ];
  const fields = [
    'Computer Science', 'Business Administration', 'Engineering', 'Medicine',
    'Education', 'Psychology', 'Economics', 'Biology', 'Chemistry', 'Physics',
    'Mathematics', 'English Literature', 'History', 'Political Science'
  ];

  // Get countries from database
  const countries = await prisma.country.findMany();
  const createdQualifications = [];

  // Create 2-3 qualifications per applicant
  for (const applicant of applicantsList) {
    const numQualifications = Math.floor(Math.random() * 2) + 2; // 2-3 qualifications

    for (let i = 0; i < numQualifications; i++) {
      const startDate = randomDate(new Date('2010-01-01'), new Date('2020-01-01'));
      const endDate = new Date(startDate.getTime() + (2 + Math.random() * 4) * 365 * 24 * 60 * 60 * 1000);
      const randomCountry = countries[Math.floor(Math.random() * countries.length)];

      const qualification = await prisma.academicQualification.create({
        data: {
          level: levels[Math.floor(Math.random() * levels.length)],
          countryId: randomCountry.id, // Use countryId instead of country string
          institution: institutions[Math.floor(Math.random() * institutions.length)],
          fieldOfStudy: fields[Math.floor(Math.random() * fields.length)],
          startDate: startDate,
          endDate: endDate,
          applicantId: applicant.id
        }
      });
      createdQualifications.push(qualification);
    }
  }

  console.log(`Created ${createdQualifications.length} academic qualifications`);
  return createdQualifications;
};

const seedWorkExperience = async (applicantsList) => {
  console.log('Seeding work experience...');
  const companies = [
    'Google Inc', 'Microsoft Corporation', 'Apple Inc', 'Amazon.com Inc', 'Meta Platforms',
    'Tesla Inc', 'Netflix Inc', 'Adobe Inc', 'Salesforce Inc', 'Oracle Corporation',
    'IBM Corporation', 'Intel Corporation', 'Cisco Systems', 'Uber Technologies', 'Airbnb Inc'
  ];
  const jobTitles = [
    'Software Engineer', 'Project Manager', 'Business Analyst', 'Marketing Coordinator',
    'Sales Associate', 'Customer Service Representative', 'Data Analyst', 'HR Specialist',
    'Operations Manager', 'Financial Analyst', 'Product Manager', 'UX Designer'
  ];
  const duties = [
    'Developed and maintained software applications using modern technologies',
    'Managed cross-functional teams and coordinated project deliverables',
    'Analyzed business requirements and provided strategic recommendations',
    'Created and executed marketing campaigns across multiple channels',
    'Built relationships with clients and achieved sales targets',
    'Provided excellent customer support and resolved technical issues'
  ];

  const createdExperiences = [];

  // Create 1-3 work experiences per applicant
  for (const applicant of applicantsList) {
    const numExperiences = Math.floor(Math.random() * 3) + 1; // 1-3 experiences

    for (let i = 0; i < numExperiences; i++) {
      const startDate = randomDate(new Date('2015-01-01'), new Date('2022-01-01'));
      const endDate = Math.random() > 0.3 ?
        new Date(startDate.getTime() + (6 + Math.random() * 36) * 30 * 24 * 60 * 60 * 1000) :
        null; // 30% chance of current job (no end date)

      const experience = await prisma.workExperience.create({
        data: {
          companyName: companies[Math.floor(Math.random() * companies.length)],
          location: `${Math.floor(Math.random() * 9999) + 1} Business St, City, State`,
          jobTitle: jobTitles[Math.floor(Math.random() * jobTitles.length)],
          startDate: startDate,
          endDate: endDate,
          responsibilities: duties[Math.floor(Math.random() * duties.length)],
          supervisorName: `Supervisor ${Math.floor(Math.random() * 100)}`,
          supervisorContact: `+1-555-${Math.floor(Math.random() * 900) + 100}-${Math.floor(Math.random() * 9000) + 1000}`,
          applicantId: applicant.id
        }
      });
      createdExperiences.push(experience);
    }
  }

  console.log(`Created ${createdExperiences.length} work experiences`);
  return createdExperiences;
};

const seedLanguages = async (applicantsList) => {
  console.log('Seeding language proficiencies...');
  const languages = ['English', 'Spanish', 'French', 'German', 'Chinese', 'Japanese', 'Arabic', 'Portuguese', 'Russian', 'Italian'];
  const proficiencyLevels = ['Beginner', 'Intermediate', 'Advanced', 'Native'];

  const createdLanguages = [];

  // Create 2-4 languages per applicant
  for (const applicant of applicantsList) {
    const numLanguages = Math.floor(Math.random() * 3) + 2; // 2-4 languages
    const selectedLanguages = languages.sort(() => 0.5 - Math.random()).slice(0, numLanguages);

    for (const language of selectedLanguages) {
      const languageProf = await prisma.languageProficiency.create({
        data: {
          language: language,
          speakLevel: proficiencyLevels[Math.floor(Math.random() * proficiencyLevels.length)],
          readLevel: proficiencyLevels[Math.floor(Math.random() * proficiencyLevels.length)],
          writeLevel: proficiencyLevels[Math.floor(Math.random() * proficiencyLevels.length)],
          applicantId: applicant.id
        }
      });
      createdLanguages.push(languageProf);
    }
  }

  console.log(`Created ${createdLanguages.length} language proficiencies`);
  return createdLanguages;
};

const seedComputerSkills = async (applicantsList) => {
  console.log('Seeding computer skills...');
  const skills = [
    'Microsoft Office', 'Adobe Photoshop', 'JavaScript', 'Python', 'Java', 'C++', 'SQL',
    'React', 'Node.js', 'Angular', 'Vue.js', 'PHP', 'Ruby', 'Swift', 'Kotlin',
    'Docker', 'Kubernetes', 'AWS', 'Azure', 'Google Cloud', 'Git', 'Jenkins'
  ];
  const proficiencyLevels = ['Beginner', 'Intermediate', 'Advanced', 'Expert'];

  const createdSkills = [];

  // Create 3-6 skills per applicant
  for (const applicant of applicantsList) {
    const numSkills = Math.floor(Math.random() * 4) + 3; // 3-6 skills
    const selectedSkills = skills.sort(() => 0.5 - Math.random()).slice(0, numSkills);

    for (const skill of selectedSkills) {
      const computerSkill = await prisma.computerSkill.create({
        data: {
          skill: skill,
          proficiency: proficiencyLevels[Math.floor(Math.random() * proficiencyLevels.length)],
          applicantId: applicant.id
        }
      });
      createdSkills.push(computerSkill);
    }
  }

  console.log(`Created ${createdSkills.length} computer skills`);
  return createdSkills;
};

// NEW: Seed normalized skills master data
const seedSkillsMaster = async () => {
  console.log('🌱 Seeding Skills Master (3NF normalized)...');

  const skills = [
    // Technical Skills
    { name: 'JavaScript', category: 'Technical', description: 'Programming language for web development' },
    { name: 'Python', category: 'Technical', description: 'Programming language for data science and web development' },
    { name: 'Java', category: 'Technical', description: 'Object-oriented programming language' },
    { name: 'React', category: 'Technical', description: 'JavaScript library for building user interfaces' },
    { name: 'Node.js', category: 'Technical', description: 'JavaScript runtime for server-side development' },
    { name: 'SQL', category: 'Technical', description: 'Database query language' },
    { name: 'HTML', category: 'Technical', description: 'Markup language for web pages' },
    { name: 'CSS', category: 'Technical', description: 'Styling language for web pages' },
    { name: 'Git', category: 'Technical', description: 'Version control system' },
    { name: 'Docker', category: 'Technical', description: 'Containerization platform' },
    { name: 'AWS', category: 'Technical', description: 'Amazon Web Services cloud platform' },
    { name: 'Linux', category: 'Technical', description: 'Operating system' },
    { name: 'MongoDB', category: 'Technical', description: 'NoSQL database' },
    { name: 'PostgreSQL', category: 'Technical', description: 'Relational database' },
    { name: 'TypeScript', category: 'Technical', description: 'Typed superset of JavaScript' },

    // Soft Skills
    { name: 'Communication', category: 'Soft', description: 'Ability to convey information effectively' },
    { name: 'Leadership', category: 'Soft', description: 'Ability to guide and motivate teams' },
    { name: 'Project Management', category: 'Soft', description: 'Planning and executing projects' },
    { name: 'Problem Solving', category: 'Soft', description: 'Analytical thinking and solution finding' },
    { name: 'Teamwork', category: 'Soft', description: 'Collaborative working skills' },
    { name: 'Time Management', category: 'Soft', description: 'Efficient use of time and prioritization' },
    { name: 'Critical Thinking', category: 'Soft', description: 'Objective analysis and evaluation' },
    { name: 'Adaptability', category: 'Soft', description: 'Flexibility in changing environments' },
    { name: 'Creativity', category: 'Soft', description: 'Innovative thinking and idea generation' },
    { name: 'Negotiation', category: 'Soft', description: 'Reaching mutually beneficial agreements' },

    // Business Skills
    { name: 'Microsoft Office', category: 'Business', description: 'Office productivity suite' },
    { name: 'Excel', category: 'Business', description: 'Spreadsheet application' },
    { name: 'PowerPoint', category: 'Business', description: 'Presentation software' },
    { name: 'Customer Service', category: 'Business', description: 'Supporting and assisting customers' },
    { name: 'Sales', category: 'Business', description: 'Selling products or services' },
    { name: 'Marketing', category: 'Business', description: 'Promoting products or services' },
    { name: 'Accounting', category: 'Business', description: 'Financial record keeping and analysis' },
    { name: 'Finance', category: 'Business', description: 'Managing money and investments' },
    { name: 'Data Analysis', category: 'Business', description: 'Interpreting and analyzing data' },
    { name: 'Digital Marketing', category: 'Business', description: 'Online marketing strategies' },

    // Industry-Specific Skills
    { name: 'Teaching', category: 'Education', description: 'Instructing and educating students' },
    { name: 'Curriculum Development', category: 'Education', description: 'Creating educational programs' },
    { name: 'Research', category: 'Education', description: 'Systematic investigation and study' },
    { name: 'Construction Management', category: 'Construction', description: 'Overseeing construction projects' },
    { name: 'Engineering', category: 'Engineering', description: 'Applying scientific principles to design and build' },
    { name: 'Manufacturing', category: 'Manufacturing', description: 'Production and assembly processes' },
    { name: 'Quality Control', category: 'Manufacturing', description: 'Ensuring product quality standards' },
    { name: 'Healthcare', category: 'Healthcare', description: 'Medical care and treatment' },
    { name: 'Nursing', category: 'Healthcare', description: 'Patient care and medical assistance' },
    { name: 'Agriculture', category: 'Agriculture', description: 'Farming and crop production' },
  ];

  const createdSkills = [];
  for (const skill of skills) {
    const existing = await prisma.skillMaster.findFirst({
      where: { name: skill.name }
    });

    if (!existing) {
      const created = await prisma.skillMaster.create({
        data: skill
      });
      createdSkills.push(created);
      console.log(`Created skill: ${skill.name}`);
    } else {
      createdSkills.push(existing);
    }
  }

  console.log(`✅ Created ${createdSkills.length} skills in master table`);
  return createdSkills;
};

// NEW: Seed countries for normalized qualifications
const seedCountries = async () => {
  console.log('🌱 Seeding Countries (3NF normalized)...');

  const countries = [
    { name: 'Tanzania', code: 'TZ' },
    { name: 'Kenya', code: 'KE' },
    { name: 'Uganda', code: 'UG' },
    { name: 'Rwanda', code: 'RW' },
    { name: 'United States', code: 'US' },
    { name: 'United Kingdom', code: 'GB' },
    { name: 'Canada', code: 'CA' },
    { name: 'Australia', code: 'AU' },
    { name: 'Germany', code: 'DE' },
    { name: 'France', code: 'FR' },
  ];

  const createdCountries = [];
  for (const country of countries) {
    const existing = await prisma.country.findFirst({
      where: { code: country.code }
    });

    if (!existing) {
      const created = await prisma.country.create({
        data: country
      });
      createdCountries.push(created);
      console.log(`Created country: ${country.name}`);
    } else {
      createdCountries.push(existing);
    }
  }

  console.log(`✅ Created ${createdCountries.length} countries`);
  return createdCountries;
};

// NEW: Seed job requirements using normalized structure
const seedJobRequirements = async (jobsList) => {
  console.log('🎯 Seeding Job Requirements (3NF normalized)...');

  // Get all skills from master table
  const skillsMaster = await prisma.skillMaster.findMany();
  const createdRequirements = [];

  for (const job of jobsList) {
    // Each job gets 3-8 skill requirements
    const numRequirements = Math.floor(Math.random() * 6) + 3;
    const selectedSkills = skillsMaster.sort(() => 0.5 - Math.random()).slice(0, numRequirements);

    for (const skill of selectedSkills) {
      const importance = ['REQUIRED', 'PREFERRED', 'NICE_TO_HAVE'][Math.floor(Math.random() * 3)];
      const proficiency = ['BEGINNER', 'INTERMEDIATE', 'ADVANCED', 'EXPERT'][Math.floor(Math.random() * 4)];
      const yearsRequired = importance === 'REQUIRED' ? Math.floor(Math.random() * 5) + 1 : null;

      try {
        const requirement = await prisma.jobRequirement.create({
          data: {
            jobId: job.id,
            skillMasterId: skill.id,
            importance: importance,
            proficiencyLevel: proficiency,
            yearsRequired: yearsRequired,
            description: `${importance.toLowerCase()} skill for ${job.title}`
          }
        });
        createdRequirements.push(requirement);
      } catch (error) {
        // Skip if duplicate (unique constraint)
        if (!error.message.includes('Unique constraint')) {
          console.error(`Error creating requirement for job ${job.id}, skill ${skill.id}:`, error.message);
        }
      }
    }
  }

  console.log(`✅ Created ${createdRequirements.length} job requirements`);
  return createdRequirements;
};

// NEW: Seed applicant skills using normalized structure
const seedApplicantSkills = async (applicantsList) => {
  console.log('🎯 Seeding Applicant Skills (3NF normalized)...');

  // Get all skills from master table
  const skillsMaster = await prisma.skillMaster.findMany();
  const createdSkills = [];

  for (const applicant of applicantsList) {
    // Each applicant gets 5-15 skills
    const numSkills = Math.floor(Math.random() * 11) + 5;
    const selectedSkills = skillsMaster.sort(() => 0.5 - Math.random()).slice(0, numSkills);

    for (const skill of selectedSkills) {
      const proficiency = ['BEGINNER', 'INTERMEDIATE', 'ADVANCED', 'EXPERT'][Math.floor(Math.random() * 4)];
      const yearsExperience = Math.floor(Math.random() * 10) + 1;
      const isCertified = Math.random() > 0.7; // 30% chance of certification

      try {
        const applicantSkill = await prisma.applicantSkill.create({
          data: {
            applicantId: applicant.id,
            skillMasterId: skill.id,
            proficiency: proficiency,
            yearsExperience: yearsExperience,
            isCertified: isCertified,
            certificationName: isCertified ? `${skill.name} Certification` : null,
            lastUsed: new Date(Date.now() - Math.random() * 365 * 24 * 60 * 60 * 1000) // Random date within last year
          }
        });
        createdSkills.push(applicantSkill);
      } catch (error) {
        // Skip if duplicate (unique constraint)
        if (!error.message.includes('Unique constraint')) {
          console.error(`Error creating skill for applicant ${applicant.id}, skill ${skill.id}:`, error.message);
        }
      }
    }
  }

  console.log(`✅ Created ${createdSkills.length} applicant skills`);
  return createdSkills;
};

// NEW: Seed skill demand data using normalized structure
const seedSkillDemandData = async () => {
  console.log('📊 Seeding Skill Demand Data (3NF normalized)...');

  const skillsMaster = await prisma.skillMaster.findMany();
  const createdDemandData = [];
  const currentDate = new Date();

  for (const skill of skillsMaster) {
    // Create demand data for each skill
    const demandScore = Math.random() * 100; // 0-100
    const growth = (Math.random() - 0.5) * 20; // -10% to +10%

    try {
      const demandData = await prisma.skillDemand.create({
        data: {
          skillMasterId: skill.id,
          demandScore: demandScore,
          growth: growth,
          industry: skill.category,
          region: 'Tanzania',
          period: currentDate,
          source: 'Market Analysis 2024'
        }
      });
      createdDemandData.push(demandData);
    } catch (error) {
      console.error(`Error creating demand data for skill ${skill.id}:`, error.message);
    }
  }

  console.log(`✅ Created ${createdDemandData.length} skill demand records`);
  return createdDemandData;
};

const seedNotifications = async (applicantsList, employersList, applicationsList) => {
  console.log('Seeding notifications...');
  const notificationTypes = ['NEW_APPLICATION', 'STATUS_CHANGE', 'INTERVIEW_SCHEDULED', 'MESSAGE', 'GENERAL'];
  const createdNotifications = [];

  // Create notifications for employers (about new applications)
  for (let i = 0; i < 20; i++) {
    const randomEmployer = employersList[Math.floor(Math.random() * employersList.length)];
    const randomApplication = applicationsList[Math.floor(Math.random() * applicationsList.length)];

    const notification = await prisma.notification.create({
      data: {
        type: 'NEW_APPLICATION',
        title: 'New Job Application',
        message: `You have received a new application for one of your job postings.`,
        isRead: Math.random() > 0.5, // 50% chance of being read
        employerId: randomEmployer.id,
        applicationId: randomApplication.id,
        createdAt: randomPastDate(15) // Within last 15 days
      }
    });
    createdNotifications.push(notification);
  }

  // Create notifications for applicants (about status changes)
  for (let i = 0; i < 25; i++) {
    const randomApplicant = applicantsList[Math.floor(Math.random() * applicantsList.length)];
    const randomApplication = applicationsList[Math.floor(Math.random() * applicationsList.length)];
    const randomType = notificationTypes[Math.floor(Math.random() * notificationTypes.length)];

    const titles = {
      'STATUS_CHANGE': 'Application Status Update',
      'INTERVIEW_SCHEDULED': 'Interview Scheduled',
      'MESSAGE': 'New Message',
      'GENERAL': 'General Notification'
    };

    const messages = {
      'STATUS_CHANGE': 'Your application status has been updated.',
      'INTERVIEW_SCHEDULED': 'An interview has been scheduled for your application.',
      'MESSAGE': 'You have received a new message from an employer.',
      'GENERAL': 'This is a general notification for your account.'
    };

    const notification = await prisma.notification.create({
      data: {
        type: randomType,
        title: titles[randomType] || 'Notification',
        message: messages[randomType] || 'You have a new notification.',
        isRead: Math.random() > 0.4, // 60% chance of being read
        applicantId: randomApplicant.id,
        applicationId: randomType !== 'GENERAL' ? randomApplication.id : null,
        createdAt: randomPastDate(20) // Within last 20 days
      }
    });
    createdNotifications.push(notification);
  }

  console.log(`Created ${createdNotifications.length} notifications`);
  return createdNotifications;
};

const seedMarketData = async () => {
  console.log('Seeding market analytics data...');
  const industries = ['Technology', 'Healthcare', 'Finance', 'Education', 'Manufacturing', 'Retail', 'Construction'];
  const metrics = ['employment_rate', 'job_postings', 'salary_avg'];
  const periods = ['monthly', 'quarterly', 'yearly'];
  const sources = ['Bureau of Labor Statistics', 'Indeed', 'LinkedIn', 'Glassdoor'];

  const createdTrends = [];

  // Create market trends
  for (let i = 0; i < 50; i++) {
    const trend = await prisma.marketTrend.create({
      data: {
        industry: industries[Math.floor(Math.random() * industries.length)],
        metric: metrics[Math.floor(Math.random() * metrics.length)],
        value: Math.random() * 100 + 50, // Random value between 50-150
        period: periods[Math.floor(Math.random() * periods.length)],
        date: randomPastDate(365), // Within last year
        source: sources[Math.floor(Math.random() * sources.length)]
      }
    });
    createdTrends.push(trend);
  }

  // Note: Skill demand data is now handled by seedSkillDemandData() function using normalized structure
  console.log(`Created ${createdTrends.length} market trends`);
  return { trends: createdTrends };
};

const seedInterviews = async (applicationsList) => {
  console.log('Seeding interviews...');
  const types = ['in-person', 'video-call', 'phone', 'online'];
  const statuses = ['SCHEDULED', 'COMPLETED', 'CANCELLED', 'RESCHEDULED'];
  const locations = ['Conference Room A', 'Zoom Meeting', 'Phone Call', 'Office Building'];

  const createdInterviews = [];

  // Create interviews for 30% of applications
  const interviewApplications = applicationsList.slice(0, Math.floor(applicationsList.length * 0.3));

  for (const application of interviewApplications) {
    const interview = await prisma.interview.create({
      data: {
        applicationId: application.id,
        scheduledAt: randomDate(new Date(), new Date(Date.now() + 30 * 24 * 60 * 60 * 1000)), // Next 30 days
        duration: [30, 45, 60, 90][Math.floor(Math.random() * 4)], // 30, 45, 60, or 90 minutes
        location: locations[Math.floor(Math.random() * locations.length)],
        type: types[Math.floor(Math.random() * types.length)],
        notes: 'Initial screening interview',
        interviewers: 'HR Manager, Team Lead',
        status: statuses[Math.floor(Math.random() * statuses.length)]
      }
    });
    createdInterviews.push(interview);
  }

  console.log(`Created ${createdInterviews.length} interviews`);
  return createdInterviews;
};

// Main seeding function
const seedAll = async () => {
  console.log('🌱 Starting comprehensive database seeding...');

  try {
    // Clear existing data (optional - comment out if you want to keep existing data)
    console.log('🧹 Cleaning existing data...');

    // Delete in reverse dependency order to respect foreign keys
    await prisma.notification.deleteMany();
    await prisma.interview.deleteMany();
    await prisma.emailLog.deleteMany();
    await prisma.application.deleteMany();
    await prisma.jobRequirement.deleteMany();
    await prisma.job.deleteMany();
    await prisma.applicantSkill.deleteMany();
    await prisma.computerSkill.deleteMany();
    await prisma.languageProficiency.deleteMany();
    await prisma.workExperience.deleteMany();
    await prisma.academicQualification.deleteMany();
    await prisma.applicant.deleteMany();
    await prisma.employer.deleteMany();
    // Delete user-related tables before users
    await prisma.chatMessage.deleteMany();
    await prisma.chatRoom.deleteMany();
    await prisma.userConsent.deleteMany();
    await prisma.auditLog.deleteMany();
    await prisma.user.deleteMany();
    await prisma.skillDemand.deleteMany();
    await prisma.marketTrend.deleteMany();
    await prisma.skillMaster.deleteMany();
    await prisma.jobCategory.deleteMany();
    await prisma.country.deleteMany();

    // Seed in order of dependencies (3NF normalized)
    console.log('🌍 Seeding countries...');
    const countriesList = await seedCountries();

    console.log('🎯 Seeding skills master...');
    const skillsMasterList = await seedSkillsMaster();

    console.log('📊 Seeding categories...');
    const categoriesList = await seedCategories();

    console.log('👥 Seeding users...');
    const usersList = await seedUsers();

    console.log('🏢 Seeding employers...');
    const employersList = await seedEmployers(usersList);

    console.log('👤 Seeding applicants...');
    const applicantsList = await seedApplicants(usersList, categoriesList);

    console.log('💼 Seeding jobs...');
    const jobsList = await seedJobs(employersList, categoriesList);

    console.log('📝 Seeding applications...');
    const applicationsList = await seedApplications(applicantsList, jobsList);

    console.log('🎓 Seeding qualifications...');
    await seedQualifications(applicantsList);

    console.log('💼 Seeding work experience...');
    await seedWorkExperience(applicantsList);

    console.log('🗣️ Seeding languages...');
    await seedLanguages(applicantsList);

    console.log('💻 Seeding computer skills...');
    await seedComputerSkills(applicantsList);

    // NEW: Seed normalized requirements and skills
    console.log('🎯 Seeding job requirements (normalized)...');
    await seedJobRequirements(jobsList);

    console.log('🎯 Seeding applicant skills (normalized)...');
    await seedApplicantSkills(applicantsList);

    console.log('📊 Seeding skill demand data (normalized)...');
    await seedSkillDemandData();

    console.log('🔔 Seeding notifications...');
    await seedNotifications(applicantsList, employersList, applicationsList);

    console.log('📈 Seeding market data...');
    await seedMarketData();

    console.log('🤝 Seeding interviews...');
    await seedInterviews(applicationsList);

    console.log('✅ Database seeding completed successfully!');
    console.log('📊 Summary:');
    console.log(`   - Categories: ${categoriesList.length}`);
    console.log(`   - Users: ${usersList.length}`);
    console.log(`   - Employers: ${employersList.length}`);
    console.log(`   - Applicants: ${applicantsList.length}`);
    console.log(`   - Jobs: ${jobsList.length}`);
    console.log(`   - Applications: ${applicationsList.length}`);

  } catch (error) {
    console.error('❌ Error during seeding:', error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
};

// Run the seeder if this file is executed directly
if (require.main === module) {
  seedAll()
    .then(() => {
      console.log('🎉 Seeding process completed!');
      process.exit(0);
    })
    .catch((error) => {
      console.error('💥 Seeding failed:', error);
      process.exit(1);
    });
}

module.exports = {
  seedAll,
  seedCategories,
  seedUsers,
  seedEmployers,
  seedApplicants,
  seedJobs,
  seedApplications,
  seedQualifications,
  seedWorkExperience,
  seedLanguages,
  seedComputerSkills,
  seedNotifications,
  seedMarketData,
  seedInterviews
};