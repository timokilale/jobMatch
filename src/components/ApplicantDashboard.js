import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { Navigate, useNavigate } from 'react-router-dom';
import AcademicQualifications from "./SidebarItems/AcademicQualifications"
import WorkExperience from "./SidebarItems/WorkExperience";
import LanguageProficiency from "./SidebarItems/LanguageProficiency";
import ComputerSkills from "./SidebarItems/ComputerSkills";
import JobListings from "./JobListings";
import AppliedJobs from "./SidebarItems/AppliedJobs";
import Notifications from "./Notifications";
import CVPreview from "./SidebarItems/CVPreview";
import { getApplicantApplications } from "../redux/slices/applications";

const ApplicantDashboard = () => {
  const [loading, setLoading] = useState(false);
  const [loadingText, setLoadingText] = useState('');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(null);
  const { role, user } = useSelector((state) => state.auth);
  const [avatar, setAvatar] = useState(user?.avatar || null);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  

  useEffect(() => {
    if (user?.id) {
      dispatch(getApplicantApplications(user.id));
      const pollInterval = setInterval(() => {
        dispatch(getApplicantApplications(user.id));
      }, 30000);

      return () => clearInterval(pollInterval);
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
      key: "computer",
      title: "Computer Skills",
      icon: "laptop-code",
      component: <ComputerSkills />,
    },
    {
      key: "cv",
      title: "CV Preview",
      icon: "file-alt",
      component: <CVPreview applicantId={user.id} />,
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
      setLoading(true);
      setLoadingText('Logging out...');
      setTimeout(() => {
        setLoading(false);
        navigate('/login');
      }, 1500); 
    } else if (section.key === "home") {
      setActiveSection(null);
    } else {
      setActiveSection(section.key);
    }
  };

  return (
    <div className="flex h-screen relative overflow-hidden">
       <style>{`
        .sidebar-scroll::-webkit-scrollbar {
          width: 4px;
          height: 4px;
        }

        .sidebar-scroll::-webkit-scrollbar-track {
          background: transparent;
        }

        .sidebar-scroll::-webkit-scrollbar-thumb {
          background: #9CA3AF;
          border-radius: 4px;
          opacity: 0;
          transition: opacity 0.3s;
        }

        .sidebar-scroll:hover::-webkit-scrollbar-thumb,
        .sidebar-scroll:active::-webkit-scrollbar-thumb {
          opacity: 1;
        }

        @supports (scrollbar-width: thin) {
          .sidebar-scroll {
            scrollbar-width: thin;
            scrollbar-color: #9CA3AF transparent;
          }
        }
      `}</style>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-gray-100 text-green-800 p-5 flex flex-col justify-between transform transition-transform duration-300 z-30 shadow-xl ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="mt-12 ml-4 flex flex-col items-center">
          <div className="relative group">
            <label htmlFor="avatar-upload" className="cursor-pointer relative">
              {user?.avatar ? (
                <img
                  src={user?.avatar}
                  alt="Profile"
                  className="h-24 w-24 rounded-full object-cover border-4 border-green-700 hover:border-green-700 transition-all duration-300"
              />
              ) : (
                <div className="h-24 w-24 rounded-full border-4 border-green-700 bg-gray-100 hover:border-green-900 transition-all duration-300 flex items-center justify-center">
                   <i className="fas fa-user-circle text-6xl text-green-700"></i>
                </div>
              )}
               <div className="absolute -bottom-1 -right-1 bg-green-700 rounded-full border-2 border-white hover:bg-green-900 transition-colors z-10 w-8 h-8 flex items-center justify-center">
               <i className="fas fa-camera text-white text-sm"></i>
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
                    setAvatar(prev => ({ ...prev, avatar: event.target.result }));
                  };
                  reader.readAsDataURL(file);
                }
              }}
            />
          </div>
          
          <div className="mt-4 text-center">
            <h3 className="text-lg font-bold">{user?.fullName || 'Loading...'}</h3>
            <p className="text-sm text-green-700">{user?.email || 'Loading...'}</p>
          </div>
        </div>

        <hr className="my-6 border-t border-green-700" />

        <div className="flex-1 overflow-y-auto sidebar-scroll">
          <ul className="space-y-4 px-4">
            {sections.map((section, index) => (
             <li key={index} className="border-b border-green-700 last:border-b-0">
               <button
                 onClick={() => handleSectionClick(section)} 
                 className="w-full text-left p-3 rounded-md hover:bg-green-100 transition-colors flex items-center gap-3 text-green-700">
                 
                 {section.customIcon ? (
                  <img
                    src={section.customIcon.src}
                    alt={section.customIcon.alt}
                    className={`${section.customIcon.className} text-green-700`}
                  />
                ) : (
                  <i className={`fas fa-${section.icon} text-green-700 w-5 text-center`}></i>
                )}
                  {section.title}
              </button>
            </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col transition-all duration-300">
        {/* Navbar */}
        <div className={`h-16 bg-gray-100 flex items-center px-5 shadow-md z-20 ${
          sidebarOpen ? "ml-64" : "ml-0"
        } transition-all duration-300 `}>
          <div className="flex items-center justify-between w-full">
            <div className="flex items-center gap-4 relative">
              <button
                onClick={toggleSidebar}
                className="text-green-700 hover:text-green-900 p-2 rounded-lg transition-colors absolute left-0"
              >
                <i className={`fas ${sidebarOpen ? "fa-times" : "fa-bars"} text-2xl`}></i>
              </button>
              <img 
                src="assets/logo.png" 
                alt="Logo" 
                className="h-12 w-auto ml-12"
              />
            </div>
            <div className="flex items-center gap-4">
              <button
                onClick={() => handleSectionClick(sections.find(s => s.key === "applied-jobs"))}
                className="flex items-center space-x-2 text-green-700 hover:text-green-500 hover:bg-gray-100 px-3 py-2 rounded-lg transition-colors"
              >
                <i className="fas fa-briefcase text-xl"></i>
                <span className="hidden md:inline"></span>
              </button>
              
              {/* Replace the old notification button with the new Notifications component */}
              <Notifications />
             </div>
          </div>
        </div>

        {/* Main Content */}
        <div className={`flex-1 bg-gray-50 p-5 overflow-y-auto ${
          sidebarOpen ? "ml-64" : "ml-0"
        } transition-all duration-300 flex flex-col justify-center items-center min-h-[calc(100vh-4rem)]`}>
          {loading ? (
             <div className="flex flex-col items-center justify-center w-full h-full space-y-6">
               <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-green-700"></div>
               <p className="text-green-700 text-xl font-semibold">{loadingText}</p>
             </div>
          ) : activeSection ? (
            <div className="w-full">
              {sections.find(s => s.key === activeSection)?.component || 
              <JobListings category={activeSection} />}
            </div>
          ) : (
            <div className="w-full">
              <JobListings category={null} />
            </div>
          )} 
        </div>
      </div>
    </div>
  );
};

export default ApplicantDashboard;