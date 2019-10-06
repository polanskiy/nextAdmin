import React from 'react';
import TextEditor from '../../../elements/Editor/TextEditor';


const Text = ({
  data, handleFocus, setTravelData,
}) => {
  const handleTitle = (title) => {
    setTravelData({ data: { ...data, title }, isFetching: false });
  };

  const handleText = (text) => {
    setTravelData({ data: { ...data, text }, isFetching: false });
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
