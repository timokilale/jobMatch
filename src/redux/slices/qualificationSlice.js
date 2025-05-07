import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../api/api';

export const fetchQualifications = createAsyncThunk(
    'qualifications/fetch',
    async (applicantId, thunkAPI) => {
      try {
        const res = await api.get(`/qualifications/${applicantId}`); // Auth headers handled in `api.js`
        return res.data;
      } catch (err) {
        return thunkAPI.rejectWithValue(err.response?.data || err.message);
      }
    }
);

export const addQualification = createAsyncThunk(
    'qualifications/add',
    async (formData, thunkAPI) => {
      try {
        const res = await api.post('/qualifications', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
        return res.data;
      } catch (err) {
        return thunkAPI.rejectWithValue(err.response?.data || err.message);
      }
    }
  );

  
const qualificationSlice = createSlice({
    name: 'qualifications',
    initialState: {
      list: [],
      loading: false,
      error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(fetchQualifications.pending, (state) => {
          state.loading = true;
          state.error = null; 
        })
        .addCase(fetchQualifications.fulfilled, (state, action) => {
          state.loading = false;
          state.list = action.payload;
        })
        .addCase(fetchQualifications.rejected, (state, action) => {
          state.loading = false;
          state.error = action.payload;
        })

        .addCase(addQualification.pending, (state) => {
          state.loading = true;
          state.error = null; 
        })
        .addCase(addQualification.fulfilled, (state, action) => {
          state.loading = false;
          state.list.push(action.payload);
        })
        .addCase(addQualification.rejected, (state, action) => {
          state.loading = false;
          state.error = action.payload;
        });
    },
  });
  
  export default qualificationSlice.reducer;

