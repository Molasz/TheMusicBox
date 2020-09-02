const mongoose = require('mongoose');

const { Schema } = mongoose;

const bandModel = new Schema({
  user: { type: String },
  password: { type: String },
  name: { type: String },
  bio: { type: String },
  logo: { type: String },
  banner: { type: String },
  discography: [
    {
      title: { type: String },
      img: { type: String },
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
  photos: [String]
});

module.exports = mongoose.model('bands', bandModel);
