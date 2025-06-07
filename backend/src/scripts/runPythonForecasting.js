/**
 * Node.js Script to Run Python Forecasting
 * Executes Python forecasting service and integrates results
 */

const { spawn } = require('child_process');
const axios = require('axios');
const path = require('path');
const fs = require('fs');

class PythonForecastingRunner {
  constructor() {
    this.pythonServiceUrl = 'http://localhost:5001';
    this.pythonServicePath = path.join(__dirname, '../../python_services');
    this.isServiceRunning = false;
  }

  async startPythonService() {
    return new Promise((resolve, reject) => {
      console.log('🐍 Starting Python forecasting service...');
      
      const pythonProcess = spawn('python', ['forecasting_api.py'], {
        cwd: this.pythonServicePath,
        stdio: ['pipe', 'pipe', 'pipe']
      });

      let serviceStarted = false;

      pythonProcess.stdout.on('data', (data) => {
        const output = data.toString();
        console.log(`Python Service: ${output}`);
        
        if (output.includes('Starting Flask server') && !serviceStarted) {
          serviceStarted = true;
          this.isServiceRunning = true;
          
          // Wait a moment for the service to fully start
          setTimeout(() => {
            resolve(pythonProcess);
          }, 3000);
        }
      });

      pythonProcess.stderr.on('data', (data) => {
        console.error(`Python Service Error: ${data}`);
      });

      pythonProcess.on('close', (code) => {
        console.log(`Python service exited with code ${code}`);
        this.isServiceRunning = false;
      });

      pythonProcess.on('error', (error) => {
        console.error('Failed to start Python service:', error);
        reject(error);
      });

      // Timeout after 30 seconds
      setTimeout(() => {
        if (!serviceStarted) {
          reject(new Error('Python service failed to start within 30 seconds'));
        }
      }, 30000);
    });
  }

  async checkServiceHealth() {
    try {
      const response = await axios.get(`${this.pythonServiceUrl}/health`, {
        timeout: 5000
      });
      return response.data.status === 'healthy';
    } catch (error) {
      return false;
    }
  }

  async getEmploymentTrends(days = 180) {
    try {
      console.log(`📊 Fetching employment trends for last ${days} days...`);
      
      const response = await axios.get(`${this.pythonServiceUrl}/forecast/trends`, {
        params: { days, forecasts: true },
        timeout: 30000
      });

      return response.data;
    } catch (error) {
      console.error('Error fetching employment trends:', error.message);
      throw error;
    }
  }

  async getSkillForecasts(days = 90) {
    try {
      console.log(`🔧 Fetching skill forecasts for last ${days} days...`);
      
      const response = await axios.get(`${this.pythonServiceUrl}/forecast/skills`, {
        params: { days },
        timeout: 30000
      });

      return response.data;
    } catch (error) {
      console.error('Error fetching skill forecasts:', error.message);
      throw error;
    }
  }

  async getCategoryForecast(categoryName, days = 120) {
    try {
      console.log(`📈 Fetching forecast for category: ${categoryName}`);
      
      const response = await axios.get(
        `${this.pythonServiceUrl}/forecast/category/${encodeURIComponent(categoryName)}`,
        {
          params: { days, forecast_days: 30 },
          timeout: 30000
        }
      );

      return response.data;
    } catch (error) {
      console.error(`Error fetching category forecast for ${categoryName}:`, error.message);
      throw error;
    }
  }

  async getMarketInsights() {
    try {
      console.log('💡 Fetching market insights...');
      
      const response = await axios.get(`${this.pythonServiceUrl}/insights/market`, {
        timeout: 30000
      });

      return response.data;
    } catch (error) {
      console.error('Error fetching market insights:', error.message);
      throw error;
    }
  }

  async updateForecasts() {
    try {
      console.log('🔄 Triggering forecast update...');
      
      const response = await axios.post(`${this.pythonServiceUrl}/forecast/update`, {}, {
        timeout: 60000
      });

      return response.data;
    } catch (error) {
      console.error('Error updating forecasts:', error.message);
      throw error;
    }
  }

