// Health routes placeholder
const express = require('express');
const router = express.Router();

// GET /api/v1/health
router.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok' });
});

module.exports = router;
