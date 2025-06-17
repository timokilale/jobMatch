const prisma = require('../prisma');

// Get comprehensive analytics for an employer
exports.getEmployerAnalytics = async (req, res) => {
  try {
    const employerId = req.user.employer?.id;
    
    if (!employerId) {
      return res.status(403).json({ error: 'Access denied. Employer account required.' });
    }

    // Get basic stats
    const [
      totalJobs,
      activeJobs,
      totalApplications,
      newApplications,
      interviewingApplications,
      acceptedApplications,
      rejectedApplications
    ] = await Promise.all([
      // Total jobs posted by this employer
      prisma.job.count({
        where: { employerId }
      }),
      
      // Active jobs
      prisma.job.count({
        where: { 
          employerId,
          status: 'ACTIVE'
        }
      }),
      
      // Total applications to this employer's jobs
      prisma.application.count({
        where: {
          job: { employerId }
        }
      }),
      
      // New applications (last 30 days)
      prisma.application.count({
        where: {
          job: { employerId },
          status: 'APPLIED',
          createdAt: {
            gte: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000)
          }
        }
      }),
      
      // Applications in interview stage
      prisma.application.count({
        where: {
          job: { employerId },
          status: {
            in: ['INTERVIEW_SCHEDULED', 'INTERVIEWED']
          }
        }
      }),
      
      // Accepted applications
      prisma.application.count({
        where: {
          job: { employerId },
          status: 'ACCEPTED'
        }
      }),
      
      // Rejected applications
      prisma.application.count({
        where: {
          job: { employerId },
          status: 'REJECTED'
        }
      })
    ]);

    // Calculate metrics
    const interviewRate = totalApplications > 0 ? 
      ((interviewingApplications + acceptedApplications) / totalApplications * 100).toFixed(1) : 0;
    
    const acceptanceRate = totalApplications > 0 ? 
      (acceptedApplications / totalApplications * 100).toFixed(1) : 0;

    // Get applications timeline (last 6 months)
    const sixMonthsAgo = new Date();
    sixMonthsAgo.setMonth(sixMonthsAgo.getMonth() - 6);
    
    const applicationsTimeline = await prisma.application.groupBy({
      by: ['createdAt'],
      where: {
        job: { employerId },
        createdAt: {
          gte: sixMonthsAgo
        }
      },
      _count: {
        id: true
      },
      orderBy: {
        createdAt: 'asc'
      }
    });

    // Group by month for chart data
    const monthlyData = {};
    applicationsTimeline.forEach(item => {
      const month = new Date(item.createdAt).toLocaleDateString('en-US', { 
        year: 'numeric', 
        month: 'short' 
      });
      monthlyData[month] = (monthlyData[month] || 0) + item._count.id;
    });

    const chartData = Object.entries(monthlyData).map(([month, applications]) => ({
      name: month,
      applications
    }));

    // If no data, provide at least current month with 0
    if (chartData.length === 0) {
      const currentMonth = new Date().toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short'
      });
      chartData.push({ name: currentMonth, applications: 0 });
    }

    // Get top performing jobs
    const topJobs = await prisma.job.findMany({
      where: { employerId },
      select: {
        id: true,
        title: true,
        applicationCount: true,
        viewCount: true,
        status: true,
        createdAt: true,
        _count: {
          select: {
            applications: true
          }
        }
      },
      orderBy: {
        applicationCount: 'desc'
      },
      take: 5
    });

    // For now, we'll use a placeholder for average response time
    // To calculate this properly, we'd need to compute the difference between
    // appliedAt and reviewedAt, which requires more complex aggregation
    const avgResponseTime = '2.4d'; // Placeholder

    res.json({
      overview: {
        totalJobs,
        activeJobs,
        totalApplications,
        newApplications,
        interviewingApplications,
        interviewRate: parseFloat(interviewRate),
        acceptanceRate: parseFloat(acceptanceRate),
        avgResponseTime
      },
      chartData,
      topJobs: topJobs.map(job => ({
        ...job,
        actualApplications: job._count.applications
      })),
      statusBreakdown: {
        applied: newApplications,
        interviewing: interviewingApplications,
        accepted: acceptedApplications,
        rejected: rejectedApplications
      }
    });

  } catch (error) {
    console.error('Error fetching employer analytics:', error);
    res.status(500).json({ error: 'Failed to fetch analytics data' });
  }
};

// Get detailed job performance analytics
exports.getJobPerformance = async (req, res) => {
  try {
    const employerId = req.user.employer?.id;
    const { jobId } = req.params;
    
    if (!employerId) {
      return res.status(403).json({ error: 'Access denied. Employer account required.' });
    }

    // Verify job belongs to this employer
    const job = await prisma.job.findFirst({
      where: { 
        id: parseInt(jobId),
        employerId 
      },
      include: {
        applications: {
          include: {
            applicant: {
              select: {
                fullName: true,
                qualifications: true,
                experiences: true
              }
            }
          }
        },
        _count: {
          select: {
            applications: true
          }
        }
      }
    });

    if (!job) {
      return res.status(404).json({ error: 'Job not found' });
    }

    // Calculate job-specific metrics
    const applicationsByStatus = job.applications.reduce((acc, app) => {
      acc[app.status] = (acc[app.status] || 0) + 1;
      return acc;
    }, {});

    res.json({
      job: {
        id: job.id,
        title: job.title,
        status: job.status,
        createdAt: job.createdAt,
        viewCount: job.viewCount,
        applicationCount: job._count.applications
      },
      metrics: {
        totalApplications: job._count.applications,
        applicationsByStatus,
        conversionRate: job.viewCount > 0 ? 
          (job._count.applications / job.viewCount * 100).toFixed(1) : 0
      },
      recentApplications: job.applications
        .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
        .slice(0, 10)
        .map(app => ({
          id: app.id,
          applicantName: app.applicant.fullName,
          status: app.status,
          appliedAt: app.createdAt,
          qualificationsCount: app.applicant.qualifications.length,
          experienceYears: app.applicant.experiences.length
        }))
    });

  } catch (error) {
    console.error('Error fetching job performance:', error);
    res.status(500).json({ error: 'Failed to fetch job performance data' });
  }
};
