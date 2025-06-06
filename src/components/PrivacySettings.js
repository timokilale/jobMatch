import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import api from '../api/api';

const PrivacySettings = ({ isOpen, onClose }) => {
  const { user } = useSelector((state) => state.auth);
  const [privacyData, setPrivacyData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');
  const [consents, setConsents] = useState({});

  useEffect(() => {
    if (isOpen && user) {
      fetchPrivacyData();
    }
  }, [isOpen, user]);

  const fetchPrivacyData = async () => {
    try {
      setLoading(true);
      const response = await api.get('/privacy/dashboard');
      setPrivacyData(response.data);
      
      // Convert consents array to object for easier handling
      const consentsObj = {};
      response.data.consents?.forEach(consent => {
        consentsObj[consent.consentType] = consent.granted;
      });
      setConsents(consentsObj);
    } catch (error) {
      console.error('Error fetching privacy data:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleConsentChange = async (consentType, granted) => {
    try {
      await api.post('/privacy/consent', {
        consentType,
        granted,
        purpose: `User ${granted ? 'granted' : 'revoked'} consent for ${consentType}`
      });
      
      setConsents(prev => ({
        ...prev,
        [consentType]: granted
      }));
      
      // Refresh privacy data
      fetchPrivacyData();
    } catch (error) {
      console.error('Error updating consent:', error);
    }
  };

  const handleDataExport = async () => {
    try {
      const response = await api.get('/privacy/export');
      
      // Create and download file
      const blob = new Blob([JSON.stringify(response.data, null, 2)], {
        type: 'application/json'
      });
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `my-data-export-${new Date().toISOString().split('T')[0]}.json`;
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
    } catch (error) {
      console.error('Error exporting data:', error);
    }
  };

  const handleDataDeletion = async () => {
    if (window.confirm('Are you sure you want to delete all your data? This action cannot be undone.')) {
      try {
        await api.delete('/privacy/delete');
        alert('Your data deletion request has been submitted. You will be logged out.');
        window.location.href = '/login';
      } catch (error) {
        console.error('Error deleting data:', error);
      }
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="bg-green-600 text-white p-6 flex justify-between items-center">
          <div>
            <h2 className="text-2xl font-bold flex items-center">
              <i className="fas fa-shield-alt mr-3"></i>
              Privacy & Data Settings
            </h2>
            <p className="text-green-100 mt-1">Manage your privacy preferences and data rights</p>
          </div>
          <button
            onClick={onClose}
            className="text-white hover:text-green-200 text-2xl"
          >
            <i className="fas fa-times"></i>
          </button>
        </div>

        {/* Tabs */}
        <div className="border-b border-gray-200">
          <nav className="flex space-x-8 px-6">
            {[
              { id: 'overview', name: 'Overview', icon: 'dashboard' },
              { id: 'consents', name: 'Consent Management', icon: 'check-circle' },
              { id: 'data-rights', name: 'Data Rights', icon: 'download' },
              { id: 'audit', name: 'Activity Log', icon: 'history' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-4 px-2 border-b-2 font-medium text-sm ${
                  activeTab === tab.id
                    ? 'border-green-500 text-green-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                <i className={`fas fa-${tab.icon} mr-2`}></i>
                {tab.name}
              </button>
            ))}
          </nav>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto max-h-[60vh]">
          {loading ? (
            <div className="flex items-center justify-center py-12">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-green-600"></div>
              <span className="ml-3 text-gray-600">Loading privacy data...</span>
            </div>
          ) : (
            <>
              {/* Overview Tab */}
              {activeTab === 'overview' && privacyData && (
                <div className="space-y-6">
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                    <h3 className="font-semibold text-green-800 mb-2">
                      <i className="fas fa-shield-check mr-2"></i>
                      Privacy Score: {privacyData.privacyScore}%
                    </h3>
                    <p className="text-green-700 text-sm">
                      Your privacy settings are well configured. You have control over your data.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-gray-50 rounded-lg p-4">
                      <h4 className="font-medium text-gray-800 mb-2">Data Processing</h4>
                      <p className="text-sm text-gray-600">
                        We process your data to provide job matching services and improve your experience.
                      </p>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-4">
                      <h4 className="font-medium text-gray-800 mb-2">Data Retention</h4>
                      <p className="text-sm text-gray-600">
                        Your data is retained as long as your account is active or as required by law.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Consents Tab */}
              {activeTab === 'consents' && (
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-800">Manage Your Consents</h3>
                  
                  {[
                    {
                      type: 'data_processing',
                      title: 'Data Processing',
                      description: 'Allow us to process your personal data for job matching and recommendations',
                      required: true
                    },
                    {
                      type: 'marketing',
                      title: 'Marketing Communications',
                      description: 'Receive emails about new job opportunities and platform updates',
                      required: false
                    },
                    {
                      type: 'analytics',
                      title: 'Analytics & Improvements',
                      description: 'Help us improve our services by analyzing usage patterns',
                      required: false
                    },
                    {
                      type: 'third_party_sharing',
                      title: 'Third-party Sharing',
                      description: 'Share your profile with potential employers (required for job applications)',
                      required: true
                    }
                  ].map((consent) => (
                    <div key={consent.type} className="border border-gray-200 rounded-lg p-4">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h4 className="font-medium text-gray-800">{consent.title}</h4>
                          <p className="text-sm text-gray-600 mt-1">{consent.description}</p>
                          {consent.required && (
                            <span className="text-xs text-red-600 mt-1 block">Required for platform functionality</span>
                          )}
                        </div>
                        <div className="ml-4">
                          <label className="relative inline-flex items-center cursor-pointer">
                            <input
                              type="checkbox"
                              checked={consents[consent.type] || false}
                              onChange={(e) => handleConsentChange(consent.type, e.target.checked)}
                              disabled={consent.required}
                              className="sr-only peer"
                            />
                            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-green-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-600"></div>
                          </label>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Data Rights Tab */}
              {activeTab === 'data-rights' && (
                <div className="space-y-6">
                  <h3 className="text-lg font-semibold text-gray-800">Your Data Rights (GDPR)</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="border border-gray-200 rounded-lg p-4">
                      <h4 className="font-medium text-gray-800 mb-2">
                        <i className="fas fa-download mr-2 text-blue-600"></i>
                        Export Your Data
                      </h4>
                      <p className="text-sm text-gray-600 mb-4">
                        Download all your personal data in a machine-readable format.
                      </p>
                      <button
                        onClick={handleDataExport}
                        className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm"
                      >
                        Download Data
                      </button>
                    </div>

                    <div className="border border-red-200 rounded-lg p-4">
                      <h4 className="font-medium text-gray-800 mb-2">
                        <i className="fas fa-trash mr-2 text-red-600"></i>
                        Delete Your Data
                      </h4>
                      <p className="text-sm text-gray-600 mb-4">
                        Permanently delete your account and all associated data.
                      </p>
                      <button
                        onClick={handleDataDeletion}
                        className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors text-sm"
                      >
                        Delete Account
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {/* Audit Tab */}
              {activeTab === 'audit' && privacyData?.auditLogs && (
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-800">Recent Activity</h3>
                  
                  <div className="space-y-2">
                    {privacyData.auditLogs.map((log, index) => (
                      <div key={index} className="border border-gray-200 rounded-lg p-3">
                        <div className="flex justify-between items-start">
                          <div>
                            <p className="text-sm font-medium text-gray-800">{log.action}</p>
                            <p className="text-xs text-gray-600">{log.details}</p>
                          </div>
                          <span className="text-xs text-gray-500">
                            {new Date(log.timestamp).toLocaleDateString()}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </>
          )}
        </div>

        {/* Footer */}
        <div className="bg-gray-50 px-6 py-4 flex justify-between items-center">
          <p className="text-sm text-gray-600">
            Last updated: {privacyData?.lastUpdated ? new Date(privacyData.lastUpdated).toLocaleDateString() : 'N/A'}
          </p>
          <button
            onClick={onClose}
            className="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default PrivacySettings;
