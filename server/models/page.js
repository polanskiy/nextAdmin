const mongoose = require('mongoose');

const pageSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  title: {
    type: String,
  },
  description: {
    type: String,
  },
  slider: {
    type: mongoose.ObjectId,
  },
}, { timestamps: true });

const Page = mongoose.model('Page', pageSchema);

module.exports = { Page };
