import React, { useState } from 'react';


const EmployerDashboard = () => {
   const [recentApplications, setRecentApplications] = useState([]);
   const [jobPostings, setJobPostings] = useState([]);
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
   const [showJobModal, setShowJobModal] = useState(false);
   const [newJob, setNewJob] = useState({
      title: '',
      description: '',
      status: 'Draft'
  });

  const handleNewJob = (e) => {
    e.preventDefault();
    setJobPostings([...jobPostings, {
      title: newJob.title,
      applicants: 0,
      status: newJob.status
    }]);
    setShowJobModal(false);
    setNewJob({ title: '', description: '', status: 'Draft' });
  };

  const [user] = useState({
    name: 'Acme Corp',
    email: 'hr@acmecorp.com',
    avatar: null
  });

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
                {user.avatar ? (
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
                onChange={(e)=>{}} 
              />
            </div>

            <div className="mt-2 text-center">
              <h3 className="text-md font-bold">{user.name}</h3>
              <p className="text-xs text-green-700">{user.email}</p>
            </div>
            <hr className="border-t border-green-700 w-full my-4" />

            <div className="w-full space-y-2 mt-2">
          <button className="w-full flex items-center space-x-2 px-2 py-1.5 bg-green-100 text-green-800 rounded-lg">
            <i className="fas fa-briefcase text-green-700"></i>
            <span>Dashboard</span>
          </button>
          <button className="w-full flex items-center space-x-2 px-2 py-1.5 text-green-600 hover:bg-green-100 rounded-lg">
            <i className="fas fa-users text-green-700"></i>
            <span>Candidates</span>
          </button>
          <button className="w-full flex items-center space-x-2 px-2 py-1.5 text-green-600 hover:bg-green-100 rounded-lg">
            <i className="fas fa-chart-bar text-green-700"></i>
            <span>Analytics</span>
          </button>
          <button className="w-full flex items-center space-x-2 px-2 py-1.5 text-green-600 hover:bg-green-100 rounded-lg">
            <i className="fas fa-envelope text-green-700"></i>
            <span>Messages</span>
          </button>
          <button className="w-full flex items-center space-x-2 px-2 py-1.5 text-green-600 hover:bg-green-100 rounded-lg">
            <i className="fas fa-cog text-green-700"></i>
            <span>Settings</span>
          </button>
          <button className="w-full flex items-center space-x-2 px-2 py-2 text-green-600 hover:bg-green-100 rounded-lg">
            <i className="fas fa-sign-out-alt text-green-700"></i>
            <span>Logout</span>
          </button>
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
                <div className="flex flex-col items-center justify-center py-12 space-y-4">
                    <i className="fas fa-file-alt text-6xl text-green-600"></i> 
                    <p className=" text-gray-500 font-medium">No applications yet</p>
                  </div>
              ): (
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

          {/* Job Postings */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">Posted Jobs</h2>
              <button 
                onClick={() => setShowJobModal(true)}
                className="bg-green-600 hover:bg-green-700 text-white rounded-full w-10 h-10 flex items-center justify-center transition-colors duration-200">
                 <i className="fas fa-plus text-xl"></i>
              </button>
            </div>
            {jobPostings.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-12 space-y-4">
                  <i className="fas fa-file-alt text-6xl text-green-600"></i>
                  <p className=" text-gray-600 font-medium">No jobs posted yet</p>

                  <button 
                    onClick={() => setShowJobModal(true)}
                    className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700">
                    Add Your First Job
                  </button>
                </div>
              ) : (
                <div className="space-y-4">
                {jobPostings.map((job, index) => (
                  <div key={index} className="flex items-center justify-between p-3 hover:bg-gray-50 rounded">
                    <div>
                      <h4 className="font-medium">{job.title}</h4>
                      <p className="text-sm text-green-600">
                        {job.applicants} applicants
                      </p>
                    </div>
                    <div className="flex items-center space-x-4">
                      <span className={`px-2 py-1 text-sm rounded-full ${
                        job.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-green-800'
                      }`}>
                        {job.status}
                      </span>
                      <button className="text-gray-400 hover:text-gray-600">
                        Edit
                      </button>
                      <button className="text-red-400 hover:text-red-600">
                        Delete
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              )}
         
          </div>
        </main>
      </div>

      {showJobModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg max-w-2xl mx-auto mt-20">
            <div className="flex justify-between items-center mb-4">
             <h3 className="text-xl text-green-800 font-bold mb-4 ">Create New Job Posting</h3>
               <button 
                 onClick={() => setShowJobModal(false)}
                 className="text-gray-500 hover:text-gray-700"
               >
                 <i className="fas fa-times"></i>
               </button>
            </div>

            <form onSubmit={handleNewJob}>
            <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Job Title</label>
                  <input
                    type="text"
                    required
                    className="mt-1 block w-full rounded-md border border-gray-300 p-2"
                    value={newJob.title}
                    onChange={(e) => setNewJob({...newJob, title: e.target.value})}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">Description</label>
                  <textarea
                    className="mt-1 block w-full rounded-md border border-gray-300 p-2"
                    rows="4"
                    value={newJob.description}
                    onChange={(e) => setNewJob({...newJob, description: e.target.value})}
                  ></textarea>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">Status</label>
                  <select
                    className="mt-1 block w-full rounded-md border border-gray-300 p-2"
                    value={newJob.status}
                    onChange={(e) => setNewJob({...newJob, status: e.target.value})}
                  >
                    <option value="Draft">Draft</option>
                    <option value="Active">Active</option>
                  </select>
                </div>

                <div className="flex justify-end space-x-4">
                  <button
                    type="button"
                    onClick={() => setShowJobModal(false)}
                    className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
                  >
                    Create Job
                  </button>
                </div>
              </div>
            </form>
        </div>
      </div>
      )}
    </div>
  );
};

export default EmployerDashboard;