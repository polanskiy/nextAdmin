import React, { useState, useCallback, useEffect } from 'react';
import request from '../../../../../utils/request';
import i from '../../../../../utils/i18n';
// import Settings from './Settings';
import Text from './Text';
// import Tabs from './Tabs';
import Images from './Images';
// import Slides from './Slides';

const PageTemplate = ({ name, preloader }) => {
  const [pageData, setPageData] = useState({ data: null, isFetching: false });
  const { data, isFetching } = pageData;
  const kek = useCallback(React.createRef(), []);

  const handleFocus = () => {
    if (kek && kek.current) {
      kek.current.focus();
    }
  };

  const fetchPageData = async () => {
    setPageData({ data: null, isFetching: true });
    preloader();
    try {
      const res = await request(`/api/pages/${name}`);
      setPageData({ data: res.data, isFetching: false });
    } catch (e) {
      console.log('err');
    }
    preloader();
  };

  useEffect(() => {
    fetchPageData();
  }, []);

  useEffect(() => {
    handleFocus();
  }, [kek]);


  const updatePage = async (newTravel) => {
    preloader();
    try {
      await request('/api/pages', 'patch', newTravel);
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
            <h1>{i(data.name)}</h1>
            <Text data={data} updatePage={updatePage} handleFocus={handleFocus} />
            <Images data={data} setTravelData={setPageData} updateData={updatePage} />
            {/* <Tabs data={data} fetchTravelData={fetchTravelData} handleFocus={handleFocus} updateTravel={updateTravel} />

            <Slides data={data} setTravelData={setTravelData} updateTravel={updateTravel} fetchTravelData={fetchTravelData} /> */}
          </React.Fragment>
        ) : 'такого путешествия нет'}
    </div>
  );
};

export default PageTemplate;
