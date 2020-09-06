const mongoose = require('mongoose');

const { Schema } = mongoose;

const userModel = new Schema({
  userIdentifier: { type: String },
  user: { type: String }
});

module.exports = mongoose.model('users', userModel);
