import React from 'react';
import Header from '../../elements/Header';
import BlogList from './BlogList';

const Blog = ({ page, articles }) => (
  <div>
    <Header title={page.title.value} headerBg={page.images.header} />
    <BlogList />
  </div>
);

export default Blog;
