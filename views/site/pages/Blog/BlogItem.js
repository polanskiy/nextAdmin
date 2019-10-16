import React from 'react';
import xss from 'xss';
import Header from '../../elements/Header';
import xssOptions from '../../../../utils/xssOptions';

const BlogItem = ({ article }) => (
  <div className="travelItemBox">
    <Header
      title={article.public ? article.title : 'Такого путешествия нет'}
      subtitle={article.public ? article.subtitle : ''}
      headerBg={article.images.header}
      noSearch
    />
    {article.public
        && (
        <div className="whiteBg">
          <div className="contentMidWrapper">
            <div className="blogTextBox" dangerouslySetInnerHTML={{ __html: xss(article.text, xssOptions) }} />
          </div>
        </div>
        )}
  </div>
);

export default BlogItem;
