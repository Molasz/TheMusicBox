const mongoose = require('mongoose');

const { Schema } = mongoose;

const ImageModel = new Schema({
  logEntryId: { type: mongoose.Schema.ObjectId },
  path: { type: String },
  createdAt: { type: String, default: Date.now() }
});

module.exports = mongoose.model('image', ImageModel);
