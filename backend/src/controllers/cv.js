const prisma = require('../prisma');

exports.getCVData = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    
    // Try to find by applicant ID first
    let applicant = await prisma.applicant.findUnique({
      where: { id: id },
      include: {
        user: true,
        qualifications: true,
        experiences: true,
        languages: true,
        skills: true,
        categories: true,
      },
    });

    // If not found, try to find by user ID
    if (!applicant) {
      applicant = await prisma.applicant.findUnique({
        where: { userId: id },
        include: {
          user: true,
          qualifications: true,
          experiences: true,
          languages: true,
          skills: true,
          categories: true,
        },
      });
    }

    if (!applicant) {
      return res.status(404).json({ error: 'Applicant not found' });
    }

    if (req.user.role === 'EMPLOYER') {
      const applicationCount = await prisma.application.count({
        where: {
          applicantId: applicant.id,
          job: {
            employerId: req.user.employer.id
          }
        }
      });

      if (applicationCount === 0) {
        return res.status(403).json({ error: 'Unauthorized to view this CV' });
      }
    }

    res.json(applicant);
  } catch (error) {
    console.error('CV fetch error:', error);
    res.status(500).json({ error: 'Failed to fetch CV data' });
  }
};