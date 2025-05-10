import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../api/api';

export const fetchQualifications = createAsyncThunk(
    'qualifications/fetch',
    async (applicantId, thunkAPI) => {
      try {
        const res = await api.get(`/qualifications/${applicantId}`);
        
        const mapped = res.data.map((item) => ({
          id: item.id,
          level: item.level,
          country: item.country,
          institution: item.institution,
          fieldOfStudy: item.fieldOfStudy,
          startDate: item.startDate,
          endDate: item.endDate,
          certificate: item.certificateUrl
        }));
        
      
        return mapped;
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
        payload.append('certificate', formData.certificate);
        payload.append('applicantId', formData.applicantId);

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
          const newItem = {
            id: action.payload.id,
            level: action.payload.level,
            country: action.payload.country,
            institution: action.payload.institution,
            fieldOfStudy: action.payload.fieldOfStudy,
            startDate: action.payload.startDate,
            endDate: action.payload.endDate,
            certificate: action.payload.certificateUrl
          }
          state.list.push(newItem);
        })
        .addCase(addQualification.rejected, (state, action) => {
          state.loading = false;
          state.error = action.payload;
        });
    },
  });
  
  export default qualificationSlice.reducer;

