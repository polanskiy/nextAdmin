import React, { useState, useEffect, useCallback } from 'react';
import request from '../../../../../utils/request';
import Settings from './Settings';
import Text from './Text';
import Tabs from './Tabs';
import Images from './Images';
import Slides from '../../../elements/Slides/Slides';

const TravelTemplate = ({ id, preloader }) => {
  const [travelData, setTravelData] = useState({ data: null, isFetching: false });
  const [slideList, setSlideList] = useState([]);
  const { data, isFetching } = travelData;
  const kek = useCallback(React.createRef(), []);
  let isMount = true;

  const fetchTravelData = async () => {
    setTravelData({ data: null, isFetching: true });
    preloader();
    try {
      const res = await request(`/api/travels/${id}`);
      setTravelData({ data: res.data, isFetching: false });
      setSlideList(res.data.slides);
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
    handleFocus();
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
          <React.Fragment>
            <h1 className="adminTitle">{data.route}</h1>
            <Settings data={data} setTravelData={setTravelData} updateTravel={updateTravel} />
            <Text data={data} updateTravel={updateTravel} handleFocus={handleFocus} />
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
              slideList={slideList}
              setSlideList={setSlideList}
              updateData={updateTravel}
            />
          </React.Fragment>
        ) : 'такого путешествия нет'}
    </div>
  );
};

export default TravelTemplate;
