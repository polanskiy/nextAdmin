const express = require('express');
const next = require('next');
const routes = require('./routes');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = routes.getRequestHandler(app);

app.prepare()
  .then(() => {
    const server = express();
    server.post('/api/login', (req, res) => res.json({
      isAuth: true,
    }));

    server.get('/api/pages', (req, res) => res.json({
      pages: [1, 2, 3],
    }));

    server.get('/admin', (req, res) => {
      const actualPage = '/admin';
      app.render(req, res, actualPage);
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
