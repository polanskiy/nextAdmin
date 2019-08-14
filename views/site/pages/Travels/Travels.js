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


const Travels = ({ page }) => (
  <div className="travelsBox">
    <Header title={page.title} headerClass="headerBox_travels" headerBg={page.images.header} />
    <TravelsList />
    <BlockAbout aboutText={page.about} aboutImg={page.images.about} />
    <RequestForm />
  </div>
);

export default Travels;
