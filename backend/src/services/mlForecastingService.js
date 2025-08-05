const axios = require('axios');
const config = require('../config.js');

class MLForecastingService {
  constructor() {
    this.baseUrl = 'http://127.0.0.1:5001';
  }

  async getEmploymentTrends(daysBack = 365) {
    try {
      console.log(`🔍 Fetching ML employment trends from ${this.baseUrl}/trends`);
      
      const response = await axios({
        method: 'post',
        url: `${this.baseUrl}/trends`,
        data: { duration_days: daysBack },
        headers: {
          'Content-Type': 'application/json'
        },
        timeout: 30000 // 30 seconds
      });

      console.log('✅ Python service response received');
      
      // Return the original format that the controller expects
      return {
        category_trends: response.data.category_trends || {},
        skill_trends: response.data.skill_trends || {},
        last_updated: response.data.last_updated,
        data_period: response.data.data_period
      };
      
    } catch (error) {
      console.error('❌ Error fetching ML employment trends:', error.message);
      
      if (error.code === 'ECONNREFUSED') {
        console.error(`❌ Connection to Python service at ${this.baseUrl} failed`);
      } else if (error.response) {
        console.error(`❌ Python service error: ${error.response.status} - ${error.response.data}`);
      }
      
      throw new Error(`Failed to fetch ML employment trends: ${error.message}`);
    }
  }

  async getSkillForecasts(daysBack = 90) {
    try {
      const response = await axios.get(`${this.baseUrl}/forecast/skills`, {
        params: { days: daysBack },
        timeout: 30000
      });
      return response.data;
    } catch (error) {
      console.error('Error fetching ML skill forecasts:', error.message);
      throw new Error('Failed to fetch ML skill forecasts');
    }
  }

  async getMarketInsights() {
    try {
      const response = await axios.get(`${this.baseUrl}/insights`, {
        timeout: 30000
      });
      return response.data;
    } catch (error) {
      console.error('Error fetching ML market insights:', error.message);
      throw new Error('Failed to fetch ML market insights');
    }
  }
}

// Create singleton instance
const mlForecastingService = new MLForecastingService();
module.exports = mlForecastingService;