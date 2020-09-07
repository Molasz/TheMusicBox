const callback = require('./callback');

function getBand(Band) {
  return (req, res) => {
    const { id } = req.params;
    if (id) {
      Band.findById(id, callback(res));
    } else {
      res.status(400);
    }
  };
}

module.exports = getBand;
