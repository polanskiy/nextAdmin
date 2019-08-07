import React from 'react';
import Tabs from '../../../site/elements/Tabs';
import TravelTemplate from './TravelTemplate';

const Articles = () => (
  <div className="adminArticlesBox">
    <Tabs>
      <div name="Путешествия" style={{ width: '100%' }}>
        <TravelTemplate />
      </div>
      <div name="Блог">блог</div>
    </Tabs>
  </div>
);

export default Articles;
