const axios = require('axios');
const config = require('../config.js');

class MLForecastingService {
  constructor() {
    // Point to the correct, manually started Python service on port 5001
    this.baseUrl = 'http://localhost:5001';
  }

  async getEmploymentTrends(daysBack = 365) {
    try {
      // Ensure we're sending a POST request with the correct content type
      const response = await axios({
        method: 'post',
        url: `${this.baseUrl}/trends`,
        data: { duration_days: daysBack },
        headers: {
          'Content-Type': 'application/json'
        },
        timeout: 120000 // 2 minutes
      });
      return this._formatTrendsResponse(response.data);
    } catch (error) {
      console.error('Error fetching ML employment trends:', error.message);
      if (error.code === 'ECONNREFUSED') {
        console.error(`Connection to Python service at ${this.baseUrl} failed. Please ensure the service is running manually.`);
      }
      throw new Error('Failed to fetch ML employment trends');
    }
  }

  async getSkillForecasts(daysBack = 90) {
    try {
      const response = await axios.get(`${this.baseUrl}/forecast/skills`, {
        params: { days: daysBack }
      });
      return response.data;
    } catch (error) {
      console.error('Error fetching ML skill forecasts:', error.message);
      throw new Error('Failed to fetch ML skill forecasts');
    }
  }

  async getMarketInsights() {
    try {
      const response = await axios.get(`${this.baseUrl}/insights`);
      return response.data;
    } catch (error) {
      console.error('Error fetching ML market insights:', error.message);
      throw new Error('Failed to fetch ML market insights');
    }
  }

  _formatTrendsResponse(mlData) {
    if (!mlData || !mlData.category_trends) {
      return { industries: [], skills: [] };
    }

    // Format industry trends
    const industries = Object.entries(mlData.category_trends).map(([category, data]) => ({
      name: category,
      trend: data.trend,
      growthRate: data.growth_rate,
      confidence: data.forecast_confidence, // Corrected property name
      forecast: data.forecast || []
    }));

    // Format skill trends
    const skills = [];
    if (mlData.skill_trends) {
      Object.entries(mlData.skill_trends).forEach(([skill, data]) => {
        skills.push({
          name: skill,
          category: data.category,
          demandScore: data.demand_score,
          growth: data.growth_rate,
          forecast: data.forecast || []
        });
      });
    }

    return { industries, skills };
  }
}

// Create singleton instance
const mlForecastingService = new MLForecastingService();
module.exports = mlForecastingService;
