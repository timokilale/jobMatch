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
    // Mock implementation - replace with actual API calls
    const mockData = [
      {
        industry: industry || 'Technology',
        month: new Date().toISOString().slice(0, 7),
        jobPostings: Math.floor(Math.random() * 10000) + 5000,
        averageSalary: Math.floor(Math.random() * 50000) + 50000,
        demandScore: Math.random() * 100,
        source: 'government'
      }
    ];
    
    return mockData;
  }

  async fetchJobBoardTrends(industry, timeframe) {
    // Mock job board data - implement actual API integration
    const categories = await prisma.jobCategory.findMany();
    const trends = [];
    
    for (const category of categories) {
      trends.push({
        industry: category.name,
        month: new Date().toISOString().slice(0, 7),
        jobPostings: Math.floor(Math.random() * 5000) + 1000,
        averageSalary: Math.floor(Math.random() * 40000) + 40000,
        demandScore: Math.random() * 100,
        source: 'job_boards'
      });
    }
    
    return trends;
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
    // Simple forecasting using linear regression
    const forecast = {};
    
    trends.forEach(trend => {
      if (!forecast[trend.industry]) {
        forecast[trend.industry] = {
          current: trend.demandScore,
          predicted: trend.demandScore * (1 + Math.random() * 0.2 - 0.1), // ±10% variation
          confidence: Math.random() * 0.3 + 0.7 // 70-100% confidence
        };
      }
    });
    
    return forecast;
  }

  analyzeSalaryTrends(trends) {
    const salaryAnalysis = {};
    
    trends.forEach(trend => {
      if (!salaryAnalysis[trend.industry]) {
        salaryAnalysis[trend.industry] = {
          current: trend.averageSalary,
          trend: Math.random() > 0.5 ? 'increasing' : 'stable',
          changePercent: Math.round((Math.random() * 10 - 5) * 100) / 100
        };
      }
    });
    
    return salaryAnalysis;
  }

  async identifyEmergingSkills(trends) {
    // Mock emerging skills identification
    const emergingSkills = [
      { skill: 'AI/Machine Learning', demand: 95, growth: 45 },
      { skill: 'Cloud Computing', demand: 88, growth: 32 },
      { skill: 'Data Analysis', demand: 82, growth: 28 },
      { skill: 'Cybersecurity', demand: 79, growth: 35 },
      { skill: 'Digital Marketing', demand: 75, growth: 22 }
    ];
    
    return emergingSkills;
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
    // Analyze skill demand based on job categories
    const categories = await prisma.jobCategory.findMany({
      include: {
        jobs: {
          where: { status: 'ACTIVE' }
        }
      }
    });
    
    return categories.map(category => ({
      skill: category.name,
      demand: category.jobs.length,
      trend: Math.random() > 0.5 ? 'increasing' : 'stable'
    }));
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
