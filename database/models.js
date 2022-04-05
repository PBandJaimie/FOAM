const mongoose = require('mongoose');

let pictureSchema = mongoose.Schema({
  url: String,
  lastModified: Date,
  tagged: Boolean
});

let Picture = mongoose.model('Picture', pictureSchema)

module.exports = {
  Picture
}