/**
 * Python Forecasting Service Integration
 * Provides interface between Node.js backend and Python ML forecasting service
 */

const axios = require('axios');
const { spawn } = require('child_process');
const path = require('path');

class PythonForecastingService {
  constructor() {
    this.pythonServiceUrl = process.env.PYTHON_FORECAST_URL || 'http://localhost:5001';
    this.pythonServicePath = path.join(__dirname, '../../python_services');
    this.isServiceRunning = false;
    this.serviceProcess = null;
    this.retryAttempts = 3;
    this.retryDelay = 5000; // 5 seconds
  }

  async ensureServiceRunning() {
    try {
      const isHealthy = await this.checkHealth();
      if (isHealthy) {
        return true;
      }

      console.log('Python forecasting service not running, attempting to start...');
      return await this.startService();
    } catch (error) {
      console.error('Error ensuring Python service is running:', error);
      return false;
    }
  }

  async checkHealth() {
    try {
      const response = await axios.get(`${this.pythonServiceUrl}/health`, {
        timeout: 3000
      });
      return response.data.status === 'healthy';
    } catch (error) {
      return false;
    }
  }

  async startService() {
    return new Promise((resolve) => {
      try {
        console.log('Starting Python forecasting service...');
        
        this.serviceProcess = spawn('python', ['forecasting_api.py'], {
          cwd: this.pythonServicePath,
          stdio: ['pipe', 'pipe', 'pipe'],
          detached: false
        });

        let serviceStarted = false;

        this.serviceProcess.stdout.on('data', (data) => {
          const output = data.toString();
          if (output.includes('Starting Flask server') && !serviceStarted) {
            serviceStarted = true;
            this.isServiceRunning = true;
            
            setTimeout(() => {
              resolve(true);
            }, 2000);
          }
        });

        this.serviceProcess.stderr.on('data', (data) => {
          console.error(`Python Service Error: ${data}`);
        });

        this.serviceProcess.on('close', (code) => {
          console.log(`Python forecasting service exited with code ${code}`);
          this.isServiceRunning = false;
          this.serviceProcess = null;
        });

        this.serviceProcess.on('error', (error) => {
          console.error('Failed to start Python forecasting service:', error);
          resolve(false);
        });

        // Timeout after 15 seconds
        setTimeout(() => {
          if (!serviceStarted) {
            console.warn('Python service startup timeout');
            resolve(false);
          }
        }, 15000);

      } catch (error) {
        console.error('Error starting Python service:', error);
        resolve(false);
      }
    });
  }

  async makeRequest(endpoint, params = {}, method = 'GET', data = null) {
    for (let attempt = 1; attempt <= this.retryAttempts; attempt++) {
      try {
        const serviceRunning = await this.ensureServiceRunning();
        if (!serviceRunning) {
          throw new Error('Python forecasting service is not available');
        }

        const config = {
          method,
          url: `${this.pythonServiceUrl}${endpoint}`,
          timeout: 30000,
          params: method === 'GET' ? params : undefined,
          data: method !== 'GET' ? data : undefined
        };

        const response = await axios(config);
        return response.data;

      } catch (error) {
        console.error(`Attempt ${attempt} failed for ${endpoint}:`, error.message);
        
        if (attempt === this.retryAttempts) {
          throw new Error(`Failed to connect to Python forecasting service after ${this.retryAttempts} attempts: ${error.message}`);
        }
        
        // Wait before retrying
        await new Promise(resolve => setTimeout(resolve, this.retryDelay));
      }
    }
  }

  // Public API methods

  async getEmploymentTrends(options = {}) {
    const { days = 180, includeForecasts = true } = options;
    
    try {
      return await this.makeRequest('/forecast/trends', {
        days,
        forecasts: includeForecasts
      });
    } catch (error) {
      console.error('Error getting employment trends:', error);
      return { error: error.message };
    }
  }

  async getSkillForecasts(options = {}) {
    const { days = 90 } = options;
    
    try {
      return await this.makeRequest('/forecast/skills', { days });
    } catch (error) {
      console.error('Error getting skill forecasts:', error);
      return { error: error.message };
    }
  }

