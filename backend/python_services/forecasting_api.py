#!/usr/bin/env python3
"""
Flask API for Employment Trend Forecasting
Provides REST endpoints for the Node.js backend to access Python ML models
"""

import os
import sys
import json
from datetime import datetime
from flask import Flask, request, jsonify
from flask_cors import CORS

# Add current directory to path
sys.path.append(os.path.dirname(os.path.abspath(__file__)))

from trend_forecasting import EmploymentTrendForecaster
from database_connector import DatabaseConnector
from trend_analyzer import TrendAnalyzer

app = Flask(__name__)
CORS(app)

# Initialize services
forecaster = EmploymentTrendForecaster()
db = DatabaseConnector()
analyzer = TrendAnalyzer()

@app.route('/health', methods=['GET'])
def health_check():
    """Health check endpoint"""
    return jsonify({
        'status': 'healthy',
        'service': 'Employment Trend Forecasting API',
        'timestamp': datetime.now().isoformat(),
        'database_connected': db.test_connection()
    })

@app.route('/forecast/trends', methods=['GET'])
def get_employment_trends():
    """Get employment trend analysis and forecasts"""
    try:
        # Get parameters
        days_back = int(request.args.get('days', 180))
        include_forecasts = request.args.get('forecasts', 'true').lower() == 'true'
        
        # Run analysis
        results = forecaster.analyze_job_posting_trends(days_back=days_back)
        
        if "error" in results:
            return jsonify({'error': results['error']}), 500
        
        # Add additional analysis
        if include_forecasts and 'category_trends' in results:
            # Get raw data for additional analysis
            query = """
            SELECT 
                DATE(j.createdAt) as posting_date,
                jc.name as category,
                COUNT(*) as job_count
            FROM Job j
            LEFT JOIN _JobToJobCategory jtc ON j.id = jtc.A
            LEFT JOIN JobCategory jc ON jtc.B = jc.id
            WHERE j.createdAt >= DATE_SUB(NOW(), INTERVAL %s DAY)
                AND j.status IN ('ACTIVE', 'CLOSED')
            GROUP BY DATE(j.createdAt), jc.name
            ORDER BY posting_date DESC
            """
            
            df = db.query_to_dataframe(query, (days_back,))
            
            if not df.empty:
                # Add seasonal analysis
                seasonal_patterns = analyzer.analyze_seasonal_patterns(df)
                results['seasonal_patterns'] = seasonal_patterns
                
                # Add trend change detection
                trend_changes = analyzer.detect_trend_changes(df)
                results['trend_changes'] = trend_changes
        
        return jsonify(results)
        
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@app.route('/forecast/skills', methods=['GET'])
def get_skill_forecasts():
    """Get skill demand forecasts"""
    try:
        days_back = int(request.args.get('days', 90))
        
        # Get skill demand data
        query = """
        SELECT 
            DATE(j.createdAt) as posting_date,
            sm.name as skill_name,
            sm.category as skill_category,
            jr.importance,
            COUNT(*) as demand_count
        FROM Job j
        JOIN JobRequirement jr ON j.id = jr.jobId
        JOIN SkillMaster sm ON jr.skillMasterId = sm.id
        WHERE j.createdAt >= DATE_SUB(NOW(), INTERVAL %s DAY)
            AND j.status IN ('ACTIVE', 'CLOSED')
            AND sm.isActive = 1
        GROUP BY DATE(j.createdAt), sm.name, sm.category, jr.importance
        ORDER BY posting_date DESC
        """
        
        df = db.query_to_dataframe(query, (days_back,))
        
        if df.empty:
            return jsonify({'error': 'No skill data found'}), 404
        
        # Analyze skill clusters
        skill_clusters = analyzer.analyze_skill_clusters(df)
        
        # Get top skills and their trajectories
        top_skills = df.groupby('skill_name')['demand_count'].sum().sort_values(ascending=False).head(10)
        
        skill_forecasts = {}
        for skill in top_skills.index:
            skill_data = df[df['skill_name'] == skill].groupby('posting_date')['demand_count'].sum().reset_index()
            if len(skill_data) >= 7:
                trajectory = analyzer.predict_demand_trajectory(skill_data)
                if trajectory:
                    skill_forecasts[skill] = trajectory
        
        return jsonify({
            'analysis_date': datetime.now().isoformat(),
            'data_period': f'Last {days_back} days',
            'skill_clusters': skill_clusters,
            'skill_forecasts': skill_forecasts,
            'top_skills': top_skills.to_dict()
        })
        
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@app.route('/forecast/category/<category_name>', methods=['GET'])
def get_category_forecast(category_name):
    """Get detailed forecast for a specific job category"""
    try:
        days_back = int(request.args.get('days', 120))
        forecast_days = int(request.args.get('forecast_days', 30))
        
        # Get category-specific data
        query = """
        SELECT 
            DATE(j.createdAt) as posting_date,
            COUNT(*) as job_count,
            AVG(COALESCE(j.salaryMin, 0)) as avg_salary_min,
            AVG(COALESCE(j.salaryMax, 0)) as avg_salary_max,
            j.employmentType,
            j.experienceLevel
        FROM Job j
        LEFT JOIN _JobToJobCategory jtc ON j.id = jtc.A
        LEFT JOIN JobCategory jc ON jtc.B = jc.id
        WHERE jc.name = %s
            AND j.createdAt >= DATE_SUB(NOW(), INTERVAL %s DAY)
            AND j.status IN ('ACTIVE', 'CLOSED')
        GROUP BY DATE(j.createdAt), j.employmentType, j.experienceLevel
        ORDER BY posting_date DESC
        """
        
        df = db.query_to_dataframe(query, (category_name, days_back))
        
        if df.empty:
            return jsonify({'error': f'No data found for category: {category_name}'}), 404
        
        # Aggregate daily data
        daily_data = df.groupby('posting_date').agg({
            'job_count': 'sum',
            'avg_salary_min': 'mean',
            'avg_salary_max': 'mean'
        }).reset_index()
        
        # Generate detailed forecast
        trajectory = analyzer.predict_demand_trajectory(daily_data, periods=forecast_days)
        
        # Analyze patterns
        seasonal_patterns = analyzer.analyze_seasonal_patterns(daily_data)
        trend_changes = analyzer.detect_trend_changes(daily_data)
        
        # Employment type distribution
        employment_dist = df.groupby('employmentType')['job_count'].sum().to_dict()
        experience_dist = df.groupby('experienceLevel')['job_count'].sum().to_dict()
        
        return jsonify({
            'category': category_name,
            'analysis_period': f'Last {days_back} days',
            'forecast_period': f'Next {forecast_days} days',
            'trajectory': trajectory,
            'seasonal_patterns': seasonal_patterns,
            'trend_changes': trend_changes,
            'distributions': {
                'employment_types': employment_dist,
                'experience_levels': experience_dist
            },
            'summary_stats': {
                'total_jobs': int(daily_data['job_count'].sum()),
                'avg_daily_postings': round(daily_data['job_count'].mean(), 2),
                'avg_salary_range': {
                    'min': round(daily_data['avg_salary_min'].mean(), 2),
                    'max': round(daily_data['avg_salary_max'].mean(), 2)
                }
            }
        })
        
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@app.route('/insights/market', methods=['GET'])
def get_market_insights():
    """Get actionable market insights"""
    try:
        # Get recent trend analysis
        results = forecaster.analyze_job_posting_trends(days_back=90)
        
        if "error" in results:
            return jsonify({'error': results['error']}), 500
        
        # Generate insights
        insights = analyzer.generate_insights(results)
        
        # Add market health indicators
        total_jobs = sum(data['total_jobs'] for data in results.get('category_trends', {}).values())
        growing_categories = len([
            cat for cat, data in results.get('category_trends', {}).items()
            if data.get('trend_direction') == 'increasing'
        ])
        
        market_health = {
            'overall_score': min(100, max(0, (total_jobs / 10) + (growing_categories * 5))),
            'total_active_jobs': total_jobs,
            'growing_categories': growing_categories,
            'market_sentiment': 'positive' if growing_categories > 3 else 'neutral'
        }
        
        return jsonify({
            'analysis_date': datetime.now().isoformat(),
            'market_health': market_health,
            'insights': insights,
            'recommendations': results.get('summary', {}),
            'data_quality': {
                'categories_analyzed': len(results.get('category_trends', {})),
                'skills_analyzed': len(results.get('skill_trends', {})),
                'forecast_confidence': 'high' if total_jobs > 50 else 'medium'
            }
        })
        
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@app.route('/forecast/update', methods=['POST'])
def update_forecasts():
    """Trigger forecast update and store results"""
    try:
        # Run comprehensive analysis
        results = forecaster.analyze_job_posting_trends(days_back=180)
        
        if "error" in results:
            return jsonify({'error': results['error']}), 500
        
        # Store results in database (simplified)
        trend_data = []
        for category, data in results.get('category_trends', {}).items():
            trend_data.append({
                'industry': category,
                'metric': 'job_postings_trend',
                'value': data.get('growth_rate', 0),
                'period': 'daily',
                'date': datetime.now(),
                'source': 'python_ml_forecasting'
            })
        
        # Insert trend data
        success = db.insert_trend_data(trend_data)
        
        return jsonify({
            'status': 'success' if success else 'partial_success',
            'updated_trends': len(trend_data),
            'analysis_summary': results.get('summary', {}),
            'timestamp': datetime.now().isoformat()
        })
        
    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    print("🚀 Starting Employment Trend Forecasting API...")
    print("📊 Testing database connection...")
    
    if db.test_connection():
        print("✅ Database connected successfully")
        print("🌐 Starting Flask server on http://localhost:5001")
        app.run(host='0.0.0.0', port=5001, debug=True)
    else:
        print("❌ Database connection failed. Please check your configuration.")
        sys.exit(1)
