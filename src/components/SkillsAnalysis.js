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
      
      const response = await api.get(`/skills-analysis/gaps/${applicantId}`);
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
    return (
      <div className="bg-red-50 border border-red-200 rounded-lg p-6">
        <div className="flex items-center">
          <i className="fas fa-exclamation-triangle text-red-500 mr-3"></i>
          <div>
            <h3 className="text-red-800 font-medium">Analysis Error</h3>
            <p className="text-red-600 text-sm mt-1">{error}</p>
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
              Skills Analysis
            </h1>
            <p className="text-gray-600">
              Comprehensive analysis of your skills and market alignment
            </p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-600 mb-1">
              {analysis.overallScore}%
            </div>
            <p className="text-sm text-gray-600">Market Alignment</p>
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
              {/* Critical Skills */}
              {analysis.skillGaps.critical.length > 0 && (
                <div>
                  <h3 className="text-lg font-semibold text-red-700 mb-4">
                    <i className="fas fa-exclamation-circle mr-2"></i>
                    Critical Skills ({analysis.skillGaps.critical.length})
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {analysis.skillGaps.critical.map((skill, index) => (
                      <div key={index} className="border border-red-200 rounded-lg p-4 bg-red-50">
                        <div className="flex justify-between items-start mb-2">
                          <h4 className="font-medium text-red-800">{skill.skillName}</h4>
                          <span className="text-xs bg-red-200 text-red-800 px-2 py-1 rounded">
                            {skill.demandScore.toFixed(0)}% demand
                          </span>
                        </div>
                        <div className="flex items-center justify-between text-sm text-red-600">
                          <span>
                            <i className={getDifficultyIcon(skill.difficulty)}></i>
                            <span className="ml-1">{skill.difficulty}</span>
                          </span>
                          <span>{skill.estimatedLearningTime}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Important Skills */}
              {analysis.skillGaps.important.length > 0 && (
                <div>
                  <h3 className="text-lg font-semibold text-yellow-700 mb-4">
                    <i className="fas fa-exclamation-triangle mr-2"></i>
                    Important Skills ({analysis.skillGaps.important.length})
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {analysis.skillGaps.important.map((skill, index) => (
                      <div key={index} className="border border-yellow-200 rounded-lg p-4 bg-yellow-50">
                        <div className="flex justify-between items-start mb-2">
                          <h4 className="font-medium text-yellow-800">{skill.skillName}</h4>
                          <span className="text-xs bg-yellow-200 text-yellow-800 px-2 py-1 rounded">
                            {skill.demandScore.toFixed(0)}% demand
                          </span>
                        </div>
                        <div className="flex items-center justify-between text-sm text-yellow-600">
                          <span>
                            <i className={getDifficultyIcon(skill.difficulty)}></i>
                            <span className="ml-1">{skill.difficulty}</span>
                          </span>
                          <span>{skill.estimatedLearningTime}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {analysis.skillGaps.critical.length === 0 && analysis.skillGaps.important.length === 0 && (
                <div className="text-center py-8">
                  <i className="fas fa-check-circle text-4xl text-green-500 mb-4"></i>
                  <h3 className="text-lg font-medium text-gray-800 mb-2">Great Job!</h3>
                  <p className="text-gray-600">Your skills are well-aligned with market demand.</p>
                </div>
              )}
            </div>
          )}

          {/* Training Recommendations Tab */}
          {activeTab === 'training' && (
            <div className="space-y-4">
              {/* Critical Skills */}
              {analysis.skillGaps && analysis.skillGaps.critical && analysis.skillGaps.critical.length > 0 && (
                <div>
                  <h3 className="text-lg font-semibold text-red-700 mb-4">
                    <i className="fas fa-exclamation-circle mr-2"></i>
                    Critical Skills to Learn ({analysis.skillGaps.critical.length})
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {analysis.skillGaps.critical.map((skill, index) => (
                      <div key={index} className="border border-red-200 rounded-lg p-4 bg-red-50">
                        <div className="flex justify-between items-start mb-3">
                          <h4 className="font-medium text-red-800">{skill.skillName}</h4>
                          <span className="text-xs bg-red-200 text-red-800 px-2 py-1 rounded">
                            Critical
                          </span>
                        </div>
                        <div className="mb-3">
                          <p className="text-sm text-red-600 mb-1">
                            <i className="fas fa-chart-line mr-1"></i>
                            {skill.demandScore.toFixed(0)}% market demand
                          </p>
                          <p className="text-sm text-red-600">
                            <i className="fas fa-clock mr-1"></i>
                            {skill.estimatedLearningTime}
                          </p>
                        </div>
                        <a
                          href={`https://www.coursera.org/search?query=${encodeURIComponent(skill.skillName)}&index=prod_all_launched_products_term_optimization`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors flex items-center justify-center"
                        >
                          <i className="fas fa-external-link-alt mr-2"></i>
                          Learn on Coursera
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Important Skills */}
              {analysis.skillGaps && analysis.skillGaps.important && analysis.skillGaps.important.length > 0 && (
                <div>
                  <h3 className="text-lg font-semibold text-yellow-700 mb-4">
                    <i className="fas fa-exclamation-triangle mr-2"></i>
                    Important Skills to Learn ({analysis.skillGaps.important.length})
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {analysis.skillGaps.important.map((skill, index) => (
                      <div key={index} className="border border-yellow-200 rounded-lg p-4 bg-yellow-50">
                        <div className="flex justify-between items-start mb-3">
                          <h4 className="font-medium text-yellow-800">{skill.skillName}</h4>
                          <span className="text-xs bg-yellow-200 text-yellow-800 px-2 py-1 rounded">
                            Important
                          </span>
                        </div>
                        <div className="mb-3">
                          <p className="text-sm text-yellow-600 mb-1">
                            <i className="fas fa-chart-line mr-1"></i>
                            {skill.demandScore.toFixed(0)}% market demand
                          </p>
                          <p className="text-sm text-yellow-600">
                            <i className="fas fa-clock mr-1"></i>
                            {skill.estimatedLearningTime}
                          </p>
                        </div>
                        <a
                          href={`https://www.coursera.org/search?query=${encodeURIComponent(skill.skillName)}&index=prod_all_launched_products_term_optimization`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full bg-yellow-600 text-white px-4 py-2 rounded-lg hover:bg-yellow-700 transition-colors flex items-center justify-center"
                        >
                          <i className="fas fa-external-link-alt mr-2"></i>
                          Learn on Coursera
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* No Skills Gap Message */}
              {(!analysis.skillGaps ||
                (!analysis.skillGaps.critical || analysis.skillGaps.critical.length === 0) &&
                (!analysis.skillGaps.important || analysis.skillGaps.important.length === 0)) && (
                <div className="text-center py-12">
                  <img
                    src="assets/logo.png"
                    alt="Job Match"
                    className="w-16 h-auto mx-auto opacity-60 mb-4"
                  />
                  <h3 className="text-lg font-semibold text-gray-600 mb-2">No Skill Gaps Found</h3>
                  <p className="text-gray-500 max-w-md mx-auto">
                    Great! Your skills are well-aligned with market demand. Keep updating your skills to stay competitive.
                  </p>
                </div>
              )}
            </div>
          )}

          {/* Career Paths Tab */}
          {activeTab === 'career' && (
            <div className="space-y-6">
              {analysis.careerPaths.map((path, index) => (
                <div key={index} className="border rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">
                    <i className="fas fa-briefcase mr-2 text-blue-600"></i>
                    {path.category} Career Path
                  </h3>
                  
                  <div className="mb-4">
                    <span className="text-sm font-medium text-gray-600">Current Level: </span>
                    <span className="text-sm font-semibold text-blue-600">{path.currentLevel}</span>
                    <span className="ml-4 text-sm font-medium text-gray-600">Market Outlook: </span>
                    <span className={`text-sm font-semibold ${path.marketOutlook === 'Growing' ? 'text-green-600' : 'text-gray-600'}`}>
                      {path.marketOutlook}
                    </span>
                  </div>

                  <div className="space-y-4">
                    {path.careerLevels.map((level, levelIndex) => (
                      <div key={levelIndex} className={`p-4 rounded-lg border-l-4 ${
                        level.level === path.currentLevel 
                          ? 'bg-blue-50 border-blue-500' 
                          : 'bg-gray-50 border-gray-300'
                      }`}>
                        <div className="flex justify-between items-start mb-2">
                          <h4 className="font-medium text-gray-800">{level.level}</h4>
                          <span className="text-sm text-gray-600">{level.timeToAchieve}</span>
                        </div>
                        <p className="text-sm text-gray-600 mb-2">{level.salaryRange}</p>
                        <div className="text-sm">
                          <p className="font-medium text-gray-700 mb-1">Typical Roles:</p>
                          <p className="text-gray-600">{level.roles.join(', ')}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-4 p-4 bg-green-50 rounded-lg">
                    <h4 className="font-medium text-green-800 mb-2">Recommended Next Steps:</h4>
                    <ul className="text-sm text-green-700 space-y-1">
                      {path.recommendedNextSteps.map((step, stepIndex) => (
                        <li key={stepIndex} className="flex items-center">
                          <i className="fas fa-arrow-right mr-2 text-green-600"></i>
                          {step}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Current Skills Tab */}
          {activeTab === 'current' && (
            <div className="space-y-6">
              {/* Skills Summary */}
              <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">
                  <i className="fas fa-chart-pie mr-2 text-blue-600"></i>
                  Skills Overview
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">
                      {(analysis.currentSkills.computer || []).length}
                    </div>
                    <div className="text-sm text-gray-600">Computer Skills</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">
                      {(analysis.currentSkills.technical || []).length}
                    </div>
                    <div className="text-sm text-gray-600">Technical Skills</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-pink-600">
                      {(analysis.currentSkills.soft || []).length}
                    </div>
                    <div className="text-sm text-gray-600">Soft Skills</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-orange-600">
                      {(analysis.currentSkills.general || []).length +
                       (analysis.currentSkills.languages || []).length}
                    </div>
                    <div className="text-sm text-gray-600">Other Skills</div>
                  </div>
                </div>
              </div>
              {/* Computer Skills */}
              {analysis.currentSkills.computer && analysis.currentSkills.computer.length > 0 && (
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">
                    <i className="fas fa-desktop mr-2 text-green-600"></i>
                    Computer Skills
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                    {analysis.currentSkills.computer.map((skill, index) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                        <span className="font-medium text-green-800">{skill.name}</span>
                        <span className="text-sm text-green-600">{skill.proficiency}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Technical Skills */}
              {analysis.currentSkills.technical && analysis.currentSkills.technical.length > 0 && (
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">
                    <i className="fas fa-laptop-code mr-2 text-blue-600"></i>
                    Technical Skills
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                    {analysis.currentSkills.technical.map((skill, index) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                        <span className="font-medium text-blue-800">{skill.name}</span>
                        <span className="text-sm text-blue-600">{skill.proficiency}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Soft Skills */}
              {analysis.currentSkills.soft && analysis.currentSkills.soft.length > 0 && (
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">
                    <i className="fas fa-users mr-2 text-pink-600"></i>
                    Soft Skills
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                    {analysis.currentSkills.soft.map((skill, index) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-pink-50 rounded-lg">
                        <span className="font-medium text-pink-800">{skill.name}</span>
                        <span className="text-sm text-pink-600">{skill.proficiency}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* General Skills */}
              {analysis.currentSkills.general && analysis.currentSkills.general.length > 0 && (
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">
                    <i className="fas fa-star mr-2 text-orange-600"></i>
                    Other Skills
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                    {analysis.currentSkills.general.map((skill, index) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-orange-50 rounded-lg">
                        <span className="font-medium text-orange-800">{skill.name}</span>
                        <span className="text-sm text-orange-600">{skill.proficiency}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Categories */}
              {analysis.currentSkills.categories.length > 0 && (
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">
                    <i className="fas fa-tags mr-2 text-green-600"></i>
                    Interest Areas
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {analysis.currentSkills.categories.map((category, index) => (
                      <span key={index} className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                        {category.name}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Languages */}
              {analysis.currentSkills.languages.length > 0 && (
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">
                    <i className="fas fa-language mr-2 text-purple-600"></i>
                    Languages
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {analysis.currentSkills.languages.map((lang, index) => (
                      <div key={index} className="p-3 bg-purple-50 rounded-lg">
                        <h4 className="font-medium text-purple-800">{lang.name}</h4>
                        <div className="text-sm text-purple-600 mt-1">
                          Speak: {lang.proficiency.speak} • Read: {lang.proficiency.read} • Write: {lang.proficiency.write}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* No Skills Message */}
              {(!analysis.currentSkills.computer || analysis.currentSkills.computer.length === 0) &&
               (!analysis.currentSkills.technical || analysis.currentSkills.technical.length === 0) &&
               (!analysis.currentSkills.soft || analysis.currentSkills.soft.length === 0) &&
               (!analysis.currentSkills.general || analysis.currentSkills.general.length === 0) &&
               (!analysis.currentSkills.languages || analysis.currentSkills.languages.length === 0) && (
                <div className="text-center py-12">
                  <img
                    src="assets/logo.png"
                    alt="Job Match"
                    className="w-16 h-auto mx-auto opacity-60 mb-4"
                  />
                  <h3 className="text-lg font-semibold text-gray-600 mb-2">No Skills Added Yet</h3>
                  <p className="text-gray-500 mb-6 max-w-md mx-auto">
                    Add your skills in the "My Skills" section to see a comprehensive analysis of your abilities and market alignment.
                  </p>
                  <button
                    onClick={() => window.location.href = '#skills'}
                    className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors"
                  >
                    <i className="fas fa-plus mr-2"></i>
                    Add Your Skills
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Bias Analysis Alert */}
      {analysis.biasAnalysis && analysis.biasAnalysis.overallBiasScore > 20 && (
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
          <div className="flex items-start">
            <i className="fas fa-exclamation-triangle text-yellow-500 mr-3 mt-1"></i>
            <div>
              <h3 className="font-medium text-yellow-800">Bias Detection Alert</h3>
              <p className="text-yellow-700 text-sm mt-1">
                Our analysis detected potential bias in recommendations (Score: {analysis.biasAnalysis.overallBiasScore.toFixed(1)}).
                We're working to improve fairness and transparency.
              </p>
            </div>
          </div>
        </div>
      )}
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
