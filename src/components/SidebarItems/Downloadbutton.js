import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { downloadCvPdf, resetPdfState } from '../../redux/slices/pdfSlice';

const DownloadButton = ({ applicantId }) => {
  const dispatch = useDispatch();
  const { loading, error, successMessage } = useSelector(state => state.pdf);

  const handleDownload = () => {
    dispatch(downloadCvPdf(applicantId));
  };

  return (
    <div>
      <button onClick={handleDownload} disabled={loading}>
        {loading ? 'Downloading...' : 'Download CV PDF'}
      </button>
      {error && <p style={{ color: 'red' }}>Error: {error}</p>}
      {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
    </div>
  );
};

export default DownloadButton;
