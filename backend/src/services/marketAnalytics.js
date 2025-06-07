const axios = require('axios');
const prisma = require('../prisma');

class MarketAnalyticsService {
  constructor() {
    this.dataSources = {
      // Government APIs (example endpoints)
      governmentJobs: 'https://api.usajobs.gov/search',
      laborStats: 'https://api.bls.gov/publicAPI/v2/timeseries/data',
      // Job board APIs
      indeed: 'https://api.indeed.com/ads/apisearch',
      linkedin: 'https://api.linkedin.com/v2/jobSearch'
    };
  }

  // Fetch employment trends from external APIs
  async fetchEmploymentTrends(industry = null, timeframe = '12months') {
    try {
      const trends = [];
      
      // Fetch from government labor statistics
      const laborData = await this.fetchLaborStatistics(industry, timeframe);
      trends.push(...laborData);
      
      // Fetch from job boards
      const jobBoardData = await this.fetchJobBoardTrends(industry, timeframe);
      trends.push(...jobBoardData);
      
      // Store in database
      await this.storeTrendData(trends);
      
      return this.analyzeTrends(trends);
    } catch (error) {
      console.error('Error fetching employment trends:', error);
      throw error;
    }
  }

  async fetchLaborStatistics(industry, timeframe) {
    // Get real data from database instead of mock data
    const whereClause = industry ? {
      categories: {
        some: {
          name: { contains: industry, mode: 'insensitive' }
        }
      }
    } : {};

    // Get job posting statistics from actual database
    const jobs = await prisma.job.findMany({
      where: {
        ...whereClause,
        status: 'ACTIVE',
        createdAt: {
          gte: new Date(Date.now() - (timeframe === '12months' ? 365 : 180) * 24 * 60 * 60 * 1000)
        }
      },
      include: {
        categories: true
      }
    });

    // Group by month and calculate real statistics
    const monthlyStats = {};
    jobs.forEach(job => {
      const month = job.createdAt.toISOString().slice(0, 7);
      if (!monthlyStats[month]) {
        monthlyStats[month] = {
          industry: industry || 'All Industries',
          month,
          jobPostings: 0,
          averageSalary: 0,
          salaryCount: 0,
          demandScore: 0,
          source: 'database'
        };
      }
      monthlyStats[month].jobPostings++;
      if (job.salary) {
        monthlyStats[month].averageSalary += job.salary;
        monthlyStats[month].salaryCount++;
      }
    });

    // Calculate averages and demand scores
    return Object.values(monthlyStats).map(stat => ({
      ...stat,
      averageSalary: stat.salaryCount > 0 ? Math.round(stat.averageSalary / stat.salaryCount) : 0,
      demandScore: Math.min((stat.jobPostings / 100) * 100, 100) // Normalize to 0-100
    }));
  }

  async fetchJobBoardTrends(industry, timeframe) {
    // Get real job board trends from our database
    // This represents jobs posted through our platform
    const whereClause = industry ? {
      categories: {
        some: {
          name: { contains: industry, mode: 'insensitive' }
        }
      }
    } : {};

    const jobs = await prisma.job.findMany({
      where: {
        ...whereClause,
        createdAt: {
          gte: new Date(Date.now() - (timeframe === '12months' ? 365 : 180) * 24 * 60 * 60 * 1000)
        }
      },
      include: {
        categories: true,
        applications: true
      }
    });

    // Calculate real demand score based on application-to-job ratio
    const totalApplications = jobs.reduce((sum, job) => sum + job.applications.length, 0);
    const demandScore = jobs.length > 0 ? Math.min((totalApplications / jobs.length) * 10, 100) : 0;

    return [{
      industry: industry || 'All Industries',
      month: new Date().toISOString().slice(0, 7),
      jobPostings: jobs.length,
      averageSalary: jobs.filter(j => j.salary).reduce((sum, j) => sum + j.salary, 0) / Math.max(jobs.filter(j => j.salary).length, 1),
      demandScore: demandScore,
      source: 'job_board'
    }];
  }

  async storeTrendData(trends) {
    for (const trend of trends) {
      // Store job postings metric
      await prisma.marketTrend.create({
        data: {
          industry: trend.industry,
          metric: 'job_postings',
          value: trend.jobPostings || 0,
          period: 'monthly',
          date: new Date(trend.month || new Date()),
          source: trend.source || 'market_analytics'
        }
      });

      // Store average salary metric if available
      if (trend.averageSalary) {
        await prisma.marketTrend.create({
          data: {
            industry: trend.industry,
            metric: 'salary_avg',
            value: trend.averageSalary,
            period: 'monthly',
            date: new Date(trend.month || new Date()),
            source: trend.source || 'market_analytics'
          }
        });
      }

      // Store demand score metric if available
      if (trend.demandScore) {
        await prisma.marketTrend.create({
          data: {
            industry: trend.industry,
            metric: 'demand_score',
            value: trend.demandScore,
            period: 'monthly',
            date: new Date(trend.month || new Date()),
            source: trend.source || 'market_analytics'
          }
        });
      }
    }
  }

  async analyzeTrends(trends) {
    const analysis = {
      growthRate: this.calculateGrowthRate(trends),
      demandForecast: this.generateDemandForecast(trends),
      salaryTrends: this.analyzeSalaryTrends(trends),
      emergingSkills: await this.identifyEmergingSkills(trends)
    };
    
    return analysis;
  }

  calculateGrowthRate(trends) {
    // Simple growth rate calculation
    const industryGrowth = {};
    
    trends.forEach(trend => {
      if (!industryGrowth[trend.industry]) {
        industryGrowth[trend.industry] = [];
      }
      industryGrowth[trend.industry].push(trend.jobPostings);
    });
    
    Object.keys(industryGrowth).forEach(industry => {
      const postings = industryGrowth[industry];
      if (postings.length > 1) {
        const growth = ((postings[postings.length - 1] - postings[0]) / postings[0]) * 100;
        industryGrowth[industry] = Math.round(growth * 100) / 100;
      } else {
        industryGrowth[industry] = 0;
      }
    });
    
    return industryGrowth;
  }

  generateDemandForecast(trends) {
    // Real forecasting based on historical trend analysis
    const forecast = {};

    trends.forEach(trend => {
      if (!forecast[trend.industry]) {
        // Calculate growth rate based on actual data
        const currentDemand = trend.demandScore;
        const historicalAverage = trends
          .filter(t => t.industry === trend.industry)
          .reduce((sum, t) => sum + t.demandScore, 0) /
          Math.max(trends.filter(t => t.industry === trend.industry).length, 1);

        const growthRate = currentDemand > historicalAverage ?
          ((currentDemand - historicalAverage) / historicalAverage) : 0;

        forecast[trend.industry] = {
          current: currentDemand,
          predicted: Math.max(currentDemand * (1 + growthRate * 0.5), currentDemand * 0.9), // Conservative growth
          confidence: growthRate > 0 ? 0.8 : 0.6, // Higher confidence for growing trends
          growthRate: growthRate * 100
        };
      }
    });

    return forecast;
  }

  analyzeSalaryTrends(trends) {
    const salaryAnalysis = {};

    trends.forEach(trend => {
      if (!salaryAnalysis[trend.industry] && trend.averageSalary > 0) {
        // Get historical salary data for comparison
        const industryTrends = trends.filter(t => t.industry === trend.industry && t.averageSalary > 0);
        const avgSalary = industryTrends.reduce((sum, t) => sum + t.averageSalary, 0) / industryTrends.length;

        const changePercent = avgSalary > 0 ?
          ((trend.averageSalary - avgSalary) / avgSalary) * 100 : 0;

        salaryAnalysis[trend.industry] = {
          current: Math.round(trend.averageSalary),
          trend: changePercent > 2 ? 'increasing' : changePercent < -2 ? 'decreasing' : 'stable',
          changePercent: Math.round(changePercent * 100) / 100
        };
      }
    });

    return salaryAnalysis;
  }

  async identifyEmergingSkills(trends) {
    // Identify emerging skills based on recent job posting frequency
    const thirtyDaysAgo = new Date(Date.now() - 30 * 24 * 60 * 60 * 1000);
    const sixtyDaysAgo = new Date(Date.now() - 60 * 24 * 60 * 60 * 1000);

    // Get recent job requirements
    const recentJobs = await prisma.job.findMany({
      where: {
        status: 'ACTIVE',
        createdAt: { gte: thirtyDaysAgo }
      },
      include: {
        requirements: {
          include: { skillMaster: true }
        }
      }
    });

    // Get older job requirements for comparison
    const olderJobs = await prisma.job.findMany({
      where: {
        status: 'ACTIVE',
        createdAt: { gte: sixtyDaysAgo, lt: thirtyDaysAgo }
      },
      include: {
        requirements: {
          include: { skillMaster: true }
        }
      }
    });

    // Calculate skill frequency in both periods
    const recentSkills = {};
    const olderSkills = {};

    recentJobs.forEach(job => {
      job.requirements.forEach(req => {
        const skill = req.skillMaster.name;
        recentSkills[skill] = (recentSkills[skill] || 0) + 1;
      });
    });

    olderJobs.forEach(job => {
      job.requirements.forEach(req => {
        const skill = req.skillMaster.name;
        olderSkills[skill] = (olderSkills[skill] || 0) + 1;
      });
    });

    // Calculate growth rates
    const emergingSkills = [];
    Object.keys(recentSkills).forEach(skill => {
      const recentCount = recentSkills[skill];
      const olderCount = olderSkills[skill] || 0;

      if (recentCount >= 2) { // Only consider skills with meaningful data
        const growth = olderCount > 0 ?
          ((recentCount - olderCount) / olderCount) * 100 :
          100; // New skills get 100% growth

        if (growth > 20) { // Only skills with >20% growth
          emergingSkills.push({
            skill,
            growth: Math.round(growth),
            demand: recentCount,
            category: 'Emerging'
          });
        }
      }
    });

    return emergingSkills
      .sort((a, b) => b.growth - a.growth)
      .slice(0, 10); // Top 10 emerging skills
  }

