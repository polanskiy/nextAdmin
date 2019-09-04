import React from 'react';
import Header from '../../elements/Header';
import BlockAbout from '../../elements/BlockAbout';
import AboutColorBox from './AboutColorBox';
import RequestForm from '../../elements/RequestForm';

const About = ({ page }) => (
  <React.Fragment>
    <Header title={page.title.value} headerBg={page.images.header} noSearch />
    <BlockAbout aboutText={page.about.value} aboutImg={page.images.about} />
    <AboutColorBox aboutText={page.description.value} aboutImg={page.images.colorBox} />
    <RequestForm footerImg={page.images.footer} />
  </React.Fragment>
);

export default About;
