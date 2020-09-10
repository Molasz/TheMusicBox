const callback = require('./callback');

function updateUser(User) {
  return (req, res) => {
    const { id } = req.params;
    User.findByIdAndUpdate(id, req.body, callback(res));
  };
}

module.exports = updateUser;
