const express = require('express');
const { Page } = require('../models/page');

const router = express.Router();

router.get('/', (req, res) => {
  Page.find().exec((err, doc) => {
    if (err) return res.status(400).send(err);
    return res.send(doc);
  });
});

router.get('/:name', (req, res) => {
  const { name } = req.params;
  Page.findOne({ name }, (err, doc) => {
    console.log('docdocdocdocdocdocdocdocdocs', doc);

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

router.patch('/', (req, res) => {
  Page.updateOne({ _id: req.body._id }, { $set: { ...req.body } }, (err, doc) => {
    if (err) return res.status(400).send(err);
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
