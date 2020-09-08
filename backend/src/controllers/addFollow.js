const callback = require('./callback');

function addFollow(User) {
  return (req, res) => {
    const { id } = req.params;
    if (id) {
      User.findByIdAndUpdate(
        id,
        { $addToSet: { following: req.body.band } },
        callback(res)
      );
    } else {
      res.status(400);
    }
  };
}

module.exports = addFollow;
