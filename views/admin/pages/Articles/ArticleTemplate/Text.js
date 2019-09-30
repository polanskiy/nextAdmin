import React from 'react';
import TextEditor from '../../../elements/Editor/TextEditor';


const Text = ({ data, updateArticle, handleFocus }) => {
  const handleTitle = (title) => {
    console.log('title', title);
    updateArticle({ ...data, title });
  };

  const handleText = (text) => {
    updateArticle({ ...data, text });
  };
  return (
    <div className="adminPageElement">
      <h1 className="adminArticleTitle">Текст:</h1>
      <TextEditor
        selector="titleSelector"
        title="Заголовок статьи"
        data={data.title}
        setData={handleTitle}
        focus="titleSelector"
        handleFocus={handleFocus}
      />

      <TextEditor
        selector="textSelector"
        title="Текст статьи"
        data={data.text}
        setData={handleText}
        handleFocus={handleFocus}
      />
    </div>
  );
};

export default Text;
