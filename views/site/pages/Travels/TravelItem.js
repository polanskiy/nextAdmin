import React from 'react';
import xss from 'xss';
import Header from '../../elements/Header';
import TravelAbout from './TravelAbout';
import Slider from '../../elements/Slider';
import RequestForm from '../../elements/RequestForm';
import xssOptions from '../../../../utils/xssOptions';

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
          <React.Fragment>
            <div className="whiteBg">
              <div className="contentMidWrapper">
                <div dangerouslySetInnerHTML={{ __html: xss(article.text, xssOptions) }} />
                <div className="tac">
                  <button type="button" className="btn">Забронировать поездку</button>
                </div>
              </div>
            </div>
            <TravelAbout tabs={article.tabs} tabsBg={article.images.tabs} />
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
            <RequestForm footerImg={article.images.footer} />
          </React.Fragment>
        )
    }
  </div>
);

export default TravelItem;
