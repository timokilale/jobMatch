import React, { useState } from 'react';
import MarketAnalytics from './MarketAnalytics';
import SkillsAnalysis from './SkillsAnalysis';

const TestDashboard = () => {
  const [activeFeature, setActiveFeature] = useState('market');
  const [testApplicantId, setTestApplicantId] = useState(1); // Default test ID

  const features = [
    {
      id: 'market',
      name: 'Market Analytics',
      icon: 'fas fa-chart-line',
      description: 'Real-time job market insights and trends',
      status: 'Ready to test'
    },
    {
      id: 'skills',
      name: 'Skills Analysis',
      icon: 'fas fa-brain',
      description: 'AI-powered skill gap analysis and training recommendations',
      status: 'Ready to test'
    },
    {
      id: 'privacy',
      name: 'Privacy Dashboard',
      icon: 'fas fa-shield-alt',
      description: 'GDPR compliance and data privacy management',
      status: 'Ready to test'
    },
    {
      id: 'api-tests',
      name: 'API Testing',
      icon: 'fas fa-code',
      description: 'Test individual API endpoints',
      status: 'Ready to test'
    }
  ];

  const apiEndpoints = [
    {
      method: 'GET',
      endpoint: '/api/market/overview',
      description: 'Market overview and health indicators',
      testable: true
    },
    {
      method: 'GET',
      endpoint: '/api/market/skills/demand',
      description: 'Current skill demand analysis',
      testable: true
    },
    {
      method: 'GET',
      endpoint: '/api/market/skills/emerging',
      description: 'Emerging skills identification',
      testable: true
    },
    {
      method: 'GET',
      endpoint: '/api/skills/demand',
      description: 'Skill demand analysis',
      testable: true
    },
    {
      method: 'GET',
      endpoint: '/api/skills/training?skills=javascript,python',
      description: 'Training recommendations for specific skills',
      testable: true
    },
    {
      method: 'GET',
      endpoint: '/api/privacy/processing-activities',
      description: 'Data processing transparency',
      testable: true
    }
  ];

  const testApiEndpoint = async (endpoint) => {
    try {
      const response = await fetch(`http://localhost:5000${endpoint}`);
      const data = await response.json();
      console.log(`✅ ${endpoint}:`, data);
      alert(`✅ Success! Check console for response from ${endpoint}`);
    } catch (error) {
      console.error(`❌ ${endpoint}:`, error);
      alert(`❌ Error testing ${endpoint}. Check console for details.`);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6 page-container">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            <i className="fas fa-flask mr-3 text-green-600"></i>
            Feature Testing Dashboard
          </h1>
          <p className="text-gray-600">
            Test all the new ML features without requiring external API keys
          </p>
          <div className="mt-4 bg-green-50 border border-green-200 rounded-lg p-4">
            <div className="flex items-center">
              <i className="fas fa-info-circle text-green-600 mr-2"></i>
              <span className="text-green-800 font-medium">All features use mock data and are ready to test!</span>
            </div>
          </div>
        </div>

        {/* Feature Selection */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          {features.map((feature) => (
            <button
              key={feature.id}
              onClick={() => setActiveFeature(feature.id)}
              className={`p-4 rounded-lg border-2 transition-all text-left ${
                activeFeature === feature.id
                  ? 'border-green-500 bg-green-50'
                  : 'border-gray-200 bg-white hover:border-green-300'
              }`}
            >
              <div className="flex items-center mb-2">
                <i className={`${feature.icon} text-xl mr-3 ${
                  activeFeature === feature.id ? 'text-green-600' : 'text-gray-600'
                }`}></i>
                <h3 className="font-semibold text-gray-800">{feature.name}</h3>
              </div>
              <p className="text-sm text-gray-600 mb-2">{feature.description}</p>
              <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">
                {feature.status}
              </span>
            </button>
          ))}
        </div>

        {/* Feature Content */}
        <div className="bg-white rounded-lg shadow-sm">
          {activeFeature === 'market' && (
            <div className="p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Market Analytics Dashboard</h2>
              <MarketAnalytics />
            </div>
          )}

          {activeFeature === 'skills' && (
            <div className="p-6">
              <div className="mb-4">
                <h2 className="text-xl font-semibold text-gray-800 mb-2">Skills Analysis Dashboard</h2>
                <div className="flex items-center space-x-4 mb-4">
                  <label className="text-sm font-medium text-gray-700">Test Applicant ID:</label>
                  <input
                    type="number"
                    value={testApplicantId}
                    onChange={(e) => setTestApplicantId(parseInt(e.target.value) || 1)}
                    className="border border-gray-300 rounded px-3 py-1 w-20"
                    min="1"
                  />
                  <span className="text-xs text-gray-500">
                    (Use any applicant ID from your database)
                  </span>
                </div>
              </div>
              <SkillsAnalysis applicantId={testApplicantId} />
            </div>
          )}

          {activeFeature === 'privacy' && (
            <div className="p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Privacy & Ethics Dashboard</h2>
              <div className="space-y-6">
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <h3 className="font-semibold text-blue-800 mb-2">
                    <i className="fas fa-shield-alt mr-2"></i>
                    Privacy Features Available
                  </h3>
                  <ul className="text-blue-700 space-y-1 text-sm">
                    <li>✅ Consent management system</li>
                    <li>✅ Data export (GDPR Article 20)</li>
                    <li>✅ Right to be forgotten (GDPR Article 17)</li>
                    <li>✅ Bias detection in recommendations</li>
                    <li>✅ Audit logging for all data operations</li>
                    <li>✅ Data processing transparency</li>
                  </ul>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <button
                    onClick={() => testApiEndpoint('/api/privacy/processing-activities')}
                    className="p-4 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                  >
                    <i className="fas fa-eye mr-2"></i>
                    Test Data Processing Transparency
                  </button>
                  <button
                    onClick={() => alert('Privacy dashboard requires authentication. Login first!')}
                    className="p-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    <i className="fas fa-user-shield mr-2"></i>
                    Access Privacy Dashboard (Login Required)
                  </button>
                </div>
              </div>
            </div>
          )}

          {activeFeature === 'api-tests' && (
            <div className="p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">API Endpoint Testing</h2>
              <div className="space-y-4">
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                  <p className="text-yellow-800 text-sm">
                    <i className="fas fa-info-circle mr-2"></i>
                    Click any endpoint below to test it. Results will appear in the browser console.
                  </p>
                </div>
                
                {apiEndpoints.map((endpoint, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="flex items-center space-x-3">
                          <span className={`px-2 py-1 rounded text-xs font-medium ${
                            endpoint.method === 'GET' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'
                          }`}>
                            {endpoint.method}
                          </span>
                          <code className="text-sm font-mono text-gray-800">{endpoint.endpoint}</code>
                        </div>
                        <p className="text-sm text-gray-600 mt-1">{endpoint.description}</p>
                      </div>
                      <button
                        onClick={() => testApiEndpoint(endpoint.endpoint)}
                        disabled={!endpoint.testable}
                        className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                          endpoint.testable
                            ? 'bg-green-600 text-white hover:bg-green-700'
                            : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                        }`}
                      >
                        {endpoint.testable ? 'Test Now' : 'Requires Auth'}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Quick Start Instructions */}
        <div className="mt-6 bg-gray-800 text-white rounded-lg p-6">
          <h3 className="text-lg font-semibold mb-3">
            <i className="fas fa-rocket mr-2 text-green-400"></i>
            Quick Start Testing Guide
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-medium text-green-400 mb-2">1. Market Analytics</h4>
              <ul className="text-sm text-gray-300 space-y-1">
                <li>• View real job market health from your database</li>
                <li>• See mock skill demand analysis</li>
                <li>• Explore emerging skills trends</li>
                <li>• Check market overview statistics</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-green-400 mb-2">2. Skills Analysis</h4>
              <ul className="text-sm text-gray-300 space-y-1">
                <li>• Enter any applicant ID from your database</li>
                <li>• Get personalized skill gap analysis</li>
                <li>• See training recommendations</li>
                <li>• Explore career path suggestions</li>
              </ul>
            </div>
          </div>
          <div className="mt-4 p-3 bg-gray-700 rounded">
            <p className="text-sm text-gray-300">
              <i className="fas fa-lightbulb mr-2 text-yellow-400"></i>
              <strong>Pro Tip:</strong> Open browser console (F12) when testing API endpoints to see detailed responses!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestDashboard;
