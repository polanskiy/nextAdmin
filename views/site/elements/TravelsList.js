import React from 'react';
import xss from 'xss';
import xssOptions from '../../../utils/xssOptions';
import { Link } from '../../../routes';

const TravelsList = ({ articles, title = '', route }) => {
  const renderTravelList = () => {
    let newArr = [];
    const lastArr = [];

    for (let i = 1; i <= articles.length; i += 1) {
      const k = i - 1;

      if (i % 3) {
        newArr.push(
          <div key={articles[k]._id} className="travelsListItem" style={{ backgroundImage: `url(${articles[k].images.thumb})`, backgroundImage: `-webkit-image-set(url(${articles[k].images.thumb})1x )` }}>
            <Link route={route} params={{ article: articles[k].route }}>
              <a>
                <div
                  className="travelListLink"
                  dangerouslySetInnerHTML={{ __html: xss(articles[k].title, xssOptions) }}
                />
              </a>
            </Link>
          </div>,
        );
      } else if (i % 3 === 0) {
        newArr.push(
          <div key={articles[k]._id} className="travelsListItem" style={{ backgroundImage: `url(${articles[k].images.thumb})`, backgroundImage: `-webkit-image-set(url(${articles[k].images.thumb})1x )` }}>
            <Link route={route} params={{ article: articles[k].route }}>
              <a>
                <div
                  className="travelListLink"
                  dangerouslySetInnerHTML={{ __html: xss(articles[k].title, xssOptions) }}
                />
              </a>
            </Link>
          </div>,
        );
        lastArr.push(
          <div className="travelListItemsBox" key={articles[k]._id}>
            {newArr}
          </div>,
        );
        newArr = [];
      }

      if (i === articles.length && i % 3 !== 0) {
        lastArr.push(
          <div className="travelListItemsBox" key={articles[k]._id}>
            {newArr}
          </div>,
        );
      }
    }
    return lastArr;
  };

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
