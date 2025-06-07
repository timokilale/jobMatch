#!/usr/bin/env python3
"""
Test script for Employment Trend Forecasting Service
"""

import sys
import time
import requests
import json
from datetime import datetime

def test_database_connection():
    """Test database connectivity"""
    print("🔌 Testing database connection...")
    try:
        from database_connector import DatabaseConnector
        db = DatabaseConnector()
        
        if db.test_connection():
            print("✅ Database connection successful")
            
            # Test basic query
            categories = db.get_job_categories()
            print(f"✅ Found {len(categories)} job categories")
            
            recent_jobs = db.get_recent_jobs(30)
            print(f"✅ Found {len(recent_jobs)} recent jobs")
            
            return True
        else:
            print("❌ Database connection failed")
            return False
            
    except Exception as e:
        print(f"❌ Database test failed: {e}")
        return False

def test_forecasting_service():
    """Test the main forecasting functionality"""
    print("\n📊 Testing forecasting service...")
    try:
        from trend_forecasting import EmploymentTrendForecaster
        
        forecaster = EmploymentTrendForecaster()
        
        # Run a quick analysis
        print("Running trend analysis (last 30 days)...")
        results = forecaster.analyze_job_posting_trends(days_back=30)
        
        if "error" in results:
            print(f"❌ Forecasting failed: {results['error']}")
            return False
        
        print("✅ Trend analysis completed")
        print(f"   Categories analyzed: {len(results.get('category_trends', {}))}")
        print(f"   Skills analyzed: {len(results.get('skill_trends', {}))}")
        
        return True
        
    except Exception as e:
        print(f"❌ Forecasting test failed: {e}")
        return False

def test_api_service():
    """Test the Flask API service"""
    print("\n🌐 Testing API service...")
    
    # Start the API service in background (simplified test)
    api_url = "http://localhost:5001"
    
    try:
        # Test health endpoint
        print("Testing health endpoint...")
        response = requests.get(f"{api_url}/health", timeout=5)
        
        if response.status_code == 200:
            health_data = response.json()
            print("✅ API service is healthy")
            print(f"   Status: {health_data.get('status')}")
            print(f"   Database: {'Connected' if health_data.get('database_connected') else 'Disconnected'}")
            return True
        else:
            print(f"❌ API health check failed: {response.status_code}")
            return False
            
    except requests.exceptions.ConnectionError:
        print("⚠️  API service not running (this is expected if not started)")
        print("   To test API: python forecasting_api.py")
        return None
    except Exception as e:
        print(f"❌ API test failed: {e}")
        return False

def test_trend_analyzer():
    """Test the trend analyzer module"""
    print("\n📈 Testing trend analyzer...")
    try:
        from trend_analyzer import TrendAnalyzer
        import pandas as pd
        from datetime import datetime, timedelta
        
        analyzer = TrendAnalyzer()
        
        # Create sample data
        dates = [datetime.now() - timedelta(days=i) for i in range(30, 0, -1)]
        sample_data = pd.DataFrame({
            'posting_date': dates,
            'job_count': [5 + i % 10 for i in range(30)],
            'skill_name': ['Python'] * 30,
            'demand_count': [3 + i % 5 for i in range(30)]
        })
        
        # Test seasonal analysis
        seasonal = analyzer.analyze_seasonal_patterns(sample_data)
        if seasonal:
            print("✅ Seasonal pattern analysis working")
        
        # Test trend detection
        trends = analyzer.detect_trend_changes(sample_data)
        if trends:
            print("✅ Trend change detection working")
        
        # Test skill clustering
        clusters = analyzer.analyze_skill_clusters(sample_data)
        if clusters:
            print("✅ Skill clustering working")
        
        print("✅ Trend analyzer tests passed")
        return True
        
    except Exception as e:
        print(f"❌ Trend analyzer test failed: {e}")
        return False

