const MarketAnalyticsService = require('../services/marketAnalytics');
const prisma = require('../prisma');

const marketService = new MarketAnalyticsService();

// Get market overview and trends
exports.getMarketOverview = async (req, res) => {
  try {
    const overview = await marketService.getMarketInsights();
    res.json(overview);
  } catch (error) {
    console.error('Error fetching market overview:', error);
    res.status(500).json({ error: 'Failed to fetch market overview' });
  }
};

// Get employment trends for specific industry
exports.getEmploymentTrends = async (req, res) => {
  try {
    const { industry, timeframe } = req.query;
    const trends = await marketService.fetchEmploymentTrends(industry, timeframe);
    res.json(trends);
  } catch (error) {
    console.error('Error fetching employment trends:', error);
    res.status(500).json({ error: 'Failed to fetch employment trends' });
  }
};

// Get skill demand analysis
exports.getSkillDemand = async (req, res) => {
  try {
    const skillDemand = await marketService.getSkillDemandAnalysis();
    res.json(skillDemand);
  } catch (error) {
    console.error('Error fetching skill demand:', error);
    res.status(500).json({ error: 'Failed to fetch skill demand data' });
  }
};

// Get personalized market recommendations
exports.getPersonalizedRecommendations = async (req, res) => {
  try {
    const userId = req.user?.id;
    if (!userId) {
      return res.status(401).json({ error: 'User not authenticated' });
    }
    
    const recommendations = await marketService.getPersonalizedRecommendations(userId);
    res.json(recommendations);
  } catch (error) {
    console.error('Error fetching recommendations:', error);
    res.status(500).json({ error: 'Failed to fetch recommendations' });
  }
};

// Update market data (admin/cron job endpoint)
exports.updateMarketData = async (req, res) => {
  try {
    // This would typically be called by a cron job
    const result = await marketService.fetchEmploymentTrends();
    res.json({ message: 'Market data updated successfully', data: result });
  } catch (error) {
    console.error('Error updating market data:', error);
    res.status(500).json({ error: 'Failed to update market data' });
  }
};

// Get industry trends for dashboard charts
exports.getIndustryTrends = async (req, res) => {
  try {
    const { limit = 10 } = req.query;
    
    const trends = await prisma.marketTrend.findMany({
      take: parseInt(limit),
      orderBy: { date: 'desc' },
      distinct: ['industry']
    });
    
    res.json(trends);
  } catch (error) {
    console.error('Error fetching industry trends:', error);
    res.status(500).json({ error: 'Failed to fetch industry trends' });
  }
};

// Get salary trends
exports.getSalaryTrends = async (req, res) => {
  try {
    const { industry } = req.query;
    
    const whereClause = industry ? { industry } : {};
    
    const salaryTrends = await prisma.marketTrend.findMany({
      where: {
        ...whereClause,
        metric: 'salary_avg'
      },
      orderBy: { date: 'desc' },
      take: 12 // Last 12 data points
    });
    
    res.json(salaryTrends);
  } catch (error) {
    console.error('Error fetching salary trends:', error);
    res.status(500).json({ error: 'Failed to fetch salary trends' });
  }
};

// Get job market forecast
exports.getJobMarketForecast = async (req, res) => {
  try {
    const { industry, months = 6 } = req.query;
    
    // Get historical data
    const historicalData = await prisma.marketTrend.findMany({
      where: {
        industry: industry || undefined,
        metric: 'job_postings'
      },
      orderBy: { date: 'desc' },
      take: 12
    });
    
    // Simple forecasting logic (in production, use more sophisticated ML models)
    const forecast = generateSimpleForecast(historicalData, parseInt(months));
    
    res.json({
      historical: historicalData,
      forecast: forecast,
      industry: industry || 'All Industries'
    });
  } catch (error) {
    console.error('Error generating forecast:', error);
    res.status(500).json({ error: 'Failed to generate forecast' });
  }
};

// Helper function for simple forecasting
function generateSimpleForecast(historicalData, months) {
  if (historicalData.length < 2) {
    return [];
  }
  
  // Calculate average growth rate
  let totalGrowth = 0;
  for (let i = 1; i < historicalData.length; i++) {
    const growth = (historicalData[i-1].value - historicalData[i].value) / historicalData[i].value;
    totalGrowth += growth;
  }
  const avgGrowthRate = totalGrowth / (historicalData.length - 1);
  
  // Generate forecast
  const forecast = [];
  let lastValue = historicalData[0].value;
  const lastDate = new Date(historicalData[0].date);
  
  for (let i = 1; i <= months; i++) {
    const forecastDate = new Date(lastDate);
    forecastDate.setMonth(forecastDate.getMonth() + i);
    
    lastValue = lastValue * (1 + avgGrowthRate);
    
    forecast.push({
      date: forecastDate,
      value: Math.round(lastValue),
      confidence: Math.max(0.5, 0.9 - (i * 0.1)), // Decreasing confidence over time
      type: 'forecast'
    });
  }
  
  return forecast;
}

// Get emerging skills
exports.getEmergingSkills = async (req, res) => {
  try {
    const emergingSkills = await prisma.skillDemand.findMany({
      where: {
        growth: { gt: 10 } // Skills with >10% growth
      },
      orderBy: { growth: 'desc' },
      take: 10
    });
    
    res.json(emergingSkills);
  } catch (error) {
    console.error('Error fetching emerging skills:', error);
    res.status(500).json({ error: 'Failed to fetch emerging skills' });
  }
};

// Get market health indicators
exports.getMarketHealth = async (req, res) => {
  try {
    const totalJobs = await prisma.job.count();
    const activeJobs = await prisma.job.count({ where: { status: 'ACTIVE' } });
    const totalApplications = await prisma.application.count();
    
    // Calculate recent activity (last 30 days)
    const thirtyDaysAgo = new Date(Date.now() - 30 * 24 * 60 * 60 * 1000);
    const recentJobs = await prisma.job.count({
      where: {
        createdAt: { gte: thirtyDaysAgo }
      }
    });
    
    const recentApplications = await prisma.application.count({
      where: {
        createdAt: { gte: thirtyDaysAgo }
      }
    });
    
    const healthScore = calculateHealthScore(activeJobs, recentJobs, recentApplications);
    
    res.json({
      totalJobs,
      activeJobs,
      totalApplications,
      recentActivity: {
        newJobs: recentJobs,
        newApplications: recentApplications
      },
      healthScore,
      status: getHealthStatus(healthScore),
      lastUpdated: new Date()
    });
  } catch (error) {
    console.error('Error fetching market health:', error);
    res.status(500).json({ error: 'Failed to fetch market health data' });
  }
};

function calculateHealthScore(activeJobs, recentJobs, recentApplications) {
  // Simple health score calculation (0-100)
  let score = 0;
  
  // Active jobs contribute to health
  score += Math.min(activeJobs / 10, 40); // Max 40 points for active jobs
  
  // Recent activity contributes to health
  score += Math.min(recentJobs * 2, 30); // Max 30 points for recent jobs
  score += Math.min(recentApplications / 5, 30); // Max 30 points for recent applications
  
  return Math.round(Math.min(score, 100));
}

function getHealthStatus(score) {
  if (score >= 80) return 'Excellent';
  if (score >= 60) return 'Good';
  if (score >= 40) return 'Fair';
  return 'Poor';
}
