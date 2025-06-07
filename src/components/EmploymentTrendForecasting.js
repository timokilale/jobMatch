import React, { useState, useEffect } from 'react';
import api from '../api/api';
import { useSelector } from 'react-redux';

const EmploymentTrendForecasting = () => {
  const [forecastingData, setForecastingData] = useState(null);
  const [trendSummary, setTrendSummary] = useState(null);
  const [personalizedInsights, setPersonalizedInsights] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [activeTab, setActiveTab] = useState('overview');
  
  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    fetchForecastingData();
  }, []);

  const fetchForecastingData = async () => {
    try {
      setLoading(true);
      setError(null);

      // Check if forecasting service is available
      const healthResponse = await api.get('/forecasting/health');
      if (healthResponse.data.status !== 'healthy') {
        throw new Error('Forecasting service unavailable');
      }

      // Fetch trend summary
      const summaryResponse = await api.get('/forecasting/summary');
      setTrendSummary(summaryResponse.data.data);

      // Fetch employment trends
      const trendsResponse = await api.get('/forecasting/trends?days=90');
      setForecastingData(trendsResponse.data.data);

      // Fetch personalized insights if user is applicant
      if (user?.role === 'APPLICANT' && user?.id) {
        try {
          const insightsResponse = await api.get(`/forecasting/insights/applicant/${user.id}`);
          setPersonalizedInsights(insightsResponse.data.data);
        } catch (error) {
          console.log('Personalized insights not available:', error.message);
        }
      }

    } catch (error) {
      console.error('Error fetching forecasting data:', error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const renderOverviewTab = () => (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">
        <i className="fas fa-chart-bar mr-2 text-green-600"></i>
        Market Overview
      </h2>
      
      {trendSummary ? (
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

      {/* Growing Categories */}
      {trendSummary?.growingCategories && (
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
    </div>
  );

  const renderTrendsTab = () => (
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
  );

  const renderSkillsTab = () => (
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
  );

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
              disabled={loading}
              className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors disabled:opacity-50"
            >
              <i className={`fas ${loading ? 'fa-spinner fa-spin' : 'fa-sync-alt'} mr-2`}></i>
              {loading ? 'Updating...' : 'Refresh Data'}
            </button>
          </div>
        </div>
      </div>

      {/* Error State */}
      {error && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4">
          <div className="flex items-center">
            <i className="fas fa-exclamation-triangle text-red-500 mr-3"></i>
            <div>
              <h3 className="text-red-800 font-medium">Forecasting Service Unavailable</h3>
              <p className="text-red-600 text-sm mt-1">
                {error}. Please try again later or contact support.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Tab Navigation */}
      <div className="bg-white rounded-lg shadow-sm">
        <div className="border-b border-gray-200">
          <nav className="flex space-x-8 px-6">
            {[
              { key: 'overview', label: 'Market Overview', icon: 'chart-bar' },
              { key: 'trends', label: 'Employment Trends', icon: 'trending-up' },
              { key: 'skills', label: 'Skill Demand', icon: 'cogs' },
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

        {/* Tab Content */}
        <div className="p-6">
          {loading ? (
            <div className="text-center py-8">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600 mx-auto mb-4"></div>
              <p className="text-gray-600">Loading forecasting data...</p>
            </div>
          ) : (
            <>
              {activeTab === 'overview' && renderOverviewTab()}
              {activeTab === 'trends' && renderTrendsTab()}
              {activeTab === 'skills' && renderSkillsTab()}
              {activeTab === 'personal' && personalizedInsights && (
                <div className="space-y-6">
                  <h2 className="text-xl font-semibold text-gray-800 mb-4">
                    <i className="fas fa-user-chart mr-2 text-blue-600"></i>
                    Personalized Insights
                  </h2>
                  
                  {personalizedInsights.opportunities?.length > 0 && (
                    <div className="bg-green-50 rounded-lg p-6">
                      <h3 className="text-lg font-semibold text-green-800 mb-4">
                        <i className="fas fa-lightbulb mr-2"></i>
                        Opportunities for You
                      </h3>
                      <div className="space-y-3">
                        {personalizedInsights.opportunities.map((opportunity, index) => (
                          <div key={index} className="bg-white rounded-lg p-4">
                            <h4 className="font-medium text-gray-800">{opportunity.category}</h4>
                            <p className="text-sm text-gray-600 mt-1">{opportunity.message}</p>
                            <span className={`inline-block mt-2 px-2 py-1 rounded text-xs font-medium ${
                              opportunity.priority === 'high' ? 'bg-red-100 text-red-800' : 'bg-yellow-100 text-yellow-800'
                            }`}>
                              {opportunity.priority} priority
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default EmploymentTrendForecasting;