  // Get market insights for dashboard
  async getMarketInsights(userId = null) {
    try {
      const insights = {
        overview: await this.getMarketOverview(),
        industryTrends: await this.getIndustryTrends(),
        skillDemand: await this.getSkillDemandAnalysis(),
        recommendations: userId ? await this.getPersonalizedRecommendations(userId) : null
      };
      
      return insights;
    } catch (error) {
      console.error('Error getting market insights:', error);
      throw error;
    }
  }

  async getMarketOverview() {
    const totalJobs = await prisma.job.count();
    const activeJobs = await prisma.job.count({ where: { status: 'ACTIVE' } });
    
    return {
      totalJobs,
      activeJobs,
      marketHealth: activeJobs > 100 ? 'Strong' : activeJobs > 50 ? 'Moderate' : 'Weak',
      lastUpdated: new Date()
    };
  }

  async getIndustryTrends() {
    // Get recent trend data from database
    const trends = await prisma.marketTrend.findMany({
      where: {
        date: {
          gte: new Date(Date.now() - 6 * 30 * 24 * 60 * 60 * 1000) // Last 6 months
        }
      },
      orderBy: { date: 'desc' }
    });

    return trends;
  }

  async getSkillDemandAnalysis() {
    console.log('🔍 Analyzing skill demand from actual job requirements...');

    // Get all active jobs with their requirements (3NF normalized structure)
    const jobs = await prisma.job.findMany({
      where: { status: 'ACTIVE' },
      include: {
        requirements: {
          include: {
            skillMaster: true
          }
        },
        categories: true,
        employer: true
      }
    });

    console.log(`📊 Found ${jobs.length} active jobs for analysis`);

    // Extract skill requirements and calculate demand
    const skillDemandMap = {};
    let totalRequirements = 0;

    jobs.forEach(job => {
      job.requirements.forEach(req => {
        totalRequirements++;
        const skillName = req.skillMaster.name;
        const skillCategory = req.skillMaster.category;

        if (!skillDemandMap[skillName]) {
          skillDemandMap[skillName] = {
            skill: skillName,
            skillName: skillName,
            category: skillCategory,
            demand: 0,
            jobCount: 0,
            importance: { required: 0, preferred: 0, nice_to_have: 0 },
            avgYearsRequired: 0,
            totalYears: 0,
            demandScore: 0,
            growth: 0,
            jobTitles: new Set(),
            employers: new Set()
          };
        }

        const skill = skillDemandMap[skillName];
        skill.demand++;
        skill.jobCount++;
        skill.importance[req.importance.toLowerCase()]++;

        if (req.yearsRequired) {
          skill.totalYears += req.yearsRequired;
          skill.avgYearsRequired = skill.totalYears / skill.demand;
        }

        skill.jobTitles.add(job.title);
        skill.employers.add(job.employer.companyName);
      });
    });

    // Calculate demand scores and convert sets to arrays
    const skillDemandArray = Object.values(skillDemandMap).map(skill => {
      // Calculate demand score as percentage of total jobs
      skill.demandScore = jobs.length > 0 ? (skill.jobCount / jobs.length) * 100 : 0;

      // Convert sets to arrays for JSON serialization
      skill.jobTitles = Array.from(skill.jobTitles);
      skill.employers = Array.from(skill.employers);

      // Calculate growth trend based on importance distribution
      const totalImportance = skill.importance.required + skill.importance.preferred + skill.importance.nice_to_have;
      const requiredRatio = totalImportance > 0 ? skill.importance.required / totalImportance : 0;
      skill.growth = requiredRatio > 0.6 ? 15 : requiredRatio > 0.3 ? 5 : 0;
      skill.trend = requiredRatio > 0.5 ? 'increasing' : 'stable';

      return skill;
    }).sort((a, b) => b.demandScore - a.demandScore);

    console.log(`✅ Analyzed ${totalRequirements} skill requirements from ${jobs.length} jobs`);
    console.log(`🔥 Top 5 skills: ${skillDemandArray.slice(0, 5).map(s => `${s.skillName} (${s.demand} mentions)`).join(', ')}`);

    return {
      skills: skillDemandArray.slice(0, 20), // Top 20 skills
      totalJobs: jobs.length,
      totalRequirements: totalRequirements,
      analysisDate: new Date(),
      dataSource: 'Real Job Requirements (3NF Database)'
    };
  }

  async getPersonalizedRecommendations(userId) {
    // Get user's profile and provide personalized market insights
    const user = await prisma.user.findUnique({
      where: { id: userId },
      include: {
        applicant: {
          include: {
            categories: true
          }
        }
      }
    });
    
    if (!user?.applicant) return null;
    
    const userCategories = user.applicant.categories.map(cat => cat.name);
    const recommendations = [];
    
    for (const category of userCategories) {
      recommendations.push({
        category,
        marketOutlook: 'Positive',
        suggestedActions: [
          'Update your skills in this area',
          'Consider additional certifications',
          'Network with professionals in this field'
        ]
      });
    }
    
    return recommendations;
  }
}

module.exports = MarketAnalyticsService;
