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
      return JSON.stringify(message);
    }
    return String(message);
  };

  const handleDownload = () => {
    dispatch(downloadCvPdf(applicantId));
  };

  return (
    <div>
      <button onClick={handleDownload} disabled={loading}>
        {loading ? 'Downloading...' : 'Download CV PDF'}
      </button>
      {error && <p style={{ color: 'red' }}>Error: {safeRenderMessage(error)}</p>}
      {successMessage && <p style={{ color: 'green' }}>{safeRenderMessage(successMessage)}</p>}
    </div>
  );
};

export default DownloadButton;