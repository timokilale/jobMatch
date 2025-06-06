import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

const TutorialSystem = ({ isFirstTime = false, onComplete }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isActive, setIsActive] = useState(isFirstTime);
  const [highlightedElement, setHighlightedElement] = useState(null);
  const { user } = useSelector(state => state.auth);

  const tutorialSteps = [
    {
      target: '.sidebar-mobile, .dashboard-grid',
      title: 'Welcome to Your Dashboard!',
      content: 'This is your personal dashboard where you can manage your job search. Let\'s take a quick tour!',
      placement: 'center',
      action: 'start'
    },
    {
      target: '[data-tutorial="menu-button"]',
      title: 'Navigation Menu',
      content: 'Click this button to open your navigation menu. Here you can access different sections of your profile.',
      placement: 'bottom',
      action: 'click'
    },
    {
      target: '[data-tutorial="job-listings"]',
      title: 'Job Listings',
      content: 'This is where you\'ll see jobs that match your skills and interests. Jobs are automatically filtered based on your profile.',
      placement: 'top',
      action: 'highlight'
    },
    {
      target: '[data-tutorial="apply-button"]',
      title: 'Applying for Jobs',
      content: 'When you find a job you like, click the "Apply" button. Make sure your profile is complete for better chances!',
      placement: 'top',
      action: 'highlight'
    },
    {
      target: '[data-tutorial="profile-sections"]',
      title: 'Complete Your Profile',
      content: 'Use the sidebar menu to add your academic qualifications, work experience, and skills. A complete profile gets more job matches!',
      placement: 'right',
      action: 'highlight'
    },
    {
      target: '[data-tutorial="notifications"]',
      title: 'Stay Updated',
      content: 'Check your notifications regularly for application updates and new job matches.',
      placement: 'bottom',
      action: 'highlight'
    },
    {
      target: '[data-tutorial="chat-widget"]',
      title: 'Get Help Anytime',
      content: 'Need help? Click the chat button to get instant support from our team or AI assistant.',
      placement: 'left',
      action: 'highlight'
    }
  ];

  useEffect(() => {
    if (isActive && currentStep < tutorialSteps.length) {
      const step = tutorialSteps[currentStep];
      const element = document.querySelector(step.target);
      
      if (element) {
        setHighlightedElement(element);
        element.scrollIntoView({ behavior: 'smooth', block: 'center' });
        
        // Add highlight class
        element.classList.add('tutorial-highlight');
        
        return () => {
          element.classList.remove('tutorial-highlight');
        };
      }
    }
  }, [currentStep, isActive]);

  const nextStep = () => {
    if (currentStep < tutorialSteps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      completeTutorial();
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const skipTutorial = () => {
    setIsActive(false);
    if (onComplete) onComplete();
    
    // Save tutorial completion status
    localStorage.setItem(`tutorial_completed_${user?.id}`, 'true');
  };

  const completeTutorial = () => {
    setIsActive(false);
    if (onComplete) onComplete();
    
    // Save tutorial completion status
    localStorage.setItem(`tutorial_completed_${user?.id}`, 'true');
    
    // Show completion message
    alert('Tutorial completed! You\'re ready to start your job search journey.');
  };

  const restartTutorial = () => {
    setCurrentStep(0);
    setIsActive(true);
  };

  if (!isActive) {
    return (
      <button
        onClick={restartTutorial}
        className="fixed bottom-20 right-4 bg-blue-600 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-blue-700 transition-colors z-40"
        title="Restart Tutorial"
      >
        <i className="fas fa-question-circle mr-2"></i>
        Help
      </button>
    );
  }

  const currentTutorialStep = tutorialSteps[currentStep];

  return (
    <>
      {/* Tutorial Overlay */}
      <div className="fixed inset-0 bg-black bg-opacity-50 z-50 pointer-events-none">
        {/* Tutorial Tooltip */}
        <div className={`absolute bg-white rounded-lg shadow-xl p-6 max-w-sm pointer-events-auto ${
          currentTutorialStep.placement === 'center' 
            ? 'top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'
            : getTooltipPosition(currentTutorialStep.placement)
        }`}>
          {/* Progress Bar */}
          <div className="mb-4">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium text-gray-600">
                Step {currentStep + 1} of {tutorialSteps.length}
              </span>
              <button
                onClick={skipTutorial}
                className="text-gray-400 hover:text-gray-600 text-sm"
              >
                Skip
              </button>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-green-600 h-2 rounded-full transition-all duration-300"
                style={{ width: `${((currentStep + 1) / tutorialSteps.length) * 100}%` }}
              ></div>
            </div>
          </div>

          {/* Content */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              {currentTutorialStep.title}
            </h3>
            <p className="text-gray-600 leading-relaxed">
              {currentTutorialStep.content}
            </p>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-between">
            <button
              onClick={prevStep}
              disabled={currentStep === 0}
              className="px-4 py-2 text-gray-600 hover:text-gray-800 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <i className="fas fa-arrow-left mr-2"></i>
              Previous
            </button>
            
            <button
              onClick={nextStep}
              className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
            >
              {currentStep === tutorialSteps.length - 1 ? 'Finish' : 'Next'}
              {currentStep !== tutorialSteps.length - 1 && (
                <i className="fas fa-arrow-right ml-2"></i>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Tutorial Styles */}
      <style jsx>{`
        .tutorial-highlight {
          position: relative;
          z-index: 51;
          box-shadow: 0 0 0 4px rgba(34, 197, 94, 0.5), 0 0 0 8px rgba(34, 197, 94, 0.2);
          border-radius: 8px;
          animation: pulse-highlight 2s infinite;
        }
        
        @keyframes pulse-highlight {
          0%, 100% {
            box-shadow: 0 0 0 4px rgba(34, 197, 94, 0.5), 0 0 0 8px rgba(34, 197, 94, 0.2);
          }
          50% {
            box-shadow: 0 0 0 6px rgba(34, 197, 94, 0.7), 0 0 0 12px rgba(34, 197, 94, 0.3);
          }
        }
      `}</style>
    </>
  );
};

// Helper function to calculate tooltip position
const getTooltipPosition = (placement) => {
  switch (placement) {
    case 'top':
      return 'bottom-full mb-4 left-1/2 transform -translate-x-1/2';
    case 'bottom':
      return 'top-full mt-4 left-1/2 transform -translate-x-1/2';
    case 'left':
      return 'right-full mr-4 top-1/2 transform -translate-y-1/2';
    case 'right':
      return 'left-full ml-4 top-1/2 transform -translate-y-1/2';
    default:
      return 'top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2';
  }
};

// Hook to check if user should see tutorial
export const useTutorial = () => {
  const { user } = useSelector(state => state.auth);
  const [shouldShowTutorial, setShouldShowTutorial] = useState(false);

  useEffect(() => {
    if (user?.id) {
      const tutorialCompleted = localStorage.getItem(`tutorial_completed_${user.id}`);
      setShouldShowTutorial(!tutorialCompleted);
    }
  }, [user?.id]);

  return shouldShowTutorial;
};

export default TutorialSystem;
