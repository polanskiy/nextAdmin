const mongoose = require('mongoose');

const articleSchema = mongoose.Schema({
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
    type: Object,
  },
  images: { type: Object },
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
  elements: [],
}, { timestamps: true });

const Article = mongoose.model('Article', articleSchema);

module.exports = { Article };
