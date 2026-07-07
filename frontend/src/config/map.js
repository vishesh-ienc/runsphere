// Map Configuration
// Centralizes map-related configuration constants

import { MAPBOX_ACCESS_TOKEN } from './api';

// Mapbox GL JS configuration
export const MAP_CONFIG = {
  accessToken: MAPBOX_ACCESS_TOKEN,
  style: 'mapbox://styles/mapbox/streets-v12',
  defaultCenter: [72.8777, 19.0760], // Mumbai [lng, lat]
  defaultZoom: 13,
  minZoom: 3,
  maxZoom: 18,
};

// Geocoding configuration
export const GEOCODING_CONFIG = {
  // Mapbox Geocoding API (uses same access token)
  baseUrl: 'https://api.mapbox.com/geocoding/v5/mapbox.places',
  limit: 5,          // Max results per search
  country: 'IN',     // Default country bias
  language: 'en',    // Response language
};
