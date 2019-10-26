import React, { useContext } from 'react';
import Gradient from '../../../elements/Settings/Gradient';
import Metatags from '../../../elements/Settings/Metatags';
import URIPage from '../../../elements/Settings/URI';
import Public from '../../../elements/Settings/Public';
import TemplateCtx from './TemplateCtx';

const Settings = () => {
  const { data, setArticleData } = useContext(TemplateCtx);

  const handleGradient = (newBg) => {
    setArticleData({ data: { ...data, background: newBg }, isFetching: false });
  };

  return (
    <div className="adminPageElement">
      <h1 className="adminArticleTitle">Настройки:</h1>
      <div className="adminSettingsBox">
        <Metatags data={data} setData={setArticleData} />
        <Gradient background={data.background} handleGradient={handleGradient} />
        <URIPage data={data} setData={setArticleData} />
        <Public data={data} setData={setArticleData} />
      </div>
    </div>
  );
};

export default Settings;
