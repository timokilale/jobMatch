import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchApplicantJobs } from "../redux/slices/jobsSlice";
import { applyToJob, getApplicantApplications } from "../redux/slices/applications";


const JobListings = ({ category }) => {
  const dispatch = useDispatch();
  const { applicantJobs = [], loading } = useSelector((state) => state.jobs);
  const { user } = useSelector((state) => state.auth);
  const {
    applications = [],
    applicationStatus = {},
    applyingToJob: isApplying,
    error: applicationError,
    loadingApplications
  } = useSelector((state) => state.applications);

  const [expandedJobId, setExpandedJobId] = useState(null);
  const [localApplicationStatus, setLocalApplicationStatus] = useState({});

  const isApplied = (jobId) =>
    applications.some(app => app.jobId === jobId) ||
    applicationStatus[jobId] === 'applied';

  useEffect(() => {
    if (user?.id) {
      dispatch(fetchApplicantJobs(user.id));
      dispatch(getApplicantApplications(user.id));
    }
  }, [dispatch, user]);

  useEffect(() => {
    setLocalApplicationStatus(applicationStatus);
  }, [applicationStatus]);

  useEffect(() => {
    const statusMap = {};
    applications.forEach(app => {
      statusMap[app.jobId] = 'applied';
    });
    setLocalApplicationStatus(statusMap);
  }, [applications]);

  useEffect(() => {
    if (applicationError) {
      alert(`Application error: ${applicationError}`);
    }
  }, [applicationError]);

  const toggleJobExpansion = (jobId) => {
    setExpandedJobId((prevId) => (prevId === jobId ? null : jobId));
  };

  const formatDate = (dateString) => {
    if (!dateString) return "Date not available";

    try {
      const date = new Date(dateString);
      if (isNaN(date.getTime())) return "Invalid date";

      return date.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      });
    } catch (error) {
      console.error ("error formatting date:", error);
      return "Date error";
    }
  };

  const calculateTimeAgo = (dateString) => {
    if (!dateString) return "?";

    try {
      const postedDate = new Date(dateString);
      if (isNaN(postedDate.getTime())) return "?";

      const currentDate = new Date();
      const diffTime = Math.abs(currentDate - postedDate);

      const seconds = Math.floor(diffTime / 1000);
      const minutes = Math.floor(seconds / 60);
      const hours = Math.floor(minutes / 60);
      const days = Math.floor(hours / 24);
      const weeks = Math.floor(days / 7);
      const months = Math.floor(days / 30);
      const years = Math.floor(days / 365);

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
        return years === 1 ? "1 year" : `${years} years`;
      }
    } catch (error) {
      console.error("Error calculating time:", error);
      return "?";
    }
  };


  const [hiddenJobs, setHiddenJobs] = useState(new Set());

  const handleApplyNow = async (jobId) => {
    if (!user?.id) {
      alert("Please login to apply");
      return;
    }
  
    try {
      await dispatch(applyToJob({ applicantId: user.id, jobId })).unwrap();
      await new Promise(resolve => setTimeout(resolve, 2000));

      dispatch(getApplicantApplications(user.id));

      setTimeout(() => {
      setHiddenJobs(prev => new Set([...prev, jobId]));
    }, 3000);
    } catch (error) {
      console.error("Application failed:", error);
    }
  };

  const filteredJobs = category && category !== "home"
    ? applicantJobs.filter(job =>
        job.categories?.some(cat => cat.key === category)
      )
    : applicantJobs
  
    console.log("Available jobs:", applicantJobs);
    console.log("Filtered jobs:", filteredJobs);  

  if (loading) {
    return <p className="text-center text-gray-600">Loading jobs...</p>;
  }
  
  if (!filteredJobs.length || filteredJobs.length === 0) {
    return (
      <div className="text-center space-y-4">
        <img src="assets/empty folder.svg" alt="No Jobs" className="w-24 h-auto mx-auto mb-4" />
        <h2 className="text-xl font-semibold text-gray-600">
          No matching jobs yet
        </h2>
      </div>
    );
  }

  return (
    <div className="w-full max-w-4xl mx-auto mb-36">
      <h2 className="text-2xl font-bold text-green-800 mb-6">
        {category ? `${category.charAt(0).toUpperCase() + category.slice(1)} Jobs` : 'Recent Jobs'}
      </h2>
      
      <div className="space-y-6">
        {filteredJobs.map(job => {
          console.log("Job posted date:", job.postedDate);
          console.log("Full job object:", job);
        
          return (
          <div 
            key={job.id} 
            className="bg-white rounded-lg shadow-md overflow-hidden border-l-4 border-green-700"
          >
            <div className="p-6">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">{job.title}</h3>
                  <p className="text-gray-600 mt-1">{job.company} • {job.location}</p>
                </div>
                <div className="flex flex-col items-end">
                  {/* <span className="bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded-full">
                    {job.salary}
                  </span> */}
                  <span className="text-green-800 text-sm mt-1">
                     Posted {calculateTimeAgo(job.createdAt)} ago
                  </span>
                </div>
              </div>
              
              <p className="mt-4 text-gray-700">{job.description}</p>
              
              <div className="mt-4 flex justify-between items-center">
                <button
                  onClick={() => toggleJobExpansion(job.id)}
                  className="text-green-700 hover:text-green-900 font-medium flex items-center"
                >
                  {expandedJobId === job.id ? 'View Less' : 'View More'}
                  <i className={`fas fa-chevron-${expandedJobId === job.id ? 'up' : 'down'} ml-1`}></i>
                </button>
                
                {isApplied(job.id) ? (
                  <button className="bg-green-500 text-white font-medium py-2 px-4 rounded-lg transition-colors flex items-center" disabled>
                    <i className="fas fa-check mr-2"></i>
                    Applied
                  </button>
                ) : isApplying ? (
                  <button className="bg-gray-200 text-green-700 font-medium py-2 px-4 rounded-lg transition-colors flex items-center" disabled>
                    <i className="fas fa-spinner fa-spin mr-2"></i>
                    Applying...
                  </button>
                ) : (
                <button 
                  onClick={() => handleApplyNow(job.id)}
                  className="bg-green-700 hover:bg-green-800 text-white font-medium py-2 px-4 rounded-lg transition-colors flex items-center"
                >
                  <i className="fas fa-paper-plane mr-2"></i>
                  Apply Now
                </button>
                )}
              </div>
              
              {expandedJobId === job.id && (
                <div className="mt-6 border-t border-gray-200 pt-4">
                  <h4 className="font-semibold text-gray-800 mb-2">Requirements:</h4>
                  <ul className="list-disc pl-5 space-y-1 text-gray-700">
                    {job.requirements && Array.isArray(job.requirements) && job.requirements.length > 0 ? (
                      job.requirements.map((req, index) => (
                      <li key={index}>{req}</li>
                    ))
                  ) : (
                    <li>Requirements not specified</li>
                  )}
                  </ul>
                  
                  <div className="mt-4 pt-4 border-t border-gray-200 flex justify-between items-center">
                    <div className="flex items-center text-gray-600">
                      <i className="far fa-calendar-alt mr-2"></i>
                      <span>Posted on {formatDate(job.createdAt)}</span>
                    </div>
                    
                    <div className="flex space-x-2">
                      <button className="text-gray-600 hover:text-green-700 transition-colors">
                        <i className="far fa-bookmark"></i>
                      </button>
                      <button className="text-gray-600 hover:text-green-700 transition-colors">
                        <i className="fas fa-share-alt"></i>
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        )
    })}
      </div>
    </div>
  );
};

export default JobListings;