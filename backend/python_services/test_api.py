#!/usr/bin/env python3
"""
Test script for the forecasting API
"""

import requests
import json

def test_api():
    base_url = "http://localhost:5001"
    
    print("🧪 Testing Employment Trend Forecasting API")
    print("=" * 50)
    
    # Test health endpoint
    try:
        print("1. Testing health endpoint...")
        response = requests.get(f"{base_url}/health", timeout=5)
        if response.status_code == 200:
            data = response.json()
            print(f"   ✅ Status: {data['status']}")
            print(f"   ✅ Database: {'Connected' if data['database_connected'] else 'Disconnected'}")
        else:
            print(f"   ❌ Health check failed: {response.status_code}")
            return False
    except Exception as e:
        print(f"   ❌ Health check error: {e}")
        return False
    
    # Test summary endpoint
    try:
        print("\n2. Testing summary endpoint...")
        response = requests.get(f"{base_url}/forecast/summary", timeout=10)
        if response.status_code == 200:
            data = response.json()
            print(f"   ✅ Total Categories: {data.get('totalCategories', 0)}")
            print(f"   ✅ Growing Categories: {len(data.get('growingCategories', []))}")
            print(f"   ✅ Hot Skills: {len(data.get('hotSkills', []))}")
            
            # Show some sample data
            if data.get('growingCategories'):
                print(f"   📈 Top Growing: {data['growingCategories'][0]['category']} (+{data['growingCategories'][0]['growthRate']:.1f}%)")
            
            if data.get('hotSkills'):
                print(f"   🔥 Top Skill: {data['hotSkills'][0]['skill']} ({data['hotSkills'][0]['demand']} mentions)")
                
        else:
            print(f"   ❌ Summary failed: {response.status_code}")
            print(f"   Response: {response.text}")
    except Exception as e:
        print(f"   ❌ Summary error: {e}")
    
    # Test trends endpoint
    try:
        print("\n3. Testing trends endpoint...")
        response = requests.get(f"{base_url}/forecast/trends?days=30", timeout=15)
        if response.status_code == 200:
            data = response.json()
            print(f"   ✅ Analysis Period: {data.get('data_period', 'Unknown')}")
            print(f"   ✅ Categories Found: {len(data.get('category_trends', {}))}")
            print(f"   ✅ Skills Found: {len(data.get('skill_trends', {}))}")
        else:
            print(f"   ❌ Trends failed: {response.status_code}")
            print(f"   Response: {response.text}")
    except Exception as e:
        print(f"   ❌ Trends error: {e}")
    
    print("\n" + "=" * 50)
    print("✅ API testing completed!")
    return True

if __name__ == "__main__":
    test_api()
