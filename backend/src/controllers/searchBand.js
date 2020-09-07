const callback = require('./callback');

function searchBand(Band) {
  return (req, res) => {
    const { text } = req.params;
    if (text) {
      Band.find({ name: { $regex: text } }, callback(res));
    } else {
      res.status(400);
    }
  };
}

module.exports = searchBand;
