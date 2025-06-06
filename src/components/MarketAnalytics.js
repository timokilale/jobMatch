import React, { useState, useEffect } from 'react';
import api from '../api/api';
import { withAnalyticsConsent } from './withConsent';

const MarketAnalytics = () => {
  const [marketData, setMarketData] = useState(null);
  const [skillDemand, setSkillDemand] = useState([]);
  const [emergingSkills, setEmergingSkills] = useState([]);
  const [marketHealth, setMarketHealth] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedIndustry, setSelectedIndustry] = useState('');

  useEffect(() => {
    fetchMarketData();
  }, []);

  const fetchMarketData = async () => {
    try {
      setLoading(true);
      
      // Fetch all market data
      const [overviewRes, skillsRes, emergingRes, healthRes] = await Promise.all([
        api.get('/market/overview'),
        api.get('/market/skills/demand'),
        api.get('/market/skills/emerging'),
        api.get('/market/health')
      ]);
      
      setMarketData(overviewRes.data);
      setSkillDemand(skillsRes.data);
      setEmergingSkills(emergingRes.data);
      setMarketHealth(healthRes.data);
    } catch (error) {
      console.error('Error fetching market data:', error);
    } finally {
      setLoading(false);
    }
  };

  const getHealthColor = (status) => {
    switch (status) {
      case 'Excellent': return 'text-green-600 bg-green-100';
      case 'Good': return 'text-blue-600 bg-blue-100';
      case 'Fair': return 'text-yellow-600 bg-yellow-100';
      case 'Poor': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600"></div>
        <span className="ml-3 text-gray-600">Loading market analytics...</span>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-2">
          <i className="fas fa-chart-line mr-3 text-green-600"></i>
          Market Analytics & Trends
        </h1>
        <p className="text-gray-600">
          Real-time insights into the job market, skill demand, and employment trends
        </p>
      </div>

      {/* Market Health Overview */}
      {marketHealth && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Market Health</p>
                <p className={`text-lg font-semibold px-3 py-1 rounded-full inline-block ${getHealthColor(marketHealth.status)}`}>
                  {marketHealth.status}
                </p>
              </div>
              <i className="fas fa-heartbeat text-2xl text-green-600"></i>
            </div>
            <p className="text-xs text-gray-500 mt-2">Score: {marketHealth.healthScore}/100</p>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Active Jobs</p>
                <p className="text-2xl font-bold text-gray-900">{marketHealth.activeJobs}</p>
              </div>
              <i className="fas fa-briefcase text-2xl text-blue-600"></i>
            </div>
            <p className="text-xs text-gray-500 mt-2">Total: {marketHealth.totalJobs}</p>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">New Jobs (30d)</p>
                <p className="text-2xl font-bold text-gray-900">{marketHealth.recentActivity?.newJobs || 0}</p>
              </div>
              <i className="fas fa-plus-circle text-2xl text-green-600"></i>
            </div>
            <p className="text-xs text-gray-500 mt-2">Recent activity</p>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Applications</p>
                <p className="text-2xl font-bold text-gray-900">{marketHealth.totalApplications}</p>
              </div>
              <i className="fas fa-file-alt text-2xl text-purple-600"></i>
            </div>
            <p className="text-xs text-gray-500 mt-2">Total submitted</p>
          </div>
        </div>
      )}

      {/* Skill Demand Analysis */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">
            <i className="fas fa-chart-bar mr-2 text-green-600"></i>
            Current Skill Demand
          </h2>
          <div className="space-y-3">
            {skillDemand.slice(0, 8).map((skill, index) => (
              <div key={index} className="flex items-center justify-between">
                <span className="text-sm font-medium text-gray-700">{skill.skill}</span>
                <div className="flex items-center space-x-2">
                  <div className="w-24 bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-green-600 h-2 rounded-full" 
                      style={{ width: `${Math.min((skill.demand / 100) * 100, 100)}%` }}
                    ></div>
                  </div>
                  <span className="text-xs text-gray-500 w-8">{skill.demand}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">
            <i className="fas fa-rocket mr-2 text-blue-600"></i>
            Emerging Skills
          </h2>
          <div className="space-y-3">
            {emergingSkills.slice(0, 8).map((skill, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div>
                  <p className="text-sm font-medium text-gray-800">{skill.skillName}</p>
                  <p className="text-xs text-gray-500">Growth: +{skill.growth.toFixed(1)}%</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-semibold text-green-600">{skill.demandScore.toFixed(0)}</p>
                  <p className="text-xs text-gray-500">Demand Score</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Market Insights */}
      {marketData && (
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">
            <i className="fas fa-lightbulb mr-2 text-yellow-600"></i>
            Market Insights
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-medium text-gray-700 mb-2">Industry Trends</h3>
              {marketData.industryTrends && marketData.industryTrends.slice(0, 5).map((trend, index) => (
                <div key={index} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0">
                  <span className="text-sm text-gray-600">{trend.industry}</span>
                  <span className="text-sm font-medium text-gray-800">{trend.value}</span>
                </div>
              ))}
            </div>
            <div>
              <h3 className="font-medium text-gray-700 mb-2">Quick Stats</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Market Health:</span>
                  <span className="text-sm font-medium">{marketData.overview?.marketHealth || 'Good'}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Last Updated:</span>
                  <span className="text-sm font-medium">
                    {new Date(marketData.overview?.lastUpdated || Date.now()).toLocaleDateString()}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Action Items */}
      <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-6">
        <h2 className="text-lg font-semibold text-gray-800 mb-3">
          <i className="fas fa-tasks mr-2 text-green-600"></i>
          Recommended Actions
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white rounded-lg p-4">
            <i className="fas fa-graduation-cap text-2xl text-green-600 mb-2"></i>
            <h3 className="font-medium text-gray-800">Skill Development</h3>
            <p className="text-sm text-gray-600">Focus on emerging skills with high growth potential</p>
          </div>
          <div className="bg-white rounded-lg p-4">
            <i className="fas fa-network-wired text-2xl text-blue-600 mb-2"></i>
            <h3 className="font-medium text-gray-800">Network Building</h3>
            <p className="text-sm text-gray-600">Connect with professionals in growing industries</p>
          </div>
          <div className="bg-white rounded-lg p-4">
            <i className="fas fa-search text-2xl text-purple-600 mb-2"></i>
            <h3 className="font-medium text-gray-800">Job Search Strategy</h3>
            <p className="text-sm text-gray-600">Target roles in high-demand skill areas</p>
          </div>
        </div>
      </div>
    </div>
  );
};

// Create a fallback component for when consent is not granted
const MarketAnalyticsFallback = ({ onRequestConsent }) => (
  <div className="space-y-6">
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h1 className="text-2xl font-bold text-gray-800 mb-2">
        <i className="fas fa-chart-line mr-3 text-green-600"></i>
        Market Analytics & Trends
      </h1>
      <p className="text-gray-600">
        Real-time insights into the job market, skill demand, and employment trends
      </p>
    </div>

    <div className="bg-blue-50 border border-blue-200 rounded-lg p-8 text-center">
      <i className="fas fa-shield-alt text-4xl text-blue-600 mb-4"></i>
      <h2 className="text-xl font-semibold text-blue-800 mb-2">Analytics Consent Required</h2>
      <p className="text-blue-700 mb-6 max-w-md mx-auto">
        To provide personalized market insights and analytics, we need your consent to analyze market data and trends relevant to your profile.
      </p>
      <div className="space-y-3">
        <button
          onClick={onRequestConsent}
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
        >
          <i className="fas fa-check mr-2"></i>
          Grant Analytics Permission
        </button>
        <div className="text-sm text-blue-600">
          <p>✓ Personalized market insights</p>
          <p>✓ Skill demand analysis</p>
          <p>✓ Industry trend forecasting</p>
        </div>
      </div>
    </div>

    {/* Sample/Demo content */}
    <div className="bg-white rounded-lg shadow-sm p-6 opacity-50">
      <h2 className="text-lg font-semibold text-gray-800 mb-4">
        <i className="fas fa-chart-bar mr-2 text-green-600"></i>
        Sample Market Overview (Demo)
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-gray-100 rounded-lg p-4">
          <p className="text-sm text-gray-600">Market Health</p>
          <p className="text-lg font-semibold text-gray-400">Good</p>
        </div>
        <div className="bg-gray-100 rounded-lg p-4">
          <p className="text-sm text-gray-600">Active Jobs</p>
          <p className="text-lg font-semibold text-gray-400">1,234</p>
        </div>
        <div className="bg-gray-100 rounded-lg p-4">
          <p className="text-sm text-gray-600">New Jobs (30d)</p>
          <p className="text-lg font-semibold text-gray-400">156</p>
        </div>
        <div className="bg-gray-100 rounded-lg p-4">
          <p className="text-sm text-gray-600">Applications</p>
          <p className="text-lg font-semibold text-gray-400">5,678</p>
        </div>
      </div>
      <div className="mt-4 text-center">
        <p className="text-sm text-gray-500">
          <i className="fas fa-lock mr-1"></i>
          Grant consent to see real data and personalized insights
        </p>
      </div>
    </div>
  </div>
);

// Export the wrapped component with analytics consent
export default withAnalyticsConsent(MarketAnalytics, {
  fallbackComponent: MarketAnalyticsFallback,
  showPromptOnDenied: true
});
