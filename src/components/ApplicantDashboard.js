import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { Navigate, useNavigate } from 'react-router-dom';
import AcademicQualifications from "./SidebarItems/AcademicQualifications"
import WorkExperience from "./SidebarItems/WorkExperience";
import LanguageProficiency from "./SidebarItems/LanguageProficiency";

import Skills from "./SidebarItems/Skills";
import JobListings from "./JobListings";
import AppliedJobs from "./SidebarItems/AppliedJobs";
import Notifications from "./Notifications";
import CVPreview from "./SidebarItems/CVPreview";
import TutorialSystem, { useTutorial } from "./TutorialSystem";
import AccessibilitySettings from "./AccessibilitySettings";
import SkillsAnalysis from "./SkillsAnalysis";
import MarketAnalytics from "./MarketAnalytics";
import Settings from "./Settings";

import PrivacySettings from "./PrivacySettings";
import ChatWidget from "./ChatWidget";
import { getApplicantApplications } from "../redux/slices/applications";

const ApplicantDashboard = () => {
  const [loading, setLoading] = useState(false);
  const [loadingText, setLoadingText] = useState('');
  const [sidebarOpen, setSidebarOpen] = useState(window.innerWidth >= 768); // Default open on desktop
  const [activeSection, setActiveSection] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [showAccessibilitySettings, setShowAccessibilitySettings] = useState(false);
  const [showPrivacySettings, setShowPrivacySettings] = useState(false);
  const { role, user } = useSelector((state) => state.auth);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const shouldShowTutorial = useTutorial();

  // Handle window resize for mobile detection
  useEffect(() => {
    const handleResize = () => {
      const newIsMobile = window.innerWidth < 768;
      setIsMobile(newIsMobile);

      // Adjust sidebar state based on screen size
      if (newIsMobile) {
        setSidebarOpen(false); // Close sidebar on mobile
      } else {
        setSidebarOpen(true); // Open sidebar on desktop by default
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Prevent body scroll when mobile drawer is open
  useEffect(() => {
    if (isMobile && sidebarOpen) {
      document.body.classList.add('drawer-open');
    } else {
      document.body.classList.remove('drawer-open');
    }

    // Cleanup on unmount
    return () => {
      document.body.classList.remove('drawer-open');
    };
  }, [isMobile, sidebarOpen]);
  

  useEffect(() => {
    if (user?.id) {
      dispatch(getApplicantApplications(user.id));
      // Removed polling interval to improve performance
      // Real-time updates should be handled via WebSocket if needed
    }
  }, [dispatch, user?.id]);

  
  if (role !== 'APPLICANT') {
    return <Navigate to="/login" />;
  }


  const sections = [
    {
      key: "home",
      title: "Dashboard",
      icon: "dashboard",
      component: <JobListings category={null} />,
    },
    {
      key: "applied-jobs",
      title: "Applied Jobs",
      icon: "clipboard-list",
      component: <AppliedJobs />,
    },
    {
      key: "skills-analysis",
      title: "Skills Analysis",
      icon: "brain",
      component: <SkillsAnalysis applicantId={user?.id} />,
    },
    {
      key: "market-insights",
      title: "Market Insights",
      icon: "chart-line",
      component: <MarketAnalytics />,
    },

    {
      key: "academic",
      title: "Academic Qualifications",
      icon: "graduation-cap",
      component: <AcademicQualifications />,
    },
    {
      key: "work",
      title: "Work Experience",
      icon: "briefcase",
      component: <WorkExperience />,
    },
    {
      key: "language",
      title: "Language Proficiency",
      icon: "language",
      component: <LanguageProficiency />,
    },
    {
      key: "skills",
      title: "My Skills",
      icon: "star",
      component: <Skills />,
    },

    {
      key: "cv",
      title: "CV Preview",
      icon: "file-alt",
      component: <CVPreview applicantId={user.id} />,
    },
    {
      key: "settings",
      title: "Settings",
      icon: "cog",
      component: <Settings />,
    },
    {
      key: "accessibility",
      title: "Accessibility",
      icon: "universal-access",
      isAction: true,
      action: () => setShowAccessibilitySettings(true)
    },
    {
      key: "privacy",
      title: "Privacy Settings",
      icon: "shield-alt",
      isAction: true,
      action: () => setShowPrivacySettings(true)
    },
    {
      key: "logout",
      title: "Logout",
      icon: "sign-out-alt",
      isAction: true
    },
  ];

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  const handleSectionClick = (section) => {
    if (section.isAction) {
      if (section.action) {
        section.action();
      } else if (section.key === "logout") {
        setLoading(true);
        setLoadingText('Logging out...');
        setTimeout(() => {
          setLoading(false);
          navigate('/login');
        }, 1500);
      }
    } else if (section.key === "home") {
      setActiveSection(null);
    } else {
      setActiveSection(section.key);
    }

    // Close sidebar on mobile after selection
    if (isMobile) {
      setSidebarOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 page-container">
      {/* Mobile Overlay */}
      {isMobile && sidebarOpen && (
        <div
          className="drawer-overlay"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Top Navbar - Fixed */}
      <div className="fixed top-0 left-0 right-0 h-16 bg-white border-b border-gray-200 flex items-center shadow-sm z-30">
        <div className="flex items-center justify-between w-full px-4">
          <div className="flex items-center gap-3">
            <button
              onClick={toggleSidebar}
              className="text-green-700 hover:text-green-900 p-2 rounded-lg transition-colors touch-target"
              title={isMobile ? (sidebarOpen ? "Close menu" : "Open menu") : (sidebarOpen ? "Hide sidebar" : "Show sidebar")}
            >
              <i className={`fas ${
                isMobile
                  ? (sidebarOpen ? "fa-times" : "fa-bars")
                  : (sidebarOpen ? "fa-chevron-left" : "fa-bars")
              } text-xl`}></i>
            </button>
            <img
              src="assets/logo.png"
              alt="Logo"
              className="h-10 w-auto"
            />
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => handleSectionClick(sections.find(s => s.key === "settings"))}
              className="flex items-center space-x-2 text-green-700 hover:text-green-500 hover:bg-gray-100 px-3 py-2 rounded-lg transition-colors touch-target"
            >
              <i className="fas fa-cog text-lg"></i>
              <span className="hidden md:inline text-sm">Settings</span>
            </button>

            <div data-tutorial="notifications">
              <Notifications />
            </div>

            <button
              onClick={() => handleSectionClick(sections.find(s => s.key === "logout"))}
              className="flex items-center space-x-2 text-green-700 hover:text-red-600 hover:bg-red-50 px-3 py-2 rounded-lg transition-colors touch-target"
              title="Logout"
            >
              <i className="fas fa-sign-out-alt text-lg"></i>
              <span className="hidden md:inline text-sm font-medium">Logout</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Layout Container */}
      <div className="pt-16 min-h-screen flex">
        {/* Sidebar */}
        {(isMobile || sidebarOpen) && (
          <div
            className={`${
              isMobile
                ? 'mobile-drawer drawer-transition bg-white shadow-xl z-50 transform'
                : 'w-64 bg-white border-r border-gray-200 flex-shrink-0'
            } ${
              sidebarOpen ? "translate-x-0" : "-translate-x-full"
            } flex flex-col`}
          >
            {/* Mobile Drawer Header */}
            {isMobile && (
              <div className="drawer-header flex-shrink-0 h-16 flex items-center justify-between px-4">
                <div className="flex items-center">
                  <img
                    src="assets/logo.png"
                    alt="Logo"
                    className="h-10 w-auto object-contain"
                    onError={(e) => {
                      e.target.style.display = 'none';
                    }}
                  />
                </div>
                <button
                  onClick={() => setSidebarOpen(false)}
                  className="text-white hover:text-gray-200 p-2 rounded-lg transition-colors"
                >
                  <i className="fas fa-times text-xl"></i>
                </button>
              </div>
            )}

            {/* Profile Section */}
            <div className={`flex-shrink-0 p-4 flex flex-col items-center border-b border-gray-200 ${isMobile ? 'pt-6' : ''}`}>
              <div className="relative group">
                <label htmlFor="avatar-upload" className="cursor-pointer relative">
                  {user?.avatar ? (
                    <img
                      src={user?.avatar}
                      alt="Profile"
                      className="h-20 w-20 rounded-full object-cover border-4 border-green-700 hover:border-green-800 transition-all duration-300"
                    />
                  ) : (
                    <div className="h-20 w-20 rounded-full border-4 border-green-700 bg-gray-100 hover:border-green-800 transition-all duration-300 flex items-center justify-center">
                       <i className="fas fa-user-circle text-5xl text-green-700"></i>
                    </div>
                  )}
                   <div className="absolute -bottom-1 -right-1 bg-green-700 rounded-full border-2 border-white hover:bg-green-800 transition-colors z-10 w-7 h-7 flex items-center justify-center">
                   <i className="fas fa-camera text-white text-xs"></i>
                  </div>
                </label>

                <input
                  type="file"
                  id="avatar-upload"
                  className="hidden"
                  accept="image/*"
                  onChange={(e) => {
                    const file = e.target.files[0];
                    if (file) {
                      const reader = new FileReader();
                      reader.onload = (event) => {
                        // TODO: Implement avatar upload functionality
                        console.log('Avatar selected:', event.target.result);
                      };
                      reader.readAsDataURL(file);
                    }
                  }}
                />
              </div>

              <div className="mt-3 text-center">
                <h3 className="text-base font-bold text-gray-800">{user?.fullName || 'Loading...'}</h3>
                <p className="text-xs text-green-700">{user?.email || 'Loading...'}</p>
              </div>
            </div>

            {/* Navigation Section */}
            <div className="flex-1 overflow-y-auto" data-tutorial="profile-sections">
              <nav className="p-2">
                {sections.map((section, index) => (
                  <button
                    key={index}
                    onClick={() => handleSectionClick(section)}
                    className="w-full text-left p-3 mb-1 rounded-lg hover:bg-gray-100 transition-colors flex items-center gap-3 text-gray-700 hover:text-green-700 touch-target"
                  >
                    {section.customIcon ? (
                      <img
                        src={section.customIcon.src}
                        alt={section.customIcon.alt}
                        className={`${section.customIcon.className} text-green-700`}
                      />
                    ) : (
                      <i className={`fas fa-${section.icon} text-green-700 w-5 text-center`}></i>
                    )}
                    <span className="text-sm font-medium">{section.title}</span>
                  </button>
                ))}
              </nav>
            </div>
          </div>
        )}

        {/* Main Content Area */}
        <div className={`flex-1 bg-gray-50 overflow-y-auto transition-all duration-300 ${
          !isMobile && sidebarOpen ? 'ml-0' : ''
        }`}>
          <div className="p-4 lg:p-6">
            {loading ? (
               <div className="flex flex-col items-center justify-center w-full h-full space-y-6 min-h-[60vh]">
                 <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-green-700"></div>
                 <p className="text-green-700 text-xl font-semibold">{loadingText || "Loading dashboard..."}</p>
                 <p className="text-gray-500 text-sm">This should only take a moment</p>
               </div>
            ) : activeSection ? (
              <div className="w-full">
                {sections.find(s => s.key === activeSection)?.component ||
                <JobListings category={activeSection} />}
              </div>
            ) : (
              <div className="w-full" data-tutorial="job-listings">
                <JobListings category={null} />
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Tutorial System */}
      <TutorialSystem isFirstTime={shouldShowTutorial} />

      {/* Accessibility Settings */}
      <AccessibilitySettings
        isOpen={showAccessibilitySettings}
        onClose={() => setShowAccessibilitySettings(false)}
      />

      {/* Privacy Settings */}
      <PrivacySettings
        isOpen={showPrivacySettings}
        onClose={() => setShowPrivacySettings(false)}
      />
    </div>
  );
};

export default ApplicantDashboard;