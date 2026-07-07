// Preference model placeholder
const mongoose = require('mongoose');

const PreferenceSchema = new mongoose.Schema({});

module.exports = mongoose.model('Preference', PreferenceSchema);
