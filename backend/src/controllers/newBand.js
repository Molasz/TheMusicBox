const callback = require('./callback');

function newBand(User, Band) {
  return (req, res) => {
    const { id } = req.params;
    const defaultBandInfo = {
      name: 'band name',
      city: 'city',
      country: 'country',
      bio: 'biography',
      tags: [],
      logo: 'https://static.thenounproject.com/png/55431-200.png',
      banner:
        'https://pyxis.nymag.com/v1/imgs/280/a09/831956806c59629838ae46bd3e08255aaa-12-concerts.rsocial.w1200.jpg',
      discography: [],
      concerts: [],
      photos: [],
      socialNetwork: {
        twitter: 'twitter.com',
        facebook: 'facebook.com',
        instagram: 'instagram.com'
      }
    };

    Band.create(defaultBandInfo, (err, band) => {
      if (err) res.send(err);
      else {
        User.findByIdAndUpdate(id, { band: band._id })
          .populate('following', 'name city country logo')
          .exec(callback(res));
      }
    });
  };
}

module.exports = newBand;
