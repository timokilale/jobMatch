/**
 * Employment Trend Forecasting Routes
 * Provides API endpoints for Python ML-based forecasting
 */

const express = require('express');
const router = express.Router();
const { getPythonForecastingService } = require('../services/pythonForecastingService');

let prisma = null;
let forecastingService = null;

// Initialize services with error handling
try {
  const { PrismaClient } = require('@prisma/client');
  prisma = new PrismaClient();
  forecastingService = getPythonForecastingService();
} catch (error) {
  console.warn('Warning: Could not initialize Prisma or forecasting service:', error.message);
}

// Health check for forecasting service
router.get('/health', async (req, res) => {
  try {
    if (!forecastingService) {
      return res.json({
        status: 'unavailable',
        service: 'Python ML Forecasting',
        timestamp: new Date().toISOString(),
        note: 'Service not initialized'
      });
    }

    const isHealthy = await forecastingService.checkHealth();

    res.json({
      status: isHealthy ? 'healthy' : 'unavailable',
      service: 'Python ML Forecasting',
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    res.json({
      status: 'unavailable',
      service: 'Python ML Forecasting',
      timestamp: new Date().toISOString(),
      error: error.message
    });
  }
});

// Get employment trends and forecasts
router.get('/trends', async (req, res) => {
  try {
    const { days = 180, forecasts = 'true' } = req.query;

    let trends = null;
    if (forecastingService) {
      trends = await forecastingService.getEmploymentTrends({
        days: parseInt(days),
        includeForecasts: forecasts.toLowerCase() === 'true'
      });
    }

    if (!forecastingService || (trends && trends.error)) {
      return res.status(503).json({
        success: false,
        error: 'Forecasting service unavailable',
        message: 'Real-time forecasting data is not available. Please try again later.',
        metadata: {
          requestedDays: parseInt(days),
          generatedAt: new Date().toISOString()
        }
      });
    }

    res.json({
      success: true,
      data: trends,
      metadata: {
        requestedDays: parseInt(days),
        includeForecasts: forecasts.toLowerCase() === 'true',
        generatedAt: new Date().toISOString()
      }
    });

  } catch (error) {
    console.error('Error in /trends endpoint:', error);

    // Provide fallback data even on error
    const fallbackTrends = {
      analysis_date: new Date().toISOString(),
      data_period: `Last ${days} days`,
      category_trends: {
        'Technology': { total_jobs: 245, growth_rate: 15.3, trend_direction: 'increasing', recent_activity: 8.2 },
        'Healthcare': { total_jobs: 189, growth_rate: 12.7, trend_direction: 'increasing', recent_activity: 6.5 },
        'Education': { total_jobs: 156, growth_rate: 8.9, trend_direction: 'increasing', recent_activity: 5.1 }
      },
      skill_trends: {
        'Python': { total_demand: 45, trend_direction: 'increasing', skill_category: 'Technical' },
        'React': { total_demand: 38, trend_direction: 'increasing', skill_category: 'Technical' }
      },
      dataSource: 'fallback'
    };

    res.json({
      success: true,
      data: fallbackTrends,
      metadata: {
        requestedDays: parseInt(days),
        includeForecasts: forecasts.toLowerCase() === 'true',
        generatedAt: new Date().toISOString(),
        note: 'Fallback data - service error'
      }
    });
  }
});

// Get skill demand forecasts
router.get('/skills', async (req, res) => {
  try {
    const { days = 90 } = req.query;
    
    const skillForecasts = await forecastingService.getSkillForecasts({
      days: parseInt(days)
    });

    if (skillForecasts.error) {
      return res.status(500).json({ error: skillForecasts.error });
    }

    res.json({
      success: true,
      data: skillForecasts,
      metadata: {
        requestedDays: parseInt(days),
        generatedAt: new Date().toISOString()
      }
    });

  } catch (error) {
    console.error('Error in /skills endpoint:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to fetch skill forecasts',
      details: error.message
    });
  }
});

// Get forecast for specific category
router.get('/category/:categoryName', async (req, res) => {
  try {
    const { categoryName } = req.params;
    const { days = 120, forecastDays = 30 } = req.query;

    // Validate category exists
    const category = await prisma.jobCategory.findFirst({
      where: { 
        name: {
          equals: categoryName,
          mode: 'insensitive'
        },
        isActive: true 
      }
    });

    if (!category) {
      return res.status(404).json({
        success: false,
        error: `Category '${categoryName}' not found`
      });
    }

    const categoryForecast = await forecastingService.getCategoryForecast(categoryName, {
      days: parseInt(days),
      forecastDays: parseInt(forecastDays)
    });

    if (categoryForecast.error) {
      return res.status(500).json({ error: categoryForecast.error });
    }

    res.json({
      success: true,
      data: categoryForecast,
      metadata: {
        category: categoryName,
        requestedDays: parseInt(days),
        forecastDays: parseInt(forecastDays),
        generatedAt: new Date().toISOString()
      }
    });

  } catch (error) {
    console.error(`Error in /category/${req.params.categoryName} endpoint:`, error);
    res.status(500).json({
      success: false,
      error: 'Failed to fetch category forecast',
      details: error.message
    });
  }
});

// Get market insights
router.get('/insights', async (req, res) => {
  try {
    const insights = await forecastingService.getMarketInsights();

    if (insights.error) {
      return res.status(500).json({ error: insights.error });
    }

    res.json({
      success: true,
      data: insights,
      metadata: {
        generatedAt: new Date().toISOString()
      }
    });

  } catch (error) {
    console.error('Error in /insights endpoint:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to fetch market insights',
      details: error.message
    });
  }
});

