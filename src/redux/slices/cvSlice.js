import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../api/api';

// Async thunk to fetch CV data
export const fetchCvData = createAsyncThunk(
  'cv/fetchCvData',
  async (applicantId, { rejectWithValue }) => {
    try {
      const response = await api.get(`/cv/${applicantId}`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || 'Failed to fetch CV data');
    }
  }
);

const cvSlice = createSlice({
  name: 'cv',
  initialState: {
    cv: null,
    loading: false,
    error: null
  },
  reducers: {
    clearCvData: (state) => {
      state.cv = null;
      state.error = null;
      state.loading = false;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCvData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCvData.fulfilled, (state, action) => {
        state.loading = false;
        state.cv = action.payload;
      })
      .addCase(fetchCvData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || 'Something went wrong';
      });
  }
});

export const { clearCvData } = cvSlice.actions;

export default cvSlice.reducer;
