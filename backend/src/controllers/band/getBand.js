const callback = require('../callback');

function getBand(req, res, Band) {
  const { id } = req.params;
  if (id) {
    Band.findById(id, (err, response) => {
      response.password = undefined;
      response.user = undefined;
      callback(res, err, response);
    });
  } else {
    res.status(400);
  }
}

module.exports = getBand;
