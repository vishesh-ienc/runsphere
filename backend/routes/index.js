// Main router - aggregates all route modules
const express = require('express');
const router = express.Router();

const userRoutes = require('./user');
const routeRoutes = require('./route');
const navigationRoutes = require('./navigation');
const healthRoutes = require('./health');

router.use('/', userRoutes);
router.use('/', routeRoutes);
router.use('/', navigationRoutes);
router.use('/', healthRoutes);

module.exports = router;
