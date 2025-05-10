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
        payload.append('level', formData.educationlevel);
        payload.append('country', formData.country);
        payload.append('institution', formData.institution);
        payload.append('fieldOfStudy', formData.program);
        payload.append('startDate', formData.startDate);
        payload.append('endDate', formData.endDate);
        payload.append('applicantId', formData.applicantId);
        if (formData.certificate) {  
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
        payload.append('level', data.educationLevel);
        payload.append('country', data.country);
        payload.append('institution', data.institution);
        payload.append('fieldOfStudy', data.program);
        payload.append('startDate', data.startDate);
        payload.append('endDate', data.endDate);
        payload.append('applicantId', data.applicantId);
        if (data.certificate) {
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
        })
        .addCase(updateQualification.fulfilled, (state, action) => {
          const index = state.list.findIndex(q => q.id === action.payload.id);
          if (index !== -1) {
            state.list[index] = action.payload;
          }
        })
        .addCase(deleteQualification.fulfilled, (state, action) => {
          state.list = state.list.filter(q => q.id !== action.payload);
        });        
    },
  });
  
  export default qualificationSlice.reducer;

