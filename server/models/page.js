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
  images: { type: Object },
}, { timestamps: true });

const Page = mongoose.model('Page', pageSchema);

module.exports = { Page };
