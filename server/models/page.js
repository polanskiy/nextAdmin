const mongoose = require('mongoose');

const pageSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  elements: [{
    name: String,
    type: String,
    text: String,
  }],
}, { timestamps: true });

const Page = mongoose.model('Page', pageSchema);

module.exports = { Page };
