const mongoose = require('mongoose');

const travelSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  route: {
    type: String,
    required: true,
  },
  text: {
    type: String,
  },
  tabs: [{
    name: String,
    value: String,
    icon: String,
    id: String,
  }],
  images: { type: Object },
  slides: [{
    name: String,
    value: String,
    id: String,
  }],
  public: Boolean,
  position: Number,
  author: {
    type: String,
    default: 'n/a',
  },
}, { timestamps: true });

const Travel = mongoose.model('Travel', travelSchema);

module.exports = { Travel };