  async runComprehensiveAnalysis() {
    try {
      console.log('🚀 Starting comprehensive employment trend analysis...');
      
      const results = {
        timestamp: new Date().toISOString(),
        employment_trends: null,
        skill_forecasts: null,
        market_insights: null,
        category_forecasts: {},
        errors: []
      };

      // Get employment trends
      try {
        results.employment_trends = await this.getEmploymentTrends(180);
        console.log('✅ Employment trends analysis completed');
      } catch (error) {
        results.errors.push(`Employment trends: ${error.message}`);
      }

      // Get skill forecasts
      try {
        results.skill_forecasts = await this.getSkillForecasts(90);
        console.log('✅ Skill forecasts completed');
      } catch (error) {
        results.errors.push(`Skill forecasts: ${error.message}`);
      }

      // Get market insights
      try {
        results.market_insights = await this.getMarketInsights();
        console.log('✅ Market insights completed');
      } catch (error) {
        results.errors.push(`Market insights: ${error.message}`);
      }

      // Get category-specific forecasts for top categories
      if (results.employment_trends && results.employment_trends.category_trends) {
        const topCategories = Object.entries(results.employment_trends.category_trends)
          .sort(([,a], [,b]) => b.total_jobs - a.total_jobs)
          .slice(0, 5)
          .map(([category]) => category);

        for (const category of topCategories) {
          try {
            results.category_forecasts[category] = await this.getCategoryForecast(category);
            console.log(`✅ Category forecast completed for: ${category}`);
          } catch (error) {
            results.errors.push(`Category ${category}: ${error.message}`);
          }
        }
      }

      // Update forecasts in database
      try {
        const updateResult = await this.updateForecasts();
        results.database_update = updateResult;
        console.log('✅ Database forecasts updated');
      } catch (error) {
        results.errors.push(`Database update: ${error.message}`);
      }

      // Save results to file
      const outputFile = path.join(
        this.pythonServicePath, 
        `comprehensive_analysis_${new Date().toISOString().split('T')[0]}.json`
      );
      
      fs.writeFileSync(outputFile, JSON.stringify(results, null, 2));
      console.log(`💾 Results saved to: ${outputFile}`);

      return results;

    } catch (error) {
      console.error('Error in comprehensive analysis:', error);
      throw error;
    }
  }

  async stop() {
    if (this.pythonProcess) {
      this.pythonProcess.kill();
      this.isServiceRunning = false;
    }
  }
}

// Main execution function
async function main() {
  const runner = new PythonForecastingRunner();
  let pythonProcess = null;

  try {
    // Check if service is already running
    const isHealthy = await runner.checkServiceHealth();
    
    if (!isHealthy) {
      console.log('Python service not running, starting it...');
      pythonProcess = await runner.startPythonService();
    } else {
      console.log('✅ Python service is already running');
    }

    // Run comprehensive analysis
    const results = await runner.runComprehensiveAnalysis();

    // Print summary
    console.log('\n📋 ANALYSIS SUMMARY');
    console.log('==================');
    
    if (results.employment_trends) {
      const categoryCount = Object.keys(results.employment_trends.category_trends || {}).length;
      console.log(`📊 Categories analyzed: ${categoryCount}`);
    }
    
    if (results.skill_forecasts) {
      const skillCount = Object.keys(results.skill_forecasts.top_skills || {}).length;
      console.log(`🔧 Skills analyzed: ${skillCount}`);
    }
    
    if (results.market_insights) {
      const marketScore = results.market_insights.market_health?.overall_score || 0;
      console.log(`💹 Market health score: ${marketScore}/100`);
    }

    console.log(`📈 Category forecasts: ${Object.keys(results.category_forecasts).length}`);
    
    if (results.errors.length > 0) {
      console.log(`⚠️  Errors encountered: ${results.errors.length}`);
      results.errors.forEach(error => console.log(`   - ${error}`));
    }

    console.log('\n✅ Analysis completed successfully!');

  } catch (error) {
    console.error('❌ Analysis failed:', error.message);
    process.exit(1);
  } finally {
    // Clean up
    if (pythonProcess) {
      console.log('🧹 Cleaning up Python service...');
      pythonProcess.kill();
    }
  }
}

// Export for use in other modules
module.exports = PythonForecastingRunner;

// Run if called directly
if (require.main === module) {
  main().catch(console.error);
}
