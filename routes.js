const routes = require('next-routes');

module.exports = routes()
  .add('admin', '/admin/:slug/:id?')
  .add('travels', '/travels/:article?')
  .add('contacts', '/contacts/:id?');
