import React, { useState, useEffect } from 'react';
import api from '../api/api';

const TrendInsightsWidget = ({ userRole = 'APPLICANT' }) => {
  const [insights, setInsights] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchTrendInsights();
  }, []);

  const fetchTrendInsights = async () => {
    try {
      setLoading(true);
      setError(null);

      // Try to get trend summary
      const response = await api.get('/forecasting/summary');
      setInsights(response.data.data);

    } catch (error) {
      console.error('Error fetching trend insights:', error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="animate-pulse">
          <div className="h-4 bg-gray-300 rounded mb-4 w-1/2"></div>
          <div className="space-y-3">
            <div className="h-3 bg-gray-300 rounded"></div>
            <div className="h-3 bg-gray-300 rounded w-3/4"></div>
            <div className="h-3 bg-gray-300 rounded w-1/2"></div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="flex items-center text-gray-500">
          <i className="fas fa-chart-line mr-3 text-xl"></i>
          <div>
            <h3 className="font-medium text-gray-800">Employment Trends</h3>
            <p className="text-sm text-gray-600">Forecasting service unavailable</p>
          </div>
        </div>
      </div>
    );
  }

  if (!insights) {
    return null;
  }

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-800">
          <i className="fas fa-chart-area mr-2 text-green-600"></i>
          Employment Trends
        </h3>
        <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
          AI-Powered
        </span>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="text-center p-3 bg-green-50 rounded-lg">
          <p className="text-2xl font-bold text-green-600">{insights.totalCategories || 0}</p>
          <p className="text-xs text-green-700">Job Categories</p>
        </div>
        <div className="text-center p-3 bg-blue-50 rounded-lg">
          <p className="text-2xl font-bold text-blue-600">{insights.growingCategories?.length || 0}</p>
          <p className="text-xs text-blue-700">Growing Markets</p>
        </div>
      </div>

      {/* Top Growing Categories */}
      {insights.growingCategories && insights.growingCategories.length > 0 && (
        <div className="mb-4">
          <h4 className="text-sm font-medium text-gray-700 mb-2">
            🚀 Top Growing Categories
          </h4>
          <div className="space-y-2">
            {insights.growingCategories.slice(0, 3).map((category, index) => (
              <div key={index} className="flex items-center justify-between text-sm">
                <span className="text-gray-700 truncate">{category.category}</span>
                <span className="text-green-600 font-medium">
                  +{category.growthRate.toFixed(1)}%
                </span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Hot Skills */}
      {insights.hotSkills && insights.hotSkills.length > 0 && (
        <div className="mb-4">
          <h4 className="text-sm font-medium text-gray-700 mb-2">
            🔥 Hot Skills in Demand
          </h4>
          <div className="flex flex-wrap gap-1">
            {insights.hotSkills.slice(0, 4).map((skill, index) => (
              <span
                key={index}
                className="px-2 py-1 bg-purple-100 text-purple-700 text-xs rounded-full"
              >
                {skill.skill}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Call to Action */}
      <div className="pt-3 border-t border-gray-200">
        <button
          onClick={() => {
            // Navigate to full forecasting view
            if (userRole === 'APPLICANT') {
              // For applicants, this would trigger navigation to employment-forecasting section
              window.dispatchEvent(new CustomEvent('navigate-to-forecasting'));
            } else {
              // For employers, similar navigation
              window.dispatchEvent(new CustomEvent('navigate-to-forecasting'));
            }
          }}
          className="w-full text-center text-sm text-green-600 hover:text-green-700 font-medium transition-colors"
        >
          View Detailed Forecasts →
        </button>
      </div>
    </div>
  );
};

export default TrendInsightsWidget;
