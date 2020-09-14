const callback = require('./callback');

function newDisc(Band) {
  return (req, res) => {
    const { id } = req.params;
    const newDisc = {
      title: req.body.title,
      date: req.body.date,
      songs: req.body.songs,
      img:
        'https://goldrecord.shop/wp-content/uploads/2018/08/Disco-de-vinilo-12P-IDP.jpg'
    };
    Band.findByIdAndUpdate(
      id,
      { $addToSet: { discography: newDisc } },
      callback(res)
    );
  };
}

module.exports = newDisc;
