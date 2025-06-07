"""
Advanced Trend Analysis Module
Provides sophisticated analysis of employment and skill trends
"""

import pandas as pd
import numpy as np
from datetime import datetime, timedelta
from sklearn.preprocessing import StandardScaler
from sklearn.cluster import KMeans
from sklearn.linear_model import LinearRegression
import warnings
warnings.filterwarnings('ignore')

class TrendAnalyzer:
    def __init__(self):
        self.scaler = StandardScaler()
        
    def analyze_seasonal_patterns(self, df, date_col='posting_date', value_col='job_count'):
        """Analyze seasonal patterns in job postings"""
        try:
            df_copy = df.copy()
            df_copy[date_col] = pd.to_datetime(df_copy[date_col])
            
            # Extract time features
            df_copy['month'] = df_copy[date_col].dt.month
            df_copy['day_of_week'] = df_copy[date_col].dt.dayofweek
            df_copy['week_of_year'] = df_copy[date_col].dt.isocalendar().week
            
            # Analyze monthly patterns
            monthly_avg = df_copy.groupby('month')[value_col].mean()
            peak_month = monthly_avg.idxmax()
            low_month = monthly_avg.idxmin()
            
            # Analyze weekly patterns
            weekly_avg = df_copy.groupby('day_of_week')[value_col].mean()
            peak_day = weekly_avg.idxmax()
            
            # Day names for readability
            day_names = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
            month_names = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 
                          'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
            
            return {
                'monthly_patterns': {
                    'peak_month': month_names[peak_month - 1],
                    'low_month': month_names[low_month - 1],
                    'monthly_averages': {month_names[i-1]: round(avg, 2) 
                                       for i, avg in monthly_avg.items()}
                },
                'weekly_patterns': {
                    'peak_day': day_names[peak_day],
                    'daily_averages': {day_names[i]: round(avg, 2) 
                                     for i, avg in weekly_avg.items()}
                },
                'seasonality_strength': self._calculate_seasonality_strength(monthly_avg)
            }
            
        except Exception as e:
            print(f"Error analyzing seasonal patterns: {e}")
            return {}
    
    def detect_trend_changes(self, df, date_col='posting_date', value_col='job_count', window=7):
        """Detect significant trend changes using moving averages"""
        try:
            df_copy = df.copy()
            df_copy[date_col] = pd.to_datetime(df_copy[date_col])
            df_copy = df_copy.sort_values(date_col)
            
            # Calculate moving averages
            df_copy['ma_short'] = df_copy[value_col].rolling(window=window).mean()
            df_copy['ma_long'] = df_copy[value_col].rolling(window=window*2).mean()
            
            # Detect crossovers (trend changes)
            df_copy['trend_signal'] = np.where(
                df_copy['ma_short'] > df_copy['ma_long'], 1, -1
            )
            
            # Find trend change points
            df_copy['trend_change'] = df_copy['trend_signal'].diff()
            change_points = df_copy[df_copy['trend_change'] != 0].copy()
            
            trend_changes = []
            for _, point in change_points.iterrows():
                trend_changes.append({
                    'date': point[date_col].strftime('%Y-%m-%d'),
                    'direction': 'upward' if point['trend_signal'] == 1 else 'downward',
                    'value': round(point[value_col], 2)
                })
            
            return {
                'trend_changes': trend_changes[-10:],  # Last 10 changes
                'current_trend': 'upward' if df_copy['trend_signal'].iloc[-1] == 1 else 'downward',
                'trend_strength': self._calculate_trend_strength(df_copy[value_col])
            }
            
        except Exception as e:
            print(f"Error detecting trend changes: {e}")
            return {}
    
    def analyze_skill_clusters(self, skills_df):
        """Cluster skills based on demand patterns"""
        try:
            if skills_df.empty:
                return {}
            
            # Prepare data for clustering
            skill_features = skills_df.groupby('skill_name').agg({
                'demand_count': ['sum', 'mean', 'std'],
                'posting_date': 'count'
            }).fillna(0)
            
            skill_features.columns = ['total_demand', 'avg_demand', 'demand_volatility', 'frequency']
            skill_features = skill_features.reset_index()
            
            if len(skill_features) < 3:
                return {}
            
            # Normalize features
            features_scaled = self.scaler.fit_transform(
                skill_features[['total_demand', 'avg_demand', 'demand_volatility', 'frequency']]
            )
            
            # Perform clustering
            n_clusters = min(5, len(skill_features) // 2)
            kmeans = KMeans(n_clusters=n_clusters, random_state=42)
            skill_features['cluster'] = kmeans.fit_predict(features_scaled)
            
            # Analyze clusters
            clusters = {}
            for cluster_id in range(n_clusters):
                cluster_skills = skill_features[skill_features['cluster'] == cluster_id]
                
                clusters[f'cluster_{cluster_id}'] = {
                    'description': self._describe_cluster(cluster_skills),
                    'skills': cluster_skills['skill_name'].tolist(),
                    'characteristics': {
                        'avg_total_demand': round(cluster_skills['total_demand'].mean(), 2),
                        'avg_frequency': round(cluster_skills['frequency'].mean(), 2),
                        'volatility': round(cluster_skills['demand_volatility'].mean(), 2)
                    }
                }
            
            return clusters
            
        except Exception as e:
            print(f"Error analyzing skill clusters: {e}")
            return {}
    
    def predict_demand_trajectory(self, df, periods=30):
        """Predict future demand using linear regression"""
        try:
            if len(df) < 10:
                return {}
            
            df_copy = df.copy()
            df_copy['date_numeric'] = pd.to_datetime(df_copy['posting_date']).astype(int) // 10**9
            
            # Prepare features
            X = df_copy[['date_numeric']].values
            y = df_copy['job_count'].values
            
            # Fit linear regression
            model = LinearRegression()
            model.fit(X, y)
            
            # Generate future dates
            last_date = df_copy['posting_date'].max()
            future_dates = pd.date_range(
                start=last_date + timedelta(days=1),
                periods=periods,
                freq='D'
            )
            
            future_numeric = future_dates.astype(int) // 10**9
            predictions = model.predict(future_numeric.values.reshape(-1, 1))
            
            # Calculate confidence intervals (simple approach)
            residuals = y - model.predict(X)
            std_error = np.std(residuals)
            
            trajectory = []
            for i, (date, pred) in enumerate(zip(future_dates, predictions)):
                confidence = max(0.5, 0.9 - (i * 0.01))  # Decreasing confidence
                trajectory.append({
                    'date': date.strftime('%Y-%m-%d'),
                    'predicted_demand': max(0, round(pred, 2)),
                    'lower_bound': max(0, round(pred - 1.96 * std_error, 2)),
                    'upper_bound': round(pred + 1.96 * std_error, 2),
                    'confidence': round(confidence, 2)
                })
            
            return {
                'trajectory': trajectory,
                'model_performance': {
                    'r_squared': round(model.score(X, y), 3),
                    'trend_slope': round(model.coef_[0] * 86400, 6),  # Daily change
                    'baseline': round(model.intercept_, 2)
                }
            }
            
        except Exception as e:
            print(f"Error predicting demand trajectory: {e}")
            return {}
    
    def _calculate_seasonality_strength(self, monthly_data):
        """Calculate the strength of seasonal patterns"""
        if len(monthly_data) < 3:
            return 0
        
        variance = monthly_data.var()
        mean_val = monthly_data.mean()
        
        if mean_val == 0:
            return 0
        
        coefficient_of_variation = variance / (mean_val ** 2)
        return min(1.0, coefficient_of_variation * 10)  # Normalize to 0-1
    
    def _calculate_trend_strength(self, values):
        """Calculate trend strength using correlation with time"""
        if len(values) < 3:
            return 0
        
        time_index = np.arange(len(values))
        correlation = np.corrcoef(time_index, values)[0, 1]
        return abs(correlation) if not np.isnan(correlation) else 0
    
    def _describe_cluster(self, cluster_data):
        """Generate description for skill cluster"""
        avg_demand = cluster_data['total_demand'].mean()
        avg_frequency = cluster_data['frequency'].mean()
        
        if avg_demand > cluster_data['total_demand'].quantile(0.75):
            if avg_frequency > cluster_data['frequency'].quantile(0.75):
                return "High-demand, frequently-requested skills"
            else:
                return "High-demand, specialized skills"
        elif avg_demand > cluster_data['total_demand'].quantile(0.25):
            return "Moderate-demand skills"
        else:
            if avg_frequency > cluster_data['frequency'].quantile(0.5):
                return "Low-demand but commonly mentioned skills"
            else:
                return "Niche or emerging skills"
    
    def generate_insights(self, analysis_results):
        """Generate actionable insights from analysis results"""
        insights = []
        
        # Category insights
        if 'category_trends' in analysis_results:
            growing_categories = [
                cat for cat, data in analysis_results['category_trends'].items()
                if data.get('trend_direction') == 'increasing' and data.get('growth_rate', 0) > 10
            ]
            
            if growing_categories:
                insights.append({
                    'type': 'opportunity',
                    'title': 'Growing Job Categories',
                    'description': f"Categories showing strong growth: {', '.join(growing_categories[:3])}",
                    'action': 'Consider developing skills in these areas'
                })
        
        # Skill insights
        if 'skill_trends' in analysis_results:
            hot_skills = [
                skill for skill, data in analysis_results['skill_trends'].items()
                if data.get('trend_direction') == 'increasing' and data.get('total_demand', 0) > 5
            ]
            
            if hot_skills:
                insights.append({
                    'type': 'skill_recommendation',
                    'title': 'In-Demand Skills',
                    'description': f"Skills with increasing demand: {', '.join(hot_skills[:5])}",
                    'action': 'Prioritize learning these skills'
                })
        
        return insights
