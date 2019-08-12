const mongoose = require('mongoose');

const pageSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  title: {
    type: String,
  },
  about: {
    type: String,
  },
  description: {
    type: String,
  },
  images: { type: Object },
}, { timestamps: true });

const Page = mongoose.model('Page', pageSchema);

module.exports = { Page };
