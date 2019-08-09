const mongoose = require('mongoose');

const pageSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  elements: [{
    name: String,
    value: String,
  }],
}, { timestamps: true });

const Page = mongoose.model('Page', pageSchema);

module.exports = { Page };
