import React from 'react';
import Header from '../../elements/Header';
import HomeAbout from './HomeAbout';
import HomeAdvantages from './HomeAdvantages';
import RequestForm from '../../elements/RequestForm';

const Home = () => (
  <div className="homePageBox">
    <Header />
    <HomeAbout />
    <HomeAdvantages />
    <RequestForm />
  </div>
);

export default Home;
