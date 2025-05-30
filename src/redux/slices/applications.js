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

// Helper function to safely access array length
const safeArrayLength = (arr) => {
  return Array.isArray(arr) ? arr.length : 0;
};

const applicationsSlice = createSlice({
  name: 'applications',
  initialState: {
    applications: [],
    applicationStatus: {},
    notifications: [], // Always initialize as empty array
    unreadNotificationCount: 0,
    loadingApplications: false,
    applyingToJob: false,
    error: null,
    loading: false
  },
  reducers: {
    markNotificationAsRead: (state, action) => {
      // Ensure notifications is an array
      if (!Array.isArray(state.notifications)) {
        state.notifications = [];
        return;
      }
      
      const notificationId = action.payload;
      const notification = state.notifications.find(n => n.id === notificationId);
      if (notification && !notification.isRead) {
        notification.isRead = true;
        notification.readAt = new Date().toISOString();
        notification.expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString(); // 7 days from read
        state.unreadNotificationCount = Math.max(0, state.unreadNotificationCount - 1);
      }
    },
    markAllNotificationsAsRead: (state) => {
      // Ensure notifications is an array
      if (!Array.isArray(state.notifications)) {
        state.notifications = [];
        return;
      }
      
      const currentTime = new Date().toISOString();
      const expireTime = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString();
      
      state.notifications.forEach(notification => {
        if (!notification.isRead) {
          notification.isRead = true;
          notification.readAt = currentTime;
          notification.expiresAt = expireTime;
        }
      });
      state.unreadNotificationCount = 0;
    },
    cleanupExpiredNotifications: (state) => {
      // Ensure notifications is an array before accessing length
      if (!Array.isArray(state.notifications)) {
        state.notifications = [];
        state.unreadNotificationCount = 0;
        return;
      }
      
      const currentTime = new Date().toISOString();
      const initialLength = state.notifications.length;
      
      state.notifications = state.notifications.filter(notification => {
        return !notification.expiresAt || notification.expiresAt > currentTime;
      });
      
      // Recalculate unread count in case expired notifications were unread
      state.unreadNotificationCount = state.notifications.filter(n => !n.isRead).length;
    },
    createNotification: (state, action) => {
      // Ensure notifications is an array
      if (!Array.isArray(state.notifications)) {
        state.notifications = [];
      }
      
      const { applicationId, jobTitle, companyName, status, type } = action.payload;
      const notificationId = `${applicationId}_${status}_${Date.now()}`;
      
      const notification = {
        id: notificationId,
        applicationId,
        jobTitle,
        companyName,
        status,
        type, // 'status_change'
        message: status === 'accepted' 
          ? `Great news! Your application for ${jobTitle} at ${companyName} has been accepted.`
          : `Your application for ${jobTitle} at ${companyName} has been rejected.`,
        createdAt: new Date().toISOString(),
        isRead: false,
        readAt: null,
        expiresAt: null
      };
      
      state.notifications.unshift(notification);
      state.unreadNotificationCount += 1;
    },
    clearAllNotifications: (state) => {
      state.notifications = [];
      state.unreadNotificationCount = 0;
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
        
        // Ensure applications is an array
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
        const newApplications = action.payload || [];
        const oldApplications = state.applications || [];

        // Ensure notifications is an array
        if (!Array.isArray(state.notifications)) {
          state.notifications = [];
        }

        // Check for status changes and create notifications
        newApplications.forEach(newApp => {
          const oldApp = oldApplications.find(app => app.id === newApp.id);
          
          if (oldApp && oldApp.status !== newApp.status) {
            // Status changed - create notification for accepted or rejected
            if (newApp.status === 'accepted' || newApp.status === 'rejected') {
              const notificationId = `${newApp.id}_${newApp.status}_${Date.now()}`;
              
              // Check if notification already exists to avoid duplicates
              const existingNotification = state.notifications.find(
                n => n.applicationId === newApp.id && n.status === newApp.status
              );
              
              if (!existingNotification) {
                const notification = {
                  id: notificationId,
                  applicationId: newApp.id,
                  jobTitle: newApp.job?.title || 'Job',
                  companyName: newApp.job?.employer?.companyName || 'Company',
                  status: newApp.status,
                  type: 'status_change',
                  message: newApp.status === 'accepted' 
                    ? `Great news! Your application for ${newApp.job?.title || 'the position'} at ${newApp.job?.employer?.companyName || 'the company'} has been accepted.`
                    : `Your application for ${newApp.job?.title || 'the position'} at ${newApp.job?.employer?.companyName || 'the company'} has been rejected.`,
                  createdAt: new Date().toISOString(),
                  isRead: false,
                  readAt: null,
                  expiresAt: null
                };
                
                state.notifications.unshift(notification);
                state.unreadNotificationCount += 1;
              }
            }
          }
        });

        state.applications = newApplications;
        newApplications.forEach(app => {
          state.applicationStatus[app.jobId] = 'applied';
        });
      })
      .addCase(getApplicantApplications.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.error || 'Failed to fetch applications';
      })

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
      });
  }
});

export const { 
  resetApplicationStatus,
  markNotificationAsRead,
  markAllNotificationsAsRead,
  cleanupExpiredNotifications,
  createNotification,
  clearAllNotifications
} = applicationsSlice.actions;

export default applicationsSlice.reducer;