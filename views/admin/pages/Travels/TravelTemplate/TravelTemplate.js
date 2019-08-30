import React, { useState, useEffect, useCallback } from 'react';
import request from '../../../../../utils/request';
import TextEditor from '../../../elements/Editor/TextEditor';
import SelectImage from '../../../elements/Editor/SelectImage';
import TabItem from './TabItem';

const TravelTemplate = ({ id }) => {
  const [travelData, setTravelData] = useState({ data: null, isFetching: false });
  const [nowImages, setNowImages] = useState({});
  const [uri, setUri] = useState('');
  const { data, isFetching } = travelData;
  const kek = useCallback(React.createRef(), []);

  const fetchTravelData = async () => {
    setTravelData({ data: null, isFetching: true });
    try {
      const res = await request(`/api/travels/${id}`);
      setTravelData({ data: res.data, isFetching: false });
      setUri(res.data.route);
      setNowImages(res.data.images);
    } catch (e) {
      console.log('err');
    }
  };

  const handleFocus = () => {
    if (kek && kek.current) {
      kek.current.focus();
    }
  };

  useEffect(() => {
    fetchTravelData();
  }, []);

  useEffect(() => {
    handleFocus();
  }, [kek]);

  const updateTravel = async (newTravel) => {
    console.log('newTravel', newTravel);
    await request('/api/travels', 'patch', newTravel);
  };

  const handleTitle = (title) => {
    // setTravelData({ data: { ...travelData, title }, isFetching: false });
    updateTravel({ ...data, title });
  };

  const handleText = (text) => {
    updateTravel({ ...data, text });
  };

  const handleUri = (route) => {
    updateTravel({ ...data, route });
    setUri(route);
  };

  const addTab = async () => {
    const newTab = {
      name: '',
      value: '',
    };
    const tabs = [...data.tabs];
    tabs.push(newTab);
    await updateTravel({ ...data, tabs });
    fetchTravelData();
  };

  const renderTabs = () => data.tabs.map(tab => (
    <TabItem
      key={tab._id}
      tab={tab}
      updateTravel={updateTravel}
      travelData={data}
      handleFocus={handleFocus}
    />
  ));

  const renderImages = () => Object.keys(nowImages).map(image => <SelectImage key={image} page={data} image={image} updatePage={updateTravel} setNowImages={setNowImages} nowImages={nowImages} />);

  console.log('travelData', travelData);

  const titleSelector = 'titleSelector';
  const textSelector = 'textSelector';
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
            <div className="adminPageElement">
              <p>URI страницы:</p>
              <input type="text" placeholder="URI страницы" value={uri} onChange={e => handleUri(e.target.value)} />
            </div>
            <div className="adminPageElement">
              <TextEditor
                selector={titleSelector}
                title="Заголовок путешествия"
                data={data.title}
                setData={handleTitle}
                focus={titleSelector}
                handleFocus={handleFocus}
              />
            </div>
            <div className="adminPageElement">
              <TextEditor
                selector={textSelector}
                title="Текст путешествия"
                data={data.text}
                setData={handleText}
                handleFocus={handleFocus}
              />
            </div>
            <div className="adminPageElement">
              <div className="adminBtnsBox">
                <button type="button" onClick={addTab} className="adminBtn">Добавить вкладку</button>
              </div>
              {renderTabs()}
            </div>

            <div className="adminPageElement">
              {renderImages()}
            </div>
            {/* <div>
              <p>Бэкграунд шапки:</p>
              <Uploader />
            </div> */}
          </React.Fragment>
        ) : 'такого путешествия нет'}
    </div>
  );
};

export default TravelTemplate;
