import React, { useState } from 'react';
import Table from '../../elements/Table/Table';
import Config from './TableConfig';
import useToggle from '../../../../utils/useToggle';
import request from '../../../../utils/request';
import DeleteWarning from '../../elements/Modal/DeleteWarning';

const TravelsTable = ({
  travelList, fetchTravels,
}) => {
  const [travelId, setTravelId] = useState(false);
  const [showDelWarn, setShowDelWarn] = useToggle(false);

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
  return (
    <div className="adminTableBox">
      { travelList.isFetching ? <p>загрузка путешествий</p> : travelList.data.length
        ? (
          <Table data={travelList.data} handleIcon={handleTableIcon} columns={columns} keys="_id" />
        ) : <div>Путешествий нет</div>}
      <DeleteWarning confirmDel={delTravel} isOpen={showDelWarn} toggleOpen={setShowDelWarn} />
    </div>
  );
};

export default React.memo(TravelsTable);
