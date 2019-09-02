import React from 'react';
import Header from '../../elements/Header';
import TravelAbout from './TravelAbout';
import Slider from '../../elements/Slider';
import RequestForm from '../../elements/RequestForm';

const TravelItem = ({ article }) => (
  <div className="travelItemBox">
    <Header title={article.public ? article.title : 'Такого путешествия нет'} headerBg={article.images.header} noSearch />
    {article.public
        && (
          <React.Fragment>
            <div className="whiteBg">
              <div className="contentMidWrapper travelItemDescrBox">
                <div className="travelItemDescrText">
                  {article.text}
                </div>
                <button type="button" className="btn">Забронировать поездку</button>
              </div>
            </div>
            <TravelAbout tabs={article.tabs} tabsBg={article.images.tabs} />
            <Slider slides={article.slides} />
            <RequestForm footerImg={article.images.footer} />
          </React.Fragment>
        )
    }
  </div>
);

export default TravelItem;
