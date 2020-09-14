const callback = require('./callback');

function removeConcert(Band) {
  return (req, res) => {
    const { id } = req.params;
    Band.findByIdAndUpdate(
      id,
      { $pull: { concerts: { _id: req.body.deleteId } } },
      callback(res)
    );
  };
}

module.exports = removeConcert;
