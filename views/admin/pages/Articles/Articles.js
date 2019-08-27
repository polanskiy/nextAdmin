import React from 'react';
import Tabs from '../../../site/elements/Tabs';
import Travels from './Travels/Travels';

const Articles = () => (
  <div className="adminArticlesBox">
    <Tabs>
      <div name="Путешествия" style={{ width: '100%' }}>
        <Travels />
      </div>
      <div name="Блог">блог</div>
    </Tabs>
  </div>
);

export default Articles;
