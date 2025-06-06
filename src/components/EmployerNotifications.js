import React, { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchEmployerNotifications, markNotificationAsReadAsync, markAllNotificationsAsReadAsync } from '../redux/slices/applications';

const EmployerNotifications = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const dispatch = useDispatch();
  
  const { user } = useSelector((state) => state.auth);
  const { notifications = [], unreadNotificationCount = 0, loadingNotifications = false } = useSelector(state => state.applications);

  // Fetch employer notifications on component mount
  useEffect(() => {
    if (user?.id) {
      dispatch(fetchEmployerNotifications(user.id));
    }
  }, [dispatch, user]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleNotificationClick = (notificationId) => {
    dispatch(markNotificationAsReadAsync(notificationId));
  };

  const handleMarkAllAsRead = () => {
    if (user?.id) {
      dispatch(markAllNotificationsAsReadAsync({ 
        userId: user.id, 
        userType: 'employer' 
      }));
    }
  };

  const formatTimeAgo = (dateString) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now - date);
    const diffMinutes = Math.floor(diffTime / (1000 * 60));
    const diffHours = Math.floor(diffTime / (1000 * 60 * 60));
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

    if (diffMinutes < 1) {
      return 'Just now';
    } else if (diffMinutes < 60) {
      return `${diffMinutes}m ago`;
    } else if (diffHours < 24) {
      return `${diffHours}h ago`;
    } else if (diffDays < 7) {
      return `${diffDays}d ago`;
    } else {
      return date.toLocaleDateString();
    }
  };

  const getNotificationIcon = (type) => {
    switch (type) {
      case 'NEW_APPLICATION':
        return 'fas fa-user-plus text-blue-500';
      case 'INTERVIEW_SCHEDULED':
        return 'fas fa-calendar-check text-purple-500';
      case 'MESSAGE':
        return 'fas fa-envelope text-yellow-500';
      case 'STATUS_CHANGE':
        return 'fas fa-info-circle text-green-500';
      default:
        return 'fas fa-bell text-gray-500';
    }
  };

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Notification Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-green-700 hover:text-green-900 relative p-2 rounded-lg transition-colors"
        title="Notifications"
      >
        <i className="fas fa-bell text-xl"></i>
        {unreadNotificationCount > 0 && (
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-medium">
            {unreadNotificationCount > 99 ? '99+' : unreadNotificationCount}
          </span>
        )}
      </button>

      {/* Notifications Dropdown */}
      {isOpen && (
        <div className="absolute right-0 top-full mt-2 w-96 bg-white rounded-lg shadow-xl border border-gray-200 z-50 max-h-96 overflow-hidden">
          {/* Header */}
          <div className="p-4 border-b border-gray-200 bg-gray-50">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-gray-800">
                <i className="fas fa-briefcase mr-2 text-green-600"></i>
                Employer Notifications
              </h3>
              {unreadNotificationCount > 0 && (
                <button
                  onClick={handleMarkAllAsRead}
                  className="text-sm text-green-600 hover:text-green-800 font-medium"
                >
                  Mark all read
                </button>
              )}
            </div>
          </div>

          {/* Notifications List */}
          <div className="max-h-80 overflow-y-auto">
            {loadingNotifications ? (
              <div className="p-6 text-center">
                <i className="fas fa-spinner fa-spin text-gray-400 text-2xl mb-2"></i>
                <p className="text-gray-500">Loading notifications...</p>
              </div>
            ) : notifications.length === 0 ? (
              <div className="p-6 text-center">
                <i className="fas fa-bell-slash text-gray-400 text-2xl mb-2"></i>
                <p className="text-gray-500">No notifications yet</p>
                <p className="text-xs text-gray-400 mt-1">
                  You'll receive notifications when candidates apply to your jobs
                </p>
              </div>
            ) : (
              <div className="divide-y divide-gray-100">
                {notifications.map((notification) => (
                  <div
                    key={notification.id}
                    onClick={() => handleNotificationClick(notification.id)}
                    className={`p-4 cursor-pointer transition-colors hover:bg-gray-50 ${
                      !notification.isRead ? 'bg-blue-50 border-l-4 border-l-blue-500' : ''
                    }`}
                  >
                    <div className="flex items-start space-x-3">
                      <div className="flex-shrink-0 mt-1">
                        <i className={`${getNotificationIcon(notification.type)} text-lg`}></i>
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <p className={`text-sm font-medium ${
                            !notification.isRead ? 'text-gray-900' : 'text-gray-700'
                          }`}>
                            {notification.title}
                          </p>
                          <div className="flex items-center space-x-2">
                            <span className="text-xs text-gray-500">
                              {formatTimeAgo(notification.createdAt)}
                            </span>
                            {!notification.isRead && (
                              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                            )}
                          </div>
                        </div>
                        <p className={`text-sm mt-1 ${
                          !notification.isRead ? 'text-gray-800' : 'text-gray-600'
                        }`}>
                          {notification.message}
                        </p>
                        
                        {/* Additional info for specific notification types */}
                        {notification.application && (
                          <div className="flex items-center mt-2 space-x-2">
                            <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                              <i className="fas fa-briefcase mr-1"></i>
                              {notification.application.job?.title || 'Job Position'}
                            </span>
                            {notification.application.applicant && (
                              <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                                <i className="fas fa-user mr-1"></i>
                                {notification.application.applicant.fullName}
                              </span>
                            )}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          {notifications.length > 0 && (
            <div className="p-3 border-t border-gray-200 bg-gray-50">
              <div className="flex items-center justify-between">
                <p className="text-xs text-gray-500">
                  {unreadNotificationCount} unread notifications
                </p>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-xs text-green-600 hover:text-green-800 font-medium"
                >
                  Close
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default EmployerNotifications;
