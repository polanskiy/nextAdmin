import React, { useEffect, useState } from 'react';
import axios from 'axios';

const MediaImages = () => {
  const [imageList, setImageList] = useState({ data: [], isFetching: false });
  let isMount = true;
  const fetchImages = async () => {
    try {
      setImageList({ data: [], isFetching: true });
      const res = await axios({
        method: 'get',
        url: 'http://localhost:3000/api/images',
      });
      if (isMount) setImageList({ data: res.data, isFetching: false });
    } catch (e) {
      console.log('ошибка загрузки изображений');
      setImageList({ data: [], isFetching: false });
    }
  };

  useEffect(() => {
    fetchImages();
    return () => {
      isMount = false;
    };
  }, []);

  const deleteImage = (e) => {
    const { name } = e.currentTarget.dataset;
    console.dir(name);
    axios({
      method: 'delete',
      url: '/api/images',
      data: {
        filename: name,
      },
    })
      .then(() => {
        fetchImages();
      });
  };

  const renderThumbs = () => imageList.data.map(img => (
    <div role="presentation" key={img.name} data-name={img.name} onClick={deleteImage}>
      <img src={`/static/images/thumbs/thumb-${img.name}`} alt={`${img.name}`} />
    </div>
  ));
  return (
    <div>
      <p>картинки</p>
      {imageList.isFetching
        ? <div>загрузка изображений</div> : renderThumbs()}
    </div>
  );
};

export default MediaImages;
