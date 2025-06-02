import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { downloadCvPdf, resetPdfState } from '../../redux/slices/pdfSlice';

const DownloadButton = ({ applicantId }) => {
  const dispatch = useDispatch();
  const { loading, error, successMessage } = useSelector(state => state.pdf);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);

  // Helper function to safely render error messages
  const safeRenderMessage = (message) => {
    if (!message) return null;
    if (typeof message === 'string') return message;
    if (typeof message === 'object') {
      if (message.message) return message.message;
      if (message.error) return message.error;
      const messageStr = JSON.stringify(message);
      if (messageStr === '{}') return 'An unknown error occurred';
      return messageStr;
    }
    return String(message);
  };

  // Handle success message auto-hide
  useEffect(() => {
    if (successMessage && !loading) {
      setShowSuccess(true);
      const timer = setTimeout(() => {
        setShowSuccess(false);
        dispatch(resetPdfState());
      }, 2000); // Show "Done" for 2 seconds
      
      return () => clearTimeout(timer);
    }
  }, [successMessage, loading, dispatch]);

  // Handle error message auto-hide
  useEffect(() => {
    if (error) {
      setShowError(true);
      const timer = setTimeout(() => {
        setShowError(false);
        dispatch(resetPdfState());
      }, 4000); // Show error for 4 seconds
      
      return () => clearTimeout(timer);
    }
  }, [error, dispatch]);

  const handleDownload = () => {
    // Clear any previous states
    setShowSuccess(false);
    setShowError(false);
    dispatch(resetPdfState());
    dispatch(downloadCvPdf(applicantId));
  };

  const getButtonContent = () => {
    if (loading) {
      return (
        <div className="flex items-center gap-2">
          <i className="fas fa-spinner fa-spin text-white"></i>
          <span>Downloading...</span>
        </div>
      );
    }
    
    if (showSuccess) {
      return (
        <div className="flex items-center gap-2">
          <i className="fas fa-check text-white"></i>
          <span>Done!</span>
        </div>
      );
    }
    
    return (
      <div className="flex items-center gap-2">
        <i className="fas fa-download text-white"></i>
        <span>Download CV PDF</span>
      </div>
    );
  };

  const getButtonStyle = () => {
    if (showSuccess) {
      return 'bg-green-600 hover:bg-green-700';
    }
    if (loading) {
      return 'bg-green-500 cursor-not-allowed';
    }
    return 'bg-green-600 hover:bg-green-700';
  };

  return (
    <div className="flex flex-col items-end gap-2 ml-auto">
      <button
        onClick={handleDownload}
        disabled={loading}
        className={`px-6 py-3 text-white rounded-lg transition-all duration-200 shadow-md hover:shadow-lg ${getButtonStyle()}`}
      >
        {getButtonContent()}
      </button>
      
      {/* Error message with auto-hide */}
      {showError && error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-3 py-2 rounded text-sm transition-all duration-300 ease-out">
          <div className="flex items-center gap-2">
            <i className="fas fa-exclamation-triangle text-red-500"></i>
            <span>Error: {safeRenderMessage(error)}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default DownloadButton;