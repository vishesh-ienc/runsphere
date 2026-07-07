// User routes placeholder
const express = require('express');
const router = express.Router();

// POST /api/v1/signup
router.post('/signup', (req, res) => {
  res.status(501).json({ message: 'Not implemented' });
});

// POST /api/v1/login
router.post('/login', (req, res) => {
  res.status(501).json({ message: 'Not implemented' });
});

module.exports = router;
