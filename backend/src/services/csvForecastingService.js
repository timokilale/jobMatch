/**
 * CSV Forecasting Service Integration
 * Manages the CSV-based Python forecasting script.
 */

const axios = require('axios');
const { spawn } = require('child_process');
const path = require('path');

class CsvForecastingService {
  constructor() {
    // Point to the correct, manually started Python service
    this.pythonServiceUrl = 'http://localhost:5001';
    this.pythonServicePath = path.join(__dirname, '../../python_services');
    this.serviceProcess = null;
  }

  // This function is now disabled. We start the service manually.
  async startService() {
    console.log('Manual Python forecasting service is in use. Skipping auto-start.');
    return Promise.resolve(true);
  }

  async getForecast(durationDays = 365) {
    try {
      // The new service expects a POST request to /trends
      const response = await axios.post(`${this.pythonServiceUrl}/trends`, {
        duration_days: durationDays,
      });
      return response.data;
    } catch (error) {
      console.error('Error fetching forecast from CSV service:', error.message);
      if (error.code === 'ECONNREFUSED') {
        console.error(`Connection to Python service at ${this.pythonServiceUrl} failed. Please ensure the service is running manually.`);
        return { error: `Forecasting service is unavailable. Please ensure it is running on port 5001.` };
      }
      return { error: 'Failed to fetch forecast' };
    }
  }

  stopService() {
    if (this.serviceProcess) {
      this.serviceProcess.kill();
    }
  }
}

module.exports = new CsvForecastingService();