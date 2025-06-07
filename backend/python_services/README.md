# 🐍 Python Employment Trend Forecasting Service

Advanced Machine Learning service for analyzing job posting patterns and predicting employment trends in Tanzania's job market.

## 🚀 Features

### 📊 **Employment Trend Analysis**
- Real-time job posting pattern analysis
- Category-based trend detection
- Growth rate calculations
- Seasonal pattern recognition

### 🔮 **ML-Powered Forecasting**
- **Prophet** time series forecasting
- 30-day job demand predictions
- Confidence intervals and uncertainty quantification
- Trend change point detection

### 🔧 **Skill Demand Analysis**
- Skill clustering based on demand patterns
- Emerging skill identification
- Market demand trajectory prediction
- Skills gap analysis integration

### 📈 **Market Insights**
- Actionable market intelligence
- Personalized career recommendations
- Industry growth opportunities
- Employment trend forecasting

## 🛠️ Installation

### Prerequisites
- Python 3.8 or higher
- MySQL database (same as Node.js backend)
- pip package manager

### Quick Setup

1. **Navigate to the Python services directory:**
   ```bash
   cd backend/python_services
   ```

2. **Run the setup script:**
   ```bash
   python setup.py
   ```

3. **Configure environment variables:**
   ```bash
   cp .env.example .env
   # Edit .env with your database credentials
   ```

4. **Start the forecasting API:**
   ```bash
   python forecasting_api.py
   ```

### Manual Installation

1. **Install requirements:**
   ```bash
   pip install -r requirements.txt
   ```

2. **Test the installation:**
   ```bash
   python database_connector.py
   ```

## 📡 API Endpoints

### Health Check
```http
GET /health
```

### Employment Trends
```http
GET /forecast/trends?days=180&forecasts=true
```

### Skill Forecasts
```http
GET /forecast/skills?days=90
```

### Category-Specific Forecast
```http
GET /forecast/category/{categoryName}?days=120&forecast_days=30
```

### Market Insights
```http
GET /insights/market
```

### Update Forecasts
```http
POST /forecast/update
```

## 🔧 Usage Examples

### From Node.js Backend

```javascript
const { getPythonForecastingService } = require('./services/pythonForecastingService');

const forecasting = getPythonForecastingService();

// Get employment trends
const trends = await forecasting.getEmploymentTrends({ days: 180 });

// Get skill forecasts
const skills = await forecasting.getSkillForecasts({ days: 90 });

// Get category forecast
const categoryForecast = await forecasting.getCategoryForecast('Technology');
```

### Direct API Calls

```bash
# Check service health
curl http://localhost:5001/health

# Get employment trends
curl "http://localhost:5001/forecast/trends?days=180"

# Get skill forecasts
curl "http://localhost:5001/forecast/skills?days=90"
```

### Standalone Analysis

```bash
# Run comprehensive analysis
python trend_forecasting.py

# Run via Node.js integration
npm run forecast-trends
```

## 📊 Data Analysis Features

### 1. **Trend Detection**
- Moving average crossovers
- Growth rate calculations
- Seasonal decomposition
- Change point detection

### 2. **Forecasting Models**
- **Prophet**: Facebook's time series forecasting
- **Linear Regression**: Simple trend extrapolation
- **Ensemble Methods**: Combined predictions

### 3. **Skill Clustering**
- K-means clustering of skills by demand patterns
- High-demand vs. niche skill identification
- Emerging skill detection

### 4. **Market Intelligence**
- Industry growth analysis
- Employment type trends
- Salary trend analysis
- Geographic demand patterns

## 🔄 Integration with Node.js Backend

The Python service integrates seamlessly with your existing Node.js backend:

### API Routes
- `/api/forecasting/trends` - Employment trends
- `/api/forecasting/skills` - Skill forecasts  
- `/api/forecasting/insights` - Market insights
- `/api/forecasting/category/:name` - Category forecasts

### Automatic Service Management
- Auto-start Python service when needed
- Health monitoring and retry logic
- Graceful error handling and fallbacks

## 📈 Sample Output

### Employment Trends Response
```json
{
  "analysis_date": "2024-01-15T10:30:00Z",
  "data_period": "Last 180 days",
  "category_trends": {
    "Technology": {
      "total_jobs": 245,
      "trend_direction": "increasing",
      "growth_rate": 15.3,
      "recent_activity": 8.2
    }
  },
  "forecasts": {
    "Technology": {
      "predictions": [
        {
          "date": "2024-01-16",
          "predicted_jobs": 12,
          "confidence": 0.85
        }
      ]
    }
  }
}
```

### Market Insights Response
```json
{
  "market_health": {
    "overall_score": 78,
    "market_sentiment": "positive"
  },
  "insights": [
    {
      "type": "opportunity",
      "title": "Growing Job Categories",
      "description": "Technology, Healthcare showing strong growth"
    }
  ]
}
```

## 🚨 Troubleshooting

### Common Issues

1. **Database Connection Failed**
   ```bash
   # Check database credentials in .env
   # Ensure MySQL is running
   # Test connection: python database_connector.py
   ```

2. **Import Errors**
   ```bash
   # Reinstall requirements
   pip install -r requirements.txt --force-reinstall
   ```

3. **Service Won't Start**
   ```bash
   # Check port availability
   netstat -an | grep 5001
   
   # Check Python version
   python --version
   ```

4. **Insufficient Data**
   ```bash
   # Ensure you have job postings in database
   # Minimum 30 days of data recommended
   ```

### Performance Optimization

- **Memory**: Prophet models can be memory-intensive
- **CPU**: Forecasting is CPU-intensive, consider running on dedicated server
- **Database**: Index job creation dates for faster queries

## 🔧 Configuration

### Environment Variables (.env)
```env
DB_HOST=localhost
DB_PORT=3306
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=job_matching_db

FLASK_PORT=5001
DEFAULT_FORECAST_DAYS=30
DEFAULT_ANALYSIS_DAYS=180
```

### Forecasting Parameters
- **Minimum data points**: 7 days
- **Optimal data range**: 90-180 days
- **Forecast horizon**: 30 days (configurable)
- **Confidence intervals**: 95% (Prophet default)

## 📝 Logging

Logs are written to:
- Console output (development)
- `logs/forecasting.log` (production)

Log levels: DEBUG, INFO, WARNING, ERROR

## 🤝 Contributing

1. Follow Python PEP 8 style guidelines
2. Add docstrings to all functions
3. Include unit tests for new features
4. Update this README for new functionality

## 📄 License

This forecasting service is part of the Job Match System.
