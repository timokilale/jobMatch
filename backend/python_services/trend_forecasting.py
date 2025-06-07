#!/usr/bin/env python3
"""
Employment Trend Forecasting Service
Analyzes job posting patterns and predicts future employment trends
"""

import os
import sys
import json
import pandas as pd
import numpy as np
from datetime import datetime, timedelta
from sqlalchemy import create_engine, text
from prophet import Prophet
from sklearn.preprocessing import StandardScaler
from sklearn.ensemble import RandomForestRegressor
import warnings
warnings.filterwarnings('ignore')

# Add the current directory to Python path
sys.path.append(os.path.dirname(os.path.abspath(__file__)))

from database_connector import DatabaseConnector
from trend_analyzer import TrendAnalyzer

class EmploymentTrendForecaster:
    def __init__(self):
        self.db = DatabaseConnector()
        self.analyzer = TrendAnalyzer()
        self.models = {}
        
    def analyze_job_posting_trends(self, days_back=365):
        """Analyze job posting patterns over time"""
        try:
            # Get job posting data
            query = """
            SELECT 
                DATE(j.createdAt) as posting_date,
                jc.name as category,
                j.employmentType,
                j.experienceLevel,
                j.location,
                COUNT(*) as job_count,
                AVG(COALESCE(j.salaryMin, 0)) as avg_salary_min,
                AVG(COALESCE(j.salaryMax, 0)) as avg_salary_max
            FROM Job j
            LEFT JOIN _JobToJobCategory jtc ON j.id = jtc.A
            LEFT JOIN JobCategory jc ON jtc.B = jc.id
            WHERE j.createdAt >= DATE_SUB(NOW(), INTERVAL %s DAY)
                AND j.status IN ('ACTIVE', 'CLOSED')
            GROUP BY DATE(j.createdAt), jc.name, j.employmentType, j.experienceLevel, j.location
            ORDER BY posting_date DESC
            """
            
            df = self.db.query_to_dataframe(query, (days_back,))
            
            if df.empty:
                return {"error": "No job posting data found"}
            
            # Analyze trends by category
            trends_by_category = self._analyze_category_trends(df)
            
            # Analyze skill demand trends
            skill_trends = self._analyze_skill_demand_trends(days_back)
            
            # Generate forecasts
            forecasts = self._generate_forecasts(df)
            
            return {
                "analysis_date": datetime.now().isoformat(),
                "data_period": f"Last {days_back} days",
                "category_trends": trends_by_category,
                "skill_trends": skill_trends,
                "forecasts": forecasts,
                "summary": self._generate_trend_summary(trends_by_category, skill_trends)
            }
            
        except Exception as e:
            print(f"Error analyzing job posting trends: {e}")
            return {"error": str(e)}
    
    def _analyze_category_trends(self, df):
        """Analyze trends by job category"""
        category_trends = {}
        
        for category in df['category'].dropna().unique():
            category_data = df[df['category'] == category].copy()
            
            # Group by date and sum job counts
            daily_counts = category_data.groupby('posting_date')['job_count'].sum().reset_index()
            daily_counts['posting_date'] = pd.to_datetime(daily_counts['posting_date'])
            daily_counts = daily_counts.sort_values('posting_date')
            
            if len(daily_counts) < 7:  # Need at least a week of data
                continue
                
            # Calculate trend metrics
            recent_avg = daily_counts.tail(7)['job_count'].mean()
            older_avg = daily_counts.head(7)['job_count'].mean()
            
            trend_direction = "increasing" if recent_avg > older_avg else "decreasing"
            trend_strength = abs(recent_avg - older_avg) / max(older_avg, 1) * 100
            
            # Calculate growth rate
            if len(daily_counts) >= 30:
                growth_rate = self._calculate_growth_rate(daily_counts['job_count'].values)
            else:
                growth_rate = 0
            
            category_trends[category] = {
                "total_jobs": int(daily_counts['job_count'].sum()),
                "avg_daily_postings": round(daily_counts['job_count'].mean(), 2),
                "trend_direction": trend_direction,
                "trend_strength": round(trend_strength, 2),
                "growth_rate": round(growth_rate, 2),
                "peak_day": daily_counts.loc[daily_counts['job_count'].idxmax(), 'posting_date'].strftime('%Y-%m-%d'),
                "recent_activity": round(recent_avg, 2)
            }
        
        return category_trends
    
    def _analyze_skill_demand_trends(self, days_back):
        """Analyze skill demand trends based on job requirements"""
        try:
            query = """
            SELECT 
                DATE(j.createdAt) as posting_date,
                sm.name as skill_name,
                sm.category as skill_category,
                jr.importance,
                jr.proficiencyLevel,
                COUNT(*) as demand_count
            FROM Job j
            JOIN JobRequirement jr ON j.id = jr.jobId
            JOIN SkillMaster sm ON jr.skillMasterId = sm.id
            WHERE j.createdAt >= DATE_SUB(NOW(), INTERVAL %s DAY)
                AND j.status IN ('ACTIVE', 'CLOSED')
                AND sm.isActive = 1
            GROUP BY DATE(j.createdAt), sm.name, sm.category, jr.importance, jr.proficiencyLevel
            ORDER BY posting_date DESC, demand_count DESC
            """
            
            df = self.db.query_to_dataframe(query, (days_back,))
            
            if df.empty:
                return {}
            
            skill_trends = {}
            
            # Analyze top skills
            top_skills = df.groupby('skill_name')['demand_count'].sum().sort_values(ascending=False).head(20)
            
            for skill in top_skills.index:
                skill_data = df[df['skill_name'] == skill].copy()
                
                # Group by date
                daily_demand = skill_data.groupby('posting_date')['demand_count'].sum().reset_index()
                daily_demand['posting_date'] = pd.to_datetime(daily_demand['posting_date'])
                daily_demand = daily_demand.sort_values('posting_date')
                
                if len(daily_demand) < 5:
                    continue
                
                # Calculate trend
                recent_avg = daily_demand.tail(7)['demand_count'].mean()
                older_avg = daily_demand.head(7)['demand_count'].mean()
                
                trend_direction = "increasing" if recent_avg > older_avg else "decreasing"
                
                skill_trends[skill] = {
                    "total_demand": int(top_skills[skill]),
                    "trend_direction": trend_direction,
                    "avg_daily_demand": round(daily_demand['demand_count'].mean(), 2),
                    "skill_category": skill_data['skill_category'].iloc[0],
                    "importance_distribution": skill_data['importance'].value_counts().to_dict()
                }
            
            return skill_trends
            
        except Exception as e:
            print(f"Error analyzing skill demand trends: {e}")
            return {}
    
    def _generate_forecasts(self, df):
        """Generate forecasts using Prophet and other models"""
        forecasts = {}
        
        try:
            # Forecast by category
            for category in df['category'].dropna().unique():
                category_data = df[df['category'] == category].copy()
                
                # Prepare data for Prophet
                daily_counts = category_data.groupby('posting_date')['job_count'].sum().reset_index()
                daily_counts['posting_date'] = pd.to_datetime(daily_counts['posting_date'])
                daily_counts = daily_counts.sort_values('posting_date')
                
                if len(daily_counts) < 30:  # Need at least 30 days for forecasting
                    continue
                
                # Prepare Prophet data
                prophet_data = daily_counts.rename(columns={
                    'posting_date': 'ds',
                    'job_count': 'y'
                })
                
                # Create and fit Prophet model
                model = Prophet(
                    daily_seasonality=False,
                    weekly_seasonality=True,
                    yearly_seasonality=False,
                    changepoint_prior_scale=0.05
                )
                
                model.fit(prophet_data)
                
                # Generate future dates (next 30 days)
                future = model.make_future_dataframe(periods=30)
                forecast = model.predict(future)
                
                # Extract forecast for next 30 days
                future_forecast = forecast.tail(30)[['ds', 'yhat', 'yhat_lower', 'yhat_upper']]
                
                forecasts[category] = {
                    "forecast_period": "30 days",
                    "predictions": [
                        {
                            "date": row['ds'].strftime('%Y-%m-%d'),
                            "predicted_jobs": max(0, round(row['yhat'])),
                            "lower_bound": max(0, round(row['yhat_lower'])),
                            "upper_bound": max(0, round(row['yhat_upper']))
                        }
                        for _, row in future_forecast.iterrows()
                    ],
                    "trend_components": {
                        "overall_trend": "increasing" if forecast['trend'].iloc[-1] > forecast['trend'].iloc[0] else "decreasing",
                        "weekly_pattern": "detected" if model.weekly_seasonality else "none"
                    }
                }
        
        except Exception as e:
            print(f"Error generating forecasts: {e}")
            forecasts["error"] = str(e)
        
        return forecasts
    
    def _calculate_growth_rate(self, values):
        """Calculate compound growth rate"""
        if len(values) < 2:
            return 0
        
        start_value = max(values[0], 1)
        end_value = max(values[-1], 1)
        periods = len(values) - 1
        
        growth_rate = ((end_value / start_value) ** (1/periods) - 1) * 100
        return growth_rate
    
    def _generate_trend_summary(self, category_trends, skill_trends):
        """Generate a summary of key trends"""
        summary = {
            "top_growing_categories": [],
            "declining_categories": [],
            "hot_skills": [],
            "emerging_patterns": []
        }
        
        # Analyze category trends
        for category, data in category_trends.items():
            if data["trend_direction"] == "increasing" and data["growth_rate"] > 5:
                summary["top_growing_categories"].append({
                    "category": category,
                    "growth_rate": data["growth_rate"]
                })
            elif data["trend_direction"] == "decreasing" and data["growth_rate"] < -5:
                summary["declining_categories"].append({
                    "category": category,
                    "decline_rate": abs(data["growth_rate"])
                })
        
        # Analyze skill trends
        for skill, data in skill_trends.items():
            if data["trend_direction"] == "increasing" and data["total_demand"] > 10:
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

