const express = require('express');
const { Article } = require('../models/article');

const router = express.Router();

router.post('/api/article', (req, res) => {
  const article = new Article(req.body);
  article.save((err, doc) => {
    if (err) return res.status(400).send(err);
    return res.status(200).json({
      post: true,
      articleId: doc._id,
    });
  });
});

module.exports = router;
