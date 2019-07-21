const mongoose = require('mongoose');

const articleSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    default: 'n/a',
  },
}, { timestamps: true });

const Article = mongoose.model('Article', articleSchema);

module.exports = { Article };
