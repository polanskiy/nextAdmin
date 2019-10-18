import React from 'react';
import Header from '../../elements/Header';
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
    <ColorBox stars text={page.description.value} colorBg={page.images.description} />
  </div>
);
export default Home;
