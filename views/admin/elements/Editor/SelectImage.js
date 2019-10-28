import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Uploader from '../Uploader/Uploader';
import i from '../../../../utils/i18n';

const SelectImage = ({
  page, image, updateData, setNowImages, nowImages, thumb, name = '',
}) => {
  const [nowImage, setNowImage] = useState(page.images[image]);

  useEffect(() => {
    setNowImage(page.images[image]);
  }, [page.images]);


  const handleDelImg = () => {
    let delImage = {};
    if (image === 'header' && thumb) {
      delImage = { ...nowImages, [image]: '', thumb: '' };
    } else {
      delImage = { ...nowImages, [image]: '' };
    }
    setNowImage(null);
    setNowImages(delImage);
    updateData({ _id: page._id, images: delImage });
    axios({
      method: 'delete',
      url: `/api/images/${name}`,
      data: { filename: nowImage.split(`${name}/`)[1] },
    });
  };

  const updateImage = (newImageName) => {
    let path = '/static/images/';
    if (name) {
      path = `/static/images/${name}/`;
    }
    if (nowImage) {
      handleDelImg();
    }

    if (newImageName) {
      const newImg = `${path}${newImageName}`;
      setNowImage(newImg);
      let newImages = {};
      if (image === 'header' && thumb) {
        newImages = { ...nowImages, [image]: newImg, thumb: `/static/images/${name}/thumb-${newImageName}` };
      } else {
        newImages = { ...nowImages, [image]: newImg };
      }
      setNowImages(newImages);
      updateData({ _id: page._id, images: newImages });
    } else {
      handleDelImg();
    }
  };


  return (
    <div className="adminElBox">
      <p className="adminElTitle">
        {i(image)}
      :
      </p>
      <div className="adminElBody">
        <div className="adminBtnsBox">
          {image !== 'thumb'
        && (
          <>
            <Uploader updateImage={updateImage} link={name} thumb={image === 'header' && thumb} />
            {nowImage && <button type="button" className="adminBtn adminDelBtn" onClick={() => updateImage(null)}>Удалить</button>}
          </>
        )}
        </div>
        <div className={nowImage ? 'editorImageBox' : 'editorImageBox borderDashed'}>
          {nowImage ? <img src={nowImage} alt="" />
            : <p>изображения нет</p>}
        </div>
      </div>
    </div>
  );
};

export default SelectImage;
