// Route type definitions
// Documents the expected structure of route-related objects

/**
 * @typedef {Object} Route
 * @property {string} id - Unique route identifier
 * @property {Array<{lat: number, lng: number}>} waypoints - Ordered list of waypoints
 * @property {number} distance - Total distance in meters
 * @property {number} duration - Estimated duration in seconds
 * @property {number} elevation - Total elevation gain in meters
 * @property {string} createdAt - ISO timestamp of creation
 */

/**
 * @typedef {Object} RoutePreferences
 * @property {boolean} avoidHighways - Prefer routes without highways
 * @property {boolean} preferGreenSpaces - Prefer routes through parks/green areas
 * @property {boolean} optimizeAirQuality - Prefer routes with better air quality
 * @property {number} maxDistance - Maximum desired distance in meters
 */
