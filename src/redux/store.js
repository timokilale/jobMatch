// redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice'; // relative to store.js
import qualificationReducer from './slices/qualificationSlice'; 


export const store = configureStore({
  reducer: {
    auth: authReducer,
    qualifications: qualificationReducer,
  },
});
