import React, { useState } from "react";

const ApplicantDashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [user, setUser] = useState({
    name: 'John Doe',
    email: 'john.doe@example.com',
    avatar: null
  });

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
                   <svg 
                     xmlns="http://www.w3.org/2000/svg" 
                     className="h-16 w-16 text-green-700"
                     fill="none" 
                     viewBox="0 0 24 24" 
                     stroke="currentColor" 
                     strokeWidth="2"
                   >
                     <path 
                       strokeLinecap="round" 
                       strokeLinejoin="round" 
                       d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" 
                  />
                   </svg>
                </div>
              )}
               <div className="absolute bottom-0 right-0 bg-green-700 p-2 rounded-full border-2 border-white hover:bg-green-900 transition-colors z-10">
                 <svg 
                   xmlns="http://www.w3.org/2000/svg" 
                   className="h-6 w-6 text-white"
                   viewBox="0 0 24 24" 
                   fill="none" 
                   stroke="currentColor" 
                   strokeWidth="2"
                 > 
                   <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" 
                  />
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" 
                  />
                  </svg>
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

        <div className="flex-1 overflow-y-auto">
          <ul className="space-y-4 px-4">
             <li>
              <button className="text-green-700 hover:bg-green-200 w-full text-left">
                Academic Qualifications
              </button>
            </li>
            <hr className="my-6 border-t border-green-700" />
            <li>
              <button className="text-green-700 hover:bg-green-200 w-full text-left">
                Work Experience
              </button>
            </li>
            <hr className="my-6 border-t border-green-700" />
            <li>
              <button className="text-green-700 hover:bg-green-200 w-full text-left">
                Language Proficiency
              </button>
            </li>
            <hr className="my-6 border-t border-green-700" />
            <li>
              <button className="text-green-700 hover:bg-green-200 w-full text-left">
                Computer Skills
              </button>
            </li>
            <hr className="my-6 border-t border-green-700" />
            <li>
              <button className="text-green-700 hover:bg-green-100 w-full text-left">
                Logout
              </button>
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
              className="h-12 w-auto ml-12"
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