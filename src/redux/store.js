// redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import sessionStorage from 'redux-persist/lib/storage/session';
import { combineReducers } from 'redux';
import authReducer from './slices/authSlice'; // relative to store.js
import qualificationReducer from './slices/qualificationSlice'; 
import workExperienceReducer from './slices/workSlice';

const rootReducer = combineReducers({
  auth: authReducer,
  qualifications: qualificationReducer,
  experience: workExperienceReducer,
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