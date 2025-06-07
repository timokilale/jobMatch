#!/usr/bin/env python3
"""
Simplified Employment Trend Forecasting API
Works without advanced ML libraries for quick setup
"""

import os
import sys
import json
from datetime import datetime, timedelta
from flask import Flask, request, jsonify
from flask_cors import CORS

# Add current directory to path
sys.path.append(os.path.dirname(os.path.abspath(__file__)))

from database_connector import DatabaseConnector

app = Flask(__name__)
CORS(app)

# Initialize services
db = DatabaseConnector()

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
    """Get employment trend analysis"""
    try:
        days_back = int(request.args.get('days', 90))
        
        # Get job posting data - simplified query without categories first
        query = """
        SELECT
            DATE(j.createdAt) as posting_date,
            'General' as category,
            j.employmentType,
            j.experienceLevel,
            COUNT(*) as job_count
        FROM Job j
        WHERE j.createdAt >= DATE_SUB(NOW(), INTERVAL %s DAY)
            AND j.status IN ('ACTIVE', 'CLOSED', 'DRAFT')
        GROUP BY DATE(j.createdAt), j.employmentType, j.experienceLevel
        ORDER BY posting_date DESC
        """
        
        df = db.query_to_dataframe(query, (days_back,))
        
        if df.empty:
            return jsonify({"error": "No job posting data found"})
        
        # Analyze trends by category
        category_trends = {}
        
        for category in df['category'].dropna().unique():
            category_data = df[df['category'] == category].copy()
            
            # Group by date and sum job counts
            daily_counts = category_data.groupby('posting_date')['job_count'].sum()
            
            if len(daily_counts) < 3:  # Need at least 3 days of data
                continue
            
            # Calculate simple trend metrics
            total_jobs = int(daily_counts.sum())
            avg_daily = round(daily_counts.mean(), 2)
            
            # Simple trend calculation
            recent_avg = daily_counts.tail(7).mean() if len(daily_counts) >= 7 else daily_counts.mean()
            older_avg = daily_counts.head(7).mean() if len(daily_counts) >= 7 else daily_counts.mean()
            
            trend_direction = "increasing" if recent_avg > older_avg else "decreasing"
            growth_rate = ((recent_avg - older_avg) / max(older_avg, 1)) * 100
            
            category_trends[category] = {
                "total_jobs": total_jobs,
                "avg_daily_postings": avg_daily,
                "trend_direction": trend_direction,
                "growth_rate": round(growth_rate, 2),
                "recent_activity": round(recent_avg, 2)
            }
        
        # Get skill trends from SkillDemand table
        skill_query = """
        SELECT
            sm.name as skill_name,
            sm.category as skill_category,
            ROUND(AVG(sd.demandScore)) as demand_count
        FROM SkillMaster sm
        JOIN SkillDemand sd ON sm.id = sd.skillMasterId
        WHERE sm.isActive = 1
            AND sd.period >= DATE_SUB(NOW(), INTERVAL %s DAY)
        GROUP BY sm.name, sm.category
        ORDER BY demand_count DESC
        LIMIT 20
        """
        
        skill_df = db.query_to_dataframe(skill_query, (days_back,))
        
        skill_trends = {}
        for _, row in skill_df.iterrows():
            skill_trends[row['skill_name']] = {
                "total_demand": int(row['demand_count']),
                "trend_direction": "increasing",  # Simplified
                "skill_category": row['skill_category']
            }
        
        return jsonify({
            "analysis_date": datetime.now().isoformat(),
            "data_period": f"Last {days_back} days",
            "category_trends": category_trends,
            "skill_trends": skill_trends,
            "summary": generate_summary(category_trends, skill_trends)
        })
        
    except Exception as e:
        print(f"Error analyzing trends: {e}")
        return jsonify({'error': str(e)}), 500

@app.route('/forecast/summary', methods=['GET'])
def get_trend_summary():
    """Get simplified trend summary"""
    try:
        # Get basic stats
        trends_response = get_employment_trends()
        trends_data = trends_response.get_json()
        
        if 'error' in trends_data:
            return jsonify({'error': trends_data['error']}), 500
        
        category_trends = trends_data.get('category_trends', {})
        skill_trends = trends_data.get('skill_trends', {})
        
        # Generate summary
        growing_categories = [
            {"category": cat, "growthRate": data["growth_rate"], "totalJobs": data["total_jobs"]}
            for cat, data in category_trends.items()
            if data["trend_direction"] == "increasing" and data["growth_rate"] > 0
        ]
        growing_categories.sort(key=lambda x: x["growthRate"], reverse=True)
        
        hot_skills = [
            {"skill": skill, "demand": data["total_demand"], "category": data["skill_category"]}
            for skill, data in skill_trends.items()
        ]
        hot_skills.sort(key=lambda x: x["demand"], reverse=True)
        
        return jsonify({
            "totalCategories": len(category_trends),
            "growingCategories": growing_categories[:5],
            "hotSkills": hot_skills[:10],
            "dataPeriod": trends_data.get("data_period", "Last 90 days")
        })
        
    except Exception as e:
        print(f"Error getting summary: {e}")
        return jsonify({'error': str(e)}), 500

