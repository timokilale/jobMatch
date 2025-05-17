import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../api/api';

// Async thunks
export const fetchEmployerJobs = createAsyncThunk(
  'jobs/fetchEmployerJobs',
  async (employerId, { rejectWithValue }) => {
    try {
      const response = await api.get(`/jobs/${employerId}`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || 'Failed to fetch jobs');
    }
  }
);

export const fetchApplicantJobs = createAsyncThunk(
  'jobs/fetchApplicantJobs',
  async (applicantId, { rejectWithValue }) => {
    try {
      const response = await api.get(`/jobs/applicant/${applicantId}/jobs`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || 'Failed to fetch jobs');
    }
  }
);

export const createJob = createAsyncThunk(
  'jobs/createJob',
  async (jobData, { rejectWithValue }) => {
    try {
      const response = await api.post('/jobs', jobData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || 'Failed to create job');
    }
  }
);

export const updateJob = createAsyncThunk(
  'jobs/updateJob',
  async ({ jobId, jobData }, { rejectWithValue }) => {
    try {
      const response = await api.put(`/jobs/${jobId}`, jobData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || 'Failed to update job');
    }
  }
);

export const deleteJob = createAsyncThunk(
  'jobs/deleteJob',
  async (jobId, { rejectWithValue }) => {
    try {
      await api.delete(`/jobs/${jobId}`);
      return jobId; // Return jobId for filtering in the reducer
    } catch (error) {
      return rejectWithValue(error.response?.data || 'Failed to delete job');
    }
  }
);

export const fetchCategories = createAsyncThunk(
  'jobs/fetchCategories',
  async (_, { rejectWithValue }) => {
  try {
    const response = await api.get('/categories');
    return response.data;
  } catch (error) {
    return rejectWithValue(error.response?.data || 'Failed to fetch categories');
  }
},
);

const initialState = {
  jobPostings: [],
  applicantJobs:[],
  categories: [],
  loading: false,
  error: null,
  showJobModal: false,
  newJob: {
    title: '',
    description: '',
    location: '',
    status: 'Draft',
    categoryId: '',
  }
};

const jobsSlice = createSlice({
  name: 'jobs',
  initialState,
  reducers: {
    setShowJobModal: (state, action) => {
      state.showJobModal = action.payload;
    },
    setNewJob: (state, action) => {
      state.newJob = action.payload;
    },
    resetNewJob: (state) => {
      state.newJob = initialState.newJob;
    }
  },
  extraReducers: (builder) => {
    builder
       .addCase(fetchCategories.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.loading = false;
        state.categories = action.payload;
      })
      .addCase(fetchCategories.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // Fetch Jobs
      .addCase(fetchEmployerJobs.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchEmployerJobs.fulfilled, (state, action) => {
        state.loading = false;
        state.jobPostings = action.payload.map(job => ({
          ...job,
          applicants: job.applicants || 0 // Ensure all jobs have an applicants field
        }));
      })
      .addCase(fetchEmployerJobs.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      .addCase(fetchApplicantJobs.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchApplicantJobs.fulfilled, (state, action) => {
        state.loading = false;
        state.applicantJobs = action.payload;
      })
      .addCase(fetchApplicantJobs.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      
      // Create Job
      .addCase(createJob.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createJob.fulfilled, (state, action) => {
        state.loading = false;
        state.jobPostings.push({
          ...action.payload,
          applicants: 0 // New jobs start with 0 applicants
        });
        state.showJobModal = false;
        state.newJob = initialState.newJob;
      })
      .addCase(createJob.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      
      // Update Job
      .addCase(updateJob.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateJob.fulfilled, (state, action) => {
        state.loading = false;
        const index = state.jobPostings.findIndex(job => job.id === action.payload.id);
        if (index !== -1) {
          state.jobPostings[index] = {
            ...action.payload,
            applicants: state.jobPostings[index].applicants // Preserve applicant count
          };
        }
        state.showJobModal = false;
      })
      .addCase(updateJob.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      
      // Delete Job
      .addCase(deleteJob.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteJob.fulfilled, (state, action) => {
        state.loading = false;
        state.jobPostings = state.jobPostings.filter(job => job.id !== action.payload);
      })
      .addCase(deleteJob.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  }
});

export const { setShowJobModal, setNewJob, resetNewJob } = jobsSlice.actions;
export default jobsSlice.reducer;