  async getCategoryForecast(categoryName, options = {}) {
    const { days = 120, forecastDays = 30 } = options;
    
    try {
      return await this.makeRequest(`/forecast/category/${encodeURIComponent(categoryName)}`, {
        days,
        forecast_days: forecastDays
      });
    } catch (error) {
      console.error(`Error getting category forecast for ${categoryName}:`, error);
      return { error: error.message };
    }
  }

  async getMarketInsights() {
    try {
      return await this.makeRequest('/insights/market');
    } catch (error) {
      console.error('Error getting market insights:', error);
      return { error: error.message };
    }
  }

  async updateForecasts() {
    try {
      return await this.makeRequest('/forecast/update', {}, 'POST');
    } catch (error) {
      console.error('Error updating forecasts:', error);
      return { error: error.message };
    }
  }

  // Convenience methods for common use cases

  async getTrendSummary() {
    try {
      const trends = await this.getEmploymentTrends({ days: 90 });
      
      if (trends.error) {
        return trends;
      }

      // Extract key insights
      const summary = {
        totalCategories: Object.keys(trends.category_trends || {}).length,
        growingCategories: Object.entries(trends.category_trends || {})
          .filter(([, data]) => data.trend_direction === 'increasing')
          .map(([category, data]) => ({
            category,
            growthRate: data.growth_rate,
            totalJobs: data.total_jobs
          }))
          .sort((a, b) => b.growthRate - a.growthRate)
          .slice(0, 5),
        
        decliningCategories: Object.entries(trends.category_trends || {})
          .filter(([, data]) => data.trend_direction === 'decreasing')
          .map(([category, data]) => ({
            category,
            declineRate: Math.abs(data.growth_rate),
            totalJobs: data.total_jobs
          }))
          .sort((a, b) => b.declineRate - a.declineRate)
          .slice(0, 3),

        hotSkills: Object.entries(trends.skill_trends || {})
          .filter(([, data]) => data.trend_direction === 'increasing')
          .map(([skill, data]) => ({
            skill,
            demand: data.total_demand,
            category: data.skill_category
          }))
          .sort((a, b) => b.demand - a.demand)
          .slice(0, 10),

        analysisDate: trends.analysis_date,
        dataPeriod: trends.data_period
      };

      return summary;

    } catch (error) {
      console.error('Error getting trend summary:', error);
      return { error: error.message };
    }
  }

  async getPersonalizedInsights(applicantCategories = []) {
    try {
      const trends = await this.getEmploymentTrends({ days: 120 });
      
      if (trends.error) {
        return trends;
      }

      const personalizedInsights = {
        relevantTrends: [],
        recommendations: [],
        opportunities: []
      };

      // Find trends relevant to applicant's categories
      for (const category of applicantCategories) {
        const categoryData = trends.category_trends?.[category.name];
        if (categoryData) {
          personalizedInsights.relevantTrends.push({
            category: category.name,
            trend: categoryData.trend_direction,
            growthRate: categoryData.growth_rate,
            totalJobs: categoryData.total_jobs,
            recentActivity: categoryData.recent_activity
          });

          // Generate recommendations based on trends
          if (categoryData.trend_direction === 'increasing' && categoryData.growth_rate > 10) {
            personalizedInsights.opportunities.push({
              type: 'growing_market',
              category: category.name,
              message: `${category.name} is showing strong growth (+${categoryData.growth_rate.toFixed(1)}%). Great time to apply!`,
              priority: 'high'
            });
          } else if (categoryData.trend_direction === 'decreasing') {
            personalizedInsights.recommendations.push({
              type: 'skill_diversification',
              category: category.name,
              message: `Consider expanding skills beyond ${category.name} as the market is declining.`,
              priority: 'medium'
            });
          }
        }
      }

      return personalizedInsights;

    } catch (error) {
      console.error('Error getting personalized insights:', error);
      return { error: error.message };
    }
  }

  // Cleanup method
  async stop() {
    if (this.serviceProcess) {
      this.serviceProcess.kill();
      this.serviceProcess = null;
      this.isServiceRunning = false;
    }
  }
}

// Singleton instance
let instance = null;

function getPythonForecastingService() {
  if (!instance) {
    instance = new PythonForecastingService();
  }
  return instance;
}

module.exports = {
  PythonForecastingService,
  getPythonForecastingService
};
