import React, { useState, useEffect } from 'react';
import request from '../../../../utils/request';
import ArticlesTable from './ArticlesTable';
import NewTravel from './NewArticle/NewArticle';

const Articles = (props) => {
  const [articleList, setArticleList] = useState({ data: [], isFetching: false });
  let isMount = true;

  const fetchArticles = async () => {
    if (isMount) setArticleList({ data: [], isFetching: true });
    try {
      const res = await request('/api/articles/', 'get');
      if (isMount) setArticleList({ data: res.data, isFetching: false });
    } catch (e) {
      if (isMount) setArticleList({ data: [], isFetching: false });
    }
  };

  useEffect(() => {
    fetchArticles();
    return () => {
      isMount = false;
    };
  }, []);

  return (
    <>
      <div>
        <h1 className="adminTitle">Тестовое:</h1>
        <NewTravel articleList={articleList.data} fetchArticles={fetchArticles} />
        <div className="adminPageElement">
          <ArticlesTable
            {...props}
            articleList={articleList}
            fetchArticles={fetchArticles}
          />
        </div>
      </div>
    </>
  );
};
export default Articles;
