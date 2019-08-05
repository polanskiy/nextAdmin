import React from 'react';
import TravelsPage from '../views/site/pages/Travels/Travels';
import TravelItem from '../views/site/pages/Travels/TravelItem';

const Travels = ({ article }) => {
  const renderArticle = () => {
    console.log('article', article);
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

Travels.getInitialProps = ({ query }) => {
  console.log('query', query);
  return { article: query.article };
};

export default Travels;
