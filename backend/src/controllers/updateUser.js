const callback = require('./callback');

function updateUser(User) {
  return (req, res) => {
    const { id } = req.params;
    User.findByIdAndUpdate(id, req.body)
      .populate('following', 'name city country logo')
      .exec(callback(res));
  };
}

module.exports = updateUser;
