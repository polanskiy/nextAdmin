import React from 'react';
import axios from 'axios';
import TravelsPage from '../views/site/pages/Travels/Travels';
import TravelItem from '../views/site/pages/Travels/TravelItem';
import Error from './_error';

const Travels = ({ page, articles }) => {
  const renderArticle = () => {
    if (articles) {
      return <TravelsPage page={page} articles={articles} />;
    } if (page && page.title) {
      return <TravelItem article={page} />;
    } return <Error />;
  };
  return (
    <>
      {renderArticle()}
    </>
  );
};

Travels.getInitialProps = async (props) => {
  const { query, req } = props;
  const axioscfg = req ? { baseURL: 'http://localhost:3000' } : {};
  let travelPage = {};
  let articles = [];
  if (query.article) {
    try {
      const res = await axios.get(`/api/travels/${query.article}/?byRoute=1`, axioscfg);
      travelPage = res.data;
    } catch (e) {
      console.log('err Travels getinitialprops');
    }
  } else {
    try {
      const res = await axios.get('/api/pages/travels', axioscfg);
      articles = await axios.get('/api/travels/?onlyPublic=1', axioscfg);
      travelPage = res.data;
    } catch (e) {
      console.log('err Travels getinitialprops');
    }
  }
  if (travelPage) {
    return { page: travelPage, articles: articles.data };
  }
  return {};
};

export default Travels;
