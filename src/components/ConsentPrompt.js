import React, { useState } from 'react';
import api from '../api/api';

const ConsentPrompt = ({ 
  consentType, 
  title, 
  description, 
  onConsentGranted, 
  onConsentDenied,
  showModal = true 
}) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleGrantConsent = async () => {
    setIsLoading(true);
    try {
      await api.post('/privacy/consent', {
        consentType,
        granted: true,
        purpose: `User granted consent for ${consentType} to access analytics features`
      });
      
      if (onConsentGranted) {
        onConsentGranted();
      }
    } catch (error) {
      console.error('Error granting consent:', error);
      alert('Failed to grant consent. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleDenyConsent = () => {
    if (onConsentDenied) {
      onConsentDenied();
    }
  };

  if (!showModal) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-xl max-w-md w-full mx-4">
        <div className="p-6">
          {/* Header */}
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
              <i className="fas fa-shield-alt text-blue-600 text-xl"></i>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
              <p className="text-sm text-gray-500">Privacy Consent Required</p>
            </div>
          </div>

          {/* Description */}
          <div className="mb-6">
            <p className="text-gray-700 mb-4">{description}</p>
            
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <h4 className="font-medium text-blue-800 mb-2">
                <i className="fas fa-info-circle mr-2"></i>
                What this means:
              </h4>
              <ul className="text-blue-700 text-sm space-y-1">
                <li>• We'll analyze your profile data to provide personalized insights</li>
                <li>• Your data will be used to generate skill recommendations</li>
                <li>• We'll show market trends relevant to your profile</li>
                <li>• You can revoke this consent at any time in Privacy Settings</li>
              </ul>
            </div>
          </div>

          {/* Actions */}
          <div className="flex space-x-3">
            <button
              onClick={handleGrantConsent}
              disabled={isLoading}
              className="flex-1 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <span className="flex items-center justify-center">
                  <i className="fas fa-spinner fa-spin mr-2"></i>
                  Granting...
                </span>
              ) : (
                <span className="flex items-center justify-center">
                  <i className="fas fa-check mr-2"></i>
                  Grant Consent
                </span>
              )}
            </button>
            
            <button
              onClick={handleDenyConsent}
              disabled={isLoading}
              className="flex-1 bg-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-400 transition-colors disabled:opacity-50"
            >
              <span className="flex items-center justify-center">
                <i className="fas fa-times mr-2"></i>
                Not Now
              </span>
            </button>
          </div>

          {/* Footer */}
          <div className="mt-4 pt-4 border-t border-gray-200">
            <p className="text-xs text-gray-500 text-center">
              You can manage your privacy preferences at any time in{' '}
              <span className="text-blue-600 font-medium">Settings → Privacy</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

// Specific consent prompts for different features
export const AnalyticsConsentPrompt = ({ onConsentGranted, onConsentDenied, showModal }) => (
  <ConsentPrompt
    consentType="analytics"
    title="Analytics Consent Required"
    description="To provide personalized analytics and insights, we need your consent to analyze your profile data and show relevant market trends."
    onConsentGranted={onConsentGranted}
    onConsentDenied={onConsentDenied}
    showModal={showModal}
  />
);

export const JobMatchingConsentPrompt = ({ onConsentGranted, onConsentDenied, showModal }) => (
  <ConsentPrompt
    consentType="job_matching"
    title="Job Matching Consent Required"
    description="To provide personalized job recommendations and career suggestions, we need your consent to analyze your skills and preferences."
    onConsentGranted={onConsentGranted}
    onConsentDenied={onConsentDenied}
    showModal={showModal}
  />
);

export default ConsentPrompt;
