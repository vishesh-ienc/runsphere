// Express app configuration
const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());

// GET /
app.get('/', (req, res) => {
  res.json({ message: 'RunSphere API' });
});

app.use('/api/v1', routes);

module.exports = app;
