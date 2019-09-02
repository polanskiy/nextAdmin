import React from 'react';
import TextEditor from '../../../elements/Editor/TextEditor';


const Text = ({ data, updateTravel, handleFocus }) => {
  const handleTitle = (title) => {
    updateTravel({ ...data, title });
  };

  const handleText = (text) => {
    updateTravel({ ...data, text });
  };
  return (
    <div className="adminPageElement">
      <h1 className="adminArticleTitle">Текст:</h1>
      <TextEditor
        selector="titleSelector"
        title="Заголовок путешествия"
        data={data.title}
        setData={handleTitle}
        focus="titleSelector"
        handleFocus={handleFocus}
      />

      <TextEditor
        selector="textSelector"
        title="Текст путешествия"
        data={data.text}
        setData={handleText}
        handleFocus={handleFocus}
      />
    </div>
  );
};

export default Text;
