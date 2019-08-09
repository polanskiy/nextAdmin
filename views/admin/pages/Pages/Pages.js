import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Tabs from '../../../site/elements/Tabs';
import PageItem from './PageItem';

const Pagers = () => {
  const [pageList, setPageList] = useState({ data: [], isFetching: false });
  let isMount = true;

  const fetchPages = async () => {
    try {
      setPageList({ data: [], isFetching: true });
      const res = await axios({
        method: 'get',
        url: '/api/pages',
      });
      if (isMount) {
        setPageList({ data: res.data, isFetching: false });
      }
    } catch (e) {
      console.log('ошибка загрузки страниц');
    }
  };

  useEffect(() => {
    fetchPages();
    return () => {
      isMount = false;
    };
  }, []);

  const updatePage = (name, value, id) => {
    axios({
      method: 'patch',
      url: '/api/pages',
      data: { id },
    });
  };

  const renderPages = () => pageList.data.map(item => (
    <div
      role="presentation"
      key={item.name}
      name={item.name}
    >
      <PageItem page={item} data-id={item._id} updatePage={updatePage} />
    </div>
  ));

  return (
    <div>
      <div>Странички</div>
      <Tabs>
        {
        pageList.data.length
          ? renderPages() : <div>страниц нет</div>
        }
      </Tabs>
    </div>

  );
};

export default Pagers;
