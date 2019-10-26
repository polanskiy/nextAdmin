import React from 'react';
import xss from 'xss';
import { Link } from '../../../../routes';
import Header from '../../elements/Header';
import Slider from '../../elements/Slider';
import xssOptions from '../../../../utils/xssOptions';
import RenderTabs from '../../elements/Tabs/RenderTabs';

const TravelItem = ({ article }) => (
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
            <div className="whiteBg">
              <div className="contentMidWrapper">
                <div dangerouslySetInnerHTML={{ __html: xss(article.text, xssOptions) }} />
                <div className="tac">
                  <Link route="/contacts/form">
                    <button type="button" className="btn">Забронировать поездку</button>
                  </Link>
                </div>
              </div>
            </div>
            <RenderTabs tabs={article.tabs} tabsBg={article.images.tabs} />
            {article.slides.length ? (
              <div className="sliderBox">
                <Slider
                  slides={article.slides}
                  className="travelSlider"
                  dots
                  colorArr="#000"
                  slidesToShow={1}
                  fade={false}
                />
              </div>
            ) : null}
          </>
        )}
  </div>
);

export default TravelItem;
