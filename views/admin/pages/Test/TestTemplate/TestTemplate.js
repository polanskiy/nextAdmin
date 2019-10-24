import React, { useState, useEffect, useCallback } from 'react';
import request from '../../../../../utils/request';
import Text from './Text';
import Elements from './Elements';
import TemplateCtx from './TemplateCtx';

const TestTemplate = ({ id, preloader }) => {
  const [articleData, setArticleData] = useState({ data: null, isFetching: true });
  const [deleteImg, setDeleteImg] = useState('');
  const { data, isFetching } = articleData;
  const kek = useCallback(React.createRef(), []);
  let isMount = true;

  const fetchTravelData = async () => {
    preloader();
    try {
      const res = await request(`/api/articles/${id}`);
      setArticleData({ data: res.data, isFetching: false });
    } catch (e) {
      console.log('err');
    }
    preloader();
  };

  const handleFocus = () => {
    if (kek && kek.current) {
      kek.current.focus();
    }
  };

  useEffect(() => {
    if (isMount) fetchTravelData();
    return () => {
      isMount = false;
    };
  }, []);

  useEffect(() => {
    setTimeout(() => {
      handleFocus();
    }, 0);
  }, [kek]);

  const updateArticle = async (newTravel) => {
    preloader();
    try {
      await request('/api/articles', 'patch', newTravel);
      if (deleteImg) {
        request(`/api/images/${data._id}`, 'delete', { filename: deleteImg.split(`${data._id}/`)[1] });
      }
    } catch (err) {
      console.log('err update article');
    }

    preloader();
  };

  const ctxData = {
    data,
    setArticleData,
    handleFocus,
    setDeleteImg,
    updateArticle,
  };
  console.log('kek');
  return (
    <div className="travelTemplateBox">
      <input
        type="text"
        autoFocus
        ref={kek}
        style={{
          opacity: 0, height: 0, margin: 0, padding: 0, border: 0, cursor: 'default',
        }}
      />
      {data
        ? (
          <>
            <h1 className="adminTitle">{data.route}</h1>
            <TemplateCtx.Provider value={ctxData}>
              <Text />
              <Elements />
            </TemplateCtx.Provider>
          </>
        ) : !isFetching ? 'такой статьи нет' : 'загрузка'}
      <button type="button" className="adminBtn absoluteBtn" onClick={() => updateArticle(data)}>Сохранить</button>
    </div>
  );
};

export default React.memo(TestTemplate);
