import React, { useState } from 'react';
import TextEditor from '../../elements/Editor/TextEditor';
import SelectImage from '../../elements/Editor/SelectImage';

const PageItem = ({ page, updatePage }) => {
  const [nowImages, setNowImages] = useState(page.images);

  const renderElements = () => Object.keys(page).map((item) => {
    switch (item) {
      case 'about':
      case 'title':
      case 'description':
        return (
          <div className="adminPageElement" key={item}>
            <TextEditor
              selector={`${page.name}${item}TitleEditor`}
              title={item}
              data={page[item]}
              setData={value => updatePage({ id: page._id, [item]: value })}
            />
          </div>
        );
      case 'images':
        return Object.keys(nowImages).map(image => <SelectImage key={image} page={page} image={image} updatePage={updatePage} setNowImages={setNowImages} nowImages={nowImages} />);
      default:
        return null;
    }
  });

  return (
    <div>{renderElements()}</div>
  );
};

export default PageItem;
