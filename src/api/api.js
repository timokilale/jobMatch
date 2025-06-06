import axios from 'axios';

// Simple cache for GET requests
const cache = new Map();
const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes

const api = axios.create({
    baseURL: '/api',
    withCredentials: true,
    timeout: 10000, // 10 second timeout
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    },
});

api.interceptors.request.use(
    (config) => {
        // Add cache check for GET requests
        if (config.method === 'get') {
            const cacheKey = `${config.url}?${JSON.stringify(config.params)}`;
            const cached = cache.get(cacheKey);

            if (cached && Date.now() - cached.timestamp < CACHE_DURATION) {
                // Return cached response
                config.adapter = () => Promise.resolve({
                    data: cached.data,
                    status: 200,
                    statusText: 'OK',
                    headers: {},
                    config
                });
            }
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

api.interceptors.response.use(
    (response) => {
        // Cache GET responses
        if (response.config.method === 'get' && response.status === 200) {
            const cacheKey = `${response.config.url}?${JSON.stringify(response.config.params)}`;
            cache.set(cacheKey, {
                data: response.data,
                timestamp: Date.now()
            });
        }
        return response;
    },
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