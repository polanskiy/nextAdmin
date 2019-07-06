import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Pagers = () => {
  const [pageList, setPageList] = useState(null);

  const fetchPages = async () => {
    const res = await axios({
      method: 'get',
      url: '/api/pages',
    });
    console.log('ress', res);
    setPageList(res.data.pages);
  };

  useEffect(() => {
    fetchPages();
  }, []);

  const renderPages = () => {
    if (pageList) {
      return pageList.map(item => <div key={item}>{item}</div>);
    }
    return null;
  };

  return (
    <div>
      <div>Странички</div>
      <div>{renderPages()}</div>
    </div>

  );
};

export default Pagers;
