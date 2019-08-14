import React from 'react';
import axios from 'axios';
import TravelsPage from '../views/site/pages/Travels/Travels';
import TravelItem from '../views/site/pages/Travels/TravelItem';

const Travels = ({ article, page }) => {
  const renderArticle = () => {
    if (article !== 'travels' && article) {
      return <TravelItem article={article} />;
    }
    return <TravelsPage page={page} />;
  };
  return (
    <div className="travelsBox">
      {renderArticle()}
    </div>
  );
};

Travels.getInitialProps = async ({ query, req }) => {
  const axioscfg = req ? { baseURL: 'http://localhost:3000' } : {};
  let travelPage = {};
  try {
    const res = await axios.get('/api/pages', axioscfg);
    res.data.forEach((page) => {
      if (page.name === 'travels') travelPage = page;
    });
  } catch (e) {
    console.log('err main getinitialprops');
  }
  return { article: query.article, page: travelPage };
};

export default Travels;
