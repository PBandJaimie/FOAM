const db = require('./../database/index.js');
const models = require('./../database/models.js');

exports.getPictures = (req, res) => {
  let picDescription = req.query.picDescription;
  let taggedPic;

  if (picDescription === 'tagged') {
    taggedPic = true;
  } else if (picDescription === 'untagged') {
    taggedPic = false;
  }

  if (picDescription === 'all') {
    models.Picture.find({}).limit(5)
      .then((data) => {
        return res.status(200).send(data);
      })
      .catch((err) => {
        console.log('ERROR in getData: ', err);
        return res.status(404).end();
      })
  } else {
    models.Picture.find({'tagged': taggedPic}).limit(5)
      .then((data) => {
        return res.status(200).send(data);
      })
  }
}