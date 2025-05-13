import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchEmployerJobs,
  createJob,
  updateJob, 
  deleteJob, 
  setShowJobModal, 
  setNewJob, 
  resetNewJob
} from '../redux/slices/jobsSlice';

export const useJobs = (employerId) => {
  const dispatch = useDispatch();
  const {
    jobPostings,
    loading,
    error,
    showJobModal,
    newJob
  } = useSelector(state => state.jobs);
  const [selectedJob, setSelectedJob] = useState(null);
  
  useEffect(() => {
    if (employerId) {
      dispatch(fetchEmployerJobs(employerId));
    }
  }, [dispatch, employerId]);

  const toggleJobModal = (show = true, job = null) => {
    if (job) {
      setSelectedJob(job);
      dispatch(setNewJob({
        title: job.title,
        description: job.description || '',
        location: job.location || '',
        status: job.status || 'Draft'
      }));
    } else {
      setSelectedJob(null);
      dispatch(resetNewJob());
    }
    dispatch(setShowJobModal(show));
  };

  const handleSubmitJob = (e) => {
    e.preventDefault();
    
    const jobData = {
      title: newJob.title,
      description: newJob.description,
      location: newJob.location,
      status: newJob.status,
      employerId: parseInt(employerId)
    };
    
    if (selectedJob) {
      dispatch(updateJob({ jobId: selectedJob.id, jobData }));
    } else {
      dispatch(createJob(jobData));
    }
  };

  const handleDeleteJob = (jobId) => {
    if (window.confirm('Are you sure you want to delete this job posting?')) {
      dispatch(deleteJob(jobId));
    }
  };

  const handleJobChange = (field, value) => {
    dispatch(setNewJob({
      ...newJob,
      [field]: value
    }));
  };

  return {
    // State
    jobPostings,
    loading,
    error,
    showJobModal,
    newJob,
    selectedJob,
    
    // Actions
    toggleJobModal,
    handleSubmitJob,
    handleJobChange,
    handleDeleteJob
  };
};