const mongoose = require('mongoose');

let pictureSchema = mongoose.Schema({
  pictureId: Number,
  url: String,
  lastModified: Date,
  tagged: String
});

let Picture = mongoose.model('Picture', pictureSchema)

module.exports = {
  Picture
}