import React from 'react';
import { Link } from '../../../routes';

const TravelsList = ({ articles }) => {
  console.log('articles', articles);
  return (
    <div className="travelsListBox">
      <div className="contentWrapper">
        <p className="travelsListTitle">Наши лучшие направления!</p>
        <div className="travelsList">
          <div className="travelsListItem">
            <Link route="travels" params={{ article: 'baku' }}>
              <a>{articles[0].title}</a>
            </Link>
          </div>
          <div className="travelsListItem">
          Греция - Острова
          </div>
          <div className="travelsListItem">
          Тбилиси - Грузия
          </div>
          <div className="travelsListItem">
          Италия - Рим
          </div>
          <div className="travelsListItem">
          Тенерифе
          </div>
          <div className="travelsListItem">
          Турция - Стамбул
          </div>
          <div className="travelsListItem">
          Франция - Париж
          </div>
        </div>
      </div>
    </div>
  );
};

export default TravelsList;
