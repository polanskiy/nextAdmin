const express = require('express');
const { Page } = require('../models/page');
const { auth } = require('../middleware/auth');

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
    if (err) return res.status(400).send(err);
    return res.send(doc);
  });
});

router.post('/', auth, (req, res) => {
  if (req.isAuth) {
    const page = new Page(req.body);
    page.save((err, doc) => {
      if (err) return res.status(400).send(err);
      return res.status(200).json({
        post: true,
        pageId: doc._id,
      });
    });
  } else {
    return res.status(401).json({
      isAuth: false,
    });
  }
});

router.patch('/', auth, (req, res) => {
  if (req.isAuth) {
    Page.updateOne({ _id: req.body._id }, { $set: { ...req.body } }, (err, doc) => {
      if (err) return res.status(400).send(err);
      return res.status(200).json({
        update: true,
      });
    });
  } else {
    return res.status(401).json({
      isAuth: false,
    });
  }
});

router.delete('/', auth, (req, res) => {
  if (req.isAuth) {
    const { id } = req.query;
    Page.findByIdAndDelete(id, (err) => {
      if (err) return res.status(400).send(err);
      return res.json(true);
    });
  } else {
    return res.status(401).json({
      isAuth: false,
    });
  }
});

module.exports = router;
