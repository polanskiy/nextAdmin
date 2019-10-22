import React from 'react';

const Settings = ({ data, setData }) => {
  const handleMeta = (e) => {
    const { name, value } = e.target;
    setData({ data: { ...data, meta: { ...data.meta, [name]: value } }, isFetching: false });
  };

  return (
    <div className="adminPageElement">
      <h1 className="adminArticleTitle">Настройки:</h1>
      <div className="adminSettingsBox">
        <div className="adminMetaTagsBox">
          <p>Мета-теги:</p>
          <label className="adminArticleSettingsMeta">
            <span>Title:</span>
            <input type="text" value={data.meta.title || ''} onChange={handleMeta} />
          </label>
          <label className="adminArticleSettingsMeta">
            <span>Description:</span>
            <input type="text" value={data.meta.title || ''} onChange={handleMeta} />
          </label>
        </div>
      </div>
    </div>
  );
};

export default Settings;
