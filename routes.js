const routes = require('next-routes');

module.exports = routes()
  .add('portfolio', '/portfolio/:id');
// const routes = module.exports = require('next-routes')({
//   About: require('./views/About'),
// });
