#!/usr/bin/env python3
"""
CSV-Based Employment Trend Forecasting API
Trains a model on a local CSV and serves predictions.
"""

import os
import sys
import pandas as pd
from datetime import datetime
from flask import Flask, jsonify
from flask_cors import CORS
from sklearn.ensemble import RandomForestRegressor
from sklearn.model_selection import train_test_split
from sklearn.metrics import mean_squared_error
import joblib

# Add current directory to path
sys.path.append(os.path.dirname(os.path.abspath(__file__)))

app = Flask(__name__)
CORS(app)

MODEL_PATH = 'csv_trained_model.joblib'
CSV_PATH = os.path.join(os.path.dirname(__file__), '../job_postings.csv')

def train_model():
    """Trains a model from the CSV file and saves it."""
    print("Training new model from CSV...")
    
    if not os.path.exists(CSV_PATH):
        raise FileNotFoundError(f"CSV file not found at {CSV_PATH}")

    # Load and preprocess data
    df = pd.read_csv(CSV_PATH)
    print(f"CSV columns: {list(df.columns)}")
    
    # Since the CSV doesn't have posted_at, we'll create synthetic dates
    # or use job_id as a proxy for time sequence
    df['synthetic_date'] = pd.date_range(start='2024-01-01', periods=len(df), freq='D')
    df['posted_date'] = df['synthetic_date'].dt.date
    
    daily_counts = df.groupby('posted_date').size().reset_index(name='job_count')
    daily_counts['posted_date'] = pd.to_datetime(daily_counts['posted_date'])
    daily_counts = daily_counts.set_index('posted_date')
    
    # Feature engineering
    daily_counts['day_of_year'] = daily_counts.index.dayofyear
    daily_counts['day_of_week'] = daily_counts.index.dayofweek
    daily_counts['month'] = daily_counts.index.month
    daily_counts['year'] = daily_counts.index.year

    X = daily_counts[['day_of_year', 'day_of_week', 'month', 'year']]
    y = daily_counts['job_count']

    # Train the model
    model = RandomForestRegressor(n_estimators=100, random_state=42)
    model.fit(X, y)

    # Save the model
    joblib.dump(model, MODEL_PATH)
    print(f"Model trained and saved to {MODEL_PATH}")
    return model

def get_model():
    """Loads the trained model, or trains a new one if it doesn't exist."""
    if not os.path.exists(MODEL_PATH):
        return train_model()
    
    print(f"Loading existing model from {MODEL_PATH}")
    return joblib.load(MODEL_PATH)

model = get_model()

@app.route('/health', methods=['GET'])
def health_check():
    """Health check endpoint"""
    return jsonify({
        'status': 'healthy',
        'service': 'CSV Forecasting API',
        'timestamp': datetime.now().isoformat()
    })

@app.route('/forecast', methods=['GET'])
def get_forecast():
    """Generate a 30-day forecast."""
    try:
        # Create future dates for prediction
        last_date = datetime.now()
        future_dates = pd.to_datetime([last_date + pd.DateOffset(days=i) for i in range(30)])
        
        future_df = pd.DataFrame(index=future_dates)
        future_df['day_of_year'] = future_df.index.dayofyear
        future_df['day_of_week'] = future_df.index.dayofweek
        future_df['month'] = future_df.index.month
        future_df['year'] = future_df.index.year

        # Make predictions
        predictions = model.predict(future_df)
        
        forecast_data = []
        for i, date in enumerate(future_dates):
            forecast_data.append({
                'date': date.strftime('%Y-%m-%d'),
                'predicted_jobs': int(predictions[i])
            })
            
        return jsonify({
            'forecast': forecast_data,
            'generated_at': datetime.now().isoformat()
        })

    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    print("Starting CSV-Based Forecasting API...")
    app.run(host='0.0.0.0', port=5002, debug=True)
