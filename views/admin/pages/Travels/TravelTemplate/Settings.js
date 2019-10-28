import React from 'react';
import Metatags from '../../../elements/Settings/Metatags';
import URIPage from '../../../elements/Settings/URI';
import Checkbox from '../../../elements/Settings/Checkbox';

const Settings = ({ data, setTravelData }) => {
  const handleEl = (val, el) => {
    setTravelData({ data: { ...data, [el]: val }, isFetching: false });
  };

  return (
    <div className="adminPageElement">
      <h1 className="adminArticleTitle">Настройки:</h1>
      <div className="adminSettingsBox">
        <Metatags data={data} setData={setTravelData} />
        <URIPage data={data} setData={setTravelData} />
        <Checkbox label="Опубликовать" data={data.public} setData={(val) => handleEl(val, 'public')} />
      </div>
    </div>
  );
};

export default Settings;
