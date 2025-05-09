const prisma = require('../prisma');

exports.applyToJob = async (req, res) => {
  const { applicantId, jobId } = req.body;

  try {
    const application = await prisma.application.create({
      data: {
        applicantId: parseInt(applicantId),
        jobId: parseInt(jobId)
      }
    });
    res.status(201).json(application);
  } catch (error) {
    res.status(500).json({ error: 'Failed to apply for job' });
  }
};

exports.getApplicantApplications = async (req, res) => {
  try {
    const applicantId = parseInt(req.params.applicantId);
    const applications = await prisma.application.findMany({
      where: { applicantId },
      include: { job: true }
    });
    res.json(applications);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch applications' });
  }
};
