import React from 'react';

const URIPage = ({ data, setData }) => {
  const handleUri = (route) => {
    setData({ data: { ...data, route }, isFetching: false });
  };

  return (
    <div className="adminSettingSmall">
      <p className="adminElTitle">URI страницы:</p>
      <div className="adminElBody">
        <input type="text" placeholder="URI страницы" value={data.route} onChange={(e) => handleUri(e.target.value)} className="adminArticleInput" />
      </div>
    </div>
  );
};

export default URIPage;
