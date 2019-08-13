import React, { useState } from 'react';
import axios from 'axios';
import Uploader from '../Uploader/Uploader';

const SelectImage = ({ page, image, updatePage }) => {
  const [nowImage, setNowImage] = useState(page.images[image]);
  const updateImage = (newImageName) => {
    if (newImageName) {
      const newImg = `/static/images/${newImageName}`;
      setNowImage(newImg);
      updatePage({ id: page._id, images: { ...page.images, [image]: newImg } });
    } else {
      setNowImage(newImageName);
      updatePage({ id: page._id, images: { ...page.images, [image]: '' } });
      axios({
        method: 'delete',
        url: '/api/images',
        data: { filename: nowImage.split('images/')[1] },
      });
    }
  };
  return (
    <div>
      <p>
        {image}
      :
      </p>
      <div>
        <Uploader updateImage={updateImage} />
        {nowImage && <button type="button" onClick={() => updateImage(null)}>Удалить</button>}
      </div>
      <div className="editorImageBox">
        {nowImage ? <img src={nowImage} alt="" />
          : <p>изображения нет</p>}
      </div>
    </div>
  );
};

export default SelectImage;
