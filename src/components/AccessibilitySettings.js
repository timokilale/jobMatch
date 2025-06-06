import React, { useState, useEffect } from 'react';

const AccessibilitySettings = ({ isOpen, onClose }) => {
  const [settings, setSettings] = useState({
    fontSize: 'normal',
    highContrast: false,
    reducedMotion: false,
    screenReader: false,
    keyboardNavigation: false
  });

  // Load settings from localStorage on component mount
  useEffect(() => {
    const savedSettings = localStorage.getItem('accessibility_settings');
    if (savedSettings) {
      const parsed = JSON.parse(savedSettings);
      setSettings(parsed);
      applySettings(parsed);
    }
  }, []);

  // Handle keyboard events
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Apply settings to the document
  const applySettings = (newSettings) => {
    const root = document.documentElement;
    
    // Font size
    switch (newSettings.fontSize) {
      case 'small':
        root.style.fontSize = '14px';
        break;
      case 'large':
        root.style.fontSize = '18px';
        break;
      case 'extra-large':
        root.style.fontSize = '22px';
        break;
      default:
        root.style.fontSize = '16px';
    }

    // High contrast
    if (newSettings.highContrast) {
      document.body.classList.add('high-contrast');
    } else {
      document.body.classList.remove('high-contrast');
    }

    // Reduced motion
    if (newSettings.reducedMotion) {
      document.body.classList.add('reduced-motion');
    } else {
      document.body.classList.remove('reduced-motion');
    }

    // Keyboard navigation
    if (newSettings.keyboardNavigation) {
      document.body.classList.add('keyboard-navigation');
    } else {
      document.body.classList.remove('keyboard-navigation');
    }
  };

  const updateSetting = (key, value) => {
    const newSettings = { ...settings, [key]: value };
    setSettings(newSettings);
    applySettings(newSettings);
    localStorage.setItem('accessibility_settings', JSON.stringify(newSettings));
  };

  const resetSettings = () => {
    const defaultSettings = {
      fontSize: 'normal',
      highContrast: false,
      reducedMotion: false,
      screenReader: false,
      keyboardNavigation: false
    };
    setSettings(defaultSettings);
    applySettings(defaultSettings);
    localStorage.setItem('accessibility_settings', JSON.stringify(defaultSettings));
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black bg-opacity-50 z-[9998]"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Settings Panel */}
      <div
        className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg shadow-xl z-[9999] w-full max-w-md mx-4"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="accessibility-settings-title"
      >
        {/* Header */}
        <div className="flex justify-between items-center p-6 border-b">
          <h2 id="accessibility-settings-title" className="text-xl font-semibold text-gray-800">
            <i className="fas fa-universal-access mr-2 text-green-600"></i>
            Accessibility Settings
          </h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 p-2 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Close accessibility settings"
            type="button"
          >
            <i className="fas fa-times text-xl"></i>
          </button>
        </div>

        {/* Settings Content */}
        <div className="p-6 space-y-6 max-h-96 overflow-y-auto">
          {/* Font Size */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">
              <i className="fas fa-text-height mr-2"></i>
              Font Size
            </label>
            <div className="grid grid-cols-2 gap-2">
              {[
                { value: 'small', label: 'Small' },
                { value: 'normal', label: 'Normal' },
                { value: 'large', label: 'Large' },
                { value: 'extra-large', label: 'Extra Large' }
              ].map((option) => (
                <button
                  key={option.value}
                  onClick={() => updateSetting('fontSize', option.value)}
                  className={`p-3 text-sm border rounded-lg transition-colors min-h-[44px] min-w-[44px] ${
                    settings.fontSize === option.value
                      ? 'bg-green-600 text-white border-green-600'
                      : 'bg-white text-gray-700 border-gray-300 hover:border-green-600'
                  }`}
                  type="button"
                  aria-pressed={settings.fontSize === option.value}
                >
                  {option.label}
                </button>
              ))}
            </div>
          </div>

          {/* High Contrast */}
          <div className="flex items-center justify-between">
            <div>
              <label className="text-sm font-medium text-gray-700">
                <i className="fas fa-adjust mr-2"></i>
                High Contrast Mode
              </label>
              <p className="text-xs text-gray-500 mt-1">
                Increases contrast for better visibility
              </p>
            </div>
            <button
              onClick={() => updateSetting('highContrast', !settings.highContrast)}
              className={`relative inline-flex h-8 w-14 items-center rounded-full transition-colors p-1 ${
                settings.highContrast ? 'bg-green-600' : 'bg-gray-200'
              }`}
              type="button"
              role="switch"
              aria-checked={settings.highContrast}
              aria-label="Toggle high contrast mode"
            >
              <span
                className={`inline-block h-6 w-6 transform rounded-full bg-white transition-transform shadow-lg ${
                  settings.highContrast ? 'translate-x-6' : 'translate-x-0'
                }`}
              />
            </button>
          </div>

          {/* Reduced Motion */}
          <div className="flex items-center justify-between">
            <div>
              <label className="text-sm font-medium text-gray-700">
                <i className="fas fa-pause mr-2"></i>
                Reduce Motion
              </label>
              <p className="text-xs text-gray-500 mt-1">
                Minimizes animations and transitions
              </p>
            </div>
            <button
              onClick={() => updateSetting('reducedMotion', !settings.reducedMotion)}
              className={`relative inline-flex h-8 w-14 items-center rounded-full transition-colors p-1 ${
                settings.reducedMotion ? 'bg-green-600' : 'bg-gray-200'
              }`}
              type="button"
              role="switch"
              aria-checked={settings.reducedMotion}
              aria-label="Toggle reduced motion"
            >
              <span
                className={`inline-block h-6 w-6 transform rounded-full bg-white transition-transform shadow-lg ${
                  settings.reducedMotion ? 'translate-x-6' : 'translate-x-0'
                }`}
              />
            </button>
          </div>

          {/* Keyboard Navigation */}
          <div className="flex items-center justify-between">
            <div>
              <label className="text-sm font-medium text-gray-700">
                <i className="fas fa-keyboard mr-2"></i>
                Enhanced Keyboard Navigation
              </label>
              <p className="text-xs text-gray-500 mt-1">
                Shows focus indicators for keyboard users
              </p>
            </div>
            <button
              onClick={() => updateSetting('keyboardNavigation', !settings.keyboardNavigation)}
              className={`relative inline-flex h-8 w-14 items-center rounded-full transition-colors p-1 ${
                settings.keyboardNavigation ? 'bg-green-600' : 'bg-gray-200'
              }`}
              type="button"
              role="switch"
              aria-checked={settings.keyboardNavigation}
              aria-label="Toggle enhanced keyboard navigation"
            >
              <span
                className={`inline-block h-6 w-6 transform rounded-full bg-white transition-transform shadow-lg ${
                  settings.keyboardNavigation ? 'translate-x-6' : 'translate-x-0'
                }`}
              />
            </button>
          </div>

          {/* Screen Reader Info */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <div className="flex items-start">
              <i className="fas fa-info-circle text-blue-600 mt-1 mr-3"></i>
              <div>
                <h4 className="text-sm font-medium text-blue-800">Screen Reader Support</h4>
                <p className="text-xs text-blue-600 mt-1">
                  This application is compatible with screen readers like NVDA, JAWS, and VoiceOver.
                  All interactive elements have proper labels and descriptions.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex justify-between items-center p-6 border-t bg-gray-50 rounded-b-lg">
          <button
            onClick={resetSettings}
            className="text-sm text-gray-600 hover:text-gray-800 transition-colors p-2 rounded-lg hover:bg-gray-200 min-h-[44px]"
            type="button"
          >
            Reset to Default
          </button>
          <button
            onClick={onClose}
            className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors min-h-[44px]"
            type="button"
          >
            Done
          </button>
        </div>
      </div>

      {/* Accessibility Styles */}
      <style jsx global>{`
        .high-contrast {
          filter: contrast(150%) brightness(110%);
        }
        
        .high-contrast .bg-gray-50 {
          background-color: #ffffff !important;
        }
        
        .high-contrast .text-gray-600 {
          color: #000000 !important;
        }
        
        .reduced-motion * {
          animation-duration: 0.01ms !important;
          animation-iteration-count: 1 !important;
          transition-duration: 0.01ms !important;
        }
        
        .keyboard-navigation *:focus {
          outline: 3px solid #22c55e !important;
          outline-offset: 2px !important;
        }
        
        .keyboard-navigation button:focus,
        .keyboard-navigation input:focus,
        .keyboard-navigation select:focus,
        .keyboard-navigation textarea:focus {
          box-shadow: 0 0 0 3px rgba(34, 197, 94, 0.5) !important;
        }
      `}</style>
    </>
  );
};

export default AccessibilitySettings;
