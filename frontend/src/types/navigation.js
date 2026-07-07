// Navigation type definitions
// Documents the expected structure of navigation-related objects

/**
 * @typedef {Object} NavigationState
 * @property {boolean} isActive - Whether navigation is currently active
 * @property {Route|null} activeRoute - The route being navigated
 * @property {number} currentWaypointIndex - Index of the current waypoint
 * @property {{lat: number, lng: number}} currentPosition - User's current GPS position
 * @property {number} distanceCovered - Distance covered in meters
 * @property {number} elapsedTime - Time elapsed in seconds
 * @property {number} currentSpeed - Current speed in m/s
 * @property {number} currentPace - Current pace in min/km
 */

/**
 * @typedef {Object} NavigationUpdate
 * @property {{lat: number, lng: number}} position - Updated GPS position
 * @property {number} timestamp - Unix timestamp of the update
 * @property {number} speed - Speed at this point in m/s
 * @property {number} altitude - Altitude in meters
 */
