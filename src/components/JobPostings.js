import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useJobs } from '../hooks/useJobs';
import JobRequirements from './JobRequirements';

const JobPostingsSection = ({ employerId }) => {
  const {
    categories,
    jobPostings,
    loading,
    error,
    validationErrors,
    showJobModal,
    newJob,
    selectedJob,
    toggleJobModal,
    handleSubmitJob,
    handleJobChange,
    handleDeleteJob
  } = useJobs(employerId);

  const { applications } = useSelector((state) => state.applications);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [jobToDelete, setJobToDelete] = useState(null);

  // Helper function to safely render error messages
  const safeRenderError = (error) => {
    if (!error) return null;
    if (typeof error === 'string') return error;
    if (typeof error === 'object') {
      if (error.message) return error.message;
      if (error.error) return error.error;
      const errorStr = JSON.stringify(error);
      if (errorStr === '{}') return 'An unknown error occurred';
      return errorStr;
    }
    return String(error);
  };

  const openDeleteConfirmation = (jobId) => {
    setJobToDelete(jobId);
    setShowDeleteModal(true);
  };

  const confirmDelete = () => {
    handleDeleteJob(jobToDelete);
    setShowDeleteModal(false);
    setJobToDelete(null);
  };

  const cancelDelete = () => {
    setShowDeleteModal(false);
    setJobToDelete(null);
  };

 if (loading && (!jobPostings || jobPostings.length === 0)) {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="flex flex-col items-center py-12 space-y-4">
          <p className="text-gray-600 font-medium">Loading jobs...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="flex flex-col items-center py-12 space-y-4">
          <p className="text-red-600 font-medium">Error: {safeRenderError(error)}</p>
        </div>
      </div>
    );
  }

  return(
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Posted Jobs</h2>
        <button
          onClick={() => toggleJobModal(true)}
          className="bg-green-600 hover:bg-green-700 text-white rounded-full w-10 h-10 flex items-center justify-center"
        >
          <i className="fas fa-plus text-xl"></i>
        </button>
      </div>

      {!jobPostings || jobPostings.length === 0 ? (
        <div className="flex flex-col items-center py-12 space-y-4">
          <i className="fas fa-file-alt text-6xl text-green-600"></i>
          <p className="text-gray-600 font-medium">No jobs posted yet</p>
          <button
            onClick={() => toggleJobModal(true)}
            className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700"
          >
            Add Your First Job
          </button>
        </div>
      ) : (
        <div className="space-y-4">
          {jobPostings && jobPostings.map((job) => (
            <div key={job.id} className="flex items-center justify-between p-3 hover:bg-gray-50 rounded">
              <div>
                <h4 className="font-medium">{job.title}</h4>
                <p className="text-sm text-green-600">
                  {applications ? applications.filter(app => app.jobId === job.id).length : 0} applicants</p>
              </div>
              <div className="flex items-center space-x-4">
                <span className={`px-2 py-1 text-sm rounded-full ${job.status === 'Active' ? 'bg-green-200 text-green-800 border border-green-300' : 'bg-gray-200 border border-gray-400 text-gray-800'}`}>
                  {job.status}
                </span>
                <button 
                  className="text-gray-400 hover:text-gray-600"
                  onClick={() => toggleJobModal(true, job)}>
                    <i className="fas fa-pen"></i>
                  </button>
                <button 
                  className="text-red-400 hover:text-red-600"
                  onClick={() => openDeleteConfirmation(job.id)}>
                     <i className="fas fa-trash"></i>
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {showJobModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center p-4">
          <div className="bg-white rounded-lg w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            {/* Header */}
            <div className="sticky top-0 bg-white border-b border-gray-200 p-4 sm:p-6 rounded-t-lg">
              <div className="flex justify-between items-center">
                <h3 className="text-lg sm:text-xl font-bold text-green-800">
                  {selectedJob ? 'Edit Job' : 'Create New Job'}
                </h3>
                <button
                  onClick={() => toggleJobModal(false)}
                  className="text-gray-500 hover:text-gray-700 p-2 touch-target"
                >
                  <i className="fas fa-times text-lg"></i>
                </button>
              </div>
            </div>

            {/* Form Content */}
            <form onSubmit={handleSubmitJob} className="p-4 sm:p-6">
              {/* Validation Errors */}
              {validationErrors && validationErrors.length > 0 && (
                <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg">
                  <h4 className="text-red-800 font-medium mb-2">Please fix the following issues:</h4>
                  <ul className="list-disc pl-5 text-red-700 text-sm space-y-1">
                    {validationErrors.map((error, index) => (
                      <li key={index}>{error}</li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="space-y-4 sm:space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Job Title</label>
                  <input
                    type="text"
                    required
                    className="w-full border border-gray-300 p-3 rounded-lg text-base focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    value={newJob.title}
                    onChange={(e) => handleJobChange('title', e.target.value)}
                    placeholder="Enter job title"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
                  <select
                    id="category"
                    className="w-full border border-gray-300 p-3 rounded-lg text-base focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    value={newJob.categoryId}
                    onChange={(e) => handleJobChange('categoryId', e.target.value)}
                  >
                    <option value="">Select Category</option>
                    {categories && categories.map((category) => (
                      <option key={category.id} value={category.id}>
                        {category.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
                  <textarea
                    rows="4"
                    className="w-full border border-gray-300 p-3 rounded-lg text-base focus:ring-2 focus:ring-green-500 focus:border-transparent resize-none"
                    value={newJob.description || ''}
                    onChange={(e) => handleJobChange('description', e.target.value)}
                    placeholder="Describe the job requirements and responsibilities"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
                  <input
                    type="text"
                    className="w-full border border-gray-300 p-3 rounded-lg text-base focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    value={newJob.location || ''}
                    onChange={(e) => handleJobChange('location', e.target.value)}
                    placeholder="Enter job location"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Status</label>
                  <select
                    className="w-full border border-gray-300 p-3 rounded-lg text-base focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    value={newJob.status}
                    onChange={(e) => handleJobChange('status', e.target.value)}
                  >
                    <option value="Draft">Draft</option>
                    <option value="Active">Active</option>
                    <option value="Closed">Closed</option>
                  </select>
                </div>

                {/* Job Requirements Section */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Job Requirements</label>
                  <JobRequirements
                    requirements={newJob.requirements || []}
                    onChange={(requirements) => handleJobChange('requirements', requirements)}
                  />
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4 border-t border-gray-200">
                  <button
                    type="button"
                    onClick={() => toggleJobModal(false)}
                    className="w-full sm:w-auto px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors touch-target text-base font-medium"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="w-full sm:w-auto px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors touch-target text-base font-medium"
                  >
                    {selectedJob ? 'Update Job' : 'Create Job'}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}
      {showDeleteModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center p-4">
          <div className="bg-white rounded-lg w-full max-w-md shadow-xl">
            <div className="p-4 sm:p-6">
              <div className="text-center mb-6">
                <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-red-100 mb-4">
                  <i className="fas fa-exclamation-triangle text-red-600 text-xl"></i>
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">Confirm Deletion</h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  Are you sure you want to delete this job? This action cannot be undone.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <button
                  onClick={cancelDelete}
                  className="w-full sm:w-auto px-4 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 border border-gray-300 transition-colors touch-target text-base font-medium"
                >
                  Cancel
                </button>
                <button
                  onClick={confirmDelete}
                  className="w-full sm:w-auto px-4 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors touch-target text-base font-medium"
                >
                  Delete Job
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default JobPostingsSection;