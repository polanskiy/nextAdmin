const express = require('express');
const pagesRoute = require('./pages');
const articlesRoute = require('./articles');
const travelsRoute = require('./travels');
const imagesRoute = require('./images');
const { User } = require('../models/user');
const { auth } = require('../middleware/auth');
const mailer = require('../middleware/nodemailer');

const router = express.Router();

router.get('/auth', auth, (req, res) => {
  res.json({
    isAuth: true,
    id: req.user._id,
    login: req.user.login,
  });
});

// router.post('/register', (req, res) => {
//   const user = new User(req.body);
//   user.save((err, doc) => {
//     if (err) return res.status(400).send(err);
//     return res.status(200).json({
//       success: true,
//       user: doc,
//     });
//   });
// });

router.post('/mail', (req, res) => {
  const {
    title, phone, start, end, city, members, type, way, name, mail, wishes, text,
  } = req.body;
  const message = {
    to: 'info@dasyatravel.ru',
    subject: 'НОВЫЙ ЗАКАЗ',
  };
  if (title === 'Путешествия') {
    message.html = `<h2>Новый заказ ${title}</h2>
    <ul>
      <li>Номер телефона: ${phone}</li>
      <li>Дата вылета: ${start}</li>
      <li>Дата прилета: ${end}</li>
      <li>Город вылета: ${city}</li>
      <li>Число участников: ${members}</li>
      <li>Тип отдыха: ${type}</li>
      <li>Направление: ${way}</li>
    </ul>
  `;
  } else if (title === 'События') {
    message.html = `<h2>Новый заказ ${title}</h2>
    <ul>
      <li>Номер телефона: ${phone}</li>
      <li>Имя: ${name}</li>
      <li>E-mail: ${mail}</li>
      <li>Дата: ${start}</li>
      <li>Тип праздника: ${type}</li>
      <li>Число участников: ${members}</li>
      <li>Особые пожелание: ${wishes}</li>
    </ul>
  `;
  } else if (title === 'Вопрос') {
    message.html = `<h2>Новый ${title}</h2>
    <ul>
      <li>Номер телефона: ${phone}</li>
      <li>Имя: ${name}</li>
      <li>E-mail: ${mail}</li>
      <li>Сообщение: ${text}</li>
    </ul>
  `;
  }

  mailer(message);
  return res.json({ status: true });
});

router.post('/login', (req, res) => {
  const time = Date(Date.now()).toString();
  console.log(`someone try to login with ${req.body.login} and ${req.body.password} at ${time}`);
  User.findOne({ login: req.body.login }, (er, user) => {
    if (!user) return res.json({ isAuth: false, error: 'Неверные данные' });
    return user.comparePass(req.body.password, (errr, isMatch) => {
      if (!isMatch) return res.json({ isAuth: false, error: 'Неверные данные' });

      return user.generateToken((err, userr) => {
        if (err) return res.status(200).send(err);
        return res.cookie('auth', userr.token, { maxAge: 2 * 60 * 60 * 1000 }).json({
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
router.use('/travels', travelsRoute);
router.use('/images', imagesRoute);

module.exports = router;
