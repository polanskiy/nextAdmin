import React from 'react';
import Metatags from '../../../elements/Settings/Metatags';

const Settings = ({ data, setData }) => (
  <div className="adminPageElement">
    <h1 className="adminArticleTitle">Настройки:</h1>
    <div className="adminSettingsBox">
      <Metatags data={data} setData={setData} />
    </div>
  </div>
);

export default Settings;
