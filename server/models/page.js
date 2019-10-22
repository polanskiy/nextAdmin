const mongoose = require('mongoose');

const pageSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  title: {
    type: Object,
  },
  about: {
    type: Object,
  },
  description: {
    type: Object,
  },
  slider: {
    type: Object,
  },
  images: { type: Object },
  slides: [{
    name: String,
    value: String,
    id: String,
  }],
  meta: {
    title: String,
    description: String,
  },
}, { timestamps: true });

const Page = mongoose.model('Page', pageSchema);

module.exports = { Page };
