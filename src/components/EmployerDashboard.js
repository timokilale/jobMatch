import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Navigate } from 'react-router-dom';
import JobPostingsSection from './JobPostings';
import { useJobs } from '../hooks/useJobs';
import Candidates from './EmployerSidebar/Candidates';
import Analytics from './EmployerSidebar/Analytics';
import Settings from './EmployerSidebar/Settings';
import MarketAnalytics from './MarketAnalytics';
import EmploymentTrendForecasting from './EmploymentTrendForecasting';
import EmployerNotifications from './EmployerNotifications';
import { fetchEmployerApplications } from '../redux/slices/applications';
import { logout } from '../redux/slices/authSlice';


const EmployerDashboard = () => {
  const dispatch = useDispatch();
  const { 
    applications = [], 
    loading = false,
    error = null 
  } = useSelector((state) => state.applications) || {};
  const [avatar, setAvatar] = useState(null);
  
  const { role, user } = useSelector((state) => state.auth);
  const [activeView, setActiveView] = useState('dashboard');
  const [showNotifications, setShowNotifications] = useState(false);
  const { jobPostings, loading: jobsLoading } = useJobs(user?.id);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [sidebarOpen, setSidebarOpen] = useState(false);

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

    handleResize(); // Set initial state
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
      dispatch(fetchEmployerApplications(user.id));
    }
  }, [dispatch, user]);


  const activeJobs = jobPostings.filter(job => job.status === 'Active').length;
  const interviewing = applications.filter(app => app.status === 'INTERVIEW').length;
  const newApplications = applications.filter(app => app.status === 'APPLIED').length;

 
  const stats = [
    { 
      title: 'Active Jobs', 
      value: activeJobs, 
      color: 'bg-green-300 border border-green-400 text-green-800' 
    },
    { 
      title: 'New Applications', 
      value: newApplications, 
      color: 'bg-green-200  border border-green-300 text-green-800' 
    },
    { 
      title: 'Interviewing', 
      value: interviewing, 
      color: 'bg-green-100  border border-green-300 text-green-800' 
    },
  ];

  if (role !== 'EMPLOYER') {
    return <Navigate to="/login" />;
  }

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setAvatar(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
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
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="text-green-700 hover:text-green-900 p-2 rounded-lg transition-colors touch-target"
              title={isMobile ? (sidebarOpen ? "Close menu" : "Open menu") : (sidebarOpen ? "Hide sidebar" : "Show sidebar")}
            >
              <i className={`fas ${
                isMobile
                  ? (sidebarOpen ? "fa-times" : "fa-bars")
                  : (sidebarOpen ? "fa-chevron-left" : "fa-bars")
              } text-xl`}></i>
            </button>
            <img src="/assets/logo.png" alt="Logo" className="h-10 w-auto" />
          </div>

          <div className="flex items-center gap-2">
            <EmployerNotifications />
            <button
              onClick={() => dispatch(logout())}
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
                    src="/assets/logo.png"
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
                  {avatar ? (
                    <img
                      src={user.avatar}
                      alt="Profile"
                      className="h-20 w-20 rounded-full object-cover border-4 border-green-700 hover:border-green-800 transition-all duration-300" />
                  ) : (
                    <div className="h-20 w-20 rounded-full border-4 border-green-700 bg-gray-100 hover:border-green-800 transition-all duration-300 flex items-center justify-center">
                      <i className="fas fa-briefcase text-4xl text-green-700"></i>
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
                  onChange={handleAvatarChange}
                />
              </div>

              <div className="mt-3 text-center">
                <h3 className="text-base font-bold text-gray-800">{user?.companyName}</h3>
                <p className="text-xs text-green-700">{user?.email}</p>
              </div>
            </div>

            {/* Navigation Section */}
            <div className="flex-1 overflow-y-auto">
              <nav className="p-2">
                {[
                  { label: 'Dashboard', icon: 'tachometer-alt', view: 'dashboard' },
                  { label: 'Candidates', icon: 'users', view: 'candidates' },
                  { label: 'Analytics', icon: 'chart-bar', view: 'analytics' },
                  { label: 'Market Insights', icon: 'chart-line', view: 'market-analytics' },
                  { label: 'Employment Trends', icon: 'chart-area', view: 'employment-forecasting' },
                  { label: 'Settings', icon: 'cog', view: 'settings' },
                  { label: 'Logout', icon: 'sign-out-alt', action: 'logout' }
                ].map((item, i) => (
                   <button
                     key={i}
                     className={`w-full text-left p-3 mb-1 rounded-lg hover:bg-gray-100 transition-colors flex items-center gap-3 touch-target ${
                      activeView === item.view
                        ? 'bg-green-100 text-green-700'
                        : 'text-gray-700 hover:text-green-700'
                    }`}
                     onClick={() => {
                      if (item.action === 'logout') {
                        dispatch(logout());
                      } else if (item.view) {
                        setActiveView(item.view);
                        if (isMobile) setSidebarOpen(false);
                      }
                     }}
                    >
                     <i className={`fas fa-${item.icon} text-green-700 w-5 text-center`}></i>
                     <span className="text-sm font-medium">{item.label}</span>
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
            {activeView === 'dashboard' ? (
              <>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
                  {jobsLoading ? (
                    // Show loading state for stats when jobs are loading
                    stats.map((stat, index) => (
                      <div key={index} className={`p-4 rounded-lg ${stat.color}`}>
                        <h3 className="text-sm font-medium">{stat.title}</h3>
                        <p className="text-2xl font-bold mt-1">...</p>
                      </div>
                    ))
                  ) : (
                    // Show actual stats when data is loaded
                    stats.map((stat, index) => (
                      <div key={index} className={`p-4 rounded-lg ${stat.color}`}>
                        <h3 className="text-sm font-medium">{stat.title}</h3>
                        <p className="text-2xl font-bold mt-1">{stat.value}</p>
                      </div>
                    ))
                  )}
                </div>

          {/* Recent Applications */}
          <div className="bg-white rounded-lg shadow-sm p-4 sm:p-6 mb-4 sm:mb-6 mx-2 sm:mx-0">
             {loading ? (
               <div className="flex flex-col items-center py-8 sm:py-12 space-y-4">
                 <i className="fas fa-spinner fa-spin text-2xl sm:text-3xl text-green-600"></i>
                 <p className="text-gray-500 font-medium text-sm sm:text-base">Loading applications...</p>
                </div>
             ) : error ? (
               <div className="flex flex-col items-center py-8 sm:py-12 space-y-4">
                  <i className="fas fa-exclamation-triangle text-2xl sm:text-3xl text-red-600"></i>
                  <p className="text-red-500 font-medium text-sm sm:text-base">{error}</p>
               </div>
             ) : applications.length === 0 ? (
                 <div className="flex flex-col items-center py-8 sm:py-12 space-y-4">
                    <i className="fas fa-file-alt text-4xl sm:text-6xl text-green-600"></i>
                    <p className="text-gray-500 font-medium text-sm sm:text-base">No applications yet</p>
                  </div>
              ) : (
                 <>
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-4 gap-2">
                    <h2 className="text-base sm:text-lg font-semibold">Recent Applications</h2>
                      {applications.length > 3 && (
                        <button
                          onClick={() => setActiveView('candidates')}
                          className="text-green-600 hover:text-green-800 text-sm sm:text-base self-start sm:self-auto">
                          View All →
                        </button>
                      )}
                  </div>
                  <div className="space-y-3 sm:space-y-4">
                      {applications
                         .slice(0,3)
                         .sort((a, b) => new Date(b.date) - new Date(a.date))
                         .map((application) => (
                           <div
                             key={application.id}
                             className="flex flex-col sm:flex-row sm:items-center sm:justify-between p-3 hover:bg-green-50 rounded gap-2 sm:gap-0">
                            <div className="flex-1">
                              <h4 className="font-medium text-sm sm:text-base">{application.applicant.fullName}</h4>
                              <p className="text-xs sm:text-sm text-green-600">{application.job.title}</p>
                              <p className="text-xs text-gray-500 mt-1">Applied: {formatDate(application.createdAt)}</p>
                            </div>
                            <div className="flex flex-row sm:flex-col items-start sm:items-end justify-between sm:justify-start sm:text-right">
                              <span className={`px-2 py-1 text-xs sm:text-sm rounded-full ${
                                application.status === 'APPLIED' ? 'bg-green-100 text-green-800' :
                                application.status === 'INTERVIEW' ? 'bg-blue-100 text-blue-800' :
                                application.status === 'REJECTED' ? 'bg-red-100 text-red-800' :
                                'bg-gray-100 text-gray-800'
                                }`}>
                                  {application.status.toLowerCase().replace('_', ' ')}
                              </span>
                              <p className="text-xs sm:text-sm text-green-600 mt-0 sm:mt-1">{application.applicant.user.email}</p>
                               </div>
                           </div>
                       ))}
                  </div>
                </>
              )}
          </div>

                <JobPostingsSection employerId={user?.id} />
              </>
            ) : activeView === 'candidates' ? (
              <Candidates />
            ) : activeView === 'analytics' ? (
              <Analytics />
            ) : activeView === 'market-analytics' ? (
              <MarketAnalytics />
            ) : activeView === 'employment-forecasting' ? (
              <EmploymentTrendForecasting />
            ) : activeView === 'settings' ? (
              <Settings />
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployerDashboard;