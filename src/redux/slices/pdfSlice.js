import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../api/api';

// Async thunk for downloading the CV PDF
export const downloadCvPdf = createAsyncThunk(
  'pdf/downloadCvPdf',
  async (applicantId, { rejectWithValue }) => {
    try {
      const response = await api.get(`/pdf/${applicantId}/download`, {
        responseType: 'blob' // Important for file downloads
      });

      // Create blob URL and trigger download
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'cv.pdf');
      document.body.appendChild(link);
      link.click();
      link.remove();

      return 'Download successful';
    } catch (error) {
      return rejectWithValue(error.response?.data || 'Failed to download PDF');
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
        state.successMessage = action.payload;
      })
      .addCase(downloadCvPdf.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || 'Download failed';
      });
  }
});

export const { resetPdfState } = pdfSlice.actions;

export default pdfSlice.reducer;