@app.route('/forecast/skills', methods=['GET'])
def get_skill_forecasts():
    """Get skill demand analysis"""
    try:
        days_back = int(request.args.get('days', 90))
        
        query = """
        SELECT
            sm.name as skill_name,
            sm.category as skill_category,
            'PREFERRED' as importance,
            ROUND(AVG(sd.demandScore)) as demand_count
        FROM SkillMaster sm
        JOIN SkillDemand sd ON sm.id = sd.skillMasterId
        WHERE sm.isActive = 1
            AND sd.period >= DATE_SUB(NOW(), INTERVAL %s DAY)
        GROUP BY sm.name, sm.category
        ORDER BY demand_count DESC
        """
        
        df = db.query_to_dataframe(query, (days_back,))
        
        if df.empty:
            return jsonify({'error': 'No skill data found'}), 404
        
        # Aggregate by skill
        skill_summary = df.groupby(['skill_name', 'skill_category']).agg({
            'demand_count': 'sum'
        }).reset_index()
        
        top_skills = {}
        for _, row in skill_summary.head(20).iterrows():
            top_skills[row['skill_name']] = int(row['demand_count'])
        
        return jsonify({
            'analysis_date': datetime.now().isoformat(),
            'data_period': f'Last {days_back} days',
            'top_skills': top_skills
        })
        
    except Exception as e:
        print(f"Error getting skill forecasts: {e}")
        return jsonify({'error': str(e)}), 500

@app.route('/insights/market', methods=['GET'])
def get_market_insights():
    """Get market insights"""
    try:
        # Get trend data
        trends_response = get_employment_trends()
        trends_data = trends_response.get_json()
        
        if 'error' in trends_data:
            return jsonify({'error': trends_data['error']}), 500
        
        category_trends = trends_data.get('category_trends', {})
        
        # Calculate market health
        total_jobs = sum(data['total_jobs'] for data in category_trends.values())
        growing_categories = len([
            cat for cat, data in category_trends.items()
            if data['trend_direction'] == 'increasing'
        ])
        
        market_score = min(100, max(0, (total_jobs / 10) + (growing_categories * 5)))
        
        return jsonify({
            'analysis_date': datetime.now().isoformat(),
            'market_health': {
                'overall_score': round(market_score),
                'total_active_jobs': total_jobs,
                'growing_categories': growing_categories,
                'market_sentiment': 'positive' if growing_categories > 2 else 'neutral'
            },
            'data_quality': {
                'categories_analyzed': len(category_trends),
                'forecast_confidence': 'medium'
            }
        })
        
    except Exception as e:
        print(f"Error getting market insights: {e}")
        return jsonify({'error': str(e)}), 500

def generate_summary(category_trends, skill_trends):
    """Generate summary of trends"""
    summary = {
        "top_growing_categories": [],
        "hot_skills": []
    }
    
    # Top growing categories
    for category, data in category_trends.items():
        if data["trend_direction"] == "increasing" and data["growth_rate"] > 5:
            summary["top_growing_categories"].append({
                "category": category,
                "growth_rate": data["growth_rate"]
            })
    
    # Hot skills
    for skill, data in skill_trends.items():
        if data["total_demand"] > 5:
            summary["hot_skills"].append({
                "skill": skill,
                "demand": data["total_demand"],
                "category": data["skill_category"]
            })
    
    # Sort by relevance
    summary["top_growing_categories"] = sorted(
        summary["top_growing_categories"], 
        key=lambda x: x["growth_rate"], 
        reverse=True
    )[:5]
    
    summary["hot_skills"] = sorted(
        summary["hot_skills"], 
        key=lambda x: x["demand"], 
        reverse=True
    )[:10]
    
    return summary

if __name__ == '__main__':
    print("🚀 Starting Simple Employment Trend Forecasting API...")
    print("📊 Testing database connection...")
    
    if db.test_connection():
        print("✅ Database connected successfully")
        print("🌐 Starting Flask server on http://localhost:5001")
        app.run(host='0.0.0.0', port=5001, debug=True)
    else:
        print("❌ Database connection failed. Please check your configuration.")
        sys.exit(1)
