// API Configuration
// Centralizes all API base URLs — never hardcode API URLs elsewhere

// --- Internal Services ---
export const BACKEND_BASE_URL = import.meta.env.VITE_BACKEND_BASE_URL || 'http://localhost:5000';
export const PYTHON_SERVICE_BASE_URL = import.meta.env.VITE_PYTHON_SERVICE_BASE_URL || 'http://localhost:8000';

// --- Mapbox ---
// Used for Maps SDK (GL JS) and Geocoding on the frontend
// Sign up: https://account.mapbox.com/auth/signup/
export const MAPBOX_ACCESS_TOKEN = import.meta.env.VITE_MAPBOX_ACCESS_TOKEN || '';

// --- API Versioned Endpoints ---
export const API_BASE = `${BACKEND_BASE_URL}/api/v1`;
