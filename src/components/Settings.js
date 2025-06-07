import React, { useState, useEffect } from 'react';
import api from '../api/api';

const Settings = () => {
  const [activeTab, setActiveTab] = useState('categories');
  const [loading, setLoading] = useState(false);
  const [categories, setCategories] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [notificationSettings, setNotificationSettings] = useState({});
  const [message, setMessage] = useState({ type: '', text: '' });

  useEffect(() => {
    fetchCategoriesWithStatus();
    fetchNotificationSettings();
  }, []);

  const fetchCategoriesWithStatus = async () => {
    setLoading(true);
    try {
      const response = await api.get('/applicant-categories/all-with-status');
      setCategories(response.data.categories);
      setSelectedCategories(response.data.categories.filter(cat => cat.isSelected).map(cat => cat.id));
    } catch (error) {
      console.error('Error fetching categories:', error);
      showMessage('error', 'Failed to load categories');
    } finally {
      setLoading(false);
    }
  };

  const fetchNotificationSettings = async () => {
    try {
      const response = await api.get('/notification-settings');
      setNotificationSettings(response.data.settings);
    } catch (error) {
      console.error('Error fetching notification settings:', error);
      showMessage('error', 'Failed to load notification settings');
    }
  };

  const showMessage = (type, text) => {
    setMessage({ type, text });
    setTimeout(() => setMessage({ type: '', text: '' }), 5000);
  };

  const handleCategoryToggle = async (categoryId) => {
    const isCurrentlySelected = selectedCategories.includes(categoryId);
    
    try {
      if (isCurrentlySelected) {
        // Remove category
        await api.delete(`/applicant-categories/${categoryId}`);
        setSelectedCategories(prev => prev.filter(id => id !== categoryId));
        showMessage('success', 'Category removed successfully');
      } else {
        // Add category
        await api.post('/applicant-categories/add', { categoryId });
        setSelectedCategories(prev => [...prev, categoryId]);
        showMessage('success', 'Category added successfully');
      }
      
      // Update the categories list to reflect the change
      setCategories(prev => prev.map(cat => 
        cat.id === categoryId 
          ? { ...cat, isSelected: !isCurrentlySelected }
          : cat
      ));
    } catch (error) {
      console.error('Error updating category:', error);
      showMessage('error', error.response?.data?.error || 'Failed to update category');
    }
  };

  const handleBulkUpdate = async () => {
    setLoading(true);
    try {
      await api.put('/applicant-categories', { categoryIds: selectedCategories });
      showMessage('success', 'Categories updated successfully');
      await fetchCategoriesWithStatus(); // Refresh data
    } catch (error) {
      console.error('Error updating categories:', error);
      showMessage('error', 'Failed to update categories');
    } finally {
      setLoading(false);
    }
  };

  const handleNotificationToggle = async (setting, value) => {
    try {
      const response = await api.patch('/notification-settings/single', {
        setting: setting,
        value: value
      });

      setNotificationSettings(response.data.settings);
      showMessage('success', `${setting} updated successfully`);
    } catch (error) {
      console.error('Error updating notification setting:', error);
      showMessage('error', 'Failed to update notification setting');
    }
  };

  const tabs = [
    {
      key: 'categories',
      title: 'Job Categories',
      icon: 'tags',
      description: 'Manage your preferred job categories'
    },
    {
      key: 'preferences',
      title: 'Preferences',
      icon: 'cog',
      description: 'General account preferences and notifications'
    }
  ];

  const renderCategoriesTab = () => (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white rounded-lg border p-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">
          <i className="fas fa-tags mr-2 text-green-600"></i>
          Job Categories
        </h2>
        <p className="text-gray-600 mb-4">
          Select the job categories you're interested in. This helps us show you relevant job opportunities.
        </p>
        
        {/* Stats */}
        <div className="flex flex-wrap gap-4 text-sm">
          <div className="bg-green-50 px-3 py-2 rounded-lg">
            <span className="text-green-600 font-medium">
              {selectedCategories.length} selected
            </span>
          </div>
          <div className="bg-blue-50 px-3 py-2 rounded-lg">
            <span className="text-blue-600 font-medium">
              {categories.length} total categories
            </span>
          </div>
        </div>
      </div>

      {/* Message */}
      {message.text && (
        <div className={`p-4 rounded-lg ${
          message.type === 'success' 
            ? 'bg-green-50 border border-green-200 text-green-800' 
            : 'bg-red-50 border border-red-200 text-red-800'
        }`}>
          <div className="flex items-center">
            <i className={`fas ${message.type === 'success' ? 'fa-check-circle' : 'fa-exclamation-triangle'} mr-2`}></i>
            {message.text}
          </div>
        </div>
      )}

      {/* Categories Grid */}
      <div className="bg-white rounded-lg border p-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-medium text-gray-800">Available Categories</h3>
          <button
            onClick={handleBulkUpdate}
            disabled={loading}
            className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 disabled:opacity-50 transition-colors"
          >
            <i className="fas fa-save mr-2"></i>
            Save Changes
          </button>
        </div>

        {loading ? (
          <div className="text-center py-8">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-green-600 mx-auto mb-4"></div>
            <p className="text-gray-600">Loading categories...</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {categories.map((category) => (
              <div
                key={category.id}
                className={`border rounded-lg p-4 cursor-pointer transition-all ${
                  category.isSelected
                    ? 'border-green-500 bg-green-50'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
                onClick={() => handleCategoryToggle(category.id)}
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center mb-2">
                      <input
                        type="checkbox"
                        checked={category.isSelected}
                        onChange={() => {}} // Handled by parent onClick
                        className="mr-3 text-green-600 focus:ring-green-500"
                      />
                      <h4 className="font-medium text-gray-800">{category.name}</h4>
                    </div>
                    {category.description && (
                      <p className="text-sm text-gray-600 mb-2">{category.description}</p>
                    )}
                    <div className="flex items-center text-xs text-gray-500">
                      <i className="fas fa-briefcase mr-1"></i>
                      {category.activeJobsCount} active jobs
                    </div>
                  </div>
                  {category.isSelected && (
                    <i className="fas fa-check-circle text-green-600 ml-2"></i>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );

  // Reusable toggle component
  const NotificationToggle = ({ setting, label, description, checked, icon = null }) => (
    <div className="flex items-center justify-between p-4 border rounded-lg">
      <div className="flex items-start">
        {icon && <i className={`fas fa-${icon} mr-3 mt-1 text-green-600`}></i>}
        <div>
          <h3 className="font-medium text-gray-800">{label}</h3>
          <p className="text-sm text-gray-600">{description}</p>
        </div>
      </div>
      <label className="relative inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          className="sr-only peer"
          checked={checked || false}
          onChange={(e) => handleNotificationToggle(setting, e.target.checked)}
        />
        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-green-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-600"></div>
      </label>
    </div>
  );

  const renderPreferencesTab = () => (
    <div className="space-y-6">
      {/* Notification Preferences */}
      <div className="bg-white rounded-lg border p-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          <i className="fas fa-bell mr-2 text-green-600"></i>
          Notification Preferences
        </h2>
        <p className="text-gray-600 mb-6">
          Control when and how you receive notifications about job opportunities.
        </p>

        <div className="space-y-4">
          <NotificationToggle
            setting="emailEnabled"
            label="Email Notifications"
            description="Enable or disable all email notifications"
            checked={notificationSettings.emailEnabled}
            icon="envelope"
          />

          {notificationSettings.emailEnabled && (
            <>
              <NotificationToggle
                setting="emailJobMatches"
                label="Job Matches"
                description="Get notified when new jobs match your preferences"
                checked={notificationSettings.emailJobMatches}
                icon="briefcase"
              />

              <NotificationToggle
                setting="emailApplicationStatus"
                label="Application Updates"
                description="Receive updates when employers review your applications"
                checked={notificationSettings.emailApplicationStatus}
                icon="clipboard-check"
              />

              <NotificationToggle
                setting="emailInterviews"
                label="Interview Invitations"
                description="Get notified about interview requests and schedules"
                checked={notificationSettings.emailInterviews}
                icon="calendar-alt"
              />
            </>
          )}
        </div>
      </div>

      {/* SMS Notifications */}
      <div className="bg-white rounded-lg border p-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          <i className="fas fa-sms mr-2 text-green-600"></i>
          SMS Notifications
        </h2>
        <p className="text-gray-600 mb-6">
          Get important updates via text message.
        </p>

        <div className="space-y-4">
          <NotificationToggle
            setting="smsEnabled"
            label="SMS Notifications"
            description="Enable or disable all SMS notifications"
            checked={notificationSettings.smsEnabled}
            icon="sms"
          />

          {notificationSettings.smsEnabled && (
            <>
              <NotificationToggle
                setting="smsApplicationStatus"
                label="Application Updates"
                description="Get text alerts for application status changes"
                checked={notificationSettings.smsApplicationStatus}
                icon="clipboard-check"
              />

              <NotificationToggle
                setting="smsInterviews"
                label="Interview Alerts"
                description="Urgent notifications for interview invitations"
                checked={notificationSettings.smsInterviews}
                icon="calendar-alt"
              />

              <NotificationToggle
                setting="smsUrgent"
                label="Urgent Notifications"
                description="Critical updates that require immediate attention"
                checked={notificationSettings.smsUrgent}
                icon="exclamation-triangle"
              />
            </>
          )}
        </div>
      </div>

      {/* General Preferences */}
      <div className="bg-white rounded-lg border p-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          <i className="fas fa-cog mr-2 text-green-600"></i>
          General Preferences
        </h2>
        <p className="text-gray-600 mb-6">
          Customize your Job Match experience and privacy settings.
        </p>

        <div className="space-y-4">
          <NotificationToggle
            setting="profileVisible"
            label="Profile Visibility"
            description="Allow employers to find your profile in searches"
            checked={notificationSettings.profileVisible}
            icon="eye"
          />

          <NotificationToggle
            setting="autoApply"
            label="Auto-Apply to Matching Jobs"
            description="Automatically apply to jobs that perfectly match your skills"
            checked={notificationSettings.autoApply}
            icon="magic"
          />
        </div>
      </div>
    </div>
  );



  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-2">
          <i className="fas fa-cog mr-3 text-green-600"></i>
          Settings
        </h1>
        <p className="text-gray-600">
          Manage your account preferences and job category selections
        </p>
      </div>

      {/* Tab Navigation */}
      <div className="bg-white rounded-lg shadow-sm">
        <div className="border-b border-gray-200">
          <nav className="flex space-x-8 px-6">
            {tabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                  activeTab === tab.key
                    ? 'border-green-500 text-green-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                <i className={`fas fa-${tab.icon} mr-2`}></i>
                {tab.title}
              </button>
            ))}
          </nav>
        </div>

        {/* Tab Content */}
        <div className="p-6">
          {activeTab === 'categories' && renderCategoriesTab()}
          {activeTab === 'preferences' && renderPreferencesTab()}
        </div>
      </div>
    </div>
  );
};

export default Settings;
