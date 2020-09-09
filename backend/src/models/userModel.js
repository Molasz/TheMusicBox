const mongoose = require('mongoose');

const { Schema } = mongoose;

const userModel = new Schema({
  userIdentifier: { type: String },
  user: { type: String },
  bio: { type: String },
  following: [String]
});

module.exports = mongoose.model('users', userModel);
