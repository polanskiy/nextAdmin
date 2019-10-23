import React, { useContext } from 'react';
import TextEditor from '../../../elements/Editor/TextEditor';
import TemplateCtx from './TemplateCtx';


const Text = () => {
  const { data, handleFocus, setArticleData } = useContext(TemplateCtx);
  const handleTitle = (title) => {
    setArticleData({ data: { ...data, title }, isFetching: false });
  };
  const handleSubTitle = (subtitle) => {
    setArticleData({ data: { ...data, subtitle }, isFetching: false });
  };

  return (
    <div className="adminPageElement">
      <h1 className="adminArticleTitle">Текст:</h1>
      <div className="adminArticleTitlesBox">
        <div>
          <TextEditor
            selector="titleSelector"
            title="Заголовок статьи"
            data={data.title}
            setData={handleTitle}
            focus="titleSelector"
            handleFocus={handleFocus}
          />
        </div>
        <div>
          <TextEditor
            selector="subtitleSelector"
            title="Подзаголовок статьи"
            data={data.subtitle}
            setData={handleSubTitle}
            focus="titleSelector"
            handleFocus={handleFocus}
          />
        </div>
      </div>
    </div>
  );
};

export default Text;
