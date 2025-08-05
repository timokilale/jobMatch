#!/usr/bin/env python3
"""
Background job to pre-compute forecasts and cache them
Run this daily via cron or task scheduler
"""

import os
import sys
import json
import logging
from datetime import datetime, timedelta
import pandas as pd
import numpy as np

# Add current directory to path
sys.path.append(os.path.dirname(os.path.abspath(__file__)))

from csv_forecasting_service import load_and_prepare_data, _analyze_trends_for_column_full

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(levelname)s - %(message)s',
    handlers=[
        logging.FileHandler('precompute_forecasts.log'),
        logging.StreamHandler()
    ]
)

def precompute_forecasts():
    """Pre-compute forecasts and save to cache"""
    try:
        logging.info("Starting forecast pre-computation...")
        
        # Load and prepare data
        df = load_and_prepare_data()
        if df is None:
            logging.error("Failed to load data")
            return False
            
        logging.info(f"Loaded {len(df)} records for analysis")
        
        # Generate forecasts using FULL analysis with enhanced error handling
        logging.info("Starting industry analysis...")
        category_trends = _analyze_trends_for_column_full(df, 'industry')
        
        logging.info("Starting skill analysis...")
        skill_trends = _analyze_trends_for_column_full(df, 'function')
        
        forecasts = {
            "category_trends": category_trends,
            "skill_trends": skill_trends,
            "last_updated": datetime.now().isoformat(),
            "data_period": "Last 365 days",
            "total_categories": len(category_trends),
            "total_skills": len(skill_trends)
        }
        
        # Save to JSON file (primary cache)
        cache_file = os.path.join(os.path.dirname(__file__), 'cached_forecasts.json')
        with open(cache_file, 'w') as f:
            json.dump(forecasts, f, indent=2, default=str)
            
        logging.info(f"Forecasts cached successfully to {cache_file}")
        logging.info(f"Generated forecasts for {forecasts['total_categories']} categories and {forecasts['total_skills']} skills")
        
        return True
        
    except Exception as e:
        logging.error(f"Error pre-computing forecasts: {e}")
        return False

def load_cached_forecasts():
    """Load cached forecasts from file"""
    try:
        cache_file = os.path.join(os.path.dirname(__file__), 'cached_forecasts.json')
        if os.path.exists(cache_file):
            with open(cache_file, 'r') as f:
                return json.load(f)
        return None
    except Exception as e:
        logging.error(f"Error loading cached forecasts: {e}")
        return None

if __name__ == "__main__":
    success = precompute_forecasts()
    if success:
        print("Forecast pre-computation completed successfully")
        sys.exit(0)
    else:
        print("Forecast pre-computation failed")
        sys.exit(1)