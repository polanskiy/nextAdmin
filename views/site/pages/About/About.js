import React from 'react';
import dynamic from 'next/dynamic';
import Header from '../../elements/Header';

const BlockAbout = dynamic({
  loader: () => import('../../elements/BlockAbout'),
  loading: () => <p>LOADING ABOUT</p>,
  ssr: false,
});

const Slider = dynamic({
  loader: () => import('../../elements/Slider'),
  loading: () => <p>LOADING ABOUT</p>,
  ssr: false,
});

const AboutColorBox = dynamic({
  loader: () => import('./AboutColorBox'),
  loading: () => <p>LOADING ABOUT</p>,
  ssr: false,
});


const About = ({ page }) => (
  <React.Fragment>
    <Header title={page.title} headerBg={page.images.header} noSearch />
    <BlockAbout />
    <AboutColorBox />
  </React.Fragment>
);

export default About;
