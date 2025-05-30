import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchEmployerApplications } from '../../redux/slices/applications';

const Candidates = () => {
  const dispatch = useDispatch();
  const { 
    applications = [], 
    loading = false,
    error = null 
  } = useSelector((state) => state.applications) || {};
  
  const { user } = useSelector((state) => state.auth);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('ALL');

  useEffect(() => {
    if (user?.id) {
      dispatch(fetchEmployerApplications(user.id));
    }
  }, [dispatch, user]);

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  // Filter applications based on search term and status
  const filteredApplications = applications.filter((application) => {
    const matchesSearch = 
      application.applicant.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      application.job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      application.applicant.user.email.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesStatus = statusFilter === 'ALL' || application.status === statusFilter;
    
    return matchesSearch && matchesStatus;
  });

  const getStatusColor = (status) => {
    switch (status) {
      case 'APPLIED':
        return 'bg-green-100 text-green-800';
      case 'INTERVIEW':
        return 'bg-blue-100 text-blue-800';
      case 'REJECTED':
        return 'bg-red-100 text-red-800';
      case 'HIRED':
        return 'bg-purple-100 text-purple-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getInitials = (name) => {
    return name.split(' ').map(n => n[0]).join('').toUpperCase();
  };

  if (loading) {
    return (
      <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
        <div className="flex flex-col items-center py-12 space-y-4">
          <i className="fas fa-spinner fa-spin text-3xl text-green-600"></i>
          <p className="text-gray-500 font-medium">Loading candidates...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
        <div className="flex flex-col items-center py-12 space-y-4">
          <i className="fas fa-exclamation-triangle text-3xl text-red-600"></i>
          <p className="text-red-500 font-medium">Error loading candidates: {error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-6 gap-4">
        <h2 className="text-2xl font-bold text-green-800">Candidate Management</h2>
        <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
          <input 
            type="text" 
            placeholder="Search candidates..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-300 flex-1 lg:w-64"
          />
          <select 
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-300"
          >
            <option value="ALL">All Status</option>
            <option value="APPLIED">Applied</option>
            <option value="INTERVIEW">Interview</option>
            <option value="REJECTED">Rejected</option>
            <option value="HIRED">Hired</option>
          </select>
        </div>
      </div>

      {/* Stats Summary */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-green-50 border border-green-200 rounded-lg p-3 text-center">
          <p className="text-2xl font-bold text-green-800">{applications.length}</p>
          <p className="text-sm text-green-600">Total Applications</p>
        </div>
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 text-center">
          <p className="text-2xl font-bold text-blue-800">
            {applications.filter(app => app.status === 'APPLIED').length}
          </p>
          <p className="text-sm text-blue-600">New Applications</p>
        </div>
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3 text-center">
          <p className="text-2xl font-bold text-yellow-800">
            {applications.filter(app => app.status === 'INTERVIEW').length}
          </p>
          <p className="text-sm text-yellow-600">Interviewing</p>
        </div>
        <div className="bg-purple-50 border border-purple-200 rounded-lg p-3 text-center">
          <p className="text-2xl font-bold text-purple-800">
            {applications.filter(app => app.status === 'HIRED').length}
          </p>
          <p className="text-sm text-purple-600">Hired</p>
        </div>
      </div>

      {filteredApplications.length === 0 ? (
        <div className="flex flex-col items-center py-12 space-y-4">
          <i className="fas fa-users text-6xl text-green-600"></i>
          <p className="text-gray-500 font-medium">
            {searchTerm || statusFilter !== 'ALL' 
              ? 'No candidates match your search criteria' 
              : 'No applications yet'
            }
          </p>
          {(searchTerm || statusFilter !== 'ALL') && (
            <button 
              onClick={() => {
                setSearchTerm('');
                setStatusFilter('ALL');
              }}
              className="text-green-600 hover:text-green-800 underline"
            >
              Clear filters
            </button>
          )}
        </div>
      ) : (
        <>
          {/* Table Header */}
          <div className="hidden lg:grid grid-cols-5 gap-4 font-medium text-green-800 border-b pb-2 mb-4">
            <span>Candidate</span>
            <span>Position</span>
            <span>Applied Date</span>
            <span>Status</span>
            <span>Actions</span>
          </div>

          {/* Applications List */}
          <div className="space-y-4 lg:space-y-0">
            {filteredApplications
              .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
              .map((application) => (
                <div 
                  key={application.id} 
                  className="lg:grid lg:grid-cols-5 gap-4 items-center py-3 hover:bg-green-50 px-2 rounded border lg:border-0 lg:hover:bg-green-50"
                >
                  {/* Candidate Info */}
                  <div className="flex items-center gap-3 mb-2 lg:mb-0">
                    <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-green-800 font-medium">
                      {getInitials(application.applicant.fullName)}
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">{application.applicant.fullName}</p>
                      <p className="text-sm text-green-600">{application.applicant.user.email}</p>
                    </div>
                  </div>
                  
                  {/* Position */}
                  <div className="mb-2 lg:mb-0">
                    <p className="font-medium lg:font-normal">{application.job.title}</p>
                    <p className="text-sm text-gray-500 lg:hidden">Position</p>
                  </div>
                  
                  {/* Applied Date */}
                  <div className="mb-2 lg:mb-0">
                    <p className="lg:text-sm">{formatDate(application.createdAt)}</p>
                    <p className="text-sm text-gray-500 lg:hidden">Applied</p>
                  </div>
                  
                  {/* Status */}
                  <div className="mb-2 lg:mb-0">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(application.status)}`}>
                      {application.status.toLowerCase().replace('_', ' ')}
                    </span>
                  </div>
                  
                  {/* Actions */}
                  <div className="flex gap-2">
                    <button 
                      className="p-2 hover:bg-green-100 rounded-full transition-colors"
                      title="Send Email"
                    >
                      <i className="fas fa-envelope text-green-600"></i>
                    </button>
                    <button 
                      className="p-2 hover:bg-green-100 rounded-full transition-colors"
                      title="View CV"
                    >
                      <i className="fas fa-file-alt text-green-600"></i>
                    </button>
                    <button 
                      className="p-2 hover:bg-green-100 rounded-full transition-colors"
                      title="Schedule Interview"
                    >
                      <i className="fas fa-calendar text-green-600"></i>
                    </button>
                    <button 
                      className="p-2 hover:bg-green-100 rounded-full transition-colors"
                      title="More Options"
                    >
                      <i className="fas fa-ellipsis-h text-green-600"></i>
                    </button>
                  </div>
                </div>
              ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Candidates;