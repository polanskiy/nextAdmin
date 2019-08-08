const express = require('express');
const { Page } = require('../models/page');

const router = express.Router();

router.get('/api/pages', (req, res) => {
  console.log('wow');
  Page.find().exec((err, doc) => {
    if (err) return res.status(400).send(err);
    return res.send(doc);
  });
});

router.post('/api/page', (req, res) => {
  const page = new Page(req.body);
  page.save((err, doc) => {
    if (err) return res.status(400).send(err);
    return res.status(200).json({
      post: true,
      pageId: doc._id,
    });
  });
});

router.delete('/api/pages', (req, res) => {
  const { id } = req.query;
  Page.findByIdAndDelete(id, (err) => {
    if (err) return res.status(400).send(err);
    return res.json(true);
  });
});

module.exports = router;
