import React, { useState, useEffect, useCallback, useRef } from "react";
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
  const [isInitialized, setIsInitialized] = useState(false);
  const fetchTimeoutRef = useRef(null);

  const isApplied = (jobId) =>
    applications.some(app => app.jobId === jobId) ||
    applicationStatus[jobId] === 'applied';

  // Debounced fetch function
  const debouncedFetch = useCallback((userId) => {
    if (fetchTimeoutRef.current) {
      clearTimeout(fetchTimeoutRef.current);
    }

    fetchTimeoutRef.current = setTimeout(() => {
      if (!isInitialized) {
        dispatch(fetchApplicantJobs({ applicantId: userId, page: 1, limit: 20 }));
        dispatch(getApplicantApplications(userId));
        setIsInitialized(true);
      }
    }, 300); // 300ms debounce
  }, [dispatch, isInitialized]);

  useEffect(() => {
    if (user?.id && !isInitialized) {
      debouncedFetch(user.id);
    }

    return () => {
      if (fetchTimeoutRef.current) {
        clearTimeout(fetchTimeoutRef.current);
      }
    };
  }, [user?.id, debouncedFetch, isInitialized]);

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

  const filteredJobs = (category && category !== "home"
    ? applicantJobs.filter(job =>
        job.categories?.some(cat => cat.key === category)
      )
    : applicantJobs
    ).filter(job => !isApplied(job.id) && !hiddenJobs.has(job.id));
  
    console.log("Available jobs:", applicantJobs);
    console.log("Filtered jobs:", filteredJobs);  

  if (loading) {
    return <p className="text-center text-gray-600">Loading jobs...</p>;
  }
  
  if (!filteredJobs.length || filteredJobs.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] space-y-6 px-4">
        <div className="flex flex-col items-center space-y-4">
          <img
            src="assets/logo.png"
            alt="Job Match"
            className="w-32 h-auto mx-auto opacity-60"
          />
          <h2 className="text-2xl font-semibold text-gray-600 text-center">
            No matching jobs yet
          </h2>
          <p className="text-gray-500 text-center max-w-md">
            We're constantly adding new opportunities. Check back soon or adjust your preferences to see more jobs.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-4xl mx-auto mb-20 sm:mb-36 px-2 sm:px-0">
      <h2 className="text-xl sm:text-2xl font-bold text-green-800 mb-4 sm:mb-6 px-2 sm:px-0">
        {category ? `${category.charAt(0).toUpperCase() + category.slice(1)} Jobs` : 'Recent Jobs'}
      </h2>

      <div className="space-y-4 sm:space-y-6">
        {filteredJobs.map(job => {
          console.log("Job posted date:", job.postedDate);
          console.log("Full job object:", job);

          return (
          <div
            key={job.id}
            className="bg-white rounded-lg shadow-md overflow-hidden border-l-4 border-green-700 mx-2 sm:mx-0"
          >
            <div className="p-4 sm:p-6">
              {/* Mobile-first header layout */}
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-3 sm:gap-0">
                <div className="flex-1">
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-800 leading-tight">{job.title}</h3>
                  <p className="text-gray-600 mt-1 text-sm sm:text-base">{job.company} • {job.location}</p>
                </div>
                <div className="flex flex-row sm:flex-col items-start sm:items-end justify-between sm:justify-start">
                  {/* <span className="bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded-full">
                    {job.salary}
                  </span> */}
                  <span className="text-green-800 text-xs sm:text-sm">
                     Posted {calculateTimeAgo(job.createdAt)} ago
                  </span>
                </div>
              </div>

              <p className="mt-3 sm:mt-4 text-gray-700 text-sm sm:text-base leading-relaxed">{job.description}</p>

              {/* Mobile-optimized action buttons */}
              <div className="mt-4 flex flex-col sm:flex-row gap-3 sm:gap-0 sm:justify-between sm:items-center">
                <button
                  onClick={() => toggleJobExpansion(job.id)}
                  className="text-green-700 hover:text-green-900 font-medium flex items-center justify-center sm:justify-start py-2 sm:py-0 touch-target"
                >
                  {expandedJobId === job.id ? 'View Less' : 'View More'}
                  <i className={`fas fa-chevron-${expandedJobId === job.id ? 'up' : 'down'} ml-1`}></i>
                </button>

                {isApplied(job.id) ? (
                  <button className="bg-green-500 text-white font-medium py-3 sm:py-2 px-4 rounded-lg transition-colors flex items-center justify-center touch-target" disabled>
                    <i className="fas fa-check mr-2"></i>
                    Applied
                  </button>
                ) : isApplying ? (
                  <button className="bg-gray-200 text-green-700 font-medium py-3 sm:py-2 px-4 rounded-lg transition-colors flex items-center justify-center touch-target" disabled>
                    <i className="fas fa-spinner fa-spin mr-2"></i>
                    Applying...
                  </button>
                ) : (
                <button
                  onClick={() => handleApplyNow(job.id)}
                  className="bg-green-700 hover:bg-green-800 text-white font-medium py-3 sm:py-2 px-4 rounded-lg transition-colors flex items-center justify-center touch-target"
                  data-tutorial="apply-button"
                >
                  <i className="fas fa-paper-plane mr-2"></i>
                  Apply Now
                </button>
                )}
              </div>
              
              {expandedJobId === job.id && (
                <div className="mt-4 sm:mt-6 border-t border-gray-200 pt-4">
                  <h4 className="font-semibold text-gray-800 mb-3 text-sm sm:text-base">Requirements:</h4>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700 text-sm sm:text-base">
                    {job.requirements && Array.isArray(job.requirements) && job.requirements.length > 0 ? (
                      job.requirements.map((req, index) => (
                        <li key={index} className="leading-relaxed">
                          <div className="flex items-center space-x-2">
                            <span className="font-medium">{req.skillMaster?.name || req.skillName}</span>
                            <span className={`px-2 py-1 text-xs rounded-full ${
                              req.importance === 'REQUIRED' ? 'bg-red-100 text-red-800' :
                              req.importance === 'PREFERRED' ? 'bg-blue-100 text-blue-800' :
                              'bg-gray-100 text-gray-800'
                            }`}>
                              {req.importance}
                            </span>
                            <span className="px-2 py-1 text-xs bg-green-100 text-green-800 rounded-full">
                              {req.proficiencyLevel}
                            </span>
                            {req.yearsRequired && (
                              <span className="text-xs text-gray-600">
                                {req.yearsRequired} years
                              </span>
                            )}
                          </div>
                          {req.description && (
                            <p className="text-sm text-gray-600 mt-1">{req.description}</p>
                          )}
                        </li>
                      ))
                    ) : (
                      <li>Requirements not specified</li>
                    )}
                  </ul>

                  <div className="mt-4 pt-4 border-t border-gray-200 flex flex-col sm:flex-row gap-3 sm:gap-0 sm:justify-between sm:items-center">
                    <div className="flex items-center text-gray-600 text-sm sm:text-base">
                      <i className="far fa-calendar-alt mr-2"></i>
                      <span>Posted on {formatDate(job.createdAt)}</span>
                    </div>

                    <div className="flex space-x-3 sm:space-x-2 justify-center sm:justify-end">
                      <button className="text-gray-600 hover:text-green-700 transition-colors p-2 touch-target">
                        <i className="far fa-bookmark text-lg sm:text-base"></i>
                      </button>
                      <button className="text-gray-600 hover:text-green-700 transition-colors p-2 touch-target">
                        <i className="fas fa-share-alt text-lg sm:text-base"></i>
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