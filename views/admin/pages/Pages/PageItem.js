import React, { useState } from 'react';
import TextEditor from '../../elements/Editor/TextEditor';
import SelectImage from '../../elements/Editor/SelectImage';

const PageItem = ({ page, updatePage }) => {
  const [nowImages, setNowImages] = useState(page.images);
  const kek = React.createRef();

  const handleFocus = () => {
    if (kek.current) {
      kek.current.focus();
    }
  };

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
              handleFocus={handleFocus}
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
    <div>
      <input
        type="text"
        autoFocus
        ref={kek}
        style={{
          opacity: 0, height: 0, margin: 0, padding: 0, border: 0, cursor: 'default',
        }}
      />
      {renderElements()}
    </div>
  );
};

export default PageItem;