def main():
    """Main function to run forecasting analysis"""
    forecaster = EmploymentTrendForecaster()
    
    print("🔍 Starting Employment Trend Analysis...")
    
    # Run analysis
    results = forecaster.analyze_job_posting_trends(days_back=180)  # 6 months
    
    if "error" in results:
        print(f"❌ Error: {results['error']}")
        return
    
    print("✅ Analysis completed successfully!")
    print(f"📊 Analyzed data from: {results['data_period']}")
    print(f"📈 Categories analyzed: {len(results['category_trends'])}")
    print(f"🔧 Skills analyzed: {len(results['skill_trends'])}")
    
    # Save results to file
    output_file = f"trend_analysis_{datetime.now().strftime('%Y%m%d_%H%M%S')}.json"
    with open(output_file, 'w') as f:
        json.dump(results, f, indent=2, default=str)
    
    print(f"💾 Results saved to: {output_file}")
    
    # Print summary
    summary = results.get('summary', {})
    if summary.get('top_growing_categories'):
        print("\n🚀 Top Growing Categories:")
        for cat in summary['top_growing_categories'][:3]:
            print(f"  • {cat['category']}: +{cat['growth_rate']:.1f}%")
    
    if summary.get('hot_skills'):
        print("\n🔥 Hot Skills in Demand:")
        for skill in summary['hot_skills'][:5]:
            print(f"  • {skill['skill']}: {skill['demand']} mentions")

if __name__ == "__main__":
    main()
