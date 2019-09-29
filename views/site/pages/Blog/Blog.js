import React from 'react';
import Header from '../../elements/Header';
import BlogList from './BlogList';
import RequestForm from '../../elements/RequestForm';

const Blog = ({ page, articles }) => (
  <div>
    <Header title={page.title.value} headerBg={page.images.header} />
    <BlogList />
    <RequestForm footerImg={page.images.footer} />
  </div>
);

export default Blog;
