const express = require('express');
const pagesRoute = require('./pages');
const articlesRoute = require('./articles');
const imagesRoute = require('./images');
const { User } = require('../models/user');
const { auth } = require('../middleware/auth');

const router = express.Router();

router.get('/auth', auth, (req, res) => {
  res.json({
    isAuth: true,
    id: req.user._id,
    login: req.user.login,
  });
});

router.post('/register', (req, res) => {
  const user = new User(req.body);
  user.save((err, doc) => {
    if (err) return res.status(400).send(err);
    return res.status(200).json({
      success: true,
      user: doc,
    });
  });
});

router.post('/login', (req, res) => {
  User.findOne({ login: req.body.login }, (er, user) => {
    if (!user) return res.json({ isAuth: false, error: 'Неверный логин' });
    return user.comparePass(req.body.password, (errr, isMatch) => {
      if (!isMatch) return res.json({ isAuth: false, error: 'Неверный пароль' });

      return user.generateToken((err, userr) => {
        if (err) return res.status(200).send(err);
        return res.cookie('auth', userr.token).json({
          isAuth: true,
          id: userr._id,
          login: userr.login,
          token: userr.token,
          role: userr.role,
        });
      });
    });
  });
});


router.use('/pages', pagesRoute);
router.use('/articles', articlesRoute);
router.use('/images', imagesRoute);

module.exports = router;
