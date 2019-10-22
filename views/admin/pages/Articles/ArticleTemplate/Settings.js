import React from 'react';
import Gradient from '../../../elements/Settings/Gradient';
import Metatags from '../../../elements/Settings/Metatags';
import URIPage from '../../../elements/Settings/URI';
import Public from '../../../elements/Settings/Public';

const Settings = ({ data, setArticleData }) => (
  <div className="adminPageElement">
    <h1 className="adminArticleTitle">Настройки:</h1>
    <div className="adminSettingsBox">
      <Metatags data={data} setData={setArticleData} />
      <Gradient data={data} setData={setArticleData} />
      <URIPage data={data} setData={setArticleData} />
      <Public data={data} setData={setArticleData} />
    </div>
  </div>
);

export default Settings;
