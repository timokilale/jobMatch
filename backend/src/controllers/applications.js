const prisma = require('../prisma');

exports.applyToJob = async (req, res) => {
  const { applicantId, jobId } = req.body;

  if (!applicantId || !jobId) {
    return res.status(400).json({ error: 'Missing applicantId or jobId' });
  }

  if (isNaN(applicantId) || isNaN(jobId)) {
    return res.status(400).json({ error: 'IDs must be numeric' });
  }


  try {
   const [applicant, job] = await Promise.all([
    prisma.applicant.findUnique({ where: { id: parseInt(applicantId) } }),
    prisma.job.findUnique({ where: { id: parseInt(jobId) } })
  ]);

  
  if (!applicant) return res.status(404).json({ error: 'Applicant not found' });
  if (!job) return res.status(404).json({ error: 'Job not found' });

  
  const application = await prisma.application.create({
    data: {
      applicantId: parseInt(applicantId),
      jobId: parseInt(jobId),
    }
  });
  res.status(202).json(application);
} catch (error) {
  console.error('Application Error:', error);

  if (error.code === 'P2002') {
    return res.status(409).json({ 
      error: 'Already applied to this job',
      message: 'This applicant has already applied to this job position'
    });
  }
  res.status(500).json({
    error: 'Application failed',
    details: error.message
  }); 
 }
};
     

exports.getApplicantApplications = async (req, res) => {
  try {
    const applicantId = parseInt(req.params.applicantId);

    if (isNaN(applicantId)) {
      return res.status(400).json({ error: "Invalid applicant ID format" });
    }

    const applications = await prisma.application.findMany({
      where: { 
        applicantId: parseInt(applicantId) 
      },
      include: { 
        job: {
          include: {
            employer: true
          }
        },
        applicant: {
          select: {
            fullName: true,
            user: {
              select: {
                email: true
              }
            }
          }
        }
       },
       orderBy: {
        createdAt: 'desc'
       }
    });
    res.json(applications);
  } catch (error) {
    console.error('Get Applications Error:', error);
    res.status(500).json({ 
      error: 'Failed to fetch applications',
      details: error.message
     });
  }
};

// applications.js (backend)
exports.getEmployerApplications = async (req, res) => {
  try {
    const employerId = parseInt(req.params.employerId);
    
    const applications = await prisma.application.findMany({
      where: {
        job: {
          employerId: employerId
        }
      },
      include: {
        job: {
          select: {
            title: true
          }
        },
        applicant: {
          select: {
            fullName: true,
            user: {
              select: {
                email: true
              }
            }
          }
        }
      },
      orderBy: {
        createdAt: 'desc'
      }
    });

    res.json(applications);
  } catch (error) {
    console.error('Error fetching employer applications:', error);
    res.status(500).json({ error: 'Failed to fetch applications' });
  }
};
