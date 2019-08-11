const routes = require('next-routes');

module.exports = routes()
  .add('admin', '/admin/:slug')
  .add('travels', '/travels/:article?');
