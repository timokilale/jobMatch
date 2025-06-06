import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import api from '../api/api';

const InterviewScheduler = ({ application, isOpen, onClose, onScheduled }) => {
  const { user } = useSelector((state) => state.auth);
  const [formData, setFormData] = useState({
    date: '',
    time: '',
    duration: '60',
    location: '',
    type: 'in-person',
    notes: '',
    interviewers: user?.companyName || ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      // Combine date and time
      const interviewDateTime = new Date(`${formData.date}T${formData.time}`);
      
      const interviewData = {
        applicationId: application.id,
        scheduledAt: interviewDateTime.toISOString(),
        duration: parseInt(formData.duration),
        location: formData.location,
        type: formData.type,
        notes: formData.notes,
        interviewers: formData.interviewers,
        employerId: user.id
      };

      const response = await api.post('/interviews/schedule', interviewData);
      
      // Send email notification to candidate
      await api.post('/emails/interview-invitation', {
        applicationId: application.id,
        interviewDetails: response.data
      });

      onScheduled && onScheduled(response.data);
      onClose();
      
      // Reset form
      setFormData({
        date: '',
        time: '',
        duration: '60',
        location: '',
        type: 'in-person',
        notes: '',
        interviewers: user?.companyName || ''
      });
      
    } catch (error) {
      console.error('Error scheduling interview:', error);
      setError(error.response?.data?.error || 'Failed to schedule interview');
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="bg-green-600 text-white p-6 rounded-t-lg">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-xl font-bold flex items-center">
                <i className="fas fa-calendar-plus mr-3"></i>
                Schedule Interview
              </h2>
              <p className="text-green-100 mt-1">
                {application?.applicant?.fullName} - {application?.job?.title}
              </p>
            </div>
            <button
              onClick={onClose}
              className="text-white hover:text-green-200 text-2xl"
            >
              <i className="fas fa-times"></i>
            </button>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          {error && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <p className="text-red-700 text-sm flex items-center">
                <i className="fas fa-exclamation-circle mr-2"></i>
                {error}
              </p>
            </div>
          )}

          {/* Date and Time */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <i className="fas fa-calendar mr-2"></i>
                Interview Date
              </label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                min={new Date().toISOString().split('T')[0]}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <i className="fas fa-clock mr-2"></i>
                Interview Time
              </label>
              <input
                type="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                required
              />
            </div>
          </div>

          {/* Duration and Type */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <i className="fas fa-hourglass-half mr-2"></i>
                Duration (minutes)
              </label>
              <select
                name="duration"
                value={formData.duration}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              >
                <option value="30">30 minutes</option>
                <option value="45">45 minutes</option>
                <option value="60">1 hour</option>
                <option value="90">1.5 hours</option>
                <option value="120">2 hours</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <i className="fas fa-video mr-2"></i>
                Interview Type
              </label>
              <select
                name="type"
                value={formData.type}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              >
                <option value="in-person">In-Person</option>
                <option value="video-call">Video Call</option>
                <option value="phone">Phone Call</option>
                <option value="online">Online Assessment</option>
              </select>
            </div>
          </div>

          {/* Location */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <i className="fas fa-map-marker-alt mr-2"></i>
              Location / Meeting Link
            </label>
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              placeholder={formData.type === 'video-call' ? 'Zoom/Teams meeting link' : 
                          formData.type === 'phone' ? 'Phone number' : 'Office address'}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>

          {/* Interviewers */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <i className="fas fa-users mr-2"></i>
              Interviewer(s)
            </label>
            <input
              type="text"
              name="interviewers"
              value={formData.interviewers}
              onChange={handleChange}
              placeholder="Names of people conducting the interview"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>

          {/* Notes */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <i className="fas fa-sticky-note mr-2"></i>
              Additional Notes (Optional)
            </label>
            <textarea
              name="notes"
              value={formData.notes}
              onChange={handleChange}
              rows="3"
              placeholder="Any additional information for the candidate..."
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          {/* Actions */}
          <div className="flex justify-end space-x-4 pt-4 border-t border-gray-200">
            <button
              type="button"
              onClick={onClose}
              className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={loading}
              className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center"
            >
              {loading ? (
                <>
                  <i className="fas fa-spinner fa-spin mr-2"></i>
                  Scheduling...
                </>
              ) : (
                <>
                  <i className="fas fa-calendar-check mr-2"></i>
                  Schedule Interview
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default InterviewScheduler;
