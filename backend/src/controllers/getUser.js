function getBand(req, res, User) {
  User.findOne({ userIdentifier: req.params.id }, (err, user) => {
    if (err) res.send(404);
    else if (user == null) {
      const userToCreate = {
        userIdentifier: req.params.id,
        user: req.body.nickname
      };
      User.create(userToCreate, (error, newUser) => {
        if (error) res.send(404);
        else {
          res.json(newUser);
          res.status(200);
        }
      });
    } else {
      res.json(user);
      res.status(200);
    }
  });
}

module.exports = getBand;
