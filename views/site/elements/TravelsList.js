import React from 'react';
import { Link } from '../../../routes';

const TravelsList = ({ articles }) => {
  const renderTravelList = () => articles.map(article => (
    <div className="travelsListItem" key={article._id}>
      <Link route="travels" params={{ article: article.route }}>
        <a>{article.title}</a>
      </Link>
    </div>
  ));

  return (
    <div className="travelsListBox">
      <div className="contentWrapper">
        <p className="travelsListTitle">Наши лучшие направления!</p>
        <div className="travelsList">
          {renderTravelList()}
        </div>
      </div>
    </div>
  );
};

export default TravelsList;
