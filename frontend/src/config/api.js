// API Configuration
// Centralizes all API base URLs — never hardcode API URLs elsewhere

export const BACKEND_BASE_URL = import.meta.env.VITE_BACKEND_BASE_URL || 'http://localhost:5000';
export const PYTHON_SERVICE_BASE_URL = import.meta.env.VITE_PYTHON_SERVICE_BASE_URL || 'http://localhost:8000';
