import React, { useContext } from 'react';
import Gradient from '../../../elements/Settings/Gradient';
import Metatags from '../../../elements/Settings/Metatags';
import URIPage from '../../../elements/Settings/URI';
import TemplateCtx from './TemplateCtx';
import Checkbox from '../../../elements/Settings/Checkbox';

const Settings = () => {
  const { data, setArticleData } = useContext(TemplateCtx);

  const handleEl = (val, el) => {
    setArticleData({ data: { ...data, [el]: val }, isFetching: false });
  };

  return (
    <div className="adminPageElement">
      <h1 className="adminArticleTitle">Настройки:</h1>
      <div className="adminSettingsBox">
        <Metatags data={data} setData={setArticleData} />
        <Gradient background={data.background} handleGradient={(val) => handleEl(val, 'background')} />
        <URIPage data={data} setData={setArticleData} />
        <Checkbox label="Опубликовать" data={data.public} setData={(val) => handleEl(val, 'public')} />
      </div>
    </div>
  );
};

export default Settings;
