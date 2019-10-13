import React, { useState, useEffect, useCallback } from 'react';
import request from '../../../../../utils/request';
import Settings from './Settings';
import Text from './Text';
import Images from './Images';

const ArticleTemplate = ({ id, preloader }) => {
  const [articleData, setArticleData] = useState({ data: null, isFetching: false });
  const { data, isFetching } = articleData;
  const kek = useCallback(React.createRef(), []);
  let isMount = true;

  const fetchTravelData = async () => {
    setArticleData({ data: articleData.data, isFetching: true });
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
    } catch (err) {
      console.log('err update article');
    }
    preloader();
  };

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
      {isFetching && 'загрузка'}
      {data
        ? (
          <>
            <h1 className="adminTitle">{data.route}</h1>
            <Settings data={data} setArticleData={setArticleData} updateArticle={updateArticle} />
            <Text data={data} setArticleData={setArticleData} handleFocus={handleFocus} />
            <Images data={data} setArticleData={setArticleData} updateArticle={updateArticle} />
          </>
        ) : 'такого путешествия нет'}
      <button type="button" className="adminBtn absoluteBtn" onClick={() => updateArticle(data)}>Сохранить</button>
    </div>
  );
};

export default ArticleTemplate;
