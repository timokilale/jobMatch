import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../api/api';

// Async thunks for applications
export const applyToJob = createAsyncThunk(
  'applications/applyToJob',
  async ({ applicantId, jobId }, { rejectWithValue }) => {
    try {
      const response = await api.post('/applications', { 
        applicantId, 
        jobId 
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || 'Failed to apply for job');
    }
  }
);

export const getApplicantApplications = createAsyncThunk(
  'applications/getApplicantApplications',
  async (applicantId, { rejectWithValue }) => {
    try {
      const response = await api.get(`/applications/${applicantId}`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || 'Failed to fetch applications');
    }
  }
);

export const fetchEmployerApplications = createAsyncThunk(
  'applications/fetchEmployerApplications',
  async (employerId, { rejectWithValue }) => {
    try {
      const response = await api.get(`/applications/employer/${employerId}`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

// Updated to use the decision endpoint with correct format
export const updateApplicationStatus = createAsyncThunk(
  'applications/updateApplicationStatus',
  async ({ applicationId, status }, { rejectWithValue }) => {
    try {
      // Convert status to decision format
      const decision = status.toLowerCase() === 'accepted' || status.toLowerCase() === 'accept' 
        ? 'accept' 
        : 'reject';
      
      const response = await api.patch(`/applications/${applicationId}/decision`, { 
        decision 
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || 'Failed to update application status');
    }
  }
);

// Alternative thunk that directly accepts accept/reject decisions
export const makeApplicationDecision = createAsyncThunk(
  'applications/makeApplicationDecision',
  async ({ applicationId, decision }, { rejectWithValue }) => {
    try {
      const response = await api.patch(`/applications/${applicationId}/decision`, { 
        decision // 'accept' or 'reject'
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || 'Failed to make application decision');
    }
  }
);

// New thunk to fetch notifications from backend
export const fetchApplicantNotifications = createAsyncThunk(
  'applications/fetchApplicantNotifications',
  async (applicantId, { rejectWithValue }) => {
    try {
      const response = await api.get(`/notifications/applicant/${applicantId}`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || 'Failed to fetch notifications');
    }
  }
);

// New thunk to mark notification as read
export const markNotificationAsReadAsync = createAsyncThunk(
  'applications/markNotificationAsRead',
  async (notificationId, { rejectWithValue }) => {
    try {
      const response = await api.patch(`/notifications/${notificationId}/read`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || 'Failed to mark notification as read');
    }
  }
);

// New thunk to mark all notifications as read
export const markAllNotificationsAsReadAsync = createAsyncThunk(
  'applications/markAllNotificationsAsRead',
  async ({ userId, userType }, { rejectWithValue }) => {
    try {
      const response = await api.patch('/notifications/mark-all-read', { userId, userType });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || 'Failed to mark all notifications as read');
    }
  }
);

const applicationsSlice = createSlice({
  name: 'applications',
  initialState: {
    applications: [],
    applicationStatus: {},
    notifications: [],
    unreadNotificationCount: 0,
    loadingApplications: false,
    loadingNotifications: false,
    applyingToJob: false,
    error: null,
    loading: false
  },
  reducers: {
    // Local notification management (for immediate UI feedback)
    markNotificationAsRead: (state, action) => {
      const notificationId = action.payload;
      const notification = state.notifications.find(n => n.id === notificationId);
      if (notification && !notification.isRead) {
        notification.isRead = true;
        notification.readAt = new Date().toISOString();
        state.unreadNotificationCount = Math.max(0, state.unreadNotificationCount - 1);
      }
    },
    markAllNotificationsAsRead: (state) => {
      state.notifications.forEach(notification => {
        if (!notification.isRead) {
          notification.isRead = true;
          notification.readAt = new Date().toISOString();
        }
      });
      state.unreadNotificationCount = 0;
    },
    // Add the missing cleanup functionality
    cleanupExpiredNotifications: (state) => {
      const sevenDaysAgo = new Date();
      sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);
      
      // Remove notifications that are read and older than 7 days
      state.notifications = state.notifications.filter(notification => {
        if (!notification.isRead) return true; // Keep unread notifications
        
        const readDate = new Date(notification.readAt || notification.createdAt);
        return readDate > sevenDaysAgo; // Keep notifications newer than 7 days
      });
      
      // Recalculate unread count
      state.unreadNotificationCount = state.notifications.filter(n => !n.isRead).length;
    },
    clearAllNotifications: (state) => {
      state.notifications = [];
      state.unreadNotificationCount = 0;
    },
    resetError: (state) => {
      state.error = null;
    }
  },
  
  extraReducers: (builder) => {
    builder
      // Apply to job
      .addCase(applyToJob.pending, (state) => {
        state.applyingToJob = true;
        state.error = null;
      })
      .addCase(applyToJob.fulfilled, (state, action) => {
        state.applyingToJob = false;
        state.applicationStatus[action.payload.jobId] = 'applied';
        
        if (!Array.isArray(state.applications)) {
          state.applications = [];
        }
        state.applications.push(action.payload);
      })
      .addCase(applyToJob.rejected, (state, action) => {
        state.applyingToJob = false;
        state.error = action.payload?.error || 'Failed to apply to job';
      })
      
      // Get applicant applications
      .addCase(getApplicantApplications.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getApplicantApplications.fulfilled, (state, action) => {
        state.loading = false;
        const applications = action.payload || [];
        state.applications = applications;
        
        // Update application status mapping
        applications.forEach(app => {
          state.applicationStatus[app.jobId] = 'applied';
        });
      })
      .addCase(getApplicantApplications.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.error || 'Failed to fetch applications';
      })

      // Fetch employer applications
      .addCase(fetchEmployerApplications.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchEmployerApplications.fulfilled, (state, action) => {
        state.loading = false;
        state.applications = action.payload || [];
      })
      .addCase(fetchEmployerApplications.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.error || 'Failed to fetch applications';
      })
      
      // Update application status
      .addCase(updateApplicationStatus.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateApplicationStatus.fulfilled, (state, action) => {
        state.loading = false;
        const updated = action.payload;

        // Update the application in the list
        state.applications = state.applications.map(app =>
          app.id === updated.id ? updated : app
        );
      })
      .addCase(updateApplicationStatus.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.error || 'Failed to update application status';
      })
      
      // Make application decision
      .addCase(makeApplicationDecision.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(makeApplicationDecision.fulfilled, (state, action) => {
        state.loading = false;
        const updated = action.payload;

        // Update the application in the list
        state.applications = state.applications.map(app =>
          app.id === updated.id ? updated : app
        );
      })
      .addCase(makeApplicationDecision.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.error || 'Failed to make application decision';
      })

      // Fetch notifications
      .addCase(fetchApplicantNotifications.pending, (state) => {
        state.loadingNotifications = true;
      })
      .addCase(fetchApplicantNotifications.fulfilled, (state, action) => {
        state.loadingNotifications = false;
        state.notifications = action.payload || [];
        state.unreadNotificationCount = state.notifications.filter(n => !n.isRead).length;
      })
      .addCase(fetchApplicantNotifications.rejected, (state, action) => {
        state.loadingNotifications = false;
        state.error = action.payload?.error || 'Failed to fetch notifications';
      })

      // Mark notification as read
      .addCase(markNotificationAsReadAsync.fulfilled, (state, action) => {
        const updatedNotification = action.payload;
        const index = state.notifications.findIndex(n => n.id === updatedNotification.id);
        if (index !== -1) {
          state.notifications[index] = updatedNotification;
          if (!updatedNotification.isRead) {
            state.unreadNotificationCount = Math.max(0, state.unreadNotificationCount - 1);
          }
        }
      })

      // Mark all notifications as read
      .addCase(markAllNotificationsAsReadAsync.fulfilled, (state, action) => {
        state.notifications.forEach(notification => {
          notification.isRead = true;
          notification.readAt = new Date().toISOString();
        });
        state.unreadNotificationCount = 0;
      });
  }
});

export const { 
  markNotificationAsRead,
  markAllNotificationsAsRead,
  cleanupExpiredNotifications,
  clearAllNotifications,
  resetError
} = applicationsSlice.actions;

export default applicationsSlice.reducer;