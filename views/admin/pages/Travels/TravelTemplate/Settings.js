import React from 'react';
import Metatags from '../../../elements/Settings/Metatags';
import URIPage from '../../../elements/Settings/URI';
import Public from '../../../elements/Settings/Public';

const Settings = ({ data, setTravelData }) => (
  <div className="adminPageElement">
    <h1 className="adminArticleTitle">Настройки:</h1>
    <div className="adminSettingsBox">
      <Metatags data={data} setData={setTravelData} />
      <URIPage data={data} setData={setTravelData} />
      <Public data={data} setData={setTravelData} />
    </div>
  </div>
);

export default Settings;
