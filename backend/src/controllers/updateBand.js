const callback = require('./callback');

function updateBand(Band) {
  return (req, res) => {
    const { id } = req.params;
    Band.findByIdAndUpdate(id, req.body)
      .populate({
        path: 'discography',
        populate: { path: 'img', model: 'image' }
      })
      .exec(callback(res));
  };
}

module.exports = updateBand;
