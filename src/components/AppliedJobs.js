import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getApplicantApplications } from "../redux/slices/applications";

const AppliedJobs = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const {
    applications = [],
    loading: loadingApplications,
    error: applicationError
  } = useSelector((state) => state.applications);

  const [filterStatus, setFilterStatus] = useState('all');

  useEffect(() => {
    if (user?.id) {
      dispatch(getApplicantApplications(user.id));
    }
  }, [dispatch, user]);

  const calculateTimeAgo = (dateString) => {
    if (!dateString) return "?";

    try {
      const appliedDate = new Date(dateString);
      if (isNaN(appliedDate.getTime())) return "?";

      const currentDate = new Date();
      const diffTime = Math.abs(currentDate - appliedDate);

      const seconds = Math.floor(diffTime / 1000);
      const minutes = Math.floor(seconds / 60);
      const hours = Math.floor(minutes / 60);
      const days = Math.floor(hours / 24);
      const weeks = Math.floor(days / 7);
      const months = Math.floor(days / 30);

      if (seconds < 60) {
        return seconds === 1 ? "1 second" : `${seconds} seconds`;
      } else if (minutes < 60) {
        return minutes === 1 ? "1 minute" : `${minutes} minutes`;
      } else if (hours < 24) {
        return hours === 1 ? "1 hour" : `${hours} hours`;
      } else if (days < 7) {
        return days === 1 ? "1 day" : `${days} days`;
      } else if (weeks < 4) {
        return weeks === 1 ? "1 week" : `${weeks} weeks`;
      } else if (months < 12) {
        return months === 1 ? "1 month" : `${months} months`;
      } else {
        const years = Math.floor(days / 365);
        return years === 1 ? "1 year" : `${years} years`;
      }
    } catch (error) {
      console.error("Error calculating time ago:", error);
      return "?";
    }
  };

  const getStatusColor = (status) => {
    switch (status?.toLowerCase()) {
      case 'accepted':
        return 'bg-green-100 text-green-800';
      case 'rejected':
        return 'bg-red-100 text-red-800';
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'applied':
        return 'bg-blue-100 text-blue-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusIcon = (status) => {
    switch (status?.toLowerCase()) {
      case 'accepted':
        return 'fas fa-check-circle';
      case 'rejected':
        return 'fas fa-times-circle';
      case 'pending':
        return 'fas fa-clock';
      case 'applied':
        return 'fas fa-paper-plane';
      default:
        return 'fas fa-question-circle';
    }
  };
  
  const filteredApplications = applications.filter(app => {
    const status = app.status?.toLowerCase();
    if (filterStatus === 'all') return true;
    if (filterStatus === 'pending') return status === 'applied';
    return status === filterStatus.toLowerCase();
  });

  const statusCounts = {
    all: applications.length,
    pending: applications.filter(app => app.status?.toLowerCase() ===  'applied').length,
    accepted: applications.filter(app => app.status?.toLowerCase() === 'accepted').length,
    rejected: applications.filter(app => app.status?.toLowerCase() === 'rejected').length,
  };

  if (loadingApplications) {
    return (
      <div className="mt-16 flex justify-center items-center min-h-64">
        <div className="text-center">
          <i className="fas fa-spinner fa-spin text-green-700 text-3xl mb-4"></i>
          <p className="text-gray-600">Loading your applications...</p>
        </div>
      </div>
    );
  }

  if (applicationError) {
    return (
      <div className="mt-16 text-center py-8">
        <i className="fas fa-exclamation-triangle text-red-500 text-3xl mb-4"></i>
        <p className="text-red-600">Error loading applications: {applicationError}</p>
      </div>
    );
  }

  return (
    <div className="w-full max-w-6xl mx-auto px-6 py-4 mb-36">
      {/* Filter Tabs */}
      <div className="mb-18">
        <div className="flex flex-wrap gap-2 border-b border-gray-200">
          {[
            { key: 'all', label: 'All', count: statusCounts.all },
            { key: 'pending', label: 'Waiting', count: statusCounts.pending },
            { key: 'accepted', label: 'Accepted', count: statusCounts.accepted },
            { key: 'rejected', label: 'Rejected', count: statusCounts.rejected },
          ].map((filter) => (
            <button
              key={filter.key}
              onClick={() => setFilterStatus(filter.key)}
              className={`px-4 py-2 rounded-t-lg font-medium transition-colors ${
                filterStatus === filter.key
                  ? 'bg-green-700 text-white border-b-2 border-green-700'
                  : 'text-gray-600 hover:text-green-700 hover:bg-gray-50'
              }`}
            >
              {filter.label} ({filter.count})
            </button>
          ))}
        </div>
      </div>

      {/* Applications List */}
      {filteredApplications.length === 0 ? (
        <div className="text-center py-12">
          <img src="assets/empty folder.svg" alt="No Applications" className="w-24 h-auto mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-gray-600 mb-2">
            {filterStatus === 'all' 
              ? 'No applications yet'
              : filterStatus === 'pending'
                ? 'No applications waiting for feedback'
                : `No ${filterStatus} applications`}
          </h3>
          <p className="text-gray-500">
            {filterStatus === 'all' 
              ? 'Start applying to jobs to see them here'
              : filterStatus === 'pending'
                ? 'You have no applications currently waiting for employer feedback.'
                : `You don't have any ${filterStatus} applications at the moment`}
          </p>
        </div>
      ) : (
        <div className="space-y-4">
          {filteredApplications.map((application) => (
            <div
              key={application.id}
              className="bg-white rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow"
            >
              <div className="p-6">
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="text-xl font-semibold text-gray-800">
                          {application.job?.title || 'Job Title Not Available'}
                        </h3>
                        <p className="text-gray-600 mt-1">
                          {application.job?.employer?.companyName || 'Company'} • {application.job?.location || 'Location'}
                        </p>
                      </div>
                      <div className="flex flex-col items-end space-y-2">
                        <span className={`text-sm font-medium px-3 py-1 rounded-full flex items-center ${getStatusColor(application.status)}`}>
                          <i className={`${getStatusIcon(application.status)} mr-1`}></i>
                          {application.status || 'Applied'}
                        </span>
                        <span className="text-gray-500 text-sm">
                          Applied {calculateTimeAgo(application.appliedAt || application.createdAt)} ago
                        </span>
                      </div>
                    </div>

                    <p className="text-gray-700 mb-4">
                      {application.job?.description || 'Job description not available'}
                    </p>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4 text-sm text-gray-600">
                        <span className="flex items-center">
                          <i className="fas fa-calendar-alt mr-1"></i>
                          Applied on {new Date(application.appliedAt || application.createdAt).toLocaleDateString()}
                        </span>
                        {application.job?.salary && (
                          <span className="flex items-center">
                            <i className="fas fa-dollar-sign mr-1"></i>
                            {application.job.salary}
                          </span>
                        )}
                      </div>

                      <div className="flex space-x-2">
                        <button className="text-gray-600 hover:text-green-700 transition-colors p-2">
                          <i className="fas fa-eye" title="View Details"></i>
                        </button>
                        <button className="text-gray-600 hover:text-red-600 transition-colors p-2">
                          <i className="fas fa-trash-alt" title="Remove Application"></i>
                        </button>
                      </div>
                    </div>

                    {/* Additional Status Information */}
                    {application.status?.toLowerCase() === 'accepted' && (
                      <div className="mt-4 p-3 bg-green-50 border border-green-200 rounded-lg">
                        <p className="text-green-800 text-sm flex items-center">
                          <i className="fas fa-party-horn mr-2"></i>
                          Congratulations! Your application has been accepted. The employer will contact you soon.
                        </p>
                      </div>
                    )}

                    {application.status?.toLowerCase() === 'rejected' && (
                      <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-lg">
                        <p className="text-red-800 text-sm flex items-center">
                          <i className="fas fa-info-circle mr-2"></i>
                          Your application was not selected for this position. Keep applying to other opportunities!
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AppliedJobs;