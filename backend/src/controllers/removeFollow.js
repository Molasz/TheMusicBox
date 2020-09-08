const callback = require('./callback');

function removeFollow(User) {
  return (req, res) => {
    const { id } = req.params;
    if (id) {
      User.findByIdAndUpdate(
        id,
        { $pull: { following: req.body.band } },
        callback(res)
      );
    } else {
      res.status(400);
    }
  };
}

module.exports = removeFollow;
