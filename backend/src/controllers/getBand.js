const callback = require('./callback');

function getBand(Band) {
  return (req, res) => {
    const { id } = req.params;
    Band.findById(id)
      .populate({
        path: 'discography',
        populate: { path: 'img', model: 'image' }
      })
      .exec(callback(res));
  };
}

module.exports = getBand;
