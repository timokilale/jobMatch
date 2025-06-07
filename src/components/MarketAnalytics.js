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
    // Forecasting data disabled - using only real market data
    console.log('🚫 Forecasting data disabled - Market Insights uses only real job posting data');
    setForecastingLoading(false);
    setForecastingError(null);
    setTrendSummary(null);
    setForecastingData(null);
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

                {marketData || skillDemand ? (
                  <>
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
                      <div className="bg-green-50 rounded-lg p-3 sm:p-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-xs sm:text-sm text-green-600">Active Jobs</p>
                            <p className="text-lg sm:text-2xl font-bold text-green-800">{marketData?.overview?.activeJobs || skillDemand?.metadata?.totalJobs || 0}</p>
                          </div>
                          <i className="fas fa-briefcase text-lg sm:text-2xl text-green-500"></i>
                        </div>
                      </div>

                      <div className="bg-blue-50 rounded-lg p-3 sm:p-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-xs sm:text-sm text-blue-600">Skill Requirements</p>
                            <p className="text-lg sm:text-2xl font-bold text-blue-800">{skillDemand?.metadata?.totalRequirements || 0}</p>
                          </div>
                          <i className="fas fa-cogs text-lg sm:text-2xl text-blue-500"></i>
                        </div>
                      </div>

                      <div className="bg-purple-50 rounded-lg p-3 sm:p-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-xs sm:text-sm text-purple-600">Skills in Demand</p>
                            <p className="text-lg sm:text-2xl font-bold text-purple-800">{skillDemand?.skills?.length || 0}</p>
                          </div>
                          <i className="fas fa-fire text-lg sm:text-2xl text-purple-500"></i>
                        </div>
                      </div>

                      <div className="bg-orange-50 rounded-lg p-3 sm:p-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-xs sm:text-sm text-orange-600">Market Health</p>
                            <p className="text-sm sm:text-lg font-bold text-orange-800">{marketHealth?.status || 'Good'}</p>
                          </div>
                          <i className="fas fa-heart text-lg sm:text-2xl text-orange-500"></i>
                        </div>
                      </div>
                    </div>

                    {/* Top Skills from Real Data */}
                    {skillDemand?.skills && skillDemand.skills.length > 0 && (
                      <div className="bg-white rounded-lg border p-4 sm:p-6">
                        <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-3 sm:mb-4">
                          <i className="fas fa-star mr-2 text-green-600"></i>
                          Top Skills in Demand
                        </h3>
                        <div className="space-y-2 sm:space-y-3">
                          {skillDemand.skills.slice(0, 5).map((skill, index) => (
                            <div key={index} className="flex items-start justify-between p-3 bg-green-50 rounded-lg">
                              <div className="flex-1 min-w-0 pr-3">
                                <p className="font-medium text-gray-800 text-sm sm:text-base break-words">{skill.skillName || skill.skill}</p>
                                <p className="text-xs sm:text-sm text-gray-600 break-words">{skill.category} • {skill.demandScore?.toFixed(1) || 0}% of jobs</p>
                              </div>
                              <div className="text-right flex-shrink-0">
                                <p className="text-base sm:text-lg font-bold text-green-600 whitespace-nowrap">{skill.demand || skill.jobCount}</p>
                                <p className="text-xs text-gray-500 whitespace-nowrap">mentions</p>
                              </div>
                            </div>
                          ))}
                        </div>
                        <div className="mt-3 text-xs text-gray-500">
                          <i className="fas fa-info-circle mr-1"></i>
                          Based on {skillDemand.metadata?.totalJobs || 0} active job postings • {skillDemand.metadata?.dataSource}
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

                {skillDemand?.skills && skillDemand.skills.length > 0 ? (
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
                    <div className="bg-white rounded-lg border p-4 sm:p-6">
                      <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-3 sm:mb-4">
                        <i className="fas fa-fire mr-2 text-red-500"></i>
                        Hot Skills in Demand
                      </h3>
                      <div className="space-y-2 sm:space-y-3">
                        {skillDemand.skills.slice(0, 8).map((skill, index) => (
                          <div key={index} className="flex items-start justify-between">
                            <div className="flex-1 min-w-0 pr-3">
                              <p className="font-medium text-gray-800 text-sm sm:text-base break-words">{skill.skillName || skill.skill}</p>
                              <p className="text-xs sm:text-sm text-gray-600 break-words">{skill.category}</p>
                            </div>
                            <div className="text-right flex-shrink-0">
                              <p className="font-bold text-purple-600 text-sm sm:text-base whitespace-nowrap">{skill.demand || skill.jobCount}</p>
                              <p className="text-xs text-gray-500 whitespace-nowrap">mentions</p>
                            </div>
                          </div>
                        ))}
                      </div>
                      <div className="mt-3 text-xs text-gray-500">
                        <i className="fas fa-database mr-1"></i>
                        Data from {skillDemand.metadata?.totalJobs || 0} real job postings
                      </div>
                    </div>

                    {emergingSkills?.skills && emergingSkills.skills.length > 0 && (
                      <div className="bg-white rounded-lg border p-4 sm:p-6">
                        <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-3 sm:mb-4">
                          <i className="fas fa-chart-line mr-2 text-blue-500"></i>
                          Emerging Skills Analysis
                        </h3>
                        <div className="space-y-2 sm:space-y-3">
                          {emergingSkills.skills.slice(0, 8).map((skill, index) => (
                            <div key={index} className="flex items-start justify-between p-3 bg-gray-50 rounded-lg">
                              <div className="flex-1 min-w-0 pr-3">
                                <p className="font-medium text-gray-800 text-sm sm:text-base break-words">{skill.skillName}</p>
                                <p className="text-xs sm:text-sm text-gray-600 break-words">{skill.category}</p>
                              </div>
                              <div className="text-right flex-shrink-0">
                                <span className={`px-2 py-1 rounded text-xs font-medium whitespace-nowrap ${
                                  skill.trend === 'increasing'
                                    ? 'bg-green-100 text-green-800'
                                    : 'bg-gray-100 text-gray-800'
                                }`}>
                                  {skill.trend === 'increasing' ? '↗️' : '→'} {skill.trend}
                                </span>
                                <p className="text-xs sm:text-sm text-gray-600 mt-1 whitespace-nowrap">{skill.jobCount} jobs</p>
                              </div>
                            </div>
                          ))}
                        </div>
                        <div className="mt-3 text-xs text-gray-500">
                          <i className="fas fa-info-circle mr-1"></i>
                          Based on real job posting analysis • {emergingSkills.metadata?.dataSource}
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
                  Real Market Trends Analysis
                </h2>

                {skillDemand?.skills && skillDemand.skills.length > 0 ? (
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
                    {skillDemand.skills.slice(0, 6).map((skill, index) => (
                      <div key={index} className="bg-white rounded-lg border p-4 sm:p-6">
                        <div className="flex items-start justify-between mb-3 sm:mb-4">
                          <h3 className="font-semibold text-gray-800 text-sm sm:text-base flex-1 min-w-0 pr-2 break-words">{skill.skillName || skill.skill}</h3>
                          <span className={`px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium flex-shrink-0 whitespace-nowrap ${
                            skill.trend === 'increasing'
                              ? 'bg-green-100 text-green-800'
                              : 'bg-blue-100 text-blue-800'
                          }`}>
                            <span className="hidden sm:inline">{skill.trend === 'increasing' ? '📈' : '📊'} {skill.trend || 'stable'}</span>
                            <span className="sm:hidden">{skill.trend === 'increasing' ? '📈' : '📊'}</span>
                          </span>
                        </div>

                        <div className="space-y-2 sm:space-y-3">
                          <div className="flex justify-between text-sm sm:text-base">
                            <span className="text-gray-600 break-words">Job Mentions:</span>
                            <span className="font-medium whitespace-nowrap ml-2">{skill.demand || skill.jobCount}</span>
                          </div>
                          <div className="flex justify-between text-sm sm:text-base">
                            <span className="text-gray-600 break-words">Demand Score:</span>
                            <span className={`font-medium whitespace-nowrap ml-2 ${
                              skill.demandScore > 30 ? 'text-green-600' : 'text-blue-600'
                            }`}>
                              {skill.demandScore?.toFixed(1) || 0}%
                            </span>
                          </div>
                          <div className="flex justify-between text-sm sm:text-base">
                            <span className="text-gray-600 break-words">Category:</span>
                            <span className="font-medium whitespace-nowrap ml-2">{skill.category}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <i className="fas fa-chart-line text-4xl text-gray-400 mb-4"></i>
                    <p className="text-gray-600">No real trend data available</p>
                    <p className="text-sm text-gray-500 mt-2">Add jobs with skill requirements to see market trends</p>
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

                {skillDemand?.skills && skillDemand.skills.length > 0 ? (
                  <>
                    {/* Real Market Summary Cards */}
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
                      <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg p-3 sm:p-6 border-l-4 border-blue-500">
                        <div className="flex items-start justify-between">
                          <div className="flex-1 min-w-0 pr-2">
                            <p className="text-xs sm:text-sm text-blue-600 font-medium break-words">Market Health</p>
                            <p className="text-lg sm:text-2xl font-bold text-blue-800 break-words">
                              {marketHealth?.status || (skillDemand.metadata?.totalJobs > 5 ? 'Good' : 'Fair')}
                            </p>
                            <p className="text-xs text-blue-600 mt-1 break-words">Based on real data</p>
                          </div>
                          <i className="fas fa-chart-line text-xl sm:text-3xl text-blue-500 flex-shrink-0"></i>
                        </div>
                      </div>

                      <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-lg p-3 sm:p-6 border-l-4 border-green-500">
                        <div className="flex items-start justify-between">
                          <div className="flex-1 min-w-0 pr-2">
                            <p className="text-xs sm:text-sm text-green-600 font-medium break-words">Top Category</p>
                            <p className="text-sm sm:text-lg font-bold text-green-800 break-words">
                              {skillDemand.skills[0]?.category || 'Technical'}
                            </p>
                            <p className="text-xs text-green-600 mt-1 break-words">Most in demand</p>
                          </div>
                          <i className="fas fa-crown text-xl sm:text-3xl text-green-500 flex-shrink-0"></i>
                        </div>
                      </div>

                      <div className="bg-gradient-to-r from-purple-50 to-purple-100 rounded-lg p-3 sm:p-6 border-l-4 border-purple-500">
                        <div className="flex items-start justify-between">
                          <div className="flex-1 min-w-0 pr-2">
                            <p className="text-xs sm:text-sm text-purple-600 font-medium break-words">Top Skill</p>
                            <p className="text-sm sm:text-lg font-bold text-purple-800 break-words">
                              {skillDemand.skills[0]?.skillName || skillDemand.skills[0]?.skill || 'No Data'}
                            </p>
                            <p className="text-xs text-purple-600 mt-1 break-words">Most in demand</p>
                          </div>
                          <i className="fas fa-fire text-xl sm:text-3xl text-purple-500 flex-shrink-0"></i>
                        </div>
                      </div>

                      <div className="bg-gradient-to-r from-orange-50 to-orange-100 rounded-lg p-3 sm:p-6 border-l-4 border-orange-500">
                        <div className="flex items-start justify-between">
                          <div className="flex-1 min-w-0 pr-2">
                            <p className="text-xs sm:text-sm text-orange-600 font-medium break-words">Active Jobs</p>
                            <p className="text-lg sm:text-2xl font-bold text-orange-800 break-words">
                              {skillDemand.metadata?.totalJobs || marketData?.overview?.activeJobs || 0}
                            </p>
                            <p className="text-xs text-orange-600 mt-1 break-words">Real job postings</p>
                          </div>
                          <i className="fas fa-briefcase text-xl sm:text-3xl text-orange-500 flex-shrink-0"></i>
                        </div>
                      </div>
                    </div>

                    {/* Real Market Analysis */}
                    {skillDemand?.skills && skillDemand.skills.length > 0 && (
                      <div className="bg-white rounded-lg border p-4 sm:p-6">
                        <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-3 sm:mb-4">
                          <i className="fas fa-industry mr-2 text-blue-600"></i>
                          <span className="hidden sm:inline">Real Market Analysis - Current Demand</span>
                          <span className="sm:hidden">Market Analysis</span>
                        </h3>
                        <div className="space-y-3 sm:space-y-4">
                          {skillDemand.skills.slice(0, 6).map((skill, index) => {
                            // Get category-specific insights
                            const getCategoryInsight = (category, demand) => {
                              const insights = {
                                'Technical': {
                                  icon: '💻',
                                  description: 'Programming, software development, and technical skills',
                                  trend: demand > 3 ? 'High demand for technical specialists' : 'Steady demand for technical skills'
                                },
                                'Healthcare': {
                                  icon: '🏥',
                                  description: 'Medical, nursing, and healthcare support positions',
                                  trend: 'Growing need for healthcare workers and medical professionals'
                                },
                                'Soft': {
                                  icon: '🤝',
                                  description: 'Communication, leadership, and interpersonal skills',
                                  trend: 'Essential skills valued across all industries'
                                },
                                'Language': {
                                  icon: '🗣️',
                                  description: 'Communication and language proficiency skills',
                                  trend: 'Important for global business and communication'
                                },
                                'Industry-Specific': {
                                  icon: '🏭',
                                  description: 'Specialized skills for specific industries',
                                  trend: 'Targeted expertise for specialized roles'
                                }
                              };
                              return insights[category] || {
                                icon: '💼',
                                description: 'Professional skills and expertise',
                                trend: 'Market demand for specialized skills'
                              };
                            };

                            const categoryInfo = getCategoryInsight(skill.category, skill.demand || skill.jobCount);

                            return (
                              <div key={index} className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg p-4 sm:p-5 border-l-4 border-blue-500">
                                <div className="flex items-start justify-between mb-3">
                                  <div className="flex items-start flex-1 min-w-0">
                                    <span className="text-xl sm:text-2xl mr-2 sm:mr-3 flex-shrink-0">{categoryInfo.icon}</span>
                                    <div className="min-w-0 flex-1 pr-2">
                                      <h4 className="font-semibold text-gray-800 text-base sm:text-lg break-words">{skill.skillName || skill.skill}</h4>
                                      <p className="text-xs sm:text-sm text-gray-600 break-words leading-relaxed">{categoryInfo.description}</p>
                                    </div>
                                  </div>
                                  <span className={`px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium flex-shrink-0 whitespace-nowrap ${
                                    skill.trend === 'increasing'
                                      ? 'bg-green-100 text-green-800'
                                      : 'bg-blue-100 text-blue-800'
                                  }`}>
                                    <span className="hidden sm:inline">
                                      {skill.trend === 'increasing' ? '📈 Growing' : '📊 Stable'}
                                    </span>
                                    <span className="sm:hidden">
                                      {skill.trend === 'increasing' ? '📈' : '📊'}
                                    </span>
                                  </span>
                                </div>

                                <div className="grid grid-cols-3 gap-2 sm:gap-4 text-xs sm:text-sm mb-3">
                                  <div className="text-center">
                                    <p className="text-gray-600 break-words">Job Mentions</p>
                                    <p className="font-bold text-lg sm:text-xl text-gray-800 break-words">{skill.demand || skill.jobCount}</p>
                                  </div>
                                  <div className="text-center">
                                    <p className="text-gray-600 break-words">Demand Score</p>
                                    <p className="font-bold text-lg sm:text-xl text-blue-600 break-words">{skill.demandScore?.toFixed(1) || 0}%</p>
                                  </div>
                                  <div className="text-center">
                                    <p className="text-gray-600 break-words">Category</p>
                                    <p className="font-bold text-sm sm:text-base text-purple-600 break-words">{skill.category}</p>
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

                    {/* Real Skills Analysis */}
                    {skillDemand?.skills && skillDemand.skills.length > 0 && (
                      <div className="bg-white rounded-lg border p-4 sm:p-6">
                        <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-3 sm:mb-4">
                          <i className="fas fa-brain mr-2 text-purple-600"></i>
                          <span className="hidden sm:inline">Skills in High Demand - Real Market Data</span>
                          <span className="sm:hidden">Skills in Demand</span>
                        </h3>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
                          <div>
                            <h4 className="font-medium text-gray-700 mb-3 text-sm sm:text-base">🔥 Top Skills from Real Jobs</h4>
                            <div className="space-y-2 sm:space-y-3">
                              {skillDemand.skills.slice(0, 8).map((skill, index) => {
                                // Get skill-specific insights from real data
                                const getSkillInsight = (skillName, category, demand) => {
                                  const categoryIcons = {
                                    'Technical': '💻',
                                    'Soft': '🤝',
                                    'Language': '🗣️',
                                    'Industry-Specific': '🏭'
                                  };

                                  return {
                                    icon: categoryIcons[category] || '💼',
                                    trend: `${category} skill in high demand`,
                                    growth: demand > 3 ? 'High' : demand > 1 ? 'Medium' : 'Low'
                                  };
                                };

                                const skillInfo = getSkillInsight(skill.skillName || skill.skill, skill.category, skill.demand || skill.jobCount);

                                return (
                                  <div key={index} className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-3 sm:p-4 border-l-4 border-purple-400">
                                    <div className="flex items-start justify-between mb-2">
                                      <div className="flex items-start flex-1 min-w-0">
                                        <span className="text-base sm:text-lg mr-2 flex-shrink-0">{skillInfo.icon}</span>
                                        <div className="min-w-0 flex-1 pr-2">
                                          <p className="font-semibold text-gray-800 text-sm sm:text-base break-words">{skill.skillName || skill.skill}</p>
                                          <p className="text-xs text-gray-600 break-words">{skill.category}</p>
                                        </div>
                                      </div>
                                      <div className="text-right flex-shrink-0">
                                        <span className={`px-2 py-1 rounded-full text-xs font-medium whitespace-nowrap ${
                                          skillInfo.growth === 'High' ? 'bg-red-100 text-red-800' :
                                          skillInfo.growth === 'Medium' ? 'bg-orange-100 text-orange-800' :
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
                                        <p className="font-bold text-purple-600 whitespace-nowrap">{skill.demand || skill.jobCount} mentions</p>
                                        <p className="text-xs text-gray-500 whitespace-nowrap">{skill.demandScore?.toFixed(1) || 0}% of jobs</p>
                                      </div>
                                    </div>
                                  </div>
                                );
                              })}
                            </div>
                          </div>

                          <div>
                            <h4 className="font-medium text-gray-700 mb-3 text-sm sm:text-base">📊 Real Market Intelligence</h4>
                            <div className="space-y-3 sm:space-y-4">
                             {/* <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg p-3 sm:p-4">
                                <div className="flex items-center mb-2">
                                  <i className="fas fa-database text-blue-600 mr-2"></i>
                                  <span className="font-medium text-blue-800 text-sm sm:text-base">Data Source</span>
                                </div>
                                <p className="text-xs sm:text-sm text-blue-700">
                                  All insights based on <strong>{skillDemand.metadata?.totalJobs || 0} real job postings</strong> with
                                  <strong> {skillDemand.metadata?.totalRequirements || 0} skill requirements</strong> from actual employers.
                                </p>
                              </div>*/}
                              <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-lg p-3 sm:p-4">
                                <div className="flex items-center mb-2">
                                  <i className="fas fa-star text-green-600 mr-2"></i>
                                  <span className="font-medium text-green-800 text-sm sm:text-base">Top Skill</span>
                                </div>
                                <p className="text-xs sm:text-sm text-green-700">
                                  <strong>{skillDemand.skills[0]?.skillName || skillDemand.skills[0]?.skill || 'No data'}</strong> is the most in-demand skill with
                                  <strong> {skillDemand.skills[0]?.demand || skillDemand.skills[0]?.jobCount || 0} mentions</strong> across job postings.
                                </p>
                              </div>

                              <div className="bg-gradient-to-r from-purple-50 to-purple-100 rounded-lg p-3 sm:p-4">
                                <div className="flex items-center mb-2">
                                  <i className="fas fa-chart-line text-purple-600 mr-2"></i>
                                  <span className="font-medium text-purple-800 text-sm sm:text-base">Market Health</span>
                                </div>
                                <p className="text-xs sm:text-sm text-purple-700">
                                  Market shows <strong>{marketHealth?.status || 'Good'}</strong> health with
                                  <strong> {skillDemand.skills?.length || 0} unique skills</strong> in demand across various categories.
                                </p>
                              </div>

                              {/*<div className="bg-gradient-to-r from-orange-50 to-orange-100 rounded-lg p-3 sm:p-4">
                                <div className="flex items-center mb-2">
                                  <i className="fas fa-lightbulb text-orange-600 mr-2"></i>
                                  <span className="font-medium text-orange-800 text-sm sm:text-base">Real Insights</span>
                                </div>
                                <p className="text-xs sm:text-sm text-orange-700">
                                  No mock data - all statistics reflect actual employer requirements and
                                  <strong> real market demand</strong> from {skillDemand.metadata?.dataSource || 'job postings'}.
                                </p>
                              </div>*/}
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </>
                ) : (
                  <div className="text-center py-8 sm:py-12 px-4">
                    <i className="fas fa-database text-4xl sm:text-6xl text-gray-300 mb-4"></i>
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-600 mb-2">No Real Market Data Available</h3>
                    <p className="text-sm sm:text-base text-gray-500 mb-6 max-w-md mx-auto">
                      Market insights require active job postings with skill requirements. Add jobs to see real market analysis.
                    </p>
                    <button
                      onClick={fetchMarketData}
                      className="w-full sm:w-auto bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors text-sm sm:text-base"
                    >
                      <i className="fas fa-sync-alt mr-2"></i>
                      Refresh Market Data
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


  </div>
);

// Export the wrapped component with analytics consent
export default withAnalyticsConsent(MarketAnalytics, {
  fallbackComponent: MarketAnalyticsFallback,
  showPromptOnDenied: true
});
