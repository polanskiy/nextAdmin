import React from 'react';
import Tabs from '../../../site/elements/Tabs';
import MediaImages from './MediaImages';
// import TravelTemplate from './TravelTemplate';

const Media = () => (
  <div className="adminArticlesBox">
    <Tabs>
      <div name="Картинки" style={{ width: '100%' }}>
        <MediaImages />
      </div>
      <div name="Видео">видосики</div>
    </Tabs>
  </div>
);

export default Media;
