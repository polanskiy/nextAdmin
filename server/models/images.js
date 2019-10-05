const mongoose = require('mongoose');

const imageSchema = mongoose.Schema({
  slides: [{
    value: String,
  }],
}, { timestamps: true });

const Image = mongoose.model('Image', imageSchema);

module.exports = { Image };
