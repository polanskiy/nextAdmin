import React from 'react';
import Header from '../../elements/Header';
import TravelsList from '../../elements/TravelsList';
import BlockAbout from '../../elements/BlockAbout';
import RequestForm from '../../elements/RequestForm';


const Travels = ({ page, articles }) => (
  <div className="travelsBox">
    <Header title={page.title.value} headerClass="headerBox_travels" headerBg={page.images.header} />
    <TravelsList articles={articles} />
    <BlockAbout aboutText={page.about.value} aboutImg={page.images.about} />
    <RequestForm footerImg={page.images.footer} />
  </div>
);

export default Travels;
