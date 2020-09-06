const mongoose = require('mongoose');

const { Schema } = mongoose;

const bandModel = new Schema({
  name: { type: String },
  bio: { type: String },
  logo: { type: String },
  banner: { type: String },
  discography: [
    {
      title: { type: String },
      img: { type: String },
      date: { type: String },
      songs: [
        {
          title: { type: String },
          time: { type: String }
        }
      ]
    }
  ],
  concerts: [
    {
      date: { type: String },
      city: { type: String }
    }
  ],
  photos: [String],
  socialNetwork: {
    twitter: { type: String },
    facebook: { type: String },
    instagram: { type: String }
  }
});

module.exports = mongoose.model('bands', bandModel);
