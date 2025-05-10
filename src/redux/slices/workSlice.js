import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../api/api';


export const fetchWorkExperience = createAsyncThunk(
    'workExperience/fetch',
    async (applicantId) => {
      const response = await api.get(`experiences/${applicantId}`);
      return response.data;
    }
  );

  export const addWorkExperience = createAsyncThunk(
    'workExperience/add',
    async (data) => {
      const response = await api.post('/experiences', data);
      return response.data;
    }
  );

  export const updateWorkExperience = createAsyncThunk(
    'workExperience/update',
    async ({ id, data }) => {
      const response = await api.put(`experiences/${id}`, data);
      return response.data;
    }
  );

  export const deleteWorkExperience = createAsyncThunk(
    'workExperience/delete',
    async (id) => {
      await api.delete(`experiences/${id}`);
      return id;
    }
  );


  
const workExperienceSlice = createSlice({
    name: 'workExperience',
    initialState: {
      list: [],
      loading: false,
      error: null,
    },
    extraReducers: (builder) => {
      builder
        .addCase(fetchWorkExperience.pending, (state) => {
          state.loading = true;
        })
        .addCase(fetchWorkExperience.fulfilled, (state, action) => {
          state.loading = false;
          state.list = action.payload;
        })
        .addCase(addWorkExperience.fulfilled, (state, action) => {
          state.list.push(action.payload);
        })
        .addCase(updateWorkExperience.fulfilled, (state, action) => {
          const index = state.list.findIndex((item) => item.id === action.payload.id);
          if (index !== -1) state.list[index] = action.payload;
        })
        .addCase(deleteWorkExperience.fulfilled, (state, action) => {
          state.list = state.list.filter((item) => item.id !== action.payload);
        });
    },
  });
  
  export default workExperienceSlice.reducer;