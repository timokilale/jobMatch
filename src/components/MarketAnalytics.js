import React, { useState, useEffect } from 'react';
import api from '../api/api';
import { withAnalyticsConsent } from './withConsent';
import { useSelector } from 'react-redux';

const MarketAnalytics = () => {
  const [marketData, setMarketData] = useState(null);
  const [skillDemand, setSkillDemand] = useState([]);
  const [emergingSkills, setEmergingSkills] = useState([]);
  const [marketHealth, setMarketHealth] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedIndustry, setSelectedIndustry] = useState('');

  // New forecasting data states
  const [forecastingData, setForecastingData] = useState(null);
  const [trendSummary, setTrendSummary] = useState(null);
  const [personalizedInsights, setPersonalizedInsights] = useState(null);
  const [forecastingLoading, setForecastingLoading] = useState(false);
  const [forecastingError, setForecastingError] = useState(null);
  const [activeTab, setActiveTab] = useState('overview');

  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    fetchMarketData();
    fetchForecastingData();
  }, []);

  const fetchForecastingData = async () => {
    try {
      setForecastingLoading(true);
      setForecastingError(null);

      // Try direct Python API call first
      const pythonApiUrl = 'http://localhost:5001';

      // Check if Python service is available
      const healthResponse = await fetch(`${pythonApiUrl}/health`);
      if (!healthResponse.ok) {
        throw new Error('Python forecasting service unavailable');
      }

      // Fetch trend summary
      const summaryResponse = await fetch(`${pythonApiUrl}/forecast/summary`);
      if (summaryResponse.ok) {
        const summaryData = await summaryResponse.json();
        setTrendSummary(summaryData);
      }

      // Fetch employment trends
      const trendsResponse = await fetch(`${pythonApiUrl}/forecast/trends?days=90`);
      if (trendsResponse.ok) {
        const trendsData = await trendsResponse.json();
        setForecastingData(trendsData);
      }

      // Note: Personalized insights would need backend integration
      // For now, we'll skip this feature

    } catch (error) {
      console.error('Error fetching forecasting data:', error);
      setForecastingError(error.message);

      // Fallback: try Node.js backend (if available)
      try {
        const healthResponse = await api.get('/forecasting/health');
        if (healthResponse.data.status === 'healthy') {
          const summaryResponse = await api.get('/forecasting/summary');
          setTrendSummary(summaryResponse.data.data);

          const trendsResponse = await api.get('/forecasting/trends?days=90');
          setForecastingData(trendsResponse.data.data);

          setForecastingError(null); // Clear error if backend works
        }
      } catch (backendError) {
        console.log('Backend also unavailable:', backendError.message);
      }
    } finally {
      setForecastingLoading(false);
    }
  };

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
      <div className="bg-white rounded-lg shadow-sm p-4 sm:p-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2">
              <i className="fas fa-chart-line mr-2 sm:mr-3 text-green-600"></i>
              <span className="hidden sm:inline">Employment Trend Forecasting</span>
              <span className="sm:hidden">Market Insights</span>
            </h1>
            <p className="text-sm sm:text-base text-gray-600">
              AI-powered insights into job market trends and future opportunities
            </p>
          </div>
          <div className="mt-4 sm:mt-0">
            <button
              onClick={fetchForecastingData}
              disabled={forecastingLoading}
              className="w-full sm:w-auto bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors disabled:opacity-50 text-sm sm:text-base"
            >
              <i className={`fas ${forecastingLoading ? 'fa-spinner fa-spin' : 'fa-sync-alt'} mr-2`}></i>
              {forecastingLoading ? 'Updating...' : 'Refresh Data'}
            </button>
          </div>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="bg-white rounded-lg shadow-sm">
        <div className="border-b border-gray-200">
          {/* Mobile Tab Navigation - Horizontal Scroll */}
          <nav className="flex overflow-x-auto scrollbar-hide px-4 sm:px-6 sm:space-x-8">
            {[
              { key: 'overview', label: 'Overview', mobileLabel: 'Overview', icon: 'chart-bar' },
              { key: 'trends', label: 'Employment Trends', mobileLabel: 'Trends', icon: 'trending-up' },
              { key: 'skills', label: 'Skill Demand', mobileLabel: 'Skills', icon: 'cogs' },
              { key: 'forecasts', label: 'Forecasts', mobileLabel: 'Forecasts', icon: 'crystal-ball' },
              ...(personalizedInsights ? [{ key: 'personal', label: 'Personal Insights', mobileLabel: 'Personal', icon: 'user-chart' }] : [])
            ].map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`flex-shrink-0 py-3 sm:py-4 px-3 sm:px-1 border-b-2 font-medium text-xs sm:text-sm transition-colors whitespace-nowrap ${
                  activeTab === tab.key
                    ? 'border-green-500 text-green-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                <i className={`fas fa-${tab.icon} mr-1 sm:mr-2`}></i>
                <span className="sm:hidden">{tab.mobileLabel}</span>
                <span className="hidden sm:inline">{tab.label}</span>
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Error State */}
      {forecastingError && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-3 sm:p-4">
          <div className="flex items-start sm:items-center">
            <i className="fas fa-exclamation-triangle text-red-500 mr-2 sm:mr-3 mt-1 sm:mt-0 flex-shrink-0"></i>
            <div>
              <h3 className="text-red-800 font-medium text-sm sm:text-base">Forecasting Service Unavailable</h3>
              <p className="text-red-600 text-xs sm:text-sm mt-1">
                {forecastingError}. Showing basic market data instead.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Tab Content */}
      <div className="bg-white rounded-lg shadow-sm p-4 sm:p-6">
        {forecastingLoading ? (
          <div className="text-center py-8">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600 mx-auto mb-4"></div>
            <p className="text-gray-600">Loading market insights...</p>
          </div>
        ) : (
          <>
            {activeTab === 'overview' && (
              <div className="space-y-4 sm:space-y-6">
                <h2 className="text-lg sm:text-xl font-semibold text-gray-800 mb-3 sm:mb-4">
                  <i className="fas fa-chart-bar mr-2 text-green-600"></i>
                  Market Overview
                </h2>

                {trendSummary ? (
                  <>
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
                      <div className="bg-green-50 rounded-lg p-3 sm:p-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-xs sm:text-sm text-green-600">Total Categories</p>
                            <p className="text-lg sm:text-2xl font-bold text-green-800">{trendSummary.totalCategories}</p>
                          </div>
                          <i className="fas fa-layer-group text-lg sm:text-2xl text-green-500"></i>
                        </div>
                      </div>

                      <div className="bg-blue-50 rounded-lg p-3 sm:p-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-xs sm:text-sm text-blue-600">Growing Categories</p>
                            <p className="text-lg sm:text-2xl font-bold text-blue-800">{trendSummary.growingCategories?.length || 0}</p>
                          </div>
                          <i className="fas fa-trending-up text-lg sm:text-2xl text-blue-500"></i>
                        </div>
                      </div>

                      <div className="bg-purple-50 rounded-lg p-3 sm:p-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-xs sm:text-sm text-purple-600">Hot Skills</p>
                            <p className="text-lg sm:text-2xl font-bold text-purple-800">{trendSummary.hotSkills?.length || 0}</p>
                          </div>
                          <i className="fas fa-fire text-lg sm:text-2xl text-purple-500"></i>
                        </div>
                      </div>

                      <div className="bg-orange-50 rounded-lg p-3 sm:p-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-xs sm:text-sm text-orange-600">Analysis Period</p>
                            <p className="text-sm sm:text-lg font-bold text-orange-800">{trendSummary.dataPeriod || 'Last 90 days'}</p>
                          </div>
                          <i className="fas fa-calendar text-lg sm:text-2xl text-orange-500"></i>
                        </div>
                      </div>
                    </div>

                    {/* Growing Categories */}
                    {trendSummary.growingCategories && trendSummary.growingCategories.length > 0 && (
                      <div className="bg-white rounded-lg border p-4 sm:p-6">
                        <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-3 sm:mb-4">
                          <i className="fas fa-rocket mr-2 text-green-600"></i>
                          Top Growing Job Categories
                        </h3>
                        <div className="space-y-2 sm:space-y-3">
                          {trendSummary.growingCategories.slice(0, 5).map((category, index) => (
                            <div key={index} className="flex items-start justify-between p-3 bg-green-50 rounded-lg">
                              <div className="flex-1 min-w-0 pr-3">
                                <p className="font-medium text-gray-800 text-sm sm:text-base break-words">{category.category}</p>
                                <p className="text-xs sm:text-sm text-gray-600 break-words">{category.totalJobs} total jobs</p>
                              </div>
                              <div className="text-right flex-shrink-0">
                                <p className="text-base sm:text-lg font-bold text-green-600 whitespace-nowrap">+{category.growthRate.toFixed(1)}%</p>
                                <p className="text-xs text-gray-500 whitespace-nowrap">Growth Rate</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {[1,2,3,4].map(i => (
                      <div key={i} className="bg-gray-100 rounded-lg p-4 animate-pulse">
                        <div className="h-4 bg-gray-300 rounded mb-2"></div>
                        <div className="h-8 bg-gray-300 rounded"></div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {activeTab === 'skills' && (
              <div className="space-y-4 sm:space-y-6">
                <h2 className="text-lg sm:text-xl font-semibold text-gray-800 mb-3 sm:mb-4">
                  <i className="fas fa-cogs mr-2 text-purple-600"></i>
                  Skill Demand Analysis
                </h2>

                {trendSummary?.hotSkills ? (
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
                    <div className="bg-white rounded-lg border p-4 sm:p-6">
                      <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-3 sm:mb-4">
                        <i className="fas fa-fire mr-2 text-red-500"></i>
                        Hot Skills in Demand
                      </h3>
                      <div className="space-y-2 sm:space-y-3">
                        {trendSummary.hotSkills.slice(0, 8).map((skill, index) => (
                          <div key={index} className="flex items-start justify-between">
                            <div className="flex-1 min-w-0 pr-3">
                              <p className="font-medium text-gray-800 text-sm sm:text-base break-words">{skill.skill}</p>
                              <p className="text-xs sm:text-sm text-gray-600 break-words">{skill.category}</p>
                            </div>
                            <div className="text-right flex-shrink-0">
                              <p className="font-bold text-purple-600 text-sm sm:text-base whitespace-nowrap">{skill.demand}</p>
                              <p className="text-xs text-gray-500 whitespace-nowrap">mentions</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {forecastingData?.skill_trends && (
                      <div className="bg-white rounded-lg border p-4 sm:p-6">
                        <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-3 sm:mb-4">
                          <i className="fas fa-chart-line mr-2 text-blue-500"></i>
                          Skill Trend Analysis
                        </h3>
                        <div className="space-y-2 sm:space-y-3">
                          {Object.entries(forecastingData.skill_trends).slice(0, 8).map(([skill, data]) => (
                            <div key={skill} className="flex items-start justify-between p-3 bg-gray-50 rounded-lg">
                              <div className="flex-1 min-w-0 pr-3">
                                <p className="font-medium text-gray-800 text-sm sm:text-base break-words">{skill}</p>
                                <p className="text-xs sm:text-sm text-gray-600 break-words">{data.skill_category}</p>
                              </div>
                              <div className="text-right flex-shrink-0">
                                <span className={`px-2 py-1 rounded text-xs font-medium whitespace-nowrap ${
                                  data.trend_direction === 'increasing'
                                    ? 'bg-green-100 text-green-800'
                                    : 'bg-gray-100 text-gray-800'
                                }`}>
                                  {data.trend_direction === 'increasing' ? '↗️' : '→'} {data.trend_direction}
                                </span>
                                <p className="text-xs sm:text-sm text-gray-600 mt-1 whitespace-nowrap">{data.total_demand} total</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <i className="fas fa-cogs text-4xl text-gray-400 mb-4"></i>
                    <p className="text-gray-600">No skill data available</p>
                  </div>
                )}
              </div>
            )}

            {activeTab === 'trends' && (
              <div className="space-y-4 sm:space-y-6">
                <h2 className="text-lg sm:text-xl font-semibold text-gray-800 mb-3 sm:mb-4">
                  <i className="fas fa-trending-up mr-2 text-blue-600"></i>
                  Employment Trends Analysis
                </h2>

                {forecastingData?.category_trends ? (
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
                    {Object.entries(forecastingData.category_trends).slice(0, 6).map(([category, data]) => (
                      <div key={category} className="bg-white rounded-lg border p-4 sm:p-6">
                        <div className="flex items-start justify-between mb-3 sm:mb-4">
                          <h3 className="font-semibold text-gray-800 text-sm sm:text-base flex-1 min-w-0 pr-2 break-words">{category}</h3>
                          <span className={`px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium flex-shrink-0 whitespace-nowrap ${
                            data.trend_direction === 'increasing'
                              ? 'bg-green-100 text-green-800'
                              : 'bg-red-100 text-red-800'
                          }`}>
                            <span className="hidden sm:inline">{data.trend_direction === 'increasing' ? '📈' : '📉'} {data.trend_direction}</span>
                            <span className="sm:hidden">{data.trend_direction === 'increasing' ? '📈' : '📉'}</span>
                          </span>
                        </div>

                        <div className="space-y-2 sm:space-y-3">
                          <div className="flex justify-between text-sm sm:text-base">
                            <span className="text-gray-600 break-words">Total Jobs:</span>
                            <span className="font-medium whitespace-nowrap ml-2">{data.total_jobs}</span>
                          </div>
                          <div className="flex justify-between text-sm sm:text-base">
                            <span className="text-gray-600 break-words">Growth Rate:</span>
                            <span className={`font-medium whitespace-nowrap ml-2 ${
                              data.growth_rate > 0 ? 'text-green-600' : 'text-red-600'
                            }`}>
                              {data.growth_rate > 0 ? '+' : ''}{data.growth_rate.toFixed(1)}%
                            </span>
                          </div>
                          <div className="flex justify-between text-sm sm:text-base">
                            <span className="text-gray-600 break-words">Recent Activity:</span>
                            <span className="font-medium whitespace-nowrap ml-2">{data.recent_activity.toFixed(1)} jobs/day</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <i className="fas fa-chart-line text-4xl text-gray-400 mb-4"></i>
                    <p className="text-gray-600">No trend data available</p>
                  </div>
                )}
              </div>
            )}

            {activeTab === 'forecasts' && (
              <div className="space-y-4 sm:space-y-6">
                <h2 className="text-lg sm:text-xl font-semibold text-gray-800 mb-3 sm:mb-4">
                  <i className="fas fa-crystal-ball mr-2 text-purple-600"></i>
                  <span className="hidden sm:inline">Market Forecasts & Predictions</span>
                  <span className="sm:hidden">Forecasts</span>
                </h2>

                {forecastingData || trendSummary ? (
                  <>
                    {/* Forecast Summary Cards */}
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
                      <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg p-3 sm:p-6 border-l-4 border-blue-500">
                        <div className="flex items-start justify-between">
                          <div className="flex-1 min-w-0 pr-2">
                            <p className="text-xs sm:text-sm text-blue-600 font-medium break-words">Market Outlook</p>
                            <p className="text-lg sm:text-2xl font-bold text-blue-800 break-words">
                              {Object.values(forecastingData?.category_trends || {}).filter(cat => cat.trend_direction === 'increasing').length >
                               Object.keys(forecastingData?.category_trends || {}).length / 2 ? 'Growing' : 'Stable'}
                            </p>
                            <p className="text-xs text-blue-600 mt-1 break-words">Overall job market</p>
                          </div>
                          <i className="fas fa-chart-line text-xl sm:text-3xl text-blue-500 flex-shrink-0"></i>
                        </div>
                      </div>

                      <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-lg p-3 sm:p-6 border-l-4 border-green-500">
                        <div className="flex items-start justify-between">
                          <div className="flex-1 min-w-0 pr-2">
                            <p className="text-xs sm:text-sm text-green-600 font-medium break-words">Top Category</p>
                            <p className="text-sm sm:text-lg font-bold text-green-800 break-words">
                              {Object.entries(forecastingData?.category_trends || {})
                                .sort(([,a], [,b]) => b.total_jobs - a.total_jobs)[0]?.[0] || 'IT'}
                            </p>
                            <p className="text-xs text-green-600 mt-1 break-words">Most active sector</p>
                          </div>
                          <i className="fas fa-crown text-xl sm:text-3xl text-green-500 flex-shrink-0"></i>
                        </div>
                      </div>

                      <div className="bg-gradient-to-r from-purple-50 to-purple-100 rounded-lg p-3 sm:p-6 border-l-4 border-purple-500">
                        <div className="flex items-start justify-between">
                          <div className="flex-1 min-w-0 pr-2">
                            <p className="text-xs sm:text-sm text-purple-600 font-medium break-words">Hot Skill</p>
                            <p className="text-sm sm:text-lg font-bold text-purple-800 break-words">
                              {trendSummary?.hotSkills?.[0]?.skill || 'Tech Skills'}
                            </p>
                            <p className="text-xs text-purple-600 mt-1 break-words">Highest demand</p>
                          </div>
                          <i className="fas fa-fire text-xl sm:text-3xl text-purple-500 flex-shrink-0"></i>
                        </div>
                      </div>

                      <div className="bg-gradient-to-r from-orange-50 to-orange-100 rounded-lg p-3 sm:p-6 border-l-4 border-orange-500">
                        <div className="flex items-start justify-between">
                          <div className="flex-1 min-w-0 pr-2">
                            <p className="text-xs sm:text-sm text-orange-600 font-medium break-words">Total Jobs</p>
                            <p className="text-lg sm:text-2xl font-bold text-orange-800 break-words">
                              {Object.values(forecastingData?.category_trends || {})
                                .reduce((sum, cat) => sum + cat.total_jobs, 0)}
                            </p>
                            <p className="text-xs text-orange-600 mt-1 break-words">Active positions</p>
                          </div>
                          <i className="fas fa-briefcase text-xl sm:text-3xl text-orange-500 flex-shrink-0"></i>
                        </div>
                      </div>
                    </div>

                    {/* Industry Growth Forecasts */}
                    {forecastingData?.category_trends && (
                      <div className="bg-white rounded-lg border p-4 sm:p-6">
                        <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-3 sm:mb-4">
                          <i className="fas fa-industry mr-2 text-blue-600"></i>
                          <span className="hidden sm:inline">Job Category Forecasts (Next 3 Months)</span>
                          <span className="sm:hidden">Category Forecasts</span>
                        </h3>
                        <div className="space-y-3 sm:space-y-4">
                          {Object.entries(forecastingData.category_trends)
                            .sort(([,a], [,b]) => b.total_jobs - a.total_jobs) // Sort by current job count
                            .map(([category, data]) => {
                              // Enhanced projection logic
                              const baseGrowth = data.growth_rate;
                              const projectedGrowth = baseGrowth > 0 ? baseGrowth * 1.3 : baseGrowth * 0.8;
                              const projectedJobs = Math.round(data.total_jobs * (1 + projectedGrowth / 100));

                              // Category-specific insights
                              const getCategoryInsight = (cat, growth, totalJobs) => {
                                const insights = {
                                  'Information Technology': {
                                    icon: '💻',
                                    description: 'Software development, web development, and IT support roles',
                                    trend: totalJobs > 5 ? 'High demand for developers and tech specialists' : 'Steady demand for IT professionals'
                                  },
                                  'Healthcare': {
                                    icon: '🏥',
                                    description: 'Medical, nursing, and healthcare support positions',
                                    trend: 'Growing need for healthcare workers and medical professionals'
                                  },
                                  'Finance': {
                                    icon: '💰',
                                    description: 'Banking, accounting, and financial analysis roles',
                                    trend: 'Stable demand for financial professionals and analysts'
                                  },
                                  'Education': {
                                    icon: '🎓',
                                    description: 'Teaching, training, and educational support roles',
                                    trend: 'Consistent need for educators and training specialists'
                                  },
                                  'Engineering': {
                                    icon: '⚙️',
                                    description: 'Civil, mechanical, and technical engineering positions',
                                    trend: 'Strong demand for engineering expertise'
                                  },
                                  'Hospitality': {
                                    icon: '🏨',
                                    description: 'Hotels, restaurants, and customer service roles',
                                    trend: 'Recovery and growth in hospitality sector'
                                  },
                                  'Transportation': {
                                    icon: '🚛',
                                    description: 'Logistics, delivery, and transportation services',
                                    trend: 'Increasing demand for logistics and delivery services'
                                  },
                                  'Legal': {
                                    icon: '⚖️',
                                    description: 'Legal services, paralegal, and compliance roles',
                                    trend: 'Steady demand for legal professionals'
                                  },
                                  'Manufacturing': {
                                    icon: '🏭',
                                    description: 'Production, quality control, and assembly roles',
                                    trend: 'Industrial growth driving manufacturing jobs'
                                  },
                                  'Marketing': {
                                    icon: '📢',
                                    description: 'Digital marketing, branding, and advertising roles',
                                    trend: 'High demand for digital marketing specialists'
                                  }
                                };
                                return insights[cat] || {
                                  icon: '💼',
                                  description: 'Various professional opportunities',
                                  trend: 'Market activity in this sector'
                                };
                              };

                              const categoryInfo = getCategoryInsight(category, projectedGrowth, data.total_jobs);

                              return (
                                <div key={category} className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg p-4 sm:p-5 border-l-4 border-blue-500">
                                  <div className="flex items-start justify-between mb-3">
                                    <div className="flex items-start flex-1 min-w-0">
                                      <span className="text-xl sm:text-2xl mr-2 sm:mr-3 flex-shrink-0">{categoryInfo.icon}</span>
                                      <div className="min-w-0 flex-1 pr-2">
                                        <h4 className="font-semibold text-gray-800 text-base sm:text-lg break-words">{category}</h4>
                                        <p className="text-xs sm:text-sm text-gray-600 break-words leading-relaxed">{categoryInfo.description}</p>
                                      </div>
                                    </div>
                                    <span className={`px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium flex-shrink-0 whitespace-nowrap ${
                                      data.trend_direction === 'increasing'
                                        ? 'bg-green-100 text-green-800'
                                        : data.trend_direction === 'decreasing'
                                        ? 'bg-red-100 text-red-800'
                                        : 'bg-yellow-100 text-yellow-800'
                                    }`}>
                                      <span className="hidden sm:inline">
                                        {data.trend_direction === 'increasing' ? '📈 Growing' :
                                         data.trend_direction === 'decreasing' ? '📉 Declining' : '➡️ Stable'}
                                      </span>
                                      <span className="sm:hidden">
                                        {data.trend_direction === 'increasing' ? '📈' :
                                         data.trend_direction === 'decreasing' ? '📉' : '➡️'}
                                      </span>
                                    </span>
                                  </div>

                                  <div className="grid grid-cols-3 gap-2 sm:gap-4 text-xs sm:text-sm mb-3">
                                    <div className="text-center">
                                      <p className="text-gray-600 break-words">Current Jobs</p>
                                      <p className="font-bold text-lg sm:text-xl text-gray-800 break-words">{data.total_jobs}</p>
                                    </div>
                                    <div className="text-center">
                                      <p className="text-gray-600 break-words">Daily Activity</p>
                                      <p className="font-bold text-lg sm:text-xl text-blue-600 break-words">{data.recent_activity.toFixed(1)}</p>
                                    </div>
                                    <div className="text-center">
                                      <p className="text-gray-600 break-words">Growth Rate</p>
                                      <p className={`font-bold text-lg sm:text-xl break-words ${
                                        data.growth_rate > 0 ? 'text-green-600' : 'text-red-600'
                                      }`}>
                                        {data.growth_rate > 0 ? '+' : ''}{data.growth_rate.toFixed(1)}%
                                      </p>
                                    </div>
                                  </div>

                                  <div className="bg-white rounded-lg p-3 mt-3">
                                    <p className="text-xs sm:text-sm text-gray-700 font-medium mb-1 break-words">Market Insight:</p>
                                    <p className="text-xs sm:text-sm text-gray-600 break-words leading-relaxed">{categoryInfo.trend}</p>
                                  </div>
                                </div>
                              );
                            })}
                        </div>
                      </div>
                    )}

                    {/* Skill Demand Forecasts */}
                    {trendSummary?.hotSkills && (
                      <div className="bg-white rounded-lg border p-4 sm:p-6">
                        <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-3 sm:mb-4">
                          <i className="fas fa-brain mr-2 text-purple-600"></i>
                          <span className="hidden sm:inline">Skills in High Demand - Future Outlook</span>
                          <span className="sm:hidden">Skills in Demand</span>
                        </h3>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
                          <div>
                            <h4 className="font-medium text-gray-700 mb-3 text-sm sm:text-base">🔥 Top Skills to Learn</h4>
                            <div className="space-y-2 sm:space-y-3">
                              {trendSummary.hotSkills.slice(0, 8).map((skill, index) => {
                                // Get skill-specific insights
                                const getSkillInsight = (skillName, category) => {
                                  const insights = {
                                    'Node.js': { icon: '🟢', trend: 'Backend development boom', growth: 'Very High' },
                                    'TypeScript': { icon: '🔷', trend: 'Modern web development standard', growth: 'Very High' },
                                    'React': { icon: '⚛️', trend: 'Frontend framework leader', growth: 'High' },
                                    'Python': { icon: '🐍', trend: 'AI/ML and automation growth', growth: 'Very High' },
                                    'JavaScript': { icon: '🟨', trend: 'Universal programming language', growth: 'High' },
                                    'Healthcare': { icon: '🏥', trend: 'Post-pandemic healthcare expansion', growth: 'High' },
                                    'Teaching': { icon: '👩‍🏫', trend: 'Education sector recovery', growth: 'Medium' },
                                    'Digital Marketing': { icon: '📱', trend: 'Digital transformation acceleration', growth: 'High' },
                                    'CSS': { icon: '🎨', trend: 'UI/UX design importance', growth: 'Medium' },
                                    'MongoDB': { icon: '🍃', trend: 'NoSQL database adoption', growth: 'High' },
                                    'SQL': { icon: '🗄️', trend: 'Data analysis essential', growth: 'High' },
                                    'Git': { icon: '📝', trend: 'Version control standard', growth: 'Medium' }
                                  };
                                  return insights[skillName] || {
                                    icon: '💼',
                                    trend: 'Professional skill in demand',
                                    growth: 'Medium'
                                  };
                                };

                                const skillInfo = getSkillInsight(skill.skill, skill.category);
                                const projectedDemand = Math.round(skill.demand * 1.25);

                                return (
                                  <div key={index} className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-3 sm:p-4 border-l-4 border-purple-400">
                                    <div className="flex items-start justify-between mb-2">
                                      <div className="flex items-start flex-1 min-w-0">
                                        <span className="text-base sm:text-lg mr-2 flex-shrink-0">{skillInfo.icon}</span>
                                        <div className="min-w-0 flex-1 pr-2">
                                          <p className="font-semibold text-gray-800 text-sm sm:text-base break-words">{skill.skill}</p>
                                          <p className="text-xs text-gray-600 break-words">{skill.category}</p>
                                        </div>
                                      </div>
                                      <div className="text-right flex-shrink-0">
                                        <span className={`px-2 py-1 rounded-full text-xs font-medium whitespace-nowrap ${
                                          skillInfo.growth === 'Very High' ? 'bg-red-100 text-red-800' :
                                          skillInfo.growth === 'High' ? 'bg-orange-100 text-orange-800' :
                                          'bg-yellow-100 text-yellow-800'
                                        }`}>
                                          <span className="hidden sm:inline">{skillInfo.growth} Demand</span>
                                          <span className="sm:hidden">{skillInfo.growth}</span>
                                        </span>
                                      </div>
                                    </div>
                                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start text-xs sm:text-sm space-y-2 sm:space-y-0">
                                      <p className="text-gray-600 flex-1 break-words leading-relaxed pr-2">{skillInfo.trend}</p>
                                      <div className="text-right flex-shrink-0">
                                        <p className="font-bold text-purple-600 whitespace-nowrap">{skill.demand} → {projectedDemand}</p>
                                        <p className="text-xs text-gray-500 whitespace-nowrap">current → projected</p>
                                      </div>
                                    </div>
                                  </div>
                                );
                              })}
                            </div>
                          </div>

                          <div>
                            <h4 className="font-medium text-gray-700 mb-3 text-sm sm:text-base">📊 Market Intelligence</h4>
                            <div className="space-y-3 sm:space-y-4">
                              <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg p-3 sm:p-4">
                                <div className="flex items-center mb-2">
                                  <i className="fas fa-rocket text-blue-600 mr-2"></i>
                                  <span className="font-medium text-blue-800 text-sm sm:text-base">Tech Skills Surge</span>
                                </div>
                                <p className="text-xs sm:text-sm text-blue-700">
                                  Programming languages like <strong>TypeScript</strong> and <strong>Node.js</strong>
                                  are seeing explosive growth. Perfect time to upskill in web development.
                                </p>
                              </div>

                              <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-lg p-3 sm:p-4">
                                <div className="flex items-center mb-2">
                                  <i className="fas fa-heartbeat text-green-600 mr-2"></i>
                                  <span className="font-medium text-green-800 text-sm sm:text-base">Healthcare Expansion</span>
                                </div>
                                <p className="text-xs sm:text-sm text-green-700">
                                  Healthcare and nursing roles continue to grow.
                                  <strong>97 demand points</strong> indicate strong job security in this sector.
                                </p>
                              </div>

                              <div className="bg-gradient-to-r from-purple-50 to-purple-100 rounded-lg p-3 sm:p-4">
                                <div className="flex items-center mb-2">
                                  <i className="fas fa-chart-line text-purple-600 mr-2"></i>
                                  <span className="font-medium text-purple-800 text-sm sm:text-base">Digital Marketing Boom</span>
                                </div>
                                <p className="text-xs sm:text-sm text-purple-700">
                                  Businesses are investing heavily in digital presence.
                                  <strong>Digital Marketing</strong> skills are increasingly valuable.
                                </p>
                              </div>

                              <div className="bg-gradient-to-r from-orange-50 to-orange-100 rounded-lg p-3 sm:p-4">
                                <div className="flex items-center mb-2">
                                  <i className="fas fa-lightbulb text-orange-600 mr-2"></i>
                                  <span className="font-medium text-orange-800 text-sm sm:text-base">Career Advice</span>
                                </div>
                                <p className="text-xs sm:text-sm text-orange-700">
                                  Focus on <strong>technical skills</strong> combined with <strong>soft skills</strong>
                                  like creativity and leadership for maximum career growth potential.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </>
                ) : (
                  <div className="text-center py-8 sm:py-12 px-4">
                    <i className="fas fa-crystal-ball text-4xl sm:text-6xl text-gray-300 mb-4"></i>
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-600 mb-2">No Forecast Data Available</h3>
                    <p className="text-sm sm:text-base text-gray-500 mb-6 max-w-md mx-auto">
                      Forecasting requires historical data analysis. Please ensure the forecasting service is running.
                    </p>
                    <button
                      onClick={fetchForecastingData}
                      className="w-full sm:w-auto bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors text-sm sm:text-base"
                    >
                      <i className="fas fa-sync-alt mr-2"></i>
                      Retry Forecast Generation
                    </button>
                  </div>
                )}
              </div>
            )}
          </>
        )}
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
