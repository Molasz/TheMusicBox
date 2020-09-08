function followersBand(User) {
  return (req, res) => {
    const { id } = req.params;
    if (id) {
      User.find({ following: id }, (err, followers) => {
        if (err) res.send(err);
        else {
          res.status(200);
          res.send(`${followers.length}`);
        }
      });
    } else {
      res.status(400);
    }
  };
}

module.exports = followersBand;
