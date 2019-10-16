import React from 'react';
import xss from 'xss';
import xssOptions from '../../../utils/xssOptions';
import { Link } from '../../../routes';

const TravelsList = ({ articles, title = '', route }) => {
  const renderTravelList = () => articles.map((article) => (
    <div className="travelsListItem" key={article._id} style={{ backgroundImage: `url(${article.images.thumb})` }}>
      <Link route={route} params={{ article: article.route }}>
        <a>
          <div
            className="travelListLink"
            dangerouslySetInnerHTML={{ __html: xss(article.title, xssOptions) }}
          />
        </a>
      </Link>
    </div>
  ));

  return (
    <div className="travelsListBox">
      <div className="contentWrapper">
        <p className="travelsListTitle">{title}</p>
        <div className="travelsList">
          {renderTravelList()}
        </div>
      </div>
    </div>
  );
};

export default TravelsList;
