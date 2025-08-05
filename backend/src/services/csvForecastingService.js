/**
 * CSV Forecasting Service Integration
 * Manages the CSV-based Python forecasting script.
 */

const axios = require('axios');
const { spawn } = require('child_process');
const path = require('path');

class CsvForecastingService {
  constructor() {
    this.pythonServiceUrl = 'http://localhost:5002';
    this.pythonServicePath = path.join(__dirname, '../../python_services');
    this.serviceProcess = null;
  }

  async startService() {
    return new Promise((resolve, reject) => {
      console.log('Starting CSV-based Python forecasting service...');
      
      this.serviceProcess = spawn('python', ['csv_forecasting.py'], {
        cwd: this.pythonServicePath,
        stdio: 'pipe',
      });

      this.serviceProcess.stdout.on('data', (data) => {
        console.log(`Python Service: ${data}`);
        if (data.toString().includes('Starting Flask server')) {
          resolve(true);
        }
      });

      this.serviceProcess.stderr.on('data', (data) => {
        console.error(`Python Service Error: ${data}`);
      });

      this.serviceProcess.on('close', (code) => {
        console.log(`CSV forecasting service exited with code ${code}`);
        this.serviceProcess = null;
      });

      this.serviceProcess.on('error', (err) => {
        console.error('Failed to start CSV forecasting service:', err);
        reject(err);
      });
    });
  }

  async getForecast() {
    try {
      const response = await axios.get(`${this.pythonServiceUrl}/forecast`);
      return response.data;
    } catch (error) {
      console.error('Error fetching forecast from CSV service:', error.message);
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