const callback = require('./callback');

function getBand(Band) {
  return (req, res) => {
    const { id } = req.params;
    Band.findById(id).exec(callback(res));
  };
}

module.exports = getBand;
