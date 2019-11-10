import React from 'react';
import axios from 'axios';
import BlogPage from '../views/site/pages/Blog/Blog';
import BlogItem from '../views/site/pages/Blog/BlogItem';
import Error from './_error';

const Blog = ({ page, articles }) => {
  const renderArticle = () => {
    console.log('page, articles', page, articles);
    if (articles) {
      return <BlogPage page={page} articles={articles} />;
    } if (page && page.title) {
      return <BlogItem article={page} />;
    } return <Error />;
  };
  return (
    <>
      {renderArticle()}
    </>
  );
};

Blog.getInitialProps = async (props) => {
  const { query, req } = props;
  const axioscfg = req ? { baseURL: 'http://localhost:3000' } : {};
  let blogPage;
  let articles = [];
  if (query.article) {
    try {
      const res = await axios.get(`/api/articles/${query.article}/?byRoute=1`, axioscfg);
      blogPage = res.data;
      console.log('blogPage', blogPage);
    } catch (e) {
      console.log('err Travels getinitialprops');
    }
  } else {
    try {
      const res = await axios.get('/api/pages/blog', axioscfg);
      articles = await axios.get('/api/articles/?onlyPublic=1', axioscfg);
      blogPage = res.data;
    } catch (e) {
      console.log('err Travels getinitialprops');
    }
  }
  if (blogPage) {
    return { page: blogPage, articles: articles.data };
  }
  return {};
};

export default Blog;
