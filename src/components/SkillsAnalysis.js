import React, { useState, useEffect } from 'react';
import api from '../api/api';
import { withAnalyticsConsent } from './withConsent';

const SkillsAnalysis = ({ applicantId }) => {
  const [analysis, setAnalysis] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('gaps');
  const [error, setError] = useState(null);

  useEffect(() => {
    if (applicantId) {
      fetchSkillsAnalysis();
    }
  }, [applicantId]);

  const fetchSkillsAnalysis = async () => {
    try {
      setLoading(true);
      setError(null);

      const response = await api.get('/skill-gap-analysis');
      setAnalysis(response.data);
    } catch (error) {
      console.error('Error fetching skills analysis:', error);
      setError(error.response?.data?.error || 'Failed to load skills analysis');
    } finally {
      setLoading(false);
    }
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'critical': return 'bg-red-100 text-red-800 border-red-200';
      case 'important': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'nice_to_have': return 'bg-green-100 text-green-800 border-green-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getDifficultyIcon = (difficulty) => {
    switch (difficulty) {
      case 'Beginner': return 'fas fa-star text-green-500';
      case 'Intermediate': return 'fas fa-star-half-alt text-yellow-500';
      case 'Advanced': return 'fas fa-star text-red-500';
      default: return 'fas fa-question text-gray-500';
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600"></div>
        <span className="ml-3 text-gray-600">Analyzing your skills...</span>
      </div>
    );
  }

  if (error) {
    const errorMessage = typeof error === 'string' ? error : error?.message || error?.error || 'An unknown error occurred';
    return (
      <div className="bg-red-50 border border-red-200 rounded-lg p-6">
        <div className="flex items-center">
          <i className="fas fa-exclamation-triangle text-red-500 mr-3"></i>
          <div>
            <h3 className="text-red-800 font-medium">Analysis Error</h3>
            <p className="text-red-600 text-sm mt-1">{errorMessage}</p>
          </div>
        </div>
        <button
          onClick={fetchSkillsAnalysis}
          className="mt-4 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors"
        >
          Try Again
        </button>
      </div>
    );
  }

  if (!analysis) {
    return (
      <div className="text-center py-8">
        <i className="fas fa-chart-line text-4xl text-gray-400 mb-4"></i>
        <p className="text-gray-600">No skills analysis available</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header with Overall Score */}
      <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-800 mb-2">
              <i className="fas fa-brain mr-3 text-green-600"></i>
              Skills Gap Analysis
            </h1>
            <p className="text-gray-600">
              Real market analysis based on your selected job categories
            </p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-600 mb-1">
              {analysis.summary?.matchPercentage || 0}%
            </div>
            <p className="text-sm text-gray-600">Market Match</p>
          </div>
        </div>

        {/* Summary Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
          <div className="text-center p-3 bg-white rounded-lg">
            <div className="text-xl font-bold text-blue-600">{analysis.summary?.totalUserSkills || 0}</div>
            <div className="text-sm text-gray-600">Your Skills</div>
          </div>
          <div className="text-center p-3 bg-white rounded-lg">
            <div className="text-xl font-bold text-red-600">{analysis.summary?.skillGaps || 0}</div>
            <div className="text-sm text-gray-600">Skill Gaps</div>
          </div>
          <div className="text-center p-3 bg-white rounded-lg">
            <div className="text-xl font-bold text-green-600">{analysis.summary?.totalMarketSkills || 0}</div>
            <div className="text-sm text-gray-600">Market Skills</div>
          </div>
          <div className="text-center p-3 bg-white rounded-lg">
            <div className="text-xl font-bold text-purple-600">{analysis.summary?.selectedCategories || 0}</div>
            <div className="text-sm text-gray-600">Categories</div>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="bg-white rounded-lg shadow-sm">
        <div className="border-b border-gray-200">
          <nav className="flex space-x-8 px-6">
            {[
              { id: 'gaps', label: 'Skill Gaps', icon: 'fas fa-exclamation-triangle' },
              { id: 'training', label: 'Training', icon: 'fas fa-graduation-cap' },
              { id: 'career', label: 'Career Paths', icon: 'fas fa-route' },
              { id: 'current', label: 'Current Skills', icon: 'fas fa-check-circle' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                  activeTab === tab.id
                    ? 'border-green-500 text-green-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                <i className={`${tab.icon} mr-2`}></i>
                {tab.label}
              </button>
            ))}
          </nav>
        </div>

        <div className="p-6">
          {/* Skill Gaps Tab */}
          {activeTab === 'gaps' && (
            <div className="space-y-6">
              {analysis.summary?.selectedCategories === 0 ? (
                <div className="text-center py-12">
                  <img
                    src="assets/logo.png"
                    alt="Job Match"
                    className="w-16 h-auto mx-auto opacity-60 mb-4"
                  />
                  <h3 className="text-lg font-semibold text-gray-600 mb-2">Select Job Categories First</h3>
                  <p className="text-gray-500 max-w-md mx-auto mb-4">
                    {analysis.message || 'Please select job categories in Settings to see personalized skill gap analysis.'}
                  </p>
                  <button
                    onClick={() => window.location.href = '/dashboard?tab=settings'}
                    className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors"
                  >
                    <i className="fas fa-cog mr-2"></i>
                    Go to Settings
                  </button>
                </div>
              ) : analysis.skillGaps && analysis.skillGaps.length > 0 ? (
                <div>
                  <h3 className="text-lg font-semibold text-red-700 mb-4">
                    <i className="fas fa-exclamation-circle mr-2"></i>
                    Missing Skills ({analysis.skillGaps.length})
                  </h3>
                  <p className="text-gray-600 mb-6">
                    These skills are in demand for jobs in your selected categories but missing from your profile.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {analysis.skillGaps.slice(0, 20).map((skill, index) => (
                      <div key={index} className="border border-gray-200 rounded-lg p-4 bg-white hover:shadow-md transition-shadow">
                        <div className="flex justify-between items-start mb-3">
                          <h4 className="font-medium text-gray-800">{skill.name}</h4>
                          <span className={`text-xs px-2 py-1 rounded ${
                            skill.demandCount > 5 ? 'bg-red-100 text-red-800' :
                            skill.demandCount > 2 ? 'bg-yellow-100 text-yellow-800' :
                            'bg-blue-100 text-blue-800'
                          }`}>
                            {skill.demandCount} jobs
                          </span>
                        </div>
                        <div className="text-sm text-gray-600 mb-3">
                          <p><i className="fas fa-tag mr-1"></i>{skill.category}</p>
                          <p><i className="fas fa-building mr-1"></i>{skill.companies.length} companies</p>
                          <p><i className="fas fa-chart-line mr-1"></i>{skill.demandScore.toFixed(1)}% demand score</p>
                        </div>
                        <div className="flex flex-wrap gap-1">
                          {skill.categories.slice(0, 3).map((cat, catIndex) => (
                            <span key={catIndex} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                              {cat}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="text-center py-8">
                  <i className="fas fa-check-circle text-4xl text-green-500 mb-4"></i>
                  <h3 className="text-lg font-medium text-gray-800 mb-2">Excellent!</h3>
                  <p className="text-gray-600">Your skills perfectly match the market demand in your selected categories.</p>
                </div>
              )}
            </div>
          )}

          {/* Training Recommendations Tab */}
          {activeTab === 'training' && (
            <div className="space-y-6">
              {analysis.summary?.selectedCategories === 0 ? (
                <div className="text-center py-12">
                  <img
                    src="assets/logo.png"
                    alt="Job Match"
                    className="w-16 h-auto mx-auto opacity-60 mb-4"
                  />
                  <h3 className="text-lg font-semibold text-gray-600 mb-2">Select Job Categories First</h3>
                  <p className="text-gray-500 max-w-md mx-auto mb-4">
                    Choose your preferred job categories to get personalized training recommendations.
                  </p>
                  <button
                    onClick={() => window.location.href = '/dashboard?tab=settings'}
                    className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors"
                  >
                    <i className="fas fa-cog mr-2"></i>
                    Go to Settings
                  </button>
                </div>
              ) : analysis.trainingRecommendations && analysis.trainingRecommendations.length > 0 ? (
                <div>
                  <h3 className="text-lg font-semibold text-green-700 mb-4">
                    <i className="fas fa-graduation-cap mr-2"></i>
                    Recommended Training ({analysis.trainingRecommendations.length})
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Prioritized training courses based on market demand in your selected categories.
                  </p>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {analysis.trainingRecommendations.map((recommendation, index) => (
                      <div key={index} className={`border rounded-lg p-6 ${
                        recommendation.priority === 'High' ? 'border-red-200 bg-red-50' :
                        recommendation.priority === 'Medium' ? 'border-yellow-200 bg-yellow-50' :
                        'border-blue-200 bg-blue-50'
                      }`}>
                        <div className="flex justify-between items-start mb-4">
                          <h4 className="font-semibold text-gray-800">{recommendation.skillName}</h4>
                          <span className={`text-xs px-2 py-1 rounded font-medium ${
                            recommendation.priority === 'High' ? 'bg-red-200 text-red-800' :
                            recommendation.priority === 'Medium' ? 'bg-yellow-200 text-yellow-800' :
                            'bg-blue-200 text-blue-800'
                          }`}>
                            {recommendation.priority} Priority
                          </span>
                        </div>

                        <div className="mb-4 space-y-2">
                          <p className="text-sm text-gray-600">
                            <i className="fas fa-briefcase mr-2"></i>
                            <strong>Impact:</strong> {recommendation.impact.potentialJobs} jobs, {recommendation.impact.companies} companies
                          </p>
                          <p className="text-sm text-gray-600">
                            <i className="fas fa-chart-line mr-2"></i>
                            <strong>Demand:</strong> {recommendation.demandScore.toFixed(1)}% market score
                          </p>
                          <p className="text-sm text-gray-600">
                            <i className="fas fa-tag mr-2"></i>
                            <strong>Category:</strong> {recommendation.skillCategory}
                          </p>
                        </div>

                        <div className="bg-white rounded-lg p-4 mb-4">
                          <h5 className="font-medium text-gray-800 mb-2">
                            <i className="fas fa-book mr-2 text-green-600"></i>
                            Recommended Course
                          </h5>
                          <p className="text-sm font-medium text-gray-700 mb-1">{recommendation.training.courseName}</p>
                          <div className="flex justify-between text-xs text-gray-600 mb-3">
                            <span><i className="fas fa-clock mr-1"></i>{recommendation.training.estimatedDuration}</span>
                            <span><i className="fas fa-signal mr-1"></i>{recommendation.training.difficulty}</span>
                          </div>
                          <a
                            href={recommendation.training.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`w-full px-4 py-2 rounded-lg transition-colors flex items-center justify-center text-white ${
                              recommendation.priority === 'High' ? 'bg-red-600 hover:bg-red-700' :
                              recommendation.priority === 'Medium' ? 'bg-yellow-600 hover:bg-yellow-700' :
                              'bg-blue-600 hover:bg-blue-700'
                            }`}
                          >
                            <i className="fas fa-external-link-alt mr-2"></i>
                            Start Learning on Coursera
                          </a>
                        </div>

                        <div className="text-xs text-gray-500">
                          <p><strong>Categories:</strong> {recommendation.impact.categories.join(', ')}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="text-center py-12">
                  <img
                    src="assets/logo.png"
                    alt="Job Match"
                    className="w-16 h-auto mx-auto opacity-60 mb-4"
                  />
                  <h3 className="text-lg font-semibold text-gray-600 mb-2">No Training Needed</h3>
                  <p className="text-gray-500 max-w-md mx-auto">
                    Excellent! Your skills perfectly match the market demand. Keep learning to stay ahead.
                  </p>
                </div>
              )}
            </div>
          )}

          {/* Career Paths Tab */}
          {activeTab === 'career' && (
            <div className="space-y-6">
              {analysis.summary?.selectedCategories === 0 ? (
                <div className="text-center py-12">
                  <img
                    src="assets/logo.png"
                    alt="Job Match"
                    className="w-16 h-auto mx-auto opacity-60 mb-4"
                  />
                  <h3 className="text-lg font-semibold text-gray-600 mb-2">Select Job Categories First</h3>
                  <p className="text-gray-500 max-w-md mx-auto mb-4">
                    Choose your preferred job categories to see career path recommendations.
                  </p>
                  <button
                    onClick={() => window.location.href = '/dashboard?tab=settings'}
                    className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors"
                  >
                    <i className="fas fa-cog mr-2"></i>
                    Go to Settings
                  </button>
                </div>
              ) : analysis.marketDemand && analysis.marketDemand.length > 0 ? (
                <div>
                  <h3 className="text-lg font-semibold text-blue-700 mb-4">
                    <i className="fas fa-route mr-2"></i>
                    Career Paths Based on Market Demand
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Career opportunities aligned with your skills and market demand in your selected categories.
                  </p>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {analysis.marketDemand.slice(0, 6).map((skill, index) => (
                      <div key={index} className="border rounded-lg p-6 bg-white">
                        <h4 className="text-lg font-semibold text-gray-800 mb-3">
                          <i className="fas fa-briefcase mr-2 text-blue-600"></i>
                          {skill.name} Specialist
                        </h4>

                        <div className="mb-4 space-y-2">
                          <p className="text-sm text-gray-600">
                            <i className="fas fa-chart-line mr-2"></i>
                            <strong>Market Demand:</strong> {skill.demandScore.toFixed(1)}% ({skill.demandCount} jobs)
                          </p>
                          <p className="text-sm text-gray-600">
                            <i className="fas fa-building mr-2"></i>
                            <strong>Companies:</strong> {skill.companies.length} hiring
                          </p>
                          <p className="text-sm text-gray-600">
                            <i className="fas fa-tag mr-2"></i>
                            <strong>Category:</strong> {skill.category}
                          </p>
                        </div>

                        <div className="bg-blue-50 rounded-lg p-4 mb-4">
                          <h5 className="font-medium text-blue-800 mb-2">Career Opportunities:</h5>
                          <div className="space-y-1">
                            {skill.jobs.slice(0, 3).map((job, jobIndex) => (
                              <p key={jobIndex} className="text-sm text-blue-700">
                                • {job.title} at {job.company}
                              </p>
                            ))}
                            {skill.jobs.length > 3 && (
                              <p className="text-xs text-blue-600">+{skill.jobs.length - 3} more opportunities</p>
                            )}
                          </div>
                        </div>

                        <div className="bg-green-50 rounded-lg p-4">
                          <h5 className="font-medium text-green-800 mb-2">Next Steps:</h5>
                          <ul className="text-sm text-green-700 space-y-1">
                            <li className="flex items-center">
                              <i className="fas fa-arrow-right mr-2 text-green-600"></i>
                              {analysis.userSkills?.some(us => us.name === skill.name)
                                ? 'Enhance your existing skills'
                                : 'Learn this skill through training'}
                            </li>
                            <li className="flex items-center">
                              <i className="fas fa-arrow-right mr-2 text-green-600"></i>
                              Build portfolio projects
                            </li>
                            <li className="flex items-center">
                              <i className="fas fa-arrow-right mr-2 text-green-600"></i>
                              Apply to {skill.demandCount} available positions
                            </li>
                          </ul>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="text-center py-12">
                  <img
                    src="assets/logo.png"
                    alt="Job Match"
                    className="w-16 h-auto mx-auto opacity-60 mb-4"
                  />
                  <h3 className="text-lg font-semibold text-gray-600 mb-2">No Career Data Available</h3>
                  <p className="text-gray-500 max-w-md mx-auto">
                    Add more jobs in your selected categories to see career path recommendations.
                  </p>
                </div>
              )}
            </div>
          )}

          {/* Current Skills Tab */}
          {activeTab === 'current' && (
            <div className="space-y-6">
              {/* Skills Summary */}
              <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">
                  <i className="fas fa-chart-pie mr-2 text-blue-600"></i>
                  Your Skills Overview
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">
                      {analysis.userSkills?.filter(s => s.category === 'Technical').length || 0}
                    </div>
                    <div className="text-sm text-gray-600">Technical Skills</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">
                      {analysis.userSkills?.filter(s => s.category === 'Soft').length || 0}
                    </div>
                    <div className="text-sm text-gray-600">Soft Skills</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-pink-600">
                      {analysis.userSkills?.filter(s => s.category === 'Language').length || 0}
                    </div>
                    <div className="text-sm text-gray-600">Languages</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-orange-600">
                      {analysis.userSkills?.filter(s => s.category === 'Industry-Specific').length || 0}
                    </div>
                    <div className="text-sm text-gray-600">Industry Skills</div>
                  </div>
                </div>
              </div>
              {/* All Skills by Category */}
              {analysis.userSkills && analysis.userSkills.length > 0 ? (
                <>
                  {['Technical', 'Soft', 'Language', 'Industry-Specific'].map(category => {
                    const categorySkills = analysis.userSkills.filter(skill => skill.category === category);
                    if (categorySkills.length === 0) return null;

                    const categoryConfig = {
                      'Technical': { icon: 'laptop-code', color: 'green' },
                      'Soft': { icon: 'users', color: 'blue' },
                      'Language': { icon: 'language', color: 'pink' },
                      'Industry-Specific': { icon: 'industry', color: 'orange' }
                    };

                    const config = categoryConfig[category];

                    return (
                      <div key={category}>
                        <h3 className="text-lg font-semibold text-gray-800 mb-4">
                          <i className={`fas fa-${config.icon} mr-2 text-${config.color}-600`}></i>
                          {category} Skills ({categorySkills.length})
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                          {categorySkills.map((skill, index) => (
                            <div key={index} className={`flex items-center justify-between p-3 bg-${config.color}-50 rounded-lg`}>
                              <span className={`font-medium text-${config.color}-800`}>{skill.name}</span>
                              <span className={`text-sm text-${config.color}-600`}>{skill.proficiencyLevel || 'Intermediate'}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    );
                  })}
                </>
              ) : (
                <div className="text-center py-12">
                  <img
                    src="assets/logo.png"
                    alt="Job Match"
                    className="w-16 h-auto mx-auto opacity-60 mb-4"
                  />
                  <h3 className="text-lg font-semibold text-gray-600 mb-2">No Skills Added Yet</h3>
                  <p className="text-gray-500 max-w-md mx-auto mb-4">
                    Add your skills to your profile to see personalized analysis and recommendations.
                  </p>
                  <button
                    onClick={() => window.location.href = '/dashboard?tab=skills'}
                    className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors"
                  >
                    <i className="fas fa-plus mr-2"></i>
                    Add Skills
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// Create a fallback component for when consent is not granted
const SkillsAnalysisFallback = ({ onRequestConsent }) => (
  <div className="space-y-6">
    <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-800 mb-2">
            <i className="fas fa-brain mr-3 text-green-600"></i>
            Skills Analysis
          </h1>
          <p className="text-gray-600">
            Comprehensive analysis of your skills and market alignment
          </p>
        </div>
        <div className="text-center opacity-50">
          <div className="text-3xl font-bold text-gray-400 mb-1">--</div>
          <p className="text-sm text-gray-500">Market Alignment</p>
        </div>
      </div>
    </div>

    <div className="bg-blue-50 border border-blue-200 rounded-lg p-8 text-center">
      <i className="fas fa-shield-alt text-4xl text-blue-600 mb-4"></i>
      <h2 className="text-xl font-semibold text-blue-800 mb-2">Analytics Consent Required</h2>
      <p className="text-blue-700 mb-6 max-w-md mx-auto">
        To analyze your skills and provide personalized recommendations, we need your consent to process your profile data.
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
          <p>✓ Personalized skill gap analysis</p>
          <p>✓ Training recommendations</p>
          <p>✓ Career path suggestions</p>
        </div>
      </div>
    </div>

    {/* Sample/Demo content */}
    <div className="bg-white rounded-lg shadow-sm opacity-50">
      <div className="border-b border-gray-200">
        <nav className="flex space-x-8 px-6">
          {[
            { label: 'Skill Gaps', icon: 'fas fa-exclamation-triangle' },
            { label: 'Training', icon: 'fas fa-graduation-cap' },
            { label: 'Career Paths', icon: 'fas fa-route' },
            { label: 'Current Skills', icon: 'fas fa-check-circle' }
          ].map((tab, index) => (
            <div
              key={index}
              className="py-4 px-1 border-b-2 border-transparent text-gray-400 font-medium text-sm"
            >
              <i className={`${tab.icon} mr-2`}></i>
              {tab.label}
            </div>
          ))}
        </nav>
      </div>
      <div className="p-6">
        <div className="text-center py-8">
          <i className="fas fa-lock text-4xl text-gray-300 mb-4"></i>
          <p className="text-gray-500">Grant consent to see your personalized skills analysis</p>
        </div>
      </div>
    </div>
  </div>
);

// Export the wrapped component with analytics consent
export default withAnalyticsConsent(SkillsAnalysis, {
  fallbackComponent: SkillsAnalysisFallback,
  showPromptOnDenied: true
});
