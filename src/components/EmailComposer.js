import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import api from '../api/api';

const EmailComposer = ({ application, isOpen, onClose, onSent }) => {
  const { user } = useSelector((state) => state.auth);
  const [formData, setFormData] = useState({
    subject: '',
    message: '',
    template: 'custom'
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const emailTemplates = {
    custom: {
      subject: '',
      message: ''
    },
    interview_invitation: {
      subject: `Interview Invitation - ${application?.job?.title}`,
      message: `Dear ${application?.applicant?.fullName},

Thank you for your interest in the ${application?.job?.title} position at ${user?.companyName}.

We were impressed with your application and would like to invite you for an interview. We will contact you shortly with the interview details.

Please confirm your availability by replying to this email.

Best regards,
${user?.companyName} Hiring Team`
    },
    application_update: {
      subject: `Application Update - ${application?.job?.title}`,
      message: `Dear ${application?.applicant?.fullName},

We wanted to provide you with an update regarding your application for the ${application?.job?.title} position at ${user?.companyName}.

We are currently reviewing applications and will be in touch with next steps soon.

Thank you for your patience.

Best regards,
${user?.companyName} Hiring Team`
    },
    request_documents: {
      subject: `Additional Documents Required - ${application?.job?.title}`,
      message: `Dear ${application?.applicant?.fullName},

Thank you for your application for the ${application?.job?.title} position.

To proceed with your application, we would like to request some additional documents. Please provide:

- [List the required documents here]

Please send these documents at your earliest convenience.

Best regards,
${user?.companyName} Hiring Team`
    },
    rejection: {
      subject: `Application Status - ${application?.job?.title}`,
      message: `Dear ${application?.applicant?.fullName},

Thank you for your interest in the ${application?.job?.title} position at ${user?.companyName} and for taking the time to apply.

After careful consideration, we have decided to move forward with other candidates whose qualifications more closely match our current needs.

We appreciate your interest in our company and encourage you to apply for future opportunities that match your skills and experience.

Best regards,
${user?.companyName} Hiring Team`
    }
  };

  const handleTemplateChange = (templateKey) => {
    const template = emailTemplates[templateKey];
    setFormData({
      ...formData,
      template: templateKey,
      subject: template.subject,
      message: template.message
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const emailData = {
        to: application.applicant.user.email,
        subject: formData.subject,
        message: formData.message,
        applicationId: application.id,
        employerId: user.id,
        applicantId: application.applicant.id
      };

      await api.post('/emails/send', emailData);
      
      onSent && onSent();
      onClose();
      
      // Reset form
      setFormData({
        subject: '',
        message: '',
        template: 'custom'
      });
      
    } catch (error) {
      console.error('Error sending email:', error);
      setError(error.response?.data?.error || 'Failed to send email');
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
      <div className="bg-white rounded-lg shadow-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="bg-blue-600 text-white p-6 rounded-t-lg">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-xl font-bold flex items-center">
                <i className="fas fa-envelope mr-3"></i>
                Send Email
              </h2>
              <p className="text-blue-100 mt-1">
                To: {application?.applicant?.fullName} ({application?.applicant?.user?.email})
              </p>
            </div>
            <button
              onClick={onClose}
              className="text-white hover:text-blue-200 text-2xl"
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

          {/* Template Selector */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <i className="fas fa-file-alt mr-2"></i>
              Email Template
            </label>
            <select
              value={formData.template}
              onChange={(e) => handleTemplateChange(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="custom">Custom Email</option>
              <option value="interview_invitation">Interview Invitation</option>
              <option value="application_update">Application Update</option>
              <option value="request_documents">Request Additional Documents</option>
              <option value="rejection">Application Rejection</option>
            </select>
          </div>

          {/* Subject */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <i className="fas fa-tag mr-2"></i>
              Subject
            </label>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Enter email subject"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <i className="fas fa-comment mr-2"></i>
              Message
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="12"
              placeholder="Enter your message here..."
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <p className="text-xs text-gray-500 mt-1">
              You can edit the template message or write your own custom message.
            </p>
          </div>

          {/* Preview Box */}
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
            <h4 className="text-sm font-medium text-gray-700 mb-2">
              <i className="fas fa-eye mr-2"></i>
              Email Preview
            </h4>
            <div className="text-sm text-gray-600">
              <p><strong>From:</strong> {user?.companyName} ({user?.email})</p>
              <p><strong>To:</strong> {application?.applicant?.fullName} ({application?.applicant?.user?.email})</p>
              <p><strong>Subject:</strong> {formData.subject || 'No subject'}</p>
            </div>
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
              disabled={loading || !formData.subject || !formData.message}
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center"
            >
              {loading ? (
                <>
                  <i className="fas fa-spinner fa-spin mr-2"></i>
                  Sending...
                </>
              ) : (
                <>
                  <i className="fas fa-paper-plane mr-2"></i>
                  Send Email
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EmailComposer;
