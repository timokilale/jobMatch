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
      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-800 mb-2">
              <i className="fas fa-chart-line mr-3 text-green-600"></i>
              Employment Trend Forecasting
            </h1>
            <p className="text-gray-600">
              AI-powered insights into job market trends and future opportunities
            </p>
          </div>
          <div className="mt-4 sm:mt-0">
            <button
              onClick={fetchForecastingData}
              disabled={forecastingLoading}
              className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors disabled:opacity-50"
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
          <nav className="flex space-x-8 px-6">
            {[
              { key: 'overview', label: 'Market Overview', icon: 'chart-bar' },
              { key: 'trends', label: 'Employment Trends', icon: 'trending-up' },
              { key: 'skills', label: 'Skill Demand', icon: 'cogs' },
              { key: 'forecasts', label: 'Forecasts', icon: 'crystal-ball' },
              ...(personalizedInsights ? [{ key: 'personal', label: 'Personal Insights', icon: 'user-chart' }] : [])
            ].map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                  activeTab === tab.key
                    ? 'border-green-500 text-green-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                <i className={`fas fa-${tab.icon} mr-2`}></i>
                {tab.label}
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Error State */}
      {forecastingError && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4">
          <div className="flex items-center">
            <i className="fas fa-exclamation-triangle text-red-500 mr-3"></i>
            <div>
              <h3 className="text-red-800 font-medium">Forecasting Service Unavailable</h3>
              <p className="text-red-600 text-sm mt-1">
                {forecastingError}. Showing basic market data instead.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Tab Content */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        {forecastingLoading ? (
          <div className="text-center py-8">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600 mx-auto mb-4"></div>
            <p className="text-gray-600">Loading market insights...</p>
          </div>
        ) : (
          <>
            {activeTab === 'overview' && (
              <div className="space-y-6">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">
                  <i className="fas fa-chart-bar mr-2 text-green-600"></i>
                  Market Overview
                </h2>

                {trendSummary ? (
                  <>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                      <div className="bg-green-50 rounded-lg p-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-sm text-green-600">Total Categories</p>
                            <p className="text-2xl font-bold text-green-800">{trendSummary.totalCategories}</p>
                          </div>
                          <i className="fas fa-layer-group text-2xl text-green-500"></i>
                        </div>
                      </div>

                      <div className="bg-blue-50 rounded-lg p-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-sm text-blue-600">Growing Categories</p>
                            <p className="text-2xl font-bold text-blue-800">{trendSummary.growingCategories?.length || 0}</p>
                          </div>
                          <i className="fas fa-trending-up text-2xl text-blue-500"></i>
                        </div>
                      </div>

                      <div className="bg-purple-50 rounded-lg p-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-sm text-purple-600">Hot Skills</p>
                            <p className="text-2xl font-bold text-purple-800">{trendSummary.hotSkills?.length || 0}</p>
                          </div>
                          <i className="fas fa-fire text-2xl text-purple-500"></i>
                        </div>
                      </div>

                      <div className="bg-orange-50 rounded-lg p-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-sm text-orange-600">Analysis Period</p>
                            <p className="text-lg font-bold text-orange-800">{trendSummary.dataPeriod || 'Last 90 days'}</p>
                          </div>
                          <i className="fas fa-calendar text-2xl text-orange-500"></i>
                        </div>
                      </div>
                    </div>

                    {/* Growing Categories */}
                    {trendSummary.growingCategories && trendSummary.growingCategories.length > 0 && (
                      <div className="bg-white rounded-lg border p-6">
                        <h3 className="text-lg font-semibold text-gray-800 mb-4">
                          <i className="fas fa-rocket mr-2 text-green-600"></i>
                          Top Growing Job Categories
                        </h3>
                        <div className="space-y-3">
                          {trendSummary.growingCategories.slice(0, 5).map((category, index) => (
                            <div key={index} className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                              <div>
                                <p className="font-medium text-gray-800">{category.category}</p>
                                <p className="text-sm text-gray-600">{category.totalJobs} total jobs</p>
                              </div>
                              <div className="text-right">
                                <p className="text-lg font-bold text-green-600">+{category.growthRate.toFixed(1)}%</p>
                                <p className="text-xs text-gray-500">Growth Rate</p>
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
              <div className="space-y-6">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">
                  <i className="fas fa-cogs mr-2 text-purple-600"></i>
                  Skill Demand Analysis
                </h2>

                {trendSummary?.hotSkills ? (
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div className="bg-white rounded-lg border p-6">
                      <h3 className="text-lg font-semibold text-gray-800 mb-4">
                        <i className="fas fa-fire mr-2 text-red-500"></i>
                        Hot Skills in Demand
                      </h3>
                      <div className="space-y-3">
                        {trendSummary.hotSkills.slice(0, 8).map((skill, index) => (
                          <div key={index} className="flex items-center justify-between">
                            <div>
                              <p className="font-medium text-gray-800">{skill.skill}</p>
                              <p className="text-sm text-gray-600">{skill.category}</p>
                            </div>
                            <div className="text-right">
                              <p className="font-bold text-purple-600">{skill.demand}</p>
                              <p className="text-xs text-gray-500">mentions</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {forecastingData?.skill_trends && (
                      <div className="bg-white rounded-lg border p-6">
                        <h3 className="text-lg font-semibold text-gray-800 mb-4">
                          <i className="fas fa-chart-line mr-2 text-blue-500"></i>
                          Skill Trend Analysis
                        </h3>
                        <div className="space-y-3">
                          {Object.entries(forecastingData.skill_trends).slice(0, 8).map(([skill, data]) => (
                            <div key={skill} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                              <div>
                                <p className="font-medium text-gray-800">{skill}</p>
                                <p className="text-sm text-gray-600">{data.skill_category}</p>
                              </div>
                              <div className="text-right">
                                <span className={`px-2 py-1 rounded text-xs font-medium ${
                                  data.trend_direction === 'increasing'
                                    ? 'bg-green-100 text-green-800'
                                    : 'bg-gray-100 text-gray-800'
                                }`}>
                                  {data.trend_direction === 'increasing' ? '↗️' : '→'} {data.trend_direction}
                                </span>
                                <p className="text-sm text-gray-600 mt-1">{data.total_demand} total</p>
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
              <div className="space-y-6">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">
                  <i className="fas fa-trending-up mr-2 text-blue-600"></i>
                  Employment Trends Analysis
                </h2>

                {forecastingData?.category_trends ? (
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {Object.entries(forecastingData.category_trends).slice(0, 6).map(([category, data]) => (
                      <div key={category} className="bg-white rounded-lg border p-6">
                        <div className="flex items-center justify-between mb-4">
                          <h3 className="font-semibold text-gray-800">{category}</h3>
                          <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                            data.trend_direction === 'increasing'
                              ? 'bg-green-100 text-green-800'
                              : 'bg-red-100 text-red-800'
                          }`}>
                            {data.trend_direction === 'increasing' ? '📈' : '📉'} {data.trend_direction}
                          </span>
                        </div>

                        <div className="space-y-3">
                          <div className="flex justify-between">
                            <span className="text-gray-600">Total Jobs:</span>
                            <span className="font-medium">{data.total_jobs}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">Growth Rate:</span>
                            <span className={`font-medium ${
                              data.growth_rate > 0 ? 'text-green-600' : 'text-red-600'
                            }`}>
                              {data.growth_rate > 0 ? '+' : ''}{data.growth_rate.toFixed(1)}%
                            </span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">Recent Activity:</span>
                            <span className="font-medium">{data.recent_activity.toFixed(1)} jobs/day</span>
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
              <div className="space-y-6">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">
                  <i className="fas fa-crystal-ball mr-2 text-purple-600"></i>
                  Market Forecasts & Predictions
                </h2>

                {forecastingData || trendSummary ? (
                  <>
                    {/* Forecast Summary Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg p-6">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-sm text-blue-600 font-medium">Market Outlook</p>
                            <p className="text-2xl font-bold text-blue-800">
                              {trendSummary?.growingCategories?.length > (trendSummary?.totalCategories / 2) ? 'Positive' : 'Stable'}
                            </p>
                            <p className="text-xs text-blue-600 mt-1">Next 30 days</p>
                          </div>
                          <i className="fas fa-chart-line text-3xl text-blue-500"></i>
                        </div>
                      </div>

                      <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-lg p-6">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-sm text-green-600 font-medium">Growth Sectors</p>
                            <p className="text-2xl font-bold text-green-800">
                              {trendSummary?.growingCategories?.length || 0}
                            </p>
                            <p className="text-xs text-green-600 mt-1">Industries expanding</p>
                          </div>
                          <i className="fas fa-seedling text-3xl text-green-500"></i>
                        </div>
                      </div>

                      <div className="bg-gradient-to-r from-purple-50 to-purple-100 rounded-lg p-6">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-sm text-purple-600 font-medium">Emerging Skills</p>
                            <p className="text-2xl font-bold text-purple-800">
                              {trendSummary?.hotSkills?.length || 0}
                            </p>
                            <p className="text-xs text-purple-600 mt-1">High demand skills</p>
                          </div>
                          <i className="fas fa-rocket text-3xl text-purple-500"></i>
                        </div>
                      </div>
                    </div>

                    {/* Industry Growth Forecasts */}
                    {forecastingData?.category_trends && (
                      <div className="bg-white rounded-lg border p-6">
                        <h3 className="text-lg font-semibold text-gray-800 mb-4">
                          <i className="fas fa-industry mr-2 text-blue-600"></i>
                          Industry Growth Forecasts (Next 3 Months)
                        </h3>
                        <div className="space-y-4">
                          {Object.entries(forecastingData.category_trends)
                            .sort(([,a], [,b]) => b.growth_rate - a.growth_rate)
                            .slice(0, 5)
                            .map(([category, data]) => {
                              const projectedGrowth = data.growth_rate * 1.2; // Simple projection
                              const projectedJobs = Math.round(data.total_jobs * (1 + projectedGrowth / 100));

                              return (
                                <div key={category} className="bg-gray-50 rounded-lg p-4">
                                  <div className="flex items-center justify-between mb-3">
                                    <h4 className="font-medium text-gray-800">{category}</h4>
                                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                                      projectedGrowth > 0
                                        ? 'bg-green-100 text-green-800'
                                        : 'bg-red-100 text-red-800'
                                    }`}>
                                      {projectedGrowth > 0 ? '📈' : '📉'}
                                      {projectedGrowth > 0 ? '+' : ''}{projectedGrowth.toFixed(1)}%
                                    </span>
                                  </div>
                                  <div className="grid grid-cols-2 gap-4 text-sm">
                                    <div>
                                      <p className="text-gray-600">Current Jobs</p>
                                      <p className="font-semibold text-gray-800">{data.total_jobs}</p>
                                    </div>
                                    <div>
                                      <p className="text-gray-600">Projected Jobs</p>
                                      <p className="font-semibold text-blue-600">{projectedJobs}</p>
                                    </div>
                                  </div>
                                  <div className="mt-3">
                                    <div className="flex justify-between text-xs text-gray-500 mb-1">
                                      <span>Growth Progress</span>
                                      <span>{Math.abs(projectedGrowth).toFixed(1)}%</span>
                                    </div>
                                    <div className="w-full bg-gray-200 rounded-full h-2">
                                      <div
                                        className={`h-2 rounded-full ${
                                          projectedGrowth > 0 ? 'bg-green-500' : 'bg-red-500'
                                        }`}
                                        style={{ width: `${Math.min(Math.abs(projectedGrowth) * 2, 100)}%` }}
                                      ></div>
                                    </div>
                                  </div>
                                </div>
                              );
                            })}
                        </div>
                      </div>
                    )}

                    {/* Skill Demand Forecasts */}
                    {trendSummary?.hotSkills && (
                      <div className="bg-white rounded-lg border p-6">
                        <h3 className="text-lg font-semibold text-gray-800 mb-4">
                          <i className="fas fa-brain mr-2 text-purple-600"></i>
                          Skill Demand Forecasts
                        </h3>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                          <div>
                            <h4 className="font-medium text-gray-700 mb-3">High Growth Skills</h4>
                            <div className="space-y-3">
                              {trendSummary.hotSkills.slice(0, 6).map((skill, index) => (
                                <div key={index} className="flex items-center justify-between p-3 bg-purple-50 rounded-lg">
                                  <div>
                                    <p className="font-medium text-gray-800">{skill.skill}</p>
                                    <p className="text-sm text-gray-600">{skill.category}</p>
                                  </div>
                                  <div className="text-right">
                                    <p className="text-sm font-bold text-purple-600">
                                      +{Math.round(skill.demand * 0.3)} projected
                                    </p>
                                    <p className="text-xs text-gray-500">next quarter</p>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>

                          <div>
                            <h4 className="font-medium text-gray-700 mb-3">Market Predictions</h4>
                            <div className="space-y-4">
                              <div className="bg-blue-50 rounded-lg p-4">
                                <div className="flex items-center mb-2">
                                  <i className="fas fa-calendar-alt text-blue-600 mr-2"></i>
                                  <span className="font-medium text-blue-800">Next 30 Days</span>
                                </div>
                                <p className="text-sm text-blue-700">
                                  Expected {Math.round((trendSummary.totalCategories || 0) * 0.15)} new job categories
                                  to show increased activity
                                </p>
                              </div>

                              <div className="bg-green-50 rounded-lg p-4">
                                <div className="flex items-center mb-2">
                                  <i className="fas fa-calendar-check text-green-600 mr-2"></i>
                                  <span className="font-medium text-green-800">Next 90 Days</span>
                                </div>
                                <p className="text-sm text-green-700">
                                  Projected {Math.round((trendSummary.hotSkills?.length || 0) * 1.4)} skills
                                  to enter high-demand category
                                </p>
                              </div>

                              <div className="bg-orange-50 rounded-lg p-4">
                                <div className="flex items-center mb-2">
                                  <i className="fas fa-chart-area text-orange-600 mr-2"></i>
                                  <span className="font-medium text-orange-800">Market Trend</span>
                                </div>
                                <p className="text-sm text-orange-700">
                                  Overall market showing {
                                    (trendSummary.growingCategories?.length || 0) > (trendSummary.totalCategories || 0) / 2
                                      ? 'positive growth signals'
                                      : 'stable conditions'
                                  }
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </>
                ) : (
                  <div className="text-center py-12">
                    <i className="fas fa-crystal-ball text-6xl text-gray-300 mb-4"></i>
                    <h3 className="text-xl font-semibold text-gray-600 mb-2">No Forecast Data Available</h3>
                    <p className="text-gray-500 mb-6">
                      Forecasting requires historical data analysis. Please ensure the forecasting service is running.
                    </p>
                    <button
                      onClick={fetchForecastingData}
                      className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors"
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
