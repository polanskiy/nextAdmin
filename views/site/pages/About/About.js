import React from 'react';
import Header from '../../elements/Header';
import BlockAbout from '../../elements/BlockAbout';
import ColorBox from '../../elements/ColorBox';
import RequestForm from '../../elements/RequestForm';
import SmallSlider from '../../elements/SmallSlider';

const About = ({ page }) => (
  <React.Fragment>
    <Header title={page.title.value} headerBg={page.images.header} noSearch />
    <BlockAbout
      btnLink="/contacts"
      btnText="Задать вопрос"
      aboutText={page.about.value}
      aboutImg={page.images.about}
    />
    <ColorBox text={page.description.value} colorBg={page.images.description} />
    <SmallSlider
      text={page.slider.value}
      slides={page.slides}
      link="/travels"
      textLink="Галерея путешествий"
      sliderBg={page.images.slider}
    />
    <RequestForm footerImg={page.images.footer} />
  </React.Fragment>
);

export default About;
