import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../api/api';

// Async thunks for applications
export const applyToJob = createAsyncThunk(
  'applications/applyToJob',
  async ({ applicantId, jobId }, { rejectWithValue }) => {
    try {
      const response = await api.post('/applications', { 
        applicantId, 
        jobId 
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || 'Failed to apply for job');
    }
  }
);

export const getApplicantApplications = createAsyncThunk(
  'applications/getApplicantApplications',
  async (applicantId, { rejectWithValue }) => {
    try {
      const response = await api.get(`/applications/${applicantId}`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || 'Failed to fetch applications');
    }
  }
);

export const checkApplicationStatus = createAsyncThunk(
  'applications/checkStatus',
  async ({ applicantId, jobId }, { rejectWithValue }) => {
    try {
      const response = await api.get(`/applications/${applicantId}/status/${jobId}`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || 'Failed to check application status');
    }
  }
);

const applicationsSlice = createSlice({
  name: 'applications',
  initialState: {
    applications: [],
    applicationStatus: {},
    loading: false,
    applyingToJob: false,
    error: null
  },
  reducers: {
    resetApplicationStatus: (state) => {
      state.applyingToJob = false;
      state.error = null;
    }
  },
  extraReducers: (builder) => {
    builder
      // Apply to job
      .addCase(applyToJob.pending, (state) => {
        state.applyingToJob = true;
        state.error = null;
      })
      .addCase(applyToJob.fulfilled, (state, action) => {
        state.applyingToJob = false;
        state.applications.push(action.payload);
        // Update status for this job
        state.applicationStatus[action.payload.jobId] = 'applied';
      })
      .addCase(applyToJob.rejected, (state, action) => {
        state.applyingToJob = false;
        state.error = action.payload;
      })
      
      // Get applicant applications
      .addCase(getApplicantApplications.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getApplicantApplications.fulfilled, (state, action) => {
        state.loading = false;
        state.applications = action.payload;
        
        // Create a map of applied jobs for easy lookup
        const statusMap = {};
        action.payload.forEach(app => {
          statusMap[app.jobId] = 'applied';
        });
        state.applicationStatus = { ...state.applicationStatus, ...statusMap };
      })
      .addCase(getApplicantApplications.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      
      // Check application status
      .addCase(checkApplicationStatus.fulfilled, (state, action) => {
        if (action.payload.exists) {
          state.applicationStatus[action.payload.jobId] = 'applied';
        }
      });
  }
});

export const { resetApplicationStatus } = applicationsSlice.actions;
export default applicationsSlice.reducer;