import React from 'react';
import xss from 'xss';
import Header from '../../elements/Header';
import xssOptions from '../../../../utils/xssOptions';
import Slider from '../../elements/Slider';
import RenderTabs from '../../elements/Tabs/RenderTabs';

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
              style={{ background: `${item.gradient}, url(${item.image}) ${item.repeat}` }}
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
            <RenderTabs
              key={item.id}
              tabs={item.tabs}
              tabsBg={item.image}
              gradient={item.gradient}
              repeat={item.repeat}
            />
          );
        case 'slider':
          return (
            item.slides.length ? (
              <div
                className="sliderBox"
                style={{ background: `${item.gradient}, url(${item.image}) ${item.repeat}` }}
                key={item.id}
              >
                <Slider
                  slides={item.slides}
                  className="travelSlider"
                  dots
                  colorArr="#000"
                  slidesToShow={1}
                  fade={false}
                />
              </div>
            ) : null
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
