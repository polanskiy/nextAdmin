const routes = require('next-routes');

module.exports = routes()
  .add('admin', '/admin/pages');
// const routes = module.exports = require('next-routes')({
//   About: require('./views/About'),
// });
