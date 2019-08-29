import React, { useState, useEffect } from 'react';
import request from '../../../../../../utils/request';
import TextEditor from '../../../../elements/Editor/TextEditor';
import Uploader from '../../../../elements/Uploader/Uploader';
import TabItem from './TabItem';

const TravelTemplate = ({ id }) => {
  const [travelData, setTravelData] = useState({ data: null, isFetching: false });
  const [uri, setUri] = useState('');
  const { data, isFetching } = travelData;
  const kek = React.createRef();

  const fetchTravelData = async () => {
    setTravelData({ data: null, isFetching: true });
    try {
      const res = await request(`/api/travels/${id}`);
      setTravelData({ data: res.data, isFetching: false });
      setUri(res.data.route);
    } catch (e) {
      console.log('err');
    }
  };

  useEffect(() => {
    fetchTravelData();
  }, []);

  const updateTravel = async (newTravel) => {
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
      value: ''
    }
    const tabs = [...data.tabs];
    tabs.push(newTab);
    await updateTravel({ ...data, tabs: tabs });
    fetchTravelData();
  };

  const handleFocus = () => {
    kek.current.focus();
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


  console.log('travelData', travelData);

  const titleSelector = 'titleSelector';
  const textSelector = 'textSelector';
  return (
    <div className="travelTemplateBox">
      {isFetching && 'загрузка'}
      {data
        ? (
          <React.Fragment>
            <input type="text" autoFocus ref={kek} style={{ opacity: 0, height: 0, margin: 0, padding: 0, border: 0, cursor: 'default' }} />
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
