function callback(res, err, response) {
  if (err) {
    res.status(400);
    res.send(err);
  } else {
    res.status(200);
    res.json(response);
  }
}

module.exports = callback;
