import React, { useEffect, useState } from 'react';
import request from '../../../../../utils/request';
import NewIcon from './NewIcon';

const Icons = () => {
  const [iconList, setIconList] = useState({ data: [], isFetching: false });
  let isMount = true;
  const fetchImages = async () => {
    try {
      setIconList({ data: [], isFetching: true });
      const res = await request('/api/images/icons/', 'get');
      console.log('res', res);
      if (isMount) setIconList({ data: res.data, isFetching: false });
    } catch (e) {
      console.log('ошибка загрузки изображений');
      setIconList({ data: [], isFetching: false });
    }
  };

  useEffect(() => {
    fetchImages();
    return () => {
      isMount = false;
    };
  }, []);

  const deleteImage = async (e) => {
    const { name } = e.currentTarget.dataset;
    console.dir(name);
    await request('/api/images', 'delete', {
      filename: name,
    });
    fetchImages();
  };

  const renderIcons = () => iconList.data.map(img => (
    <div role="presentation" key={img.name} data-name={img.name} onClick={deleteImage}>
      <img src={img.url} alt={`${img.name}`} />
    </div>
  ));

  return (
    <div>
      <p>Иконки путешествий:</p>
      <NewIcon />
      <div className="adminMediaIconBox">
        {iconList.isFetching
          ? <div>загрузка изображений</div> : renderIcons()}
      </div>
    </div>
  );
};

export default Icons;
