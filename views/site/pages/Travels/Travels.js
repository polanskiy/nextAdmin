import React from 'react';
import dynamic from 'next/dynamic';
import Header from '../../elements/Header';

const TravelsList = dynamic({
  loader: () => import('../../elements/TravelsList'),
  loading: () => <p>LOADING TravelsList</p>,
  ssr: false,
});

const BlockAbout = dynamic({
  loader: () => import('../../elements/BlockAbout'),
  loading: () => <p>LOADING BlockAbout</p>,
  ssr: false,
});

const RequestForm = dynamic({
  loader: () => import('../../elements/RequestForm'),
  loading: () => <p>LOADING BlockAbout</p>,
  ssr: false,
});


const Travels = ({ page, articles }) => (
  <div className="travelsBox">
    <Header title={page.title.value} headerClass="headerBox_travels" headerBg={page.images.header} />
    <TravelsList articles={articles} />
    <BlockAbout aboutText={page.about.value} aboutImg={page.images.about} />
    <RequestForm footerImg={page.images.footer} />
  </div>
);

export default Travels;
