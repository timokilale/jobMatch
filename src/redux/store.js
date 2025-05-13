// redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import sessionStorage from 'redux-persist/lib/storage/session';
import { combineReducers } from 'redux';
import authReducer from './slices/authSlice'; // relative to store.js
import qualificationReducer from './slices/qualificationSlice'; 
import workExperienceReducer from './slices/workSlice';
import languageReducer from './slices/languageSlice';
import computerSkillReducer from './slices/computerSlice';
import jobsReducer from './slices/jobsSlice';


const rootReducer = combineReducers({
  auth: authReducer,
  qualifications: qualificationReducer,
  experience: workExperienceReducer,
  language: languageReducer,
  computerSkill: computerSkillReducer,
  jobs: jobsReducer
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