const callback = require('./callback');

function getBand(req, res, Band) {
  const { id } = req.params;
  if (id) {
    Band.findById(id, callback(res));
  } else {
    res.status(400);
  }
}

module.exports = getBand;
