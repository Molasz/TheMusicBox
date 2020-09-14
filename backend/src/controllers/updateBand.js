const callback = require('./callback');

function updateBand(Band) {
  return (req, res) => {
    const { id } = req.params;
    Band.findByIdAndUpdate(id, req.body, callback(res));
  };
}

module.exports = updateBand;
