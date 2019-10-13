import React, { useState, useEffect, useCallback } from 'react';
import request from '../../../../../utils/request';
import Settings from './Settings';
import Text from './Text';
import Tabs from './Tabs';
import Images from './Images';
import Slides from './Slides';

const TravelTemplate = ({ id, preloader }) => {
  const [travelData, setTravelData] = useState({ data: null, isFetching: false });
  const { data, isFetching } = travelData;
  const kek = useCallback(React.createRef(), []);
  let isMount = true;

  const fetchTravelData = async () => {
    setTravelData({ data: travelData.data, isFetching: true });
    preloader();
    try {
      const res = await request(`/api/travels/${id}`);
      setTravelData({ data: res.data, isFetching: false });
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

  const updateTravel = async (newTravel) => {
    preloader();
    try {
      await request('/api/travels', 'patch', newTravel);
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
          <>
            <h1 className="adminTitle">{data.route}</h1>
            <Settings data={data} setTravelData={setTravelData} updateTravel={updateTravel} />
            <Text data={data} setTravelData={setTravelData} handleFocus={handleFocus} />
            <Tabs
              data={data}
              fetchTravelData={fetchTravelData}
              handleFocus={handleFocus}
              updateTravel={updateTravel}
              setTravelData={setTravelData}
            />
            <Images data={data} setTravelData={setTravelData} updateTravel={updateTravel} />
            <Slides
              data={data}
              setTravelData={setTravelData}
              updateData={updateTravel}
            />
          </>
        ) : 'такого путешествия нет'}
      <button type="button" className="adminBtn absoluteBtn" onClick={() => updateTravel(data)}>Сохранить</button>
    </div>
  );
};

export default TravelTemplate;
