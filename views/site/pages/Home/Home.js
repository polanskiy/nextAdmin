import React from 'react';
import Header from '../../elements/Header';
import RequestForm from '../../elements/RequestForm';
import HomeAdvantages from './HomeAdvantages';
import BlockAbout from '../../elements/BlockAbout';

const Home = ({ page }) => (
  <div className="homePageBox">
    <Header title={page.title.value} headerBg={page.images.header} />
    <BlockAbout aboutText={page.about.value} aboutImg={page.images.about} />
    <HomeAdvantages descriptionText={page.description.value} descriptionImg={page.images.description} />
    <RequestForm footerImg={page.images.footer} />
  </div>
);
export default Home;
