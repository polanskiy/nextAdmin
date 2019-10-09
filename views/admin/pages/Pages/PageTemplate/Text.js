import React from 'react';
import TextEditor from '../../../elements/Editor/TextEditor';
import i from '../../../../../utils/i18n';

const Text = ({
  data, handleFocus, setPageData,
}) => {
  const handleTitle = (item, newText) => {
    setPageData({ data: { ...data, [item]: { value: newText, type: 'text' } }, isFetching: false });
  };

  const renderEditor = () => Object.keys(data).map((item) => {
    if (data[item] && data[item].type === 'text') {
      return (
        <TextEditor
          key={item}
          selector={`${item}Selector`}
          title={i(item)}
          data={data[item].value}
          setData={(value) => { handleTitle(item, value); }}
          focus={`${item}Selector`}
          handleFocus={handleFocus}
          name={data.id}
        />
      );
    } return null;
  });

  return (
    <>
      <div className="adminPageElement">
        <h1 className="adminArticleTitle">Текст:</h1>
        {renderEditor()}
      </div>
    </>
  );
};

export default Text;
