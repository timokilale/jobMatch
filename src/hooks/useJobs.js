import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchEmployerJobs,
  createJob,
  updateJob,
  deleteJob,
  setShowJobModal,
  setNewJob,
  resetNewJob,
  fetchCategories,
  clearValidationErrors,
  setValidationErrors
} from '../redux/slices/jobsSlice';

export const useJobs = (employerId) => {
  const dispatch = useDispatch();
  const {
    jobPostings,
    loading,
    error,
    validationErrors,
    showJobModal,
    newJob,
    categories,
  } = useSelector(state => state.jobs);
  const [selectedJob, setSelectedJob] = useState(null);
  
  useEffect(() => {
    if (employerId) {
      dispatch(fetchEmployerJobs(employerId));
    }
    dispatch(fetchCategories());
  }, [dispatch, employerId]);

  const toggleJobModal = (show = true, job = null) => {
    // Clear validation errors when opening/closing modal
    dispatch(clearValidationErrors());

    if (job) {
      setSelectedJob(job);

      // Transform requirements from backend format to frontend format
      const transformedRequirements = job.requirements ? job.requirements.map(req => ({
        skillName: req.skillMaster?.name || req.skillName,
        importance: req.importance,
        proficiencyLevel: req.proficiencyLevel,
        yearsRequired: req.yearsRequired,
        description: req.description
      })) : [];

      dispatch(setNewJob({
        title: job.title,
        description: job.description || '',
        location: job.location || '',
        status: job.status || 'Draft',
        categoryId: job.categories && job.categories.length > 0 ? job.categories[0].id : null,
        requirements: transformedRequirements,
      }));
    } else {
      setSelectedJob(null);
      dispatch(resetNewJob());
    }
    dispatch(setShowJobModal(show));
  };

  const handleSubmitJob = (e) => {
    e.preventDefault();

    console.log('handleSubmitJob called', { newJob, employerId });

    // Clear previous validation errors
    dispatch(clearValidationErrors());

    // Client-side validation
    const errors = [];

    if (!newJob.title || newJob.title.trim().length === 0) {
      errors.push('Job title is required');
    }

    if (!newJob.description || newJob.description.trim().length === 0) {
      errors.push('Job description is required');
    }

    if (!newJob.categoryId || newJob.categoryId === '') {
      errors.push('Please select a category');
    }

    // If there are client-side validation errors, show them and don't submit
    if (errors.length > 0) {
      dispatch(setValidationErrors(errors));
      return;
    }

    const jobData = {
      title: newJob.title.trim(),
      description: newJob.description.trim(),
      location: newJob.location ? newJob.location.trim() : '',
      status: newJob.status,
      employerId: parseInt(employerId),
      categoryIds: newJob.categoryId ? [parseInt(newJob.categoryId)] : [],
      requirements: newJob.requirements || [],
    };

    console.log('Submitting job data:', jobData);

    if (selectedJob) {
      console.log('Updating job:', selectedJob.id);
      dispatch(updateJob({ jobId: selectedJob.id, jobData }));
    } else {
      console.log('Creating new job');
      dispatch(createJob(jobData));
    }
  };

  const handleDeleteJob = (jobId) => {
      dispatch(deleteJob(jobId));
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
    validationErrors,
    showJobModal,
    newJob,
    selectedJob,
    categories,

    // Actions
    toggleJobModal,
    handleSubmitJob,
    handleJobChange,
    handleDeleteJob
  };
};