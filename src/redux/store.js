// redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import sessionStorage from 'redux-persist/lib/storage/session';
import { combineReducers } from 'redux';
import authReducer from './slices/authSlice'; // relative to store.js
import qualificationReducer from './slices/qualificationSlice'; 
import workExperienceReducer from './slices/workSlice';
import languageReducer from './slices/languageSlice';
import skillsReducer from './slices/skillsSlice';
import jobsReducer from './slices/jobsSlice';
import applicationsReducer from './slices/applications';
import cvReducer from './slices/cvSlice'; 
import pdfReducer from './slices/pdfSlice';

const rootReducer = combineReducers({
  auth: authReducer,
  qualifications: qualificationReducer,
  experience: workExperienceReducer,
  language: languageReducer,
  skills: skillsReducer,
  jobs: jobsReducer,
  applications: applicationsReducer,
  cv: cvReducer,
  pdf: pdfReducer,
});

const persistConfig = {
  key: 'root',
  storage: sessionStorage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);