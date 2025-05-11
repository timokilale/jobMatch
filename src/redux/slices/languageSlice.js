import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../api/api';


export const fetchLanguages = createAsyncThunk(
  'language/fetch',
  async (applicantId) => {
    const res = await api.get(`/languages/${applicantId}`);
    return res.data;
  }
);

export const addLanguage = createAsyncThunk(
  'language/add',
  async (payload) => {
    const res = await api.post('/languages', payload);
    return res.data;
  }
);

export const updateLanguage = createAsyncThunk(
  'language/update',
  async ({ id, data }) => {
    const res = await api.put(`/languages/${id}`, data);
    return res.data;
  }
);

export const deleteLanguage = createAsyncThunk(
  'language/delete',
  async (id) => {
    await api.delete(`/languages/${id}`);
    return id;
  }
);

const slice = createSlice({
  name: 'language',
  initialState: {
    items: [],
    loading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchLanguages.fulfilled, (state, action) => {
        state.items = action.payload;
      })
      .addCase(addLanguage.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })
      .addCase(updateLanguage.fulfilled, (state, action) => {
        const index = state.items.findIndex(i => i.id === action.payload.id);
        if (index > -1) state.items[index] = action.payload;
      })
      .addCase(deleteLanguage.fulfilled, (state, action) => {
        state.items = state.items.filter(i => i.id !== action.payload);
      });
  }
});

export default slice.reducer;
