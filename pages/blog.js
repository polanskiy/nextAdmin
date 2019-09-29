import React from 'react';
import axios from 'axios';
import BlogPage from '../views/site/pages/Blog/Blog';
import BlogItem from '../views/site/pages/Blog/BlogItem';

const Blog = ({ article, page, articles }) => {
  const renderArticle = () => {
    if (article !== 'blog' && article) {
      return <BlogItem article={article} />;
    }
    return <BlogPage page={page} articles={articles} />;
  };
  return (
    <div className="travelsBox">
      {renderArticle()}
    </div>
  );
};

Blog.getInitialProps = async (props) => {
  const { query, req } = props;
  const axioscfg = req ? { baseURL: 'http://localhost:3000' } : {};
  let blogPage = {};
  let articles = [];
  let article;

  try {
    const res = await axios.get('/api/pages/blog', axioscfg);
    articles = await axios.get('/api/articles/?onlyPublic=1', axioscfg);
    blogPage = res.data;
  } catch (e) {
    console.log('err main getinitialprops');
  }
  if (query.article) {
    try {
      const res = await axios.get(`/api/articles/${query.article}/?byRoute=1`, axioscfg);
      article = res.data;
    } catch (e) {
      console.log('err main getinitialprops');
    }
  }

  return { article, page: blogPage, articles: articles.data };
};

export default Blog;
