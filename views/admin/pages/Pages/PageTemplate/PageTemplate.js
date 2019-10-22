import React, { useState, useCallback, useEffect } from 'react';
import request from '../../../../../utils/request';
import i from '../../../../../utils/i18n';
import Text from './Text';
import Images from './Images';
import Settings from './Settings';
import Slides from '../../../elements/Slides/Slides';

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
    setPageData({ data: pageData.data, isFetching: true });
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
    setTimeout(() => {
      handleFocus();
    }, 0);
  }, [kek]);


  const updatePage = async (newData) => {
    preloader();
    try {
      await request('/api/pages', 'patch', newData);
    } catch (err) {
      console.log('err update page');
    }
    preloader();
  };
  console.log('data', data);
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
            <h1 className="adminTitle">{i(data.name)}</h1>
            <Settings data={data} setData={setPageData} />
            <Text data={data} updateData={updatePage} handleFocus={handleFocus} setPageData={setPageData} />
            <Images data={data} setTravelData={setPageData} updateData={updatePage} />
            {data.slides && (
            <Slides
              data={data}
              setPageData={setPageData}
              updateData={updatePage}
            />
            )}
          </>
        ) : 'такой страницы нет'}
      <button type="button" className="adminBtn absoluteBtn" onClick={() => updatePage(data)}>Сохранить</button>
    </div>
  );
};

export default PageTemplate;
