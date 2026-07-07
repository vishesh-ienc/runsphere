// Run model placeholder
const mongoose = require('mongoose');

const RunSchema = new mongoose.Schema({});

module.exports = mongoose.model('Run', RunSchema);
