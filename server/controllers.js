const db = require('./../database/index.js');
const models = require('./../database/models.js');
const helpers = require('./helpers.js');

exports.getPictures = (req, res) => {
  let filter = req.query.view;
  let pageNum = req.query.page;
  let totalPages;
  let whichPics;

  if (filter === 'all') {
    models.Picture.find({}).count()
      .then((total) => {
        totalPages = helpers.totalPages(total);
        whichPics = helpers.mapPicsToPages(pageNum);
        let greaterThan = whichPics.start;
        let lessThan = whichPics.end;
        return models.Picture.find({$and: [
          {pictureId: {
            $gte: greaterThan
          }},
          {pictureId: {
            $lte: lessThan
          }}
        ]});
      })
      .then((picsForPage) => {
        let resOfPicsAndTotal = {};
        resOfPicsAndTotal.picsForPage = picsForPage;
        resOfPicsAndTotal.totalPages = totalPages;
        return res.status(200).send(resOfPicsAndTotal);
      })
      .catch((err) => {
        console.log('ERROR in getPictures: ', err);
        return res.status(404).end();
      })
  } else {
    models.Picture.find({tagged: filter}).count()
      .then((total) => {
        totalPages = helpers.totalPages(total);
        whichPics = helpers.mapPicsToPages(pageNum);
        let greaterThan = whichPics.start;
        let lessThan = whichPics.end;
        return models.Picture.find({$and: [
          {tagged: filter},
          {pictureId: {
            $gte: greaterThan
          }},
          {pictureId: {
            $lte: lessThan
          }}
        ]});
      })
      .then((picsForPage) => {
        let resOfPicsAndTotal = {};
        resOfPicsAndTotal.picsForPage = picsForPage;
        resOfPicsAndTotal.totalPages = totalPages;
        return res.status(200).send(resOfPicsAndTotal);
      })
      .catch((err) => {
        console.log('ERROR in getPictures: ', err);
        return res.status(404).end();
      })
  }
}

exports.updatePicture = (req, res) => {
  let picId = req.body.picId;
  let picIsTaggedAs = req.body.classification;

  let filter = {pictureId: picId};
  let update = {tagged: picIsTaggedAs};
  let options = {upsert: true, new: true};

  models.Picture.findOneAndUpdate(filter, update, options)
    .then((data) => {
      return res.status(201).send(data);
    })
    .catch((err) => {
      console.log('ERROR in Server\'s updatePicture: ', err);
      return res.sendStatus(404);
    })
}