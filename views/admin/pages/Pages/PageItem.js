import React from 'react';
import TextEditor from '../../elements/Editor/TextEditor';

const PageItem = ({ page, updatePage }) => {
  const renderElements = () => page.elements.map((item) => {
    switch (item.name) {
      case 'title':
        return (
          <TextEditor
            key={item.name}
            selector={`${page.name}TitleEditor`}
            title="Заголовок путешествия"
            font="Lobster"
            data={item.value}
            setData={value => updatePage('title', value, page._id)}
            size="60px"
          />
        );

      default:
        return null;
    }
  });

  return (
    <div>{renderElements()}</div>
  );
};

export default PageItem;
