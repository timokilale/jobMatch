import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../api/api';



export const fetchSkills = createAsyncThunk('computerSkill/fetchSkills', async (applicantId) => {
  const res = await api.get(`/skills/${applicantId}`);
  return res.data;
});

export const createSkill = createAsyncThunk('computerSkill/createSkill', async (data) => {
  const res = await api.post('/skills', data);
  return res.data;
});

export const updateSkill = createAsyncThunk('computerSkill/updateSkill', async ({ id, ...rest }) => {
  const res = await api.put(`/skills/${id}`, rest);
  return res.data;
});

export const deleteSkill = createAsyncThunk('computerSkill/deleteSkill', async (id) => {
  await api.delete(`/skills/${id}`);
  return id;
});

const computerSkillSlice = createSlice({
  name: 'computerSkill',
  initialState: {
    skills: [],
    loading: false,
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSkills.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchSkills.fulfilled, (state, action) => {
        state.loading = false;
        state.skills = action.payload;
      })
      .addCase(fetchSkills.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(createSkill.fulfilled, (state, action) => {
        state.skills.push(action.payload);
      })
      .addCase(updateSkill.fulfilled, (state, action) => {
        const index = state.skills.findIndex(s => s.id === action.payload.id);
        if (index !== -1) state.skills[index] = action.payload;
      })
      .addCase(deleteSkill.fulfilled, (state, action) => {
        state.skills = state.skills.filter(skill => skill.id !== action.payload);
      });
  }
});

export default computerSkillSlice.reducer;
