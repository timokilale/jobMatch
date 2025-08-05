import pandas as pd
from flask import Flask, json, jsonify, request
from datetime import datetime, timedelta
import pmdarima as pm
import numpy as np
import os
import logging
import warnings
from sklearn.exceptions import ConvergenceWarning
from datetime import datetime, timedelta

# --- Setup logging and suppress warnings ---
logging.basicConfig(level=logging.INFO)
# Suppress specific warnings from sklearn and pmdarima to clean up logs
warnings.filterwarnings("ignore", category=FutureWarning)
warnings.filterwarnings("ignore", category=UserWarning)
warnings.filterwarnings("ignore", category=ConvergenceWarning)

app = Flask(__name__)

# --- Configuration ---
# Use an environment variable for the CSV path, with a fallback for local development
CSV_FILE_PATH = os.environ.get('JOB_POSTINGS_CSV_PATH', 'backend/python_services/job_postings.csv')
FORECAST_PERIOD_DAYS = 180 # Approx 6 months

def load_and_prepare_data():
    """
    Loads and prepares the job postings data from the CSV file.
    - Converts 'date_posted' to datetime objects.
    - Handles potential errors during loading.
    """
    try:
        # Adjust the path to be relative to the workspace root
        base_dir = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
        full_path = os.path.join(base_dir, 'job_postings.csv')

        if not os.path.exists(full_path):
            logging.error(f"CSV file not found at {full_path}")
            return None
            
        df = pd.read_csv(full_path)
        
        # --- Simulate date_posted column ---
        # Since the CSV doesn't have a date, we simulate it by distributing
        # the job postings over the last 30 days.
        num_rows = len(df)
        end_date = datetime.now()
        start_date = end_date - timedelta(days=30)
        
        # Create a date range and assign it to the new column
        start_ts = start_date.timestamp()
        end_ts = end_date.timestamp()
        simulated_dates = pd.to_datetime(np.linspace(start_ts, end_ts, num_rows), unit='s')
        df['date_posted'] = simulated_dates
        
        logging.info(f"Simulated 'date_posted' column for {num_rows} records from {start_date.date()} to {end_date.date()}.")
        
        return df
    except Exception as e:
        logging.error(f"Error loading or parsing CSV file: {e}")
        return None

def generate_forecast(series, periods):
    """
    Generates a forecast for a given time series using auto_arima.
    Enhanced with robust error handling for NaN and edge cases.
    """
    try:
        # Clean the series - remove NaN and infinite values
        series_clean = series.replace([np.inf, -np.inf], np.nan).dropna()
        
        if len(series_clean) < 14:  # Need at least 2 weeks of data
            logging.warning(f"Not enough data points ({len(series_clean)}) to generate a reliable forecast.")
            return [], 0.5
        
        # Check if all values are zero or very small
        if series_clean.sum() < 1:
            logging.warning(f"Series has no meaningful data (sum: {series_clean.sum()})")
            return [], 0.5
        
        # Check for constant series (no variation)
        if series_clean.std() == 0:
            logging.warning(f"Series has no variation (std: {series_clean.std()})")
            return [], 0.5
        
        # Ensure all values are non-negative
        series_clean = np.maximum(0, series_clean)
        
        # Fit the model with enhanced error handling
        model = pm.auto_arima(series_clean,
                              start_p=1, start_q=1,
                              test='adf',
                              max_p=3, max_q=3,
                              m=7,  # weekly seasonality
                              d=None,
                              seasonal=True,
                              start_P=0, 
                              D=1, 
                              trace=False,
                              error_action='ignore',  
                              suppress_warnings=True, 
                              stepwise=True,
                              random_state=42)  # Add random state for reproducibility

        # Generate forecast and confidence intervals
        forecast_values, conf_int = model.predict(n_periods=periods, return_conf_int=True)
        
        # Ensure forecast values are non-negative integers
        forecast_values = np.maximum(0, np.round(forecast_values)).astype(int)
        
        # Calculate confidence
        avg_forecast = np.mean(forecast_values)
        if avg_forecast > 0:
            conf_width = np.mean(conf_int[:, 1] - conf_int[:, 0])
            confidence = max(0.1, 1 - (conf_width / (2 * avg_forecast)))
        else:
            confidence = 0.5

        return forecast_values.tolist(), confidence
        
    except Exception as e:
        logging.warning(f"Error generating forecast for series: {e}")
        return [], 0.5

