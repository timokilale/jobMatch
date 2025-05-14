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

const applicationsSlice = createSlice({
  name: 'applications',
  initialState: {
    applications: [],
    applicationStatus: {},
    loadingApplications: false,
    applyingToJob: false,
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Apply to job
      .addCase(applyToJob.pending, (state) => {
        state.applyingToJob = true;
        state.error = null;
      })
      .addCase(applyToJob.fulfilled, (state, action) => {
        state.applyingToJob = false;
        state.applicationStatus[action.payload.jobId] = 'applied';
        state.applications.push(action.payload);
      })
      .addCase(applyToJob.rejected, (state, action) => {
        state.applyingToJob = false;
        state.error = action.payload?.error || 'Failed to apply to job';
      })
      
      // Get applicant applications
      .addCase(getApplicantApplications.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getApplicantApplications.fulfilled, (state, action) => {
        state.loading = false;
        state.applications = action.payload;

        action.payload.forEach(app => {
          state.applicationStatus[app.jobId] = 'applied';
        });
      })
      .addCase(getApplicantApplications.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.error || 'Failed to fetch applications';
      });
  }
});

export const { resetApplicationStatus } = applicationsSlice.actions;
export default applicationsSlice.reducer;