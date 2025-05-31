import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:5000/api',
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    },
});

api.interceptors.request.use(
    (config) => {
       
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

api.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response?.status === 401) {
            // Clear token from localStorage
            localStorage.removeItem('token');
            
            // Redirect to login
            window.location.href = '/login';
        }
        return Promise.reject(error);
    }
);

function getTokenFromStorage() {
    try {
        return localStorage.getItem('token');
    } catch (error) {
        return null;
    }
}

export default api;