import React from 'react';
import Header from '../../elements/Header';
import BlogList from './BlogList';
import RequestForm from '../../elements/RequestForm';

const Blog = () => (
  <div>
    <Header title="Блог Самые интересные и полезные статьи" headerBg="/static/images/blogHeaderBg.jpg" />
    <BlogList />
    <RequestForm />
  </div>
);

export default Blog;
