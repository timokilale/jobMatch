import React, { useState } from "react";

const ApplicantDashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="flex h-screen relative overflow-hidden">
      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-gray-100 text-green-800 p-5 flex flex-col justify-between transform transition-transform duration-300 z-30 shadow-xl ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="mt-12 ml-4">
          <h2 className="mb-5 text-lg font-bold">Applicant Info</h2>
          <ul className="space-y-4">
            <li>Name: John Doe</li>
            <li>Email: john.doe@example.com</li>
            <li>Phone: +123456789</li>
          </ul>
        </div>
        
        <div className="ml-4">
          <h2 className="mb-5 text-lg font-bold">Settings</h2>
          <ul className="space-y-4">
            <li>
              <a href="#" className="text-green-700 hover:underline">
                Profile
              </a>
            </li>
            <li>
              <a href="#" className="text-green-700 hover:underline">
                Account
              </a>
            </li>
            <li>
              <a href="#" className="text-green-700 hover:underline">
                Logout
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col transition-all duration-300">
        {/* Navbar */}
        <div className={`h-16 bg-gray-100 flex items-center px-5 shadow-md z-20 ${
          sidebarOpen ? "ml-64" : "ml-0"
        } transition-all duration-300`}>
          {/* Toggle and Logo on Left */}
          <div className="flex items-center gap-4 relative">
            <button
              onClick={toggleSidebar}
              className="text-green-700 hover:text-green-900 p-2 rounded-lg transition-colors absolute left-0"
            >
              {sidebarOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
            
            <img 
              src="assets/logo.svg" 
              alt="Logo" 
              className="h-12 w-auto ml-12"  // Adjusted margin to account for absolute icon
            />
          </div>
        </div>

        {/* Main Content */}
        <div className={`flex-1 bg-gray-50 p-5 ${
          sidebarOpen ? "ml-64" : "ml-0"
        } transition-all duration-300`}>
          <h1 className="text-2xl font-bold mb-4 text-green-800">
            Welcome to your Dashboard
          </h1>
          <p className="text-gray-600">
            Here you can manage your applications and settings.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ApplicantDashboard;