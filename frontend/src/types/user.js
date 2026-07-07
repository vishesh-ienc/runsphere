// User type definitions
// Documents the expected structure of user-related objects

/**
 * @typedef {Object} User
 * @property {string} id - Unique user identifier
 * @property {string} email - User email address
 * @property {string} name - Display name
 * @property {string} createdAt - ISO timestamp of account creation
 */

/**
 * @typedef {Object} AuthState
 * @property {User|null} user - Current authenticated user
 * @property {string|null} token - JWT authentication token
 * @property {boolean} isAuthenticated - Whether user is logged in
 * @property {boolean} isLoading - Whether auth state is being resolved
 */
