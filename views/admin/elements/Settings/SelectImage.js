import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Uploader from '../Uploader/Uploader';

const SelectImage = ({
  image, handleImages, thumb, name = '',
}) => {
  const [nowImage, setNowImage] = useState(image);

  useEffect(() => {
    setNowImage(image);
  }, [image]);

  const updateImage = (newImageName) => {
    let path = '/static/images/';
    if (name) {
      path = `/static/images/${name}/`;
    }
    if (newImageName) {
      const newImg = `${path}${newImageName}`;
      setNowImage(newImg);
      handleImages(newImg);
    } else {
      setNowImage(null);
      handleImages(null);
      axios({
        method: 'delete',
        url: `/api/images/${name}`,
        data: { filename: nowImage.split(`${name}/`)[1] },
      });
    }
  };

  return (
    <div className="adminSettingsGradientImage">
      <p>
        Фоновое изображение
      :
      </p>
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
  );
};

export default SelectImage;
