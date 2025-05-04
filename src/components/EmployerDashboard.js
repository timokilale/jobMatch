import React from 'react';


const EmployerDashboard = () => {
  // Sample data
  const stats = [
    { title: 'Active Jobs', value: '12', color: 'bg-green-100 text-green-800' },
    { title: 'New Applications', value: '24', color: 'bg-green-100 text-green-800' },
    { title: 'Interviewing', value: '8', color: 'bg-green-100 text-green-800' },
    { title: 'Hired This Month', value: '5', color: 'bg-green-100 text-green-800' }
  ];

  const recentApplications = [
    { name: 'John Doe', position: 'Senior Developer', status: 'Interview', date: '2024-03-15' },
    { name: 'Jane Smith', position: 'UX Designer', status: 'New', date: '2024-03-14' },
    { name: 'Mike Johnson', position: 'Project Manager', status: 'Offer Sent', date: '2024-03-13' }
  ];

  const jobPostings = [
    { title: 'Senior React Developer', applicants: 15, status: 'Active' },
    { title: 'UX Designer', applicants: 8, status: 'Active' },
    { title: 'DevOps Engineer', applicants: 3, status: 'Draft' }
  ];

  return (
    <div className="min-h-screen bg-green-50">
      {/* Dashboard Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="w-48">
            <img src="/assets/logo.png" alt="Logo" className="w-full h-auto" />
          </div>
          <div className="flex items-center space-x-4">
            <button className="p-2fas fa-Briefcase text-green-600 hover:bg-gray-100 rounded-full">
              <span className="sr-only">Notifications</span>
              <i className="fas fa-bell text-xl text-green-700"></i>
            </button>
            <div className="flex items-center">
              <i className="fas fa-user-circle text-4xl text-green-700"></i>
              <span className="ml-2fas fa-Briefcase text-green-700">Acme Corp</span>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-6 flex gap-6">
        {/* Sidebar Navigation */}
        <nav className="w-64 space-y-1">
          <button className="w-full flex items-center space-x-3 px-4 py-2 bg-green-100 text-green-800 rounded-lg">
            <i className="fas fa-Briefcase text-green-700"></i>
            <span>Dashboard</span>
          </button>
          <button className="w-full flex items-center space-x-3 px-4 py-2 text-green-600 hover:bg-green-100 rounded-lg">
          <i className="fas fa-Briefcase text-green-700"></i>
            <span>Candidates</span>
          </button>
          <button className="w-full flex items-center space-x-3 px-4 py-2 text-green-600 hover:bg-green-100 rounded-lg">
          <i className="fas fa-Briefcase text-green-700"></i>
            <span>Analytics</span>
          </button>
          <button className="w-full flex items-center space-x-3 px-4 py-2 text-green-600 hover:bg-green-100 rounded-lg">
          <i className="fas fa-Briefcase text-green-700"></i>
            <span>Messages</span>
          </button>
          <button className="w-full flex items-center space-x-3 px-4 py-2 text-green-600 hover:bg-green-100 rounded-lg">
          <i className="fas fa-settings text-green-700"></i>
            <span>Settings</span>
          </button>
        </nav>

        {/* Main Content */}
        <main className="flex-1">
          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            {stats.map((stat, index) => (
              <div key={index} className={`p-4 rounded-lg ${stat.color}`}>
                <h3 className="text-sm font-medium">{stat.title}</h3>
                <p className="text-2xl font-bold mt-1">{stat.value}</p>
              </div>
            ))}
          </div>

          {/* Recent Applications */}
          <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">Recent Applications</h2>
              <button className="text-green-600 hover:text-green-800">
                View All →
              </button>
            </div>
            <div className="space-y-4">
              {recentApplications.map((application, index) => (
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
          </div>

          {/* Job Postings */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">Job Postings</h2>
              <button className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700">
                + New Job
              </button>
            </div>
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
                    <button className="text-gray-400 hover:text-red-600">
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>

      {/* New Job Modal (Hidden by default) */}
      <div className="fixed inset-0 bg-black bg-opacity-50 hidden">
        <div className="bg-white p-6 rounded-lg max-w-2xl mx-auto mt-20">
          <h3 className="text-xl font-bold mb-4">Create New Job Posting</h3>
          {/* Add form fields here */}
        </div>
      </div>
    </div>
  );
};

export default EmployerDashboard;