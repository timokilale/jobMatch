import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../api/api';

// --- Thunks ---

export const registerApplicant = createAsyncThunk(
  'auth/registerApplicant',
  async (formData, { rejectWithValue }) => {
    try {
      const res = await api.post('/auth/register/applicant', formData);
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const registerEmployer = createAsyncThunk(
  'auth/registerEmployer',
  async (formData, { rejectWithValue }) => {
    try {
      const res = await api.post('/auth/register/employer', formData);
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const loginUser = createAsyncThunk(
  'auth/loginUser',
  async (credentials, { rejectWithValue }) => {
    try {
      const res = await api.post('/auth/login', credentials);
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

// --- Slice ---

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: {},
    token: null,
    role: null,
    loading: false,
    error: null,
  },
  reducers: {
    logout: (state) => {
      state.token = null;
      state.role = null;
      state.user = null;
      localStorage.removeItem('userRole');
      localStorage.removeItem('token');
    },
  },
  extraReducers: (builder) => {
    builder
      // --- Applicant Registration ---
      .addCase(registerApplicant.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(registerApplicant.fulfilled, (state, action) => {
        state.loading = false;
        state.token = action.payload.token;
        state.role = 'APPLICANT';
        state.user = action.payload.applicant;

        localStorage.setItem('token', action.payload.token);
        localStorage.setItem('userRole', 'APPLICANT');
      })
      .addCase(registerApplicant.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.error;
      })

      // --- Employer Registration ---
      .addCase(registerEmployer.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(registerEmployer.fulfilled, (state, action) => {
        state.loading = false;
        state.token = action.payload.token;
        state.role = 'EMPLOYER';
        state.user = action.payload.employer;

        localStorage.setItem('token', action.payload.token);
        localStorage.setItem('userRole', 'EMPLOYER');
      })
      .addCase(registerEmployer.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.error;
      })

      // --- Login ---
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.token = action.payload.token;
        state.user = action.payload.user;
        state.role = action.payload.role?.toUpperCase(); 
        state.error = null;

        localStorage.setItem('token', action.payload.token);
        localStorage.setItem('userRole', action.payload.role);
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.error;
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
