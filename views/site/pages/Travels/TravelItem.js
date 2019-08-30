import React from 'react';
import Header from '../../elements/Header';
import TravelAbout from './TravelAbout';
import Slider from '../../elements/Slider';
import RequestForm from '../../elements/RequestForm';

const TravelItem = ({ article }) => {
  console.log('article', article);
  return (
    <div className="travelItemBox">
      <Header title={article.title} headerBg={article.images.header} noSearch />
      <div className="whiteBg">
        <div className="contentMidWrapper travelItemDescrBox">
          <div className="travelItemDescrText">
            {article.text}
          </div>
          <button type="button" className="btn">Забронировать поездку</button>
        </div>
      </div>
      <TravelAbout tabs={article.tabs} tabsBg={article.images.tabs} />
      <Slider />
      <RequestForm footerImg={article.images.footer} />
    </div>
  );
};

export default TravelItem;
