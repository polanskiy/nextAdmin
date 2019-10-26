const mongoose = require('mongoose');

const travelSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  subtitle: {
    type: String,
  },
  route: {
    type: String,
    required: true,
  },
  text: {
    type: String,
  },
  tabs: [],
  images: { type: Object },
  slides: [],
  public: Boolean,
  position: Number,
  author: {
    type: String,
    default: 'n/a',
  },
  meta: {
    title: String,
    description: String,
  },
}, { timestamps: true });

const Travel = mongoose.model('Travel', travelSchema);

module.exports = { Travel };
