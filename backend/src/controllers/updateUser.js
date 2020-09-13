const callback = require('./callback');

function updateUser(User) {
  return (req, res) => {
    const { id } = req.params;
    console.log(id);
    console.log(req.body);
    User.findByIdAndUpdate(id, req.body)
      .populate('following', 'name city country logo')
      .populate('band', 'name logo')
      .exec(callback(res));
  };
}

module.exports = updateUser;
