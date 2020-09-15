const callback = require('./callback');

function newDisc(Band) {
  return (req, res) => {
    console.log(req.body);
    const { id } = req.params;
    Band.findByIdAndUpdate(
      id,
      { $addToSet: { discography: req.body } },
      { new: true }
    ).exec(callback(res));
  };
}

module.exports = newDisc;
