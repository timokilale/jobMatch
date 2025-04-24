import React, { useState } from "react";
import AcademicQualifications from "./SidebarItems/AcademicQualifications";
import ProfessionalQualifications from "./SidebarItems/ProfessionalQualifications";
import WorkExperience from "./SidebarItems/WorkExperience";
import LanguageProficiency from "./SidebarItems/LanguageProficiency";
import ComputerSkills from "./SidebarItems/ComputerSkills";


const ApplicantDashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(null);
  const [user, setUser] = useState({
    name: 'John Doe',
    email: 'john.doe@example.com',
    avatar: null
  });

  const sections = [
    {
      key: "home",
      title: "Dashboard",
      icon: "dashboard",
      component: null,
    },
    {
      key: "academic",
      title: "Academic Qualifications",
      icon: "graduation-cap",
      component: <AcademicQualifications />,
    },
    {
      key: "professional",
      title: "Professional Qualifications",
      customIcon: {
        src: "/assets/certificate.svg",
        alt: "certificateicon",
        className: "w-5 h-5 object-contain hover:brightness-125 transition-all"
      },
      component: <ProfessionalQualifications />,
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
      key: "logout",
      title: "Logout",
      icon: "sign-out-alt",
      isAction: true
    },
  ];

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  const handleSectionClick = (section) => {
    if (section.isAction) {
      console.log("Logging out...");
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
              {user.avatar ? (
                <img
                  src={user.avatar}
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
                    setUser(prev => ({ ...prev, avatar: event.target.result }));
                  };
                  reader.readAsDataURL(file);
                }
              }}
            />
          </div>
          
          <div className="mt-4 text-center">
            <h3 className="text-lg font-bold">{user.name}</h3>
            <p className="text-sm text-green-700">{user.email}</p>
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
                src="assets/logo.svg" 
                alt="Logo" 
                className="h-12 w-auto ml-12"
              />
            </div>

            <div className="flex items-center gap-4">
              <button className="text-green-700 hover:text-green-900 relative p-2 rounded-lg transition-colors">
                <i className="fas fa-bell text-xl"></i>
                <span className="absolute -top-1 -right-1 bg-white border-2  border-green-700  text-green-700 text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  3
                </span>
              </button>
             </div>
          </div>
        </div>

        {/* Main Content */}
        <div className={`flex-1 bg-gray-50 p-5 ${
          sidebarOpen ? "ml-64" : "ml-0"
        } transition-all duration-300 flex flex-col justify-center items-center min-h-[calc(100vh-4rem)]`}>
          
          {activeSection ? (
            sections.find(s => s.key === activeSection)?.component
          ) : (

          <div className="text-center space-y-4">
            <img src="assets/empty folder.svg" alt="No Jobs" className="w-1/2 h-auto mx-auto mb-4" />
          {/* <i className="fas fa-folder-open text-8xl text-green-700 mb-4"></i> */}
          <h2 className="text-xl font-semibold text-gray-600">
           {activeSection ? '' : 'No matching jobs yet'}
          </h2>
          </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ApplicantDashboard;