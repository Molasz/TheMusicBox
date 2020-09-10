const callback = require('./callback');

function getUser(User) {
  return (req, res) => {
    User.findOne({ userIdentifier: req.params.id })
      .populate('following', 'name city country logo')
      .exec((err, user) => {
        if (err) res.status(404);
        else if (user == null) {
          const userToCreate = {
            userIdentifier: req.params.id,
            user: req.body.nickname,
            bio: '...'
          };
          User.create(userToCreate, callback(res));
        } else {
          res.json(user);
          res.status(200);
        }
      });
  };
}

module.exports = getUser;
