import React from 'react';

const Metatags = ({ data, setData }) => {
  const handleMeta = (e) => {
    const { name, value } = e.target;
    setData({ data: { ...data, meta: { ...data.meta, [name]: value } }, isFetching: false });
  };

  return (
    <div className="adminMetaTagsBox">
      <p>Мета-теги:</p>
      <label className="adminArticleSettingsMeta">
        <span>Title:</span>
        <input type="text" name="title" value={data.meta ? data.meta.title : ''} onChange={handleMeta} />
      </label>
      <label className="adminArticleSettingsMeta">
        <span>Description:</span>
        <input type="text" name="description" value={data.meta ? data.meta.description : ''} onChange={handleMeta} />
      </label>
    </div>
  );
};

export default Metatags;
