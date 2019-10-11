import React from 'react';
import axios from 'axios';
import Uploader from '../Uploader/Uploader';

const SelectImageArr = ({
  handleItems, items, item, name,
}) => {
  const updateImage = (newImageName) => {
    if (newImageName) {
      const newImg = `/static/images/${name}/${newImageName}`;
      const newImages = items.map((itemm) => {
        if (itemm.id === item.id) {
          const newItem = { ...itemm };
          newItem.value = newImg;
          return newItem;
        }
        return itemm;
      });
      handleItems(newImages);
    } else {
      const newImages = items.map((itemm) => {
        if (itemm.id === item.id) {
          const newItem = { ...itemm };
          newItem.value = '';
          return newItem;
        }
        return itemm;
      });
      handleItems(newImages);
      axios({
        method: 'delete',
        url: `/api/images/${name}`,
        data: { filename: item.value.split(`${name}/`)[1] },
      });
    }
  };

  return (
    <div className="adminPageElement">
      <div className="adminBtnsBox">
        <Uploader updateImage={updateImage} link={name} />
        {item.value && <button type="button" className="adminBtn adminDelBtn" onClick={() => updateImage(null)}>Удалить</button>}
      </div>
      <div className={item.value ? 'editorImageBox' : 'editorImageBox borderDashed'}>
        {item.value ? <img src={item.value} alt="" />
          : <p>изображения нет</p>}
      </div>
    </div>
  );
};

export default SelectImageArr;
