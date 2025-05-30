import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../api/api';

// Helper function to extract error message
const getErrorMessage = (error) => {
  console.log('PDF Download Error Details:', error);
  
  if (typeof error === 'string') return error;
  if (error?.response?.data) {
    if (typeof error.response.data === 'string') return error.response.data;
    if (error.response.data.message) return error.response.data.message;
    if (error.response.data.error) return error.response.data.error;
  }
  if (error?.message) return error.message;
  if (error?.response?.status) {
    return `HTTP Error ${error.response.status}: ${error.response.statusText || 'Unknown error'}`;
  }
  return 'An unknown error occurred';
};

// Async thunk for downloading the CV PDF
export const downloadCvPdf = createAsyncThunk(
  'pdf/downloadCvPdf',
  async (applicantId, { rejectWithValue }) => {
    try {
      console.log('Starting PDF download for applicant ID:', applicantId);
      
      // Validate applicantId
      if (!applicantId) {
        throw new Error('Applicant ID is required');
      }

      const response = await api.get(`/pdf/${applicantId}/download`, {
        responseType: 'blob' // Important for file downloads
      });

      console.log('PDF download response:', response);
      console.log('Response data type:', typeof response.data);
      console.log('Response data size:', response.data?.size);

      // Check if response is actually a blob with content
      if (!response.data || response.data.size === 0) {
        throw new Error('No PDF data received from server');
      }

      // Check content type to ensure it's a PDF
      const contentType = response.headers['content-type'];
      console.log('Content type:', contentType);
      
      if (contentType && !contentType.includes('application/pdf') && !contentType.includes('application/octet-stream')) {
        // If it's not a PDF, it might be an error response in text format
        const text = await response.data.text();
        console.log('Non-PDF response content:', text);
        throw new Error(`Expected PDF but received: ${contentType}`);
      }

      // Create blob URL and trigger download
      const url = window.URL.createObjectURL(new Blob([response.data], { type: 'application/pdf' }));
      const link = document.createElement('a');
      link.href = url;
      
      // Use a more descriptive filename if possible
      const filename = `CV_${applicantId}.pdf`;
      link.setAttribute('download', filename);
      
      document.body.appendChild(link);
      link.click();
      link.remove();
      
      // Clean up the URL to free memory
      window.URL.revokeObjectURL(url);

      console.log('PDF download completed successfully');
      return 'CV downloaded successfully';
    } catch (error) {
      console.error('PDF download failed:', error);
      return rejectWithValue(getErrorMessage(error));
    }
  }
);

const pdfSlice = createSlice({
  name: 'pdf',
  initialState: {
    loading: false,
    error: null,
    successMessage: null
  },
  reducers: {
    resetPdfState: (state) => {
      state.loading = false;
      state.error = null;
      state.successMessage = null;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(downloadCvPdf.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.successMessage = null;
      })
      .addCase(downloadCvPdf.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.successMessage = action.payload;
      })
      .addCase(downloadCvPdf.rejected, (state, action) => {
        state.loading = false;
        state.successMessage = null;
        state.error = action.payload || 'Download failed';
      });
  }
});

export const { resetPdfState } = pdfSlice.actions;

export default pdfSlice.reducer;