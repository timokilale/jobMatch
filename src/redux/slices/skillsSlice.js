import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../api/api';

// Async thunks for skills
export const fetchSkills = createAsyncThunk(
  'skills/fetchSkills',
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.get('/skills');
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.error);
    }
  }
);

export const createSkill = createAsyncThunk(
  'skills/createSkill',
  async (skillData, { rejectWithValue }) => {
    try {
      const response = await api.post('/skills', skillData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.error);
    }
  }
);

export const searchSkills = createAsyncThunk(
  'skills/searchSkills',
  async ({ query, category, limit }, { rejectWithValue }) => {
    try {
      const params = new URLSearchParams();
      if (query) params.append('q', query);
      if (category) params.append('category', category);
      if (limit) params.append('limit', limit);

      const response = await api.get(`/skills/search?${params.toString()}`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.error);
    }
  }
);

export const fetchSkillCategories = createAsyncThunk(
  'skills/fetchSkillCategories',
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.get('/skills/categories');
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.error);
    }
  }
);

export const updateSkill = createAsyncThunk(
  'skills/updateSkill',
  async ({ id, ...skillData }, { rejectWithValue }) => {
    try {
      const response = await api.put(`/skills/${id}`, skillData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.error);
    }
  }
);

export const deleteSkill = createAsyncThunk(
  'skills/deleteSkill',
  async (id, { rejectWithValue }) => {
    try {
      await api.delete(`/skills/${id}`);
      return id;
    } catch (error) {
      return rejectWithValue(error.response?.data?.error);
    }
  }
);

const skillsSlice = createSlice({
  name: 'skills',
  initialState: {
    skills: [],
    searchResults: [],
    categories: [],
    loading: false,
    searchLoading: false,
    error: null,
    success: null
  },
  reducers: {
    clearError: (state) => {
      state.error = null;
    },
    clearSuccess: (state) => {
      state.success = null;
    }
  },
  extraReducers: (builder) => {
    builder
      // Fetch skills
      .addCase(fetchSkills.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchSkills.fulfilled, (state, action) => {
        state.loading = false;
        state.skills = action.payload;
        state.error = null;
      })
      .addCase(fetchSkills.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      
      // Create skill
      .addCase(createSkill.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createSkill.fulfilled, (state, action) => {
        state.loading = false;
        state.skills.push(action.payload);
        state.success = 'Skill added successfully';
        state.error = null;
      })
      .addCase(createSkill.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      
      // Update skill
      .addCase(updateSkill.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateSkill.fulfilled, (state, action) => {
        state.loading = false;
        const index = state.skills.findIndex(skill => skill.id === action.payload.id);
        if (index !== -1) {
          state.skills[index] = action.payload;
        }
        state.success = 'Skill updated successfully';
        state.error = null;
      })
      .addCase(updateSkill.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      
      // Delete skill
      .addCase(deleteSkill.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteSkill.fulfilled, (state, action) => {
        state.loading = false;
        state.skills = state.skills.filter(skill => skill.id !== action.payload);
        state.success = 'Skill deleted successfully';
        state.error = null;
      })
      .addCase(deleteSkill.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Search skills
      .addCase(searchSkills.pending, (state) => {
        state.searchLoading = true;
      })
      .addCase(searchSkills.fulfilled, (state, action) => {
        state.searchLoading = false;
        state.searchResults = action.payload;
      })
      .addCase(searchSkills.rejected, (state, action) => {
        state.searchLoading = false;
        state.error = action.payload;
      })

      // Fetch skill categories
      .addCase(fetchSkillCategories.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchSkillCategories.fulfilled, (state, action) => {
        state.loading = false;
        state.categories = action.payload;
      })
      .addCase(fetchSkillCategories.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  }
});

export const { clearError, clearSuccess } = skillsSlice.actions;
export default skillsSlice.reducer;
