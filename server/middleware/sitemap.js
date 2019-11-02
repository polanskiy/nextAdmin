const { Article } = require('../models/article');
const { Travel } = require('../models/travel');

async function getUrls() {
  const articles = [];
  const travels = [];
  const res = await Article.find({ public: true }, { route: 1, _id: 0 });
  res.forEach((u) => { articles.push(`/blog/${u.route}`); });
  const ress = await Travel.find({ public: true }, { route: 1, _id: 0 });
  ress.forEach((u) => { travels.push(`/travels/${u.route}`); });
  return ['/', '/blog', '/travels', '/event', '/contacts', '/about', 'faq'].concat(articles, travels);
}

module.exports = getUrls;
