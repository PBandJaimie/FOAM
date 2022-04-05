const mongoose = require('mongoose');

let pictureSchema = mongoose.Schema({
  url: String,
  lastModified: Date
});

let Picture = mongoose.model('Picture', pictureSchema)

module.exports = {
  Picture
}