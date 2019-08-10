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
            title="Заголовок"
            data={item.value}
            setData={value => updatePage(item._id, value)}
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
