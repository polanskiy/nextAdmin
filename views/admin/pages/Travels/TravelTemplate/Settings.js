import React from 'react';

const Settings = ({ data, setTravelData, updateTravel }) => {
  const handleUri = (route) => {
    updateTravel({ ...data, route });
    setTravelData({ data: { ...data, route }, isFetching: false });
  };

  const handlePublic = (e) => {
    const { checked } = e.target;
    setTravelData({ data: { ...data, public: checked } });
    updateTravel({ ...data, public: checked });
  };

  return (
    <div className="adminPageElement">
      <h1 className="adminArticleTitle">Настройки:</h1>
      <div className="adminSettingsBox">
        <label className="adminSettingsRoute">
          <span>URI страницы:</span>
          <input type="text" placeholder="URI страницы" value={data.route} onChange={e => handleUri(e.target.value)} className="adminArticleInput" />
        </label>
        <label className="adminArticleSettingsPublic">
          <span>Опубликовать:</span>
          <input type="checkbox" onChange={handlePublic} defaultChecked={data.public} />
        </label>
      </div>
    </div>
  );
};

export default Settings;
