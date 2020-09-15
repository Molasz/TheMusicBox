const callback = require('./callback');

function newDisc(Band) {
  return (req, res) => {
    const { id } = req.params;
    Band.findByIdAndUpdate(
      id,
      { $addToSet: { discography: req.body } },
      { new: true }
    )
      .populate({
        path: 'discography',
        populate: { path: 'img', model: 'image' }
      })
      .exec(callback(res));
  };
}

module.exports = newDisc;
