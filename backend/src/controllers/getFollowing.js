const callback = require('./callback');

function getFollowing(User) {
  return (req, res) => {
    const { id } = req.params;
    User.findById(id, 'following')
      .populate('following', 'name city country logo')
      .exec(callback(res));
  };
}

module.exports = getFollowing;
