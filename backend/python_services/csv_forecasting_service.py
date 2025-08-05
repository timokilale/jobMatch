#!/usr/bin/env python3
"""
CSV-based Employment Trend Forecasting Service
Reads from job_postings.csv for forecasting
"""

import os
import sys
import json
import pandas as pd
from datetime import datetime, timedelta
from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# Path to the job postings CSV
CSV_PATH = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), 'job_postings.csv')

# Cache for storing processed data
_data_cache = None
_last_updated = None
CACHE_DURATION = 3600  # 1 hour cache


def load_and_process_data():
    """Load and process the job postings data"""
    global _data_cache, _last_updated
    
    # Check if cache is still valid
    if _data_cache is not None and _last_updated is not None:
        if (datetime.now() - _last_updated).total_seconds() < CACHE_DURATION:
            return _data_cache
    
    try:
        # Read the CSV file
        df = pd.read_csv(CSV_PATH)
        
        # Convert date columns to datetime if they exist
        date_columns = ['date', 'posting_date', 'created_at']
        for col in date_columns:
            if col in df.columns:
                df[col] = pd.to_datetime(df[col], errors='coerce')
        
        # Add a default date if no date column exists
        if 'date' not in df.columns:
            df['date'] = datetime.now() - pd.to_timedelta(df.index % 365, unit='d')
        
        # Clean and process the data
        df['employment_type'] = df['employment_type'].fillna('Full-time')
        df['department'] = df['department'].fillna('Other')
        df['industry'] = df['industry'].fillna('Other')
        
        # Extract skills from requirements/description (simple keyword matching)
        tech_skills = ['python', 'java', 'javascript', 'sql', 'aws', 'react', 'node', 'machine learning', 'data analysis']
        
        def extract_skills(text):
            if pd.isna(text):
                return []
            text = str(text).lower()
            return [skill for skill in tech_skills if skill in text]
        
        # Apply skill extraction
        df['skills'] = df['requirements'].fillna('') + ' ' + df['description'].fillna('')
        df['skills'] = df['skills'].apply(extract_skills)
        
        # Store in cache
        _data_cache = df
        _last_updated = datetime.now()
        
        return df
    
    except Exception as e:
        print(f"Error loading/processing CSV: {str(e)}")
        return None


@app.route('/health', methods=['GET'])
def health_check():
    """Health check endpoint"""
    return jsonify({
        'status': 'healthy',
        'service': 'CSV Employment Trend Forecasting API',
        'timestamp': datetime.now().isoformat(),
        'data_source': 'job_postings.csv',
        'last_updated': _last_updated.isoformat() if _last_updated else None
    })


@app.route('/forecast/trends', methods=['GET'])
def get_employment_trends():
    """Get employment trend analysis from CSV data"""
    try:
        days_back = int(request.args.get('days', 90))
        df = load_and_process_data()
        
        if df is None or df.empty:
            return jsonify({"error": "No data available"}), 500
        
        # Filter by date if available
        if 'date' in df.columns:
            cutoff_date = datetime.now() - timedelta(days=days_back)
            df = df[df['date'] >= cutoff_date]
        
        # Analyze trends by department/industry
        trends = {}
        
        # Group by department
        dept_counts = df['department'].value_counts()
        for dept, count in dept_counts.items():
            trends[dept] = {
                'total_jobs': int(count),
                'avg_daily': round(count / days_back, 2) if days_back > 0 else 0,
                'trend': 'stable',  # Simplified trend
                'growth_rate': 0,    # Simplified growth rate
                'recent_activity': int(count)
            }
        
        # Get top skills
        all_skills = [skill for sublist in df['skills'] for skill in sublist]
        skill_counts = pd.Series(all_skills).value_counts().head(20)
        
        skill_trends = {}
        for skill, count in skill_counts.items():
            skill_trends[skill] = {
                'total_demand': int(count),
                'trend': 'increasing',  # Simplified
                'skill_category': 'Technical'  # Simplified
            }
        
        return jsonify({
            'analysis_date': datetime.now().isoformat(),
            'data_period': f'Last {days_back} days',
            'category_trends': trends,
            'skill_trends': skill_trends,
            'summary': generate_summary(trends, skill_trends)
        })
        
    except Exception as e:
        print(f"Error in get_employment_trends: {str(e)}")
        return jsonify({"error": str(e)}), 500


def generate_summary(category_trends, skill_trends):
    """Generate a summary of the trends"""
    top_categories = sorted(
        category_trends.items(), 
        key=lambda x: x[1]['total_jobs'], 
        reverse=True
    )[:5]
    
    top_skills = sorted(
        skill_trends.items(),
        key=lambda x: x[1]['total_demand'],
        reverse=True
    )[:10]
    
    return {
        'top_categories': [{'name': k, 'count': v['total_jobs']} for k, v in top_categories],
        'top_skills': [{'name': k, 'count': v['total_demand']} for k, v in top_skills],
        'total_jobs': sum(v['total_jobs'] for v in category_trends.values()),
        'total_skills': len(skill_trends)
    }


if __name__ == '__main__':
    print("🚀 Starting CSV-based Employment Trend Forecasting API...")
    print(f"📊 Loading data from: {CSV_PATH}")
    
    # Test data loading
    df = load_and_process_data()
    if df is not None:
        print(f"✅ Successfully loaded {len(df)} job postings")
        print(f"📅 Date range: {df['date'].min().date()} to {df['date'].max().date()}")
        print(f"🏢 Top departments: {df['department'].value_counts().head(3).to_dict()}")
    else:
        print("❌ Failed to load job postings data")
    
    # Run the Flask app
    port = int(os.environ.get('PORT', 5001))
    app.run(host='0.0.0.0', port=port, debug=True)
