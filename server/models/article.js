const mongoose = require('mongoose');

const articleSchema = mongoose.Schema({
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
  images: { type: Object },
  public: Boolean,
  position: Number,
  author: {
    type: String,
    default: 'n/a',
  },
}, { timestamps: true });

const Article = mongoose.model('Article', articleSchema);

module.exports = { Article };
