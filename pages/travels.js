import React from 'react';
import axios from 'axios';
import TravelsPage from '../views/site/pages/Travels/Travels';
import TravelItem from '../views/site/pages/Travels/TravelItem';

const Travels = ({ article, page, articles }) => {
  const renderArticle = () => {
    if (article !== 'travels' && article) {
      return <TravelItem article={article} />;
    }
    return <TravelsPage page={page} articles={articles} />;
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
  let articles = [];
  try {
    const res = await axios.get('/api/pages/travels', axioscfg);
    articles = await axios.get('/api/travels', axioscfg);
    console.log('resresresres', articles);
    travelPage = res.data;
  } catch (e) {
    console.log('err main getinitialprops');
  }
  return { article: query.article, page: travelPage, articles: articles.data };
};

export default Travels;