def _analyze_trends_for_column(df, column_name):
    """
    Helper function to perform trend analysis on a specific column.
    This version is optimized to only analyze the Top 10 most frequent items.
    """
    trends = {}
    if column_name not in df.columns:
        logging.warning(f"Column '{column_name}' not found in CSV. Skipping its trend analysis.")
        return trends

    # --- Optimization: Find the Top 10 most frequent items ---
    top_10_items = df[column_name].value_counts().nlargest(10).index
    logging.info(f"Analyzing Top 10 for '{column_name}': {top_10_items.tolist()}")

    # The column likely contains single values, so we group directly.
    counts = df.groupby([pd.Grouper(key='date_posted', freq='D'), column_name]).size().unstack(fill_value=0)
    
    # Filter counts to only include the top 10 items to reduce workload
    counts = counts[top_10_items]
    
    for item in counts.columns:
        series = counts[item]
        
        # Generate forecast
        forecast_values, confidence = generate_forecast(series, FORECAST_PERIOD_DAYS)
        
        # Format forecast output
        forecast_list = []
        if forecast_values:
            last_known_value = series.iloc[-1] if not series.empty else 0
            start_date = series.index.max() + timedelta(days=1)
            
            for i, val in enumerate(forecast_values):
                current_date = start_date + timedelta(days=i)
                change = ((val - last_known_value) / last_known_value * 100) if last_known_value > 0 else 0
                forecast_list.append({
                    "period": current_date.strftime('%Y-%m-%d'),
                    "value": int(val),
                    "change": round(change, 2)
                })

        # Determine overall trend
        overall_trend = "stable"
        if forecast_list:
            start_val = forecast_list[0]['value']
            end_val = forecast_list[-1]['value']
            if end_val > start_val * 1.1:
                overall_trend = "growing"
            elif end_val < start_val * 0.9:
                overall_trend = "declining"

        trends[item] = {
            "trend": overall_trend,
            "growth_rate": round(forecast_list[-1]['change'], 2) if forecast_list else 0,
            "forecast_confidence": round(confidence, 2),
            "forecast": forecast_list
        }
    return trends

def _analyze_trends_for_column_full(df, column_name):
    """
    Helper function to perform trend analysis on ALL items in a column.
    Enhanced with robust error handling for edge cases.
    """
    trends = {}
    if column_name not in df.columns:
        logging.warning(f"Column '{column_name}' not found in CSV. Skipping its trend analysis.")
        return trends

    # Get all items with sufficient data
    value_counts = df[column_name].value_counts()
    # Filter out items with very few occurrences (less than 5)
    valid_items = value_counts[value_counts >= 5].index
    logging.info(f"Analyzing {len(valid_items)} items for '{column_name}' (filtered from {len(value_counts)} total)")

    # Group by date and column
    counts = df.groupby([pd.Grouper(key='date_posted', freq='D'), column_name]).size().unstack(fill_value=0)
    
    # Only process items that have sufficient data
    available_items = [item for item in valid_items if item in counts.columns]
    
    for item in available_items:
        try:
            series = counts[item]
            
            # Skip if series is empty or has no variation
            if series.empty or series.sum() == 0:
                logging.debug(f"Skipping {item} - no data")
                continue
            
            # Generate forecast
            forecast_values, confidence = generate_forecast(series, FORECAST_PERIOD_DAYS)
            
            # Format forecast output
            forecast_list = []
            if forecast_values:
                last_known_value = series.iloc[-1] if not series.empty else 0
                start_date = series.index.max() + timedelta(days=1)
                
                for i, val in enumerate(forecast_values):
                    current_date = start_date + timedelta(days=i)
                    change = ((val - last_known_value) / last_known_value * 100) if last_known_value > 0 else 0
                    forecast_list.append({
                        "period": current_date.strftime('%Y-%m-%d'),
                        "value": int(val),
                        "change": round(change, 2)
                    })

            # Determine overall trend
            overall_trend = "stable"
            if forecast_list:
                start_val = forecast_list[0]['value']
                end_val = forecast_list[-1]['value']
                if end_val > start_val * 1.1:
                    overall_trend = "growing"
                elif end_val < start_val * 0.9:
                    overall_trend = "declining"

            trends[item] = {
                "trend": overall_trend,
                "growth_rate": round(forecast_list[-1]['change'], 2) if forecast_list else 0,
                "forecast_confidence": round(confidence, 2),
                "forecast": forecast_list
            }
            
        except Exception as e:
            logging.warning(f"Error processing {item}: {e}")
            continue
    
    logging.info(f"Successfully analyzed {len(trends)} {column_name} items")
    return trends

@app.route('/trends', methods=['POST'])
def analyze_trends():
    """
    Fast endpoint - returns pre-computed results from cache
    """
    try:
        # Try to load cached forecasts
        cache_file = os.path.join(os.path.dirname(__file__), 'cached_forecasts.json')
        
        if os.path.exists(cache_file):
            with open(cache_file, 'r') as f:
                cached_forecasts = json.load(f)
                
            # Check if cache is fresh (less than 24 hours old)
            last_updated = datetime.fromisoformat(cached_forecasts.get('last_updated', '1970-01-01'))
            if datetime.now() - last_updated < timedelta(hours=24):
                return jsonify(cached_forecasts)
            else:
                logging.warning("Cache is stale, but returning it anyway")
                return jsonify(cached_forecasts)
        else:
            return jsonify({
                "error": "Forecasts not available", 
                "message": "Please run precompute_forecasts.py to generate forecasts",
                "status": "cache_missing"
            }), 503
            
    except Exception as e:
        logging.error(f"Error serving cached forecasts: {e}")
        return jsonify({
            "error": "Failed to load cached forecasts",
            "message": str(e),
            "status": "error"
        }), 500

if __name__ == '__main__':
    app.run(debug=True, port=5001)
