import React from 'react';
import Header from '../../elements/Header';
import RequestForm from '../../elements/RequestForm';
import BlockAbout from '../../elements/BlockAbout';
import ColorBox from '../../elements/ColorBox';

const Home = ({ page }) => (
  <div className="homePageBox">
    <Header title={page.title.value} headerBg={page.images.header} />
    <BlockAbout
      btnLink="/about"
      btnText="Узнать больше"
      aboutText={page.about.value}
      aboutImg={page.images.about}
    />
    <ColorBox text={page.description.value} colorBg={page.images.description} />
    <RequestForm footerImg={page.images.footer} />
  </div>
);
export default Home;
