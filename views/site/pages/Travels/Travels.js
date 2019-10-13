import React from 'react';
import Header from '../../elements/Header';
import TravelsList from '../../elements/TravelsList';
import BlockAbout from '../../elements/BlockAbout';

const Travels = ({ page, articles }) => (
  <div className="travelsBox">
    <Header title={page.title.value} headerClass="headerBox_travels" headerBg={page.images.header} />
    <TravelsList articles={articles} title="Наши лучшие направления!" route="travels" />
    <BlockAbout
      btnLink="/about"
      btnText="Узнать больше"
      aboutText={page.about.value}
      aboutImg={page.images.about}
    />
  </div>
);

export default Travels;
