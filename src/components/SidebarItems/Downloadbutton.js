import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { downloadCvPdf, resetPdfState } from '../../redux/slices/pdfSlice';

const DownloadButton = ({ applicantId }) => {
  const dispatch = useDispatch();
  const { loading, error, successMessage } = useSelector(state => state.pdf);

  // Helper function to safely render error/success messages
  const safeRenderMessage = (message) => {
    if (!message) return null;
    if (typeof message === 'string') return message;
    if (typeof message === 'object') {
      // Handle different error object structures
      if (message.message) return message.message;
      if (message.error) return message.error;
      // Better handling for empty objects
      const messageStr = JSON.stringify(message);
      if (messageStr === '{}') return 'An unknown error occurred';
      return messageStr;
    }
    return String(message);
  };

  const handleDownload = () => {
    // Clear any previous errors/messages before starting download
    dispatch(resetPdfState());
    dispatch(downloadCvPdf(applicantId));
  };

  return (
    <div>
      <button 
        onClick={handleDownload} 
        disabled={loading}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 disabled:bg-gray-400"
      >
        {loading ? 'Downloading...' : 'Download CV PDF'}
      </button>
      {error && (
        <p style={{ color: 'red', marginTop: '8px' }}>
          Error: {safeRenderMessage(error)}
        </p>
      )}
      {successMessage && (
        <p style={{ color: 'green', marginTop: '8px' }}>
          {safeRenderMessage(successMessage)}
        </p>
      )}
    </div>
  );
};

export default DownloadButton;