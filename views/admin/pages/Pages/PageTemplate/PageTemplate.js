import React, { useState, useCallback, useEffect } from 'react';
import request from '../../../../../utils/request';
import i from '../../../../../utils/i18n';
import Text from './Text';
import Images from './Images';
import Slides from '../../../elements/Slides/Slides';

const PageTemplate = ({ name, preloader }) => {
  const [pageData, setPageData] = useState({ data: null, isFetching: false });
  const [slideList, setSlideList] = useState([]);
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
      setSlideList(res.data.slides);
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


  const updatePage = async (newData) => {
    preloader();
    try {
      await request('/api/pages', 'patch', newData);
    } catch (err) {
      console.log('err update page');
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
            <h1 className="adminTitle">{i(data.name)}</h1>
            <Text data={data} updateData={updatePage} handleFocus={handleFocus} />
            <Images data={data} setTravelData={setPageData} updateData={updatePage} />
            <Slides
              data={data}
              slideList={slideList}
              setSlideList={setSlideList}
              updateData={updatePage}
            />
          </React.Fragment>
        ) : 'такой страницы нет'}
    </div>
  );
};

export default PageTemplate;
