const mongoose = require('mongoose');

const { Schema } = mongoose;

const userModel = new Schema({
  userIdentifier: { type: String },
  user: { type: String },
  bio: { type: String },
  following: [{ type: mongoose.Schema.Types.ObjectId, ref: 'bands' }]
});

module.exports = mongoose.model('users', userModel);
