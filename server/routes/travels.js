const express = require('express');
const fs = require('fs-extra');
const { Travel } = require('../models/travel');
const { auth } = require('../middleware/auth');
const staticPathes = require('../config/paths');

const { imagesPath } = staticPathes;

const router = express.Router();

router.get('/', auth, (req, res) => {
  const { onlyPublic } = req.query;
  if (onlyPublic) {
    Travel.find({ public: true }).exec((err, doc) => {
      if (err) return res.status(400).send(err);
      return res.send(doc);
    });
  } else if (req.isAuth) {
    Travel.find().exec((err, doc) => {
      if (err) return res.status(400).send(err);
      return res.send(doc);
    });
  } else {
    return res.status(401).json({
      isAuth: false,
    });
  }
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

router.post('/', auth, (req, res) => {
  if (req.isAuth) {
    const travel = new Travel(req.body);
    travel.save((err, doc) => {
      if (err) return res.status(400).send(err);
      return res.status(200).json({
        post: true,
        travelId: doc._id,
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
    Travel.updateOne({ _id: req.body._id }, { $set: { ...req.body } }, (err) => {
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

router.delete('/:id', auth, (req, res) => {
  if (req.isAuth) {
    const { id } = req.params;
    fs.remove(`${imagesPath}/${id}`);
    Travel.findByIdAndDelete({ _id: id }, (err) => {
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
