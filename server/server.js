const express = require('express');
const next = require('next');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const routes = require('../routes');

const { imagesPath } = require('./config/paths');
const apiRouter = require('./routes/api');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = routes.getRequestHandler(app);

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/site', { useNewUrlParser: true });
mongoose.set('useCreateIndex', true);
mongoose.set('useFindAndModify', false);

app.prepare()
  .then(() => {
    const server = express();
    server.use(bodyParser.json());
    server.use(cookieParser());

    // FILES ROUTES
    server.use('/images', express.static(imagesPath));

    server.get('/admin', (req, res) => {
      const actualPage = '/admin';
      app.render(req, res, actualPage);
    });

    server.get('/travels', (req, res) => {
      const actualPage = '/travels';
      app.render(req, res, actualPage);
    });

    // server.get('/contacts/:id', (req, res) => {
    //   const actualPage = '/contacts';
    //   const query = { title: req.params.id };
    //   app.render(req, res, actualPage, query);
    // });

    server.use('/api', apiRouter);

    server.get('*', (req, res) => handle(req, res));

    server.use(handle).listen(3000, (err) => {
      if (err) throw err;
      console.log('run on port 3000');
    });
  })
  .catch((ex) => {
    console.error('123');
    process.exit(1);
  });
