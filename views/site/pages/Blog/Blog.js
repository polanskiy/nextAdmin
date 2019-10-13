import React from 'react';
import Header from '../../elements/Header';
import TravelsList from '../../elements/TravelsList';

const Blog = ({ page, articles }) => (
  <div className="blogBox">
    <Header title={page.title.value} headerBg={page.images.header} />
    <TravelsList articles={articles} route="blog" />
  </div>
);

export default Blog;
