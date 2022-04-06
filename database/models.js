const mongoose = require('mongoose');

let pictureSchema = mongoose.Schema({
  pictureId: {
    type: Number,
    unique: true
  },
  url: String,
  lastModified: Date,
  tagged: Boolean
});

let Picture = mongoose.model('Picture', pictureSchema)

module.exports = {
  Picture
}