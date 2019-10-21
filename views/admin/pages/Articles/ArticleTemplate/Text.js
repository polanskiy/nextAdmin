import React from 'react';
import TextEditor from '../../../elements/Editor/TextEditor';


const Text = ({
  data, handleFocus, setArticleData, setDeleteImg,
}) => {
  const handleTitle = (title) => {
    setArticleData({ data: { ...data, title }, isFetching: false });
  };
  const handleSubTitle = (subtitle) => {
    setArticleData({ data: { ...data, subtitle }, isFetching: false });
  };

  const handleText = (text) => {
    setArticleData({ data: { ...data, text: { ...data.text, value: text } }, isFetching: false });
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
      <TextEditor
        selector="textSelector"
        title="Текст статьи"
        data={data.text.value}
        setData={handleText}
        handleFocus={handleFocus}
        height={650}
        name={data._id}
        setDeleteImg={setDeleteImg}
      />
    </div>
  );
};

export default Text;
