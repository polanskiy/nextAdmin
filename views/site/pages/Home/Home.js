import React from 'react';
import dynamic from 'next/dynamic';
import Header from '../../elements/Header';

const BlockAbout = dynamic({
  loader: () => import('../../elements/BlockAbout'),
  loading: () => <p>LOADING ABOUT</p>,
  ssr: false,
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
    <Header title={page.title} headerBg={page.images.header} />
    <BlockAbout />
    <HomeAdvantages />
    <RequestForm />
  </div>
);
export default Home;