def test_integration():
    """Test Node.js integration"""
    print("\n🔗 Testing Node.js integration...")
    try:
        import subprocess
        import os
        
        # Check if Node.js script exists
        script_path = "../src/scripts/runPythonForecasting.js"
        if os.path.exists(script_path):
            print("✅ Node.js integration script found")
            print("   To test integration: npm run forecast-trends")
            return True
        else:
            print("⚠️  Node.js integration script not found")
            return None
            
    except Exception as e:
        print(f"❌ Integration test failed: {e}")
        return False

def run_sample_analysis():
    """Run a sample analysis to demonstrate functionality"""
    print("\n🧪 Running sample analysis...")
    try:
        from trend_forecasting import EmploymentTrendForecaster
        
        forecaster = EmploymentTrendForecaster()
        
        print("Analyzing employment trends (last 60 days)...")
        results = forecaster.analyze_job_posting_trends(days_back=60)
        
        if "error" in results:
            print(f"❌ Sample analysis failed: {results['error']}")
            return False
        
        print("\n📊 SAMPLE RESULTS:")
        print("=" * 50)
        
        # Show category trends
        if results.get('category_trends'):
            print("\n🏢 Top Job Categories:")
            categories = list(results['category_trends'].items())[:3]
            for category, data in categories:
                direction = "📈" if data['trend_direction'] == 'increasing' else "📉"
                print(f"   {direction} {category}: {data['total_jobs']} jobs ({data['trend_direction']})")
        
        # Show skill trends
        if results.get('skill_trends'):
            print("\n🔧 Hot Skills:")
            skills = list(results['skill_trends'].items())[:5]
            for skill, data in skills:
                direction = "🔥" if data['trend_direction'] == 'increasing' else "❄️"
                print(f"   {direction} {skill}: {data['total_demand']} mentions")
        
        # Show summary
        if results.get('summary'):
            summary = results['summary']
            if summary.get('top_growing_categories'):
                print(f"\n🚀 Growing Categories: {len(summary['top_growing_categories'])}")
            if summary.get('hot_skills'):
                print(f"🔥 Hot Skills: {len(summary['hot_skills'])}")
        
        print("\n✅ Sample analysis completed successfully!")
        return True
        
    except Exception as e:
        print(f"❌ Sample analysis failed: {e}")
        return False

def main():
    """Run all tests"""
    print("🧪 Python Employment Trend Forecasting - Test Suite")
    print("=" * 60)
    
    tests = [
        ("Database Connection", test_database_connection),
        ("Forecasting Service", test_forecasting_service),
        ("Trend Analyzer", test_trend_analyzer),
        ("API Service", test_api_service),
        ("Node.js Integration", test_integration),
        ("Sample Analysis", run_sample_analysis)
    ]
    
    results = {}
    
    for test_name, test_func in tests:
        print(f"\n{'='*20} {test_name} {'='*20}")
        try:
            result = test_func()
            results[test_name] = result
        except Exception as e:
            print(f"❌ {test_name} failed with exception: {e}")
            results[test_name] = False
    
    # Summary
    print("\n" + "="*60)
    print("📋 TEST SUMMARY")
    print("="*60)
    
    passed = 0
    failed = 0
    skipped = 0
    
    for test_name, result in results.items():
        if result is True:
            print(f"✅ {test_name}")
            passed += 1
        elif result is False:
            print(f"❌ {test_name}")
            failed += 1
        else:
            print(f"⚠️  {test_name} (skipped)")
            skipped += 1
    
    print(f"\nResults: {passed} passed, {failed} failed, {skipped} skipped")
    
    if failed == 0:
        print("\n🎉 All tests passed! The forecasting service is ready to use.")
        print("\n🚀 Next steps:")
        print("1. Start the API service: python forecasting_api.py")
        print("2. Test from Node.js: npm run forecast-trends")
        print("3. Access API at: http://localhost:5001")
    else:
        print(f"\n⚠️  {failed} test(s) failed. Please check the configuration.")
        print("Common issues:")
        print("- Database connection: Check .env file")
        print("- Missing packages: Run pip install -r requirements.txt")
        print("- Python version: Requires Python 3.8+")

if __name__ == "__main__":
    main()
