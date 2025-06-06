import React, { useState, useEffect } from 'react';
import api from '../api/api';
import { AnalyticsConsentPrompt, JobMatchingConsentPrompt } from './ConsentPrompt';

/**
 * Higher-order component that wraps components requiring specific consent
 * @param {React.Component} WrappedComponent - Component to wrap
 * @param {string} consentType - Type of consent required ('analytics', 'job_matching', etc.)
 * @param {object} options - Additional options
 */
const withConsent = (WrappedComponent, consentType, options = {}) => {
  const WithConsentComponent = (props) => {
    const [hasConsent, setHasConsent] = useState(null); // null = loading, true/false = result
    const [showConsentPrompt, setShowConsentPrompt] = useState(false);
    const [error, setError] = useState(null);

    const {
      fallbackComponent: FallbackComponent = null,
      showPromptOnDenied = true,
      customPromptComponent: CustomPromptComponent = null
    } = options;

    // Check consent on component mount
    useEffect(() => {
      checkConsent();
    }, []);

    const checkConsent = async () => {
      try {
        setError(null);
        const response = await api.get(`/privacy/consent/${consentType}`);
        const consentGranted = response.data.hasConsent;
        
        setHasConsent(consentGranted);
        
        if (!consentGranted && showPromptOnDenied) {
          setShowConsentPrompt(true);
        }
      } catch (error) {
        console.error('Error checking consent:', error);
        setError('Failed to check consent status');
        setHasConsent(false);
      }
    };

    const handleConsentGranted = () => {
      setHasConsent(true);
      setShowConsentPrompt(false);
      setError(null);
    };

    const handleConsentDenied = () => {
      setShowConsentPrompt(false);
      setHasConsent(false);
    };

    const handleRetryConsent = () => {
      setShowConsentPrompt(true);
    };

    // Loading state
    if (hasConsent === null) {
      return (
        <div className="flex items-center justify-center p-8">
          <div className="text-center">
            <i className="fas fa-spinner fa-spin text-2xl text-gray-400 mb-2"></i>
            <p className="text-gray-600">Checking permissions...</p>
          </div>
        </div>
      );
    }

    // Error state
    if (error) {
      return (
        <div className="bg-red-50 border border-red-200 rounded-lg p-6">
          <div className="flex items-center mb-4">
            <i className="fas fa-exclamation-triangle text-red-600 text-xl mr-3"></i>
            <h3 className="text-lg font-semibold text-red-800">Permission Check Failed</h3>
          </div>
          <p className="text-red-700 mb-4">{error}</p>
          <button
            onClick={checkConsent}
            className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors"
          >
            <i className="fas fa-redo mr-2"></i>
            Retry
          </button>
        </div>
      );
    }

    // Consent granted - render the wrapped component
    if (hasConsent) {
      return <WrappedComponent {...props} />;
    }

    // Consent not granted - show fallback or consent prompt
    const ConsentPromptComponent = CustomPromptComponent || 
      (consentType === 'analytics' ? AnalyticsConsentPrompt : 
       consentType === 'job_matching' ? JobMatchingConsentPrompt : 
       AnalyticsConsentPrompt);

    return (
      <>
        {/* Fallback content when consent is denied */}
        {FallbackComponent ? (
          <FallbackComponent onRequestConsent={handleRetryConsent} />
        ) : (
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <div className="flex items-center mb-4">
              <i className="fas fa-shield-alt text-blue-600 text-xl mr-3"></i>
              <h3 className="text-lg font-semibold text-blue-800">Privacy Consent Required</h3>
            </div>
            <p className="text-blue-700 mb-4">
              This feature requires your consent to analyze your data and provide personalized insights.
            </p>
            <div className="flex space-x-3">
              <button
                onClick={handleRetryConsent}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                <i className="fas fa-check mr-2"></i>
                Grant Permission
              </button>
              <a
                href="/privacy-settings"
                className="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-400 transition-colors"
              >
                <i className="fas fa-cog mr-2"></i>
                Privacy Settings
              </a>
            </div>
          </div>
        )}

        {/* Consent prompt modal */}
        <ConsentPromptComponent
          onConsentGranted={handleConsentGranted}
          onConsentDenied={handleConsentDenied}
          showModal={showConsentPrompt}
        />
      </>
    );
  };

  // Set display name for debugging
  WithConsentComponent.displayName = `withConsent(${WrappedComponent.displayName || WrappedComponent.name})`;

  return WithConsentComponent;
};

// Convenience HOCs for specific consent types
export const withAnalyticsConsent = (Component, options = {}) => 
  withConsent(Component, 'analytics', options);

export const withJobMatchingConsent = (Component, options = {}) => 
  withConsent(Component, 'job_matching', options);

export default withConsent;
