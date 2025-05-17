import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../api/api';

export const fetchQualifications = createAsyncThunk(
    'qualifications/fetch',
    async (applicantId, thunkAPI) => {
      try {
        const res = await api.get(`/qualifications/${applicantId}`);
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
        const payload = new FormData();
        // FIXED: Changed from educationlevel to educationLevel to match component state
        payload.append('educationLevel', formData.educationLevel);
        payload.append('country', formData.country);
        payload.append('institution', formData.institution);
        payload.append('program', formData.program);
        payload.append('startDate', formData.startDate);
        payload.append('endDate', formData.endDate);
        payload.append('applicantId', formData.applicantId);
        
        // Only append certificate if it exists and is a file
        if (formData.certificate && formData.certificate instanceof File) {  
          payload.append('certificate', formData.certificate);
        }

        const res = await api.post('/qualifications', payload, {
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

  export const updateQualification = createAsyncThunk(
    'qualifications/update',
    async ({ id, data }, thunkAPI) => {
      try {
        const payload = new FormData();
        // FIXED: Changed field names to match backend controller expectations
        payload.append('educationLevel', data.educationLevel);
        payload.append('country', data.country);
        payload.append('institution', data.institution);
        payload.append('program', data.program);
        
        // Format dates properly for backend
        payload.append('startDate', data.startDate);
        payload.append('endDate', data.endDate || '');
        payload.append('applicantId', data.applicantId);
        
        // Only append certificate if it's a new file
        if (data.certificate && data.certificate instanceof File) {
          payload.append('certificate', data.certificate);
        }
  
        const res = await api.put(`/qualifications/${id}`, payload, {
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
  
  export const deleteQualification = createAsyncThunk(
    'qualifications/delete',
    async (id, thunkAPI) => {
      try {
        await api.delete(`/qualifications/${id}`);
        return id;
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
    reducers: {
      // Add a reducer to clear errors
      clearErrors: (state) => {
        state.error = null;
      }
    },
    extraReducers: (builder) => {
      builder
        // Fetch qualifications
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

        // Add qualification
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
        })
        
        // Update qualification
        .addCase(updateQualification.pending, (state) => {
          state.loading = true;
          state.error = null;
        })
        .addCase(updateQualification.fulfilled, (state, action) => {
          state.loading = false;
          const index = state.list.findIndex(q => q.id === action.payload.id);
          if (index !== -1) {
            state.list[index] = action.payload;
          }
        })
        .addCase(updateQualification.rejected, (state, action) => {
          state.loading = false;
          state.error = action.payload;
        })
        
        // Delete qualification
        .addCase(deleteQualification.pending, (state) => {
          state.loading = true;
          state.error = null;
        })
        .addCase(deleteQualification.fulfilled, (state, action) => {
          state.loading = false;
          state.list = state.list.filter(q => q.id !== action.payload);
        })
        .addCase(deleteQualification.rejected, (state, action) => {
          state.loading = false;
          state.error = action.payload;
        });
    },
  });
  
  export const { clearErrors } = qualificationSlice.actions;
  export default qualificationSlice.reducer;