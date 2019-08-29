import React from 'react';
import Tabs from '../../../site/elements/Tabs';
import Travels from './Travels/Travels';

const Articles = (props) => {
  console.log('props', props);
  return (
    <div className="adminArticlesBox">
      <Tabs>
        <div name="Путешествия" style={{ width: '100%' }}>
          <Travels {...props} />
        </div>
        <div name="Блог">блог</div>
      </Tabs>
    </div>
  );
};

export default Articles;
