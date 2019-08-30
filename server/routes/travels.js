const express = require('express');
const { Travel } = require('../models/travel');

const router = express.Router();

router.get('/', (req, res) => {
  Travel.find().exec((err, doc) => {
    if (err) return res.status(400).send(err);
    return res.send(doc);
  });
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  const { byRoute } = req.query;
  if (byRoute) {
    Travel.findOne({ route: id }, (err, doc) => {
      if (err) return res.status(400).send(err);
      return res.send(doc);
    });
  } else {
    Travel.findOne({ _id: id }, (err, doc) => {
      if (err) return res.status(400).send(err);
      return res.send(doc);
    });
  }
});

router.post('/', (req, res) => {
  const travel = new Travel(req.body);
  travel.save((err, doc) => {
    if (err) return res.status(400).send(err);
    return res.status(200).json({
      post: true,
      travelId: doc._id,
    });
  });
});

router.patch('/', (req, res) => {
  Travel.updateOne({ _id: req.body.id }, { $set: { ...req.body } }, (err, doc) => {
    if (err) return res.status(400).send(err);
    return res.status(200).json({
      update: true,
    });
  });
});

router.delete('/', (req, res) => {
  const { id } = req.query;
  Travel.findByIdAndDelete(id, (err) => {
    if (err) return res.status(400).send(err);
    return res.json(true);
  });
});

module.exports = router;
