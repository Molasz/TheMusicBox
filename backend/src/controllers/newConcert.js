const callback = require('./callback');

function newConcert(Band) {
  return (req, res) => {
    const { id } = req.params;

    Band.findByIdAndUpdate(
      id,
      { $addToSet: { concerts: req.body } },
      callback(res)
    );
  };
}

module.exports = newConcert;
