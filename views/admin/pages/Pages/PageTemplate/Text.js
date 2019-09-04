import React from 'react';
import TextEditor from '../../../elements/Editor/TextEditor';
import i from '../../../../../utils/i18n';

const Text = ({ data, handleFocus, updatePage }) => {
  const handleTitle = (item, newText) => {
    updatePage({ ...data, [item]: { value: newText, type: 'text' } });
  };

  const renderEditor = () => Object.keys(data).map((item) => {
    if (data[item].type === 'text') {
      return (
        <TextEditor
          key={item}
          selector={`${item}Selector`}
          title={i(item)}
          data={data[item].value}
          setData={(value) => { handleTitle(item, value); }}
          focus={`${item}Selector`}
          handleFocus={handleFocus}
        />
      );
    } return null;
  });

  return (
    <React.Fragment>
      <div className="adminPageElement">
        <h1 className="adminArticleTitle">Текст:</h1>
        {renderEditor()}
      </div>
    </React.Fragment>
  );
};

export default Text;
