import React from 'react';
import axios from 'axios';
import TravelsPage from '../views/site/pages/Travels/Travels';
import TravelItem from '../views/site/pages/Travels/TravelItem';

const Travels = ({ article, pages }) => {
  const renderArticle = () => {
    console.log('article', article, pages);
    if (article !== 'travels' && article) {
      return <TravelItem article={article} />;
    }
    return <TravelsPage />;
  };

  return (
    <div className="travelsBox">
      {renderArticle()}
    </div>
  );
};

Travels.getInitialProps = async ({ query, req }) => {
  if (req) {
    console.log('req');
  } else {
    const res = await axios({
      get: 'get',
      url: '/api/pages',
    });
  }

  return { article: query.article };
};

export default Travels;
