const express = require('express');
const { Page } = require('../models/page');

const router = express.Router();

router.get('/', (req, res) => {
  console.log('wow');
  Page.find().exec((err, doc) => {
    if (err) return res.status(400).send(err);
    return res.send(doc);
  });
});

router.post('/', (req, res) => {
  const page = new Page(req.body);
  page.save((err, doc) => {
    if (err) return res.status(400).send(err);
    return res.status(200).json({
      post: true,
      pageId: doc._id,
    });
  });
});

router.patch('/1', (req, res) => {
  Page.updateOne({ 'elements._id': req.body.id }, { $set: { 'elements.$.value': req.body.value } }, (err, doc) => {
    if (err) return res.status(400).send(err);
    console.log('doc', doc);
    return res.status(200).json({
      update: true,
    });
  });
});

router.delete('/', (req, res) => {
  const { id } = req.query;
  Page.findByIdAndDelete(id, (err) => {
    if (err) return res.status(400).send(err);
    return res.json(true);
  });
});

module.exports = router;
