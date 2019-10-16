import React from 'react';
import Header from '../../elements/Header';
import BlockAbout from '../../elements/BlockAbout';
import ColorBox from '../../elements/ColorBox';
import SmallSlider from '../../elements/SmallSlider';

const About = ({ page }) => (
  <>
    <Header title={page.title.value} headerBg={page.images.header} noSearch />
    <BlockAbout
      btnLink="/contacts/form"
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
  </>
);

export default About;
