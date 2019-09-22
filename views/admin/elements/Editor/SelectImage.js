import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Uploader from '../Uploader/Uploader';
import i from '../../../../utils/i18n';

const SelectImage = ({
  page, image, updateData, setNowImages, nowImages, thumb,
}) => {
  const [nowImage, setNowImage] = useState(page.images[image]);

  useEffect(() => {
    setNowImage(page.images[image]);
  }, [page.images]);

  const updateImage = (newImageName) => {
    if (newImageName) {
      const newImg = `/static/images/${newImageName}`;
      setNowImage(newImg);
      let newImages = {};
      if (image === 'header' && thumb) {
        newImages = { ...nowImages, [image]: newImg, thumb: `/static/images/thumbs/thumb-${newImageName}` };
      } else {
        newImages = { ...nowImages, [image]: newImg };
      }
      setNowImages(newImages);
      updateData({ _id: page._id, images: newImages });
    } else {
      let delImage = {};
      if (image === 'header' && thumb) {
        delImage = { ...nowImages, [image]: '', thumb: '' };
      } else {
        delImage = { ...nowImages, [image]: '' };
      }
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
        {i(image)}
      :
      </p>
      <div className="adminBtnsBox">
        {image !== 'thumb'
        && (
        <>
          <Uploader updateImage={updateImage} />
          {nowImage && <button type="button" className="adminBtn adminDelBtn" onClick={() => updateImage(null)}>Удалить</button>}
        </>
        )
      }
      </div>
      <div className={nowImage ? 'editorImageBox' : 'editorImageBox borderDashed'}>
        {nowImage ? <img src={nowImage} alt="" />
          : <p>изображения нет</p>}
      </div>
    </div>
  );
};

export default SelectImage;
