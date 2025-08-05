#!/usr/bin/env python3
"""
Cache management utilities for forecasting service
"""

import os
import json
import logging
from datetime import datetime
from precompute_forecasts import precompute_forecasts, load_cached_forecasts

logging.basicConfig(level=logging.INFO)

def check_cache_status():
    """Check if cache exists and is fresh"""
    cache_file = os.path.join(os.path.dirname(__file__), 'cached_forecasts.json')
    
    if not os.path.exists(cache_file):
        print("❌ Cache file does not exist")
        return False
        
    try:
        with open(cache_file, 'r') as f:
            data = json.load(f)
            
        last_updated = datetime.fromisoformat(data.get('last_updated', '1970-01-01'))
        age_hours = (datetime.now() - last_updated).total_seconds() / 3600
        
        print(f"✅ Cache exists")
        print(f"📅 Last updated: {last_updated}")
        print(f"⏰ Age: {age_hours:.1f} hours")
        print(f"📊 Categories: {data.get('total_categories', 0)}")
        print(f"🔧 Skills: {data.get('total_skills', 0)}")
        
        if age_hours > 24:
            print("⚠️  Cache is stale (>24 hours)")
            return False
        else:
            print("✅ Cache is fresh")
            return True
            
    except Exception as e:
        print(f"❌ Error reading cache: {e}")
        return False

def force_update_cache():
    """Force update the cache"""
    print("🔄 Forcing cache update...")
    success = precompute_forecasts()
    if success:
        print("✅ Cache updated successfully")
    else:
        print("❌ Cache update failed")

if __name__ == "__main__":
    import sys
    
    if len(sys.argv) > 1:
        command = sys.argv[1]
        
        if command == "status":
            check_cache_status()
        elif command == "update":
            force_update_cache()
        elif command == "check":
            if not check_cache_status():
                print("\n🔄 Updating cache...")
                force_update_cache()
        else:
            print("Usage: python manage_cache.py [status|update|check]")
    else:
        print("Usage: python manage_cache.py [status|update|check]")