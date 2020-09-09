const callback = require('./callback');

function searchBand(Band) {
  return (req, res) => {
    const { text } = req.params;
    Band.find(
      { name: { $regex: text } },
      'name city country tags bio logo',
      callback(res)
    );
  };
}

module.exports = searchBand;
