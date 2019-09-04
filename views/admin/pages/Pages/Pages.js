import React, { useState, useEffect } from 'react';
import Table from '../../elements/Table/Table';
import Config from './TableConfig';
import useToggle from '../../../../utils/useToggle';
import request from '../../../../utils/request';
import DeleteWarning from '../../elements/Modal/DeleteWarning';

const Travels = (props) => {
  const [pageList, setPageList] = useState({ data: [], isFetching: false });
  const [travelId, setTravelId] = useState(false);
  const [showDelWarn, setShowDelWarn] = useToggle(false);
  let isMount = true;

  const fetchTravels = async () => {
    if (isMount) setPageList({ data: [], isFetching: true });
    try {
      const res = await request('/api/pages/', 'get');
      if (isMount) setPageList({ data: res.data, isFetching: false });
    } catch (e) {
      if (isMount) setPageList({ data: [], isFetching: false });
    }
  };

  const delTravel = async () => {
    await request(`/api/travels/${travelId}`, 'delete');
    fetchTravels();
    setShowDelWarn();
    setTravelId(false);
  };

  const handleTableIcon = (e, row) => {
    const { dataset } = e.target;
    const {
      _id,
    } = row;
    if (dataset.name === 'del') {
      setTravelId(_id);
      setShowDelWarn();
    }
  };
  const Setting = Config();
  const { columns } = Setting;


  useEffect(() => {
    fetchTravels();
    return () => {
      isMount = false;
    };
  }, []);

  return (
    <React.Fragment>
      <div>
        <h1 className="adminTitle">Страницы:</h1>
        <div className="adminPageElement">
          <React.Fragment>
            { pageList.isFetching ? <p>загрузка страниц</p> : pageList.data.length
              ? (
                <Table data={pageList.data} handleIcon={handleTableIcon} columns={columns} keys="_id" />
              ) : <div>Страниц нет</div>}
            <DeleteWarning confirmDel={delTravel} isOpen={showDelWarn} toggleOpen={setShowDelWarn} />
          </React.Fragment>
        </div>
      </div>
    </React.Fragment>
  );
};
export default Travels;
