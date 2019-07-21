const express = require('express');
const next = require('next');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const routes = require('../routes');
const { Article } = require('./models/article');
const { Page } = require('./models/page');
const { User } = require('./models/user');
const { auth } = require('./middleware/auth');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = routes.getRequestHandler(app);

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/site', { useNewUrlParser: true });
mongoose.set('useCreateIndex', true);

app.prepare()
  .then(() => {
    const server = express();
    server.use(bodyParser.json());
    server.use(cookieParser());

    server.post('/api/login', (req, res) => res.json({
      isAuth: true,
    }));

    // server.get('/api/pages', (req, res) => res.json({
    //   pages: [1, 2, 3],
    // }));

    server.get('/admin', (req, res) => {
      const actualPage = '/admin';
      app.render(req, res, actualPage);
    });

    // GET
    server.get('/api/auth', auth, (req, res) => {
      res.json({
        isAuth: true,
        id: req.user._id,
        login: req.user.login,
      });
    });

    server.get('/api/products', (req, res) => {
      res.status(200).send({
        name: 'wtfs',
      });
    });

    server.get('/api/pages', (req, res) => {
      console.log('wow');
      Page.find().exec((err, doc) => {
        if (err) return res.status(400).send(err);
        return res.send(doc);
      });
    });

    server.get('/api/logout', auth, (req, res) => {
      req.user.deleteToken(req.token, (err) => {
        if (err) return res.status(400).send(err);
        return res.sendStatus(200);
      });
    });

    // POST
    server.post('/api/article', (req, res) => {
      const article = new Article(req.body);
      article.save((err, doc) => {
        if (err) return res.status(400).send(err);
        return res.status(200).json({
          post: true,
          articleId: doc._id,
        });
      });
    });

    server.post('/api/page', (req, res) => {
      const page = new Page(req.body);
      page.save((err, doc) => {
        if (err) return res.status(400).send(err);
        return res.status(200).json({
          post: true,
          pageId: doc._id,
        });
      });
    });

    server.post('/api/register', (req, res) => {
      const user = new User(req.body);

      user.save((err, doc) => {
        if (err) return res.status(400).send(err);
        return res.status(200).json({
          success: true,
          user: doc,
        });
      });
    });

    server.post('/api/login', (req, res) => {
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

    // DELETE
    server.delete('/api/pageDelete', (req, res) => {
      const { id } = req.query;
      Page.findByIdAndDelete(id, (err) => {
        if (err) return res.status(400).send(err);
        return res.json(true);
      });
    });

    server.get('*', (req, res) => handle(req, res));

    server.use(handle).listen(3000, (err) => {
      if (err) throw err;
      console.log('run on port 3000');
    });
  })
  .catch((ex) => {
    console.error(ex.stack);
    process.exit(1);
  });