// Get trend summary (simplified view)
router.get('/summary', async (req, res) => {
  try {
    let summary = null;
    if (forecastingService) {
      summary = await forecastingService.getTrendSummary();
    }

    if (!forecastingService || (summary && summary.error)) {
      // Provide fallback data when forecasting service is unavailable
      const fallbackSummary = {
        totalCategories: 8,
        growingCategories: [
          { category: 'Technology', growthRate: 15.3, totalJobs: 245 },
          { category: 'Healthcare', growthRate: 12.7, totalJobs: 189 },
          { category: 'Education', growthRate: 8.9, totalJobs: 156 },
          { category: 'Finance', growthRate: 6.2, totalJobs: 134 },
          { category: 'Manufacturing', growthRate: 4.1, totalJobs: 98 }
        ],
        hotSkills: [
          { skill: 'Python', demand: 45, category: 'Technical' },
          { skill: 'React', demand: 38, category: 'Technical' },
          { skill: 'Data Analysis', demand: 32, category: 'Technical' },
          { skill: 'Project Management', demand: 28, category: 'Soft' },
          { skill: 'Communication', demand: 25, category: 'Soft' },
          { skill: 'JavaScript', demand: 23, category: 'Technical' },
          { skill: 'Leadership', demand: 21, category: 'Soft' },
          { skill: 'Node.js', demand: 19, category: 'Technical' }
        ],
        dataPeriod: 'Last 90 days',
        lastUpdated: new Date().toISOString(),
        dataSource: 'fallback'
      };

      return res.json({
        success: true,
        data: fallbackSummary,
        metadata: {
          generatedAt: new Date().toISOString(),
          note: 'Fallback data - forecasting service unavailable'
        }
      });
    }

    res.json({
      success: true,
      data: summary,
      metadata: {
        generatedAt: new Date().toISOString()
      }
    });

  } catch (error) {
    console.error('Error in /summary endpoint:', error);

    // Return error instead of fallback data
    res.status(503).json({
      success: false,
      error: 'Forecasting service unavailable',
      message: 'Real-time forecasting data is not available. Please try again later.',
      metadata: {
        generatedAt: new Date().toISOString()
      }
    });
  }
});

// Get personalized insights for applicant
router.get('/insights/applicant/:applicantId', async (req, res) => {
  try {
    const { applicantId } = req.params;

    // Get applicant's categories
    const applicant = await prisma.applicant.findUnique({
      where: { id: parseInt(applicantId) },
      include: {
        categories: true
      }
    });

    if (!applicant) {
      return res.status(404).json({
        success: false,
        error: 'Applicant not found'
      });
    }

    const personalizedInsights = await forecastingService.getPersonalizedInsights(
      applicant.categories
    );

    if (personalizedInsights.error) {
      return res.status(500).json({ error: personalizedInsights.error });
    }

    res.json({
      success: true,
      data: personalizedInsights,
      metadata: {
        applicantId: parseInt(applicantId),
        categoriesAnalyzed: applicant.categories.length,
        generatedAt: new Date().toISOString()
      }
    });

  } catch (error) {
    console.error(`Error in /insights/applicant/${req.params.applicantId} endpoint:`, error);
    res.status(500).json({
      success: false,
      error: 'Failed to fetch personalized insights',
      details: error.message
    });
  }
});

// Update forecasts (trigger ML analysis)
router.post('/update', async (req, res) => {
  try {
    console.log('Triggering forecast update...');
    
    const updateResult = await forecastingService.updateForecasts();

    if (updateResult.error) {
      return res.status(500).json({ error: updateResult.error });
    }

    res.json({
      success: true,
      data: updateResult,
      metadata: {
        triggeredAt: new Date().toISOString()
      }
    });

  } catch (error) {
    console.error('Error in /update endpoint:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to update forecasts',
      details: error.message
    });
  }
});

// Get available categories for forecasting
router.get('/categories', async (req, res) => {
  try {
    const categories = await prisma.jobCategory.findMany({
      where: { isActive: true },
      select: {
        id: true,
        name: true,
        description: true,
        _count: {
          select: {
            jobs: {
              where: {
                status: 'ACTIVE'
              }
            }
          }
        }
      },
      orderBy: {
        jobs: {
          _count: 'desc'
        }
      }
    });

    res.json({
      success: true,
      data: categories.map(cat => ({
        id: cat.id,
        name: cat.name,
        description: cat.description,
        activeJobs: cat._count.jobs
      })),
      metadata: {
        totalCategories: categories.length,
        generatedAt: new Date().toISOString()
      }
    });

  } catch (error) {
    console.error('Error in /categories endpoint:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to fetch categories',
      details: error.message
    });
  }
});

module.exports = router;
