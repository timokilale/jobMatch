import React, { useState } from 'react';
import { useJobs } from '../hooks/useJobs';

const JobPostingsSection = ({ employerId }) => {
  const {
    categories,
    jobPostings,
    loading,
    error,
    showJobModal,
    newJob,
    selectedJob,
    toggleJobModal,
    handleSubmitJob,
    handleJobChange,
    handleDeleteJob
  } = useJobs(employerId);

 if (loading && jobPostings.length === 0) {
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
          <p className="text-red-600 font-medium">Error: {error}</p>
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

      {jobPostings.length === 0 ? (
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
          {jobPostings.map((job) => (
            <div key={job.id} className="flex items-center justify-between p-3 hover:bg-gray-50 rounded">
              <div>
                <h4 className="font-medium">{job.title}</h4>
                <p className="text-sm text-green-600">{job.applicants} applicants</p>
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
                  onClick={() => handleDeleteJob(job.id)}>
                     <i className="fas fa-trash"></i>
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {showJobModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg w-full max-w-2xl mx-4">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold text-green-800">
                {selectedJob ? 'Edit Job' : 'Create New Job'}</h3>
              <button onClick={() => toggleJobModal(false)} 
                className="text-gray-500 hover:text-gray-700">
                 <i className="fas fa-times"></i>
              </button>
            </div>
            <form onSubmit={handleSubmitJob}>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Job Title</label>
                  <input
                    type="text"
                    required
                    className="mt-1 block w-full border border-gray-300 p-2 rounded-md"
                    value={newJob.title}
                    onChange={(e) => handleJobChange('title', e.target.value)}
                  />
                </div>
                <div>
                <label className="block text-sm font-medium text-gray-700">Category</label>
                <select
                  id="category"
                  className="mt-1 block w-full border border-gray-300 p-2 rounded-md"
                  value={newJob.categoryId}
                  onChange={(e) => handleJobChange('categoryId', e.target.value)}
                >
                  <option value=""> Select Category</option>
                  {categories.map((category) => (
                    <option key={category.id} value={category.id}>
                      {category.name}
                    </option>
                  ))}
                </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Description</label>
                  <textarea
                    rows="4"
                    className="mt-1 block w-full border border-gray-300 p-2 rounded-md"
                    value={newJob.description || ''}
                    onChange={(e) => handleJobChange('description', e.target.value )}
                  ></textarea>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Location</label>
                  <input
                    type="text"
                    className="mt-1 block w-full border border-gray-300 p-2 rounded-md"
                    value={newJob.location || ''}
                    onChange={(e) => handleJobChange('location', e.target.value)}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Status</label>
                  <select
                    className="mt-1 block w-full border border-gray-300 p-2 rounded-md"
                    value={newJob.status}
                    onChange={(e) => handleJobChange('status', e.target.value)}
                  >
                    <option value="Draft">Draft</option>
                    <option value="Active">Active</option>
                    <option value="Closed">Closed</option>
                  </select>
                </div>
                <div className="flex justify-end space-x-4">
                  <button 
                    type="button" 
                    onClick={() => toggleJobModal(false)} 
                    className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50">
                    Cancel
                  </button>
                  <button 
                    type="submit" 
                    className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700">
                    {selectedJob ? 'Update' : 'Create'}
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

export default JobPostingsSection;