import React from 'react';
import dynamic from 'next/dynamic';
import Header from '../../elements/Header';

const BlockAbout = dynamic({
  loader: () => import('../../elements/BlockAbout'),
  loading: () => <p>LOADING ABOUT</p>,
});
const HomeAdvantages = dynamic({
  loader: () => import('./HomeAdvantages'),
  loading: () => <p>LOADING ABOUT</p>,
  ssr: false,
});
const RequestForm = dynamic({
  loader: () => import('../../elements/RequestForm'),
  loading: () => <p>LOADING ABOUT</p>,
  ssr: false,
});

const Home = ({ page }) => (
  <div className="homePageBox">
    {console.log(page)}
    <Header title={page.title} headerBg={page.images.header} />
    <BlockAbout aboutText={page.about} aboutImg={page.images.about} />
    <HomeAdvantages descriptionText={page.description} descriptionImg={page.images.description} />
    <RequestForm footerImg={page.images.footer} />
  </div>
);
export default Home;
