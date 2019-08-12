import React from 'react';
import TextEditor from '../../elements/Editor/TextEditor';

const PageItem = ({ page, updatePage }) => {
  const renderElements = () => Object.keys(page).map((item) => {
    switch (item) {
      case 'title':
        return (
          <TextEditor
            key={item}
            selector={`${page.name}TitleEditor`}
            title="Заголовок"
            data={page[item]}
            setData={value => updatePage({ id: page._id, [item]: value })}
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
