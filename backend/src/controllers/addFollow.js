const callback = require('./callback');

function addFollow(User) {
  return (req, res) => {
    const { id } = req.params;
    if (id) {
      console.log(req.body.band);
      User.findByIdAndUpdate(
        id,
        { $push: { following: req.body.band } },
        callback(res)
      );
    } else {
      res.status(400);
    }
  };
}

module.exports = addFollow;
