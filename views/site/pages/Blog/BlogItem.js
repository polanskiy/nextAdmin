import React from 'react';
import xss from 'xss';
import Header from '../../elements/Header';
import xssOptions from '../../../../utils/xssOptions';

const BlogItem = ({ article }) => {
  const renderElemenets = () => {
    console.log('article', article);
    return article.elements.map((item) => {
      switch (item.type) {
        case 'text':
          return (
            <div
              key={item.id}
              className="whiteBg"
              style={{ background: `${item.gradient}, url(${item.image.value}) ${item.image.repeat}` }}
            >
              <div className="contentMidWrapper">
                <div
                  className="blogTextBox"
                  dangerouslySetInnerHTML={{ __html: xss(item.text, xssOptions) }}
                />
              </div>
            </div>
          );
        case 'tabs':
          return (
            <div
              key={item.id}
              className="whiteBg"
              style={{ background: `${item.gradient}, url(${item.image.value}) ${item.image.repeat}` }}
            >
              <div className="contentMidWrapper">
                <div
                  className="blogTextBox"
                  dangerouslySetInnerHTML={{ __html: xss(item.text, xssOptions) }}
                />
              </div>
            </div>
          );

        default:
          break;
      }
    });
  };

  return (
    <div className="travelItemBox">
      <Header
        title={article.public ? article.title : 'Такого путешествия нет'}
        subtitle={article.public ? article.subtitle : ''}
        headerBg={article.images.header}
        noSearch
      />
      {article.public
        && (
          <>
            {renderElemenets()}
          </>
        )}
    </div>
  );
};

export default BlogItem;
