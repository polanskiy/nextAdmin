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

  const fetchArticleData = async () => {
    setArticleData({ data: null, isFetching: true });
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
    if (isMount) fetchArticleData();
    return () => {
      isMount = false;
    };
  }, []);

  useEffect(() => {
    setTimeout(() => {
      handleFocus();
    }, 0);
    setTimeout(() => {
      const lol = document.querySelector('.mce-edit-focus');

      console.log('lol', lol);
    }, 550);
  }, [kek]);

  const updateArticle = async (newArticle) => {
    preloader();
    try {
      await request('/api/articles', 'patch', newArticle);
    } catch (err) {
      console.log('err update travel');
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
          <React.Fragment>
            <h1 className="adminTitle">{data.route}</h1>
            <Settings data={data} setArticleData={setArticleData} updateArticle={updateArticle} />
            <Text data={data} updateArticle={updateArticle} handleFocus={handleFocus} />
            <Images data={data} setArticleData={setArticleData} updateArticle={updateArticle} />
          </React.Fragment>
        ) : 'такой статьи нет'}
    </div>
  );
};

export default ArticleTemplate;
