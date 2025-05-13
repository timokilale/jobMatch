import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import JobPostingsSection from './JobPostings';
import { useJobs } from '../hooks/useJobs';


const EmployerDashboard = () => {
  const [recentApplications, setRecentApplications] = useState([]);
  const [avatar, setAvatar] = useState(null);
  const { role, user } = useSelector((state) => state.auth);
  
  const { jobPostings, loading: jobsLoading } = useJobs(user?.id);
  
  const activeJobs = jobPostings.filter(job => job.status === 'Active').length;
  const interviewing = recentApplications.filter(app => app.status === 'interview').length;
  const newApplications = recentApplications.length;
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

  return (
    <div className="min-h-screen bg-green-50">
      {/* Dashboard Header */}
      
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="w-48">
            <img src="/assets/logo.png" alt="Logo" className="w-36 h-auto" />
          </div>
          <div className="flex items-center space-x-4">
            <button className="p-2fas fa-Briefcase text-green-600 hover:bg-gray-100 rounded-full">
              <span className="sr-only">Notifications</span>
              <i className="fas fa-bell text-xl text-green-700"></i>
            </button>
          </div>
        </div>


      <div className="max-w-7xl mx-auto px-4 py-6 flex gap-6">
        {/* Sidebar Navigation */}
        <nav className="w-64 bg-white-100 text-green-800 p-5 flex flex-col justify-between shadow-xl">
          <div className="flex flex-col items-center">
            <div className="relative group">

              <label htmlFor="avatar-upload" className="cursor-pointer relative">
                {avatar ? (
                  <img 
                    src={user.avatar} 
                    alt="Profile" 
                    className="h-24 w-24 rounded-full object-cover border-4 border-green-700 hover:border-green-700 transition-all duration-300" />
                ) : (
                  <div className="h-24 w-24 rounded-full border-4 border-green-700 bg-gray-100 hover:border-green-900 transition-all duration-300 flex items-center justify-center">
                    <i className="fas fa-briefcase text-4xl text-green-700"></i>
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
                onChange={handleAvatarChange} 
              />
            </div>

            <div className="mt-2 text-center">
              <h3 className="text-md font-bold">{user?.companyName}</h3>
              <p className="text-xs text-green-700">{user?.email}</p>
            </div>
            <hr className="border-t border-green-700 w-full my-4" />

            <div className="w-full space-y-2 mt-2">
              {['Dashboard', 'Candidates', 'Analytics', 'Messages', 'Settings', 'Logout'].map((label, i) => (
                 <button key={i} className="w-full flex items-center space-x-2 px-2 py-1.5 text-green-600 hover:bg-green-100 rounded-lg">
                   <i className={`fas fa-${label.toLowerCase()} text-green-700`}></i>
                   <span>{label}</span>
                 </button>
              ))}
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <main className="flex-1">
          <div className="flex justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6 w-full max-w-3xl">
               {stats.map((stat, index) => (
                 <div key={index} className={`p-4 rounded-lg ${stat.color}`}>
                   <h3 className="text-sm font-medium">{stat.title}</h3>
                   <p className="text-2xl font-bold mt-1">{stat.value}</p>
                 </div>
              ))}
             </div>
          </div>

          {/* Recent Applications */}
          <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
             {recentApplications.length === 0 ? (
                 <div className="flex flex-col items-center py-12 space-y-4">
                    <i className="fas fa-file-alt text-6xl text-green-600"></i>
                    <p className="text-gray-500 font-medium">No applications yet</p>
                  </div>
              ) : (
                 <>
                  <div className="flex justify-between items-center mb-4">
                    <h2 className="text-lg font-semibold">Recent Applications</h2>
                      {recentApplications.length > 3 && (
                        <button className="text-green-600 hover:text-green-800">
                          View All →
                        </button>
                      )}
                  </div>
                  <div className="space-y-4">
                      {[...recentApplications]
                          .sort((a, b) => new Date(b.date) - new Date(a.date))
                          .slice(0, 3)
                          .map((application, index) => (
                              <div key={index} className="flex items-center justify-between p-3 hover:bg-green-50 rounded">
                                  <div>
                                      <h4 className="font-medium">{application.name}</h4>
                                      <p className="text-sm text-green-600">{application.position}</p>
                                  </div>
                                  <div className="text-right">
                                      <span className={`px-2 py-1 text-sm rounded-full ${
                                          application.status === 'New' ? 'bg-green-100 text-green-800' :
                                          application.status === 'Interview' ? 'bg-blue-100 text-green-800' :
                                          'bg-green-100 text-green-800'
                                      }`}>
                                          {application.status}
                                      </span>
                                      <p className="text-sm text-green-600 mt-1">{application.date}</p>
                               </div>
                           </div>
                       ))}
                  </div>
                </>
              )}    
          </div>

          <JobPostingsSection employerId={user?.id} />
        </main>
      </div>
    </div>
  );
};

export default EmployerDashboard;