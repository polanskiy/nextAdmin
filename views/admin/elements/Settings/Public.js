import React from 'react';

const Public = ({ data, setData }) => {
  const handlePublic = (e) => {
    const { checked } = e.target;
    setData({ data: { ...data, public: checked }, isFetching: false });
  };

  return (
    <label className="adminArticleSettingsPublic">
      <span>Опубликовать:</span>
      <input type="checkbox" onChange={handlePublic} defaultChecked={data.public} />
    </label>
  );
};

export default Public;
