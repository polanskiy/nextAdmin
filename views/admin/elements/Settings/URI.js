import React from 'react';

const URIPage = ({ data, setData }) => {
  const handleUri = (route) => {
    setData({ data: { ...data, route }, isFetching: false });
  };

  return (
    <label className="adminSettingsRoute">
      <span>URI страницы:</span>
      <input type="text" placeholder="URI страницы" value={data.route} onChange={(e) => handleUri(e.target.value)} className="adminArticleInput" />
    </label>
  );
};

export default URIPage;
