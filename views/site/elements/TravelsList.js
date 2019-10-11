import React from 'react';
import xss from 'xss';
import xssOptions from '../../../utils/xssOptions';
import { Link } from '../../../routes';

const TravelsList = ({ articles }) => {
  const renderTravelList = () => articles.map((article) => (
    <div className="travelsListItem" key={article._id} style={{ backgroundImage: `url(${article.images.thumb})` }}>
      <Link route="travels" params={{ article: article.route }}>
        <div
          className="travelListLink"
          dangerouslySetInnerHTML={{ __html: xss(article.title, xssOptions) }}
        />
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
