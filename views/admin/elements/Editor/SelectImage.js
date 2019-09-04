import React, { useState } from 'react';
import axios from 'axios';
import Uploader from '../Uploader/Uploader';

const SelectImage = ({
  page, image, updateData, setNowImages, nowImages,
}) => {
  const [nowImage, setNowImage] = useState(page.images[image]);
  const updateImage = (newImageName) => {
    if (newImageName) {
      const newImg = `/static/images/${newImageName}`;
      setNowImage(newImg);
      const newImages = { ...nowImages, [image]: newImg };
      setNowImages(newImages);
      updateData({ _id: page._id, images: newImages });
    } else {
      const delImage = { ...nowImages, [image]: '' };
      console.log('delImage', delImage);
      setNowImage(newImageName);
      setNowImages(delImage);
      updateData({ _id: page._id, images: delImage });
      axios({
        method: 'delete',
        url: '/api/images',
        data: { filename: nowImage.split('images/')[1] },
      });
    }
  };
  return (
    <div className="adminPageElement">
      <p>
        {image}
      :
      </p>
      <div className="adminBtnsBox">
        <Uploader updateImage={updateImage} />
        {nowImage && <button type="button" className="adminBtn adminDelBtn" onClick={() => updateImage(null)}>Удалить</button>}
      </div>
      <div className={nowImage ? 'editorImageBox' : 'editorImageBox borderDashed'}>
        {nowImage ? <img src={nowImage} alt="" />
          : <p>изображения нет</p>}
      </div>
    </div>
  );
};

export default SelectImage;
