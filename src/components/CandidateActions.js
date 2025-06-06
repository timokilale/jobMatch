import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import api from '../api/api';
import { fetchEmployerApplications } from '../redux/slices/applications';

const CandidateActions = ({ application, onActionComplete }) => {
  const dispatch = useDispatch();
  const [showDropdown, setShowDropdown] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleStatusChange = async (newStatus) => {
    setLoading(true);
    try {
      await api.patch(`/applications/${application.id}/status`, {
        status: newStatus
      });
      
      // Refresh applications list
      dispatch(fetchEmployerApplications(application.job.employerId));
      onActionComplete && onActionComplete();
      setShowDropdown(false);
    } catch (error) {
      console.error('Error updating status:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleMakeDecision = async (decision) => {
    setLoading(true);
    try {
      await api.patch(`/applications/${application.id}/decision`, {
        decision: decision
      });
      
      // Refresh applications list
      dispatch(fetchEmployerApplications(application.job.employerId));
      onActionComplete && onActionComplete();
      setShowDropdown(false);
    } catch (error) {
      console.error('Error making decision:', error);
    } finally {
      setLoading(false);
    }
  };

  const actionItems = [
    {
      label: 'Accept Application',
      icon: 'fas fa-check-circle',
      color: 'text-green-600 hover:bg-green-50',
      action: () => handleMakeDecision('accepted'),
      show: application.status !== 'ACCEPTED'
    },
    {
      label: 'Reject Application',
      icon: 'fas fa-times-circle',
      color: 'text-red-600 hover:bg-red-50',
      action: () => handleMakeDecision('rejected'),
      show: application.status !== 'REJECTED'
    },
    {
      label: 'Mark as Reviewed',
      icon: 'fas fa-eye',
      color: 'text-blue-600 hover:bg-blue-50',
      action: () => handleStatusChange('REVIEWED'),
      show: application.status === 'APPLIED'
    },
    {
      label: 'Move to Interview',
      icon: 'fas fa-calendar-check',
      color: 'text-purple-600 hover:bg-purple-50',
      action: () => handleStatusChange('INTERVIEW'),
      show: application.status !== 'INTERVIEW' && application.status !== 'REJECTED'
    },
    {
      label: 'Mark as Shortlisted',
      icon: 'fas fa-star',
      color: 'text-yellow-600 hover:bg-yellow-50',
      action: () => handleStatusChange('SHORTLISTED'),
      show: application.status !== 'SHORTLISTED' && application.status !== 'REJECTED'
    },
    {
      label: 'Request Documents',
      icon: 'fas fa-file-upload',
      color: 'text-indigo-600 hover:bg-indigo-50',
      action: () => handleStatusChange('PENDING_DOCUMENTS'),
      show: true
    },
    {
      label: 'Add to Talent Pool',
      icon: 'fas fa-users',
      color: 'text-teal-600 hover:bg-teal-50',
      action: () => handleStatusChange('TALENT_POOL'),
      show: application.status === 'REJECTED'
    }
  ];

  const visibleActions = actionItems.filter(item => item.show);

  return (
    <div className="relative">
      <button
        onClick={() => setShowDropdown(!showDropdown)}
        disabled={loading}
        className="p-2 hover:bg-green-100 rounded-full transition-colors disabled:opacity-50"
        title="More Actions"
      >
        {loading ? (
          <i className="fas fa-spinner fa-spin text-green-600"></i>
        ) : (
          <i className="fas fa-ellipsis-v text-green-600"></i>
        )}
      </button>

      {showDropdown && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 z-10"
            onClick={() => setShowDropdown(false)}
          />
          
          {/* Dropdown Menu */}
          <div className="absolute right-0 top-full mt-2 w-56 bg-white rounded-lg shadow-lg border border-gray-200 z-20">
            <div className="py-2">
              <div className="px-4 py-2 border-b border-gray-100">
                <p className="text-xs font-medium text-gray-500 uppercase tracking-wide">
                  Application Actions
                </p>
              </div>
              
              {visibleActions.map((item, index) => (
                <button
                  key={index}
                  onClick={item.action}
                  className={`w-full text-left px-4 py-2 text-sm transition-colors flex items-center ${item.color}`}
                >
                  <i className={`${item.icon} mr-3 w-4`}></i>
                  {item.label}
                </button>
              ))}
              
              {visibleActions.length === 0 && (
                <div className="px-4 py-2 text-sm text-gray-500">
                  No actions available
                </div>
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default CandidateActions;
