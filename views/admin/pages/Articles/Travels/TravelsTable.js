import React, { useState } from 'react';
import Table from '../../../elements/Table/Table';
import Config from './TableConfig';
import useToggle from '../../../../../utils/useToggle';
import request from '../../../../../utils/request';
import DeleteWarning from '../../../elements/Modal/DeleteWarning';

const TravelsTable = ({
  travelList, router,
}) => {
  const [deviceId, setDeviceId] = useState(false);
  const [showDelWarn, setShowDelWarn] = useToggle(false);

  // const delDevice = async () => {
  //   preloader();
  //   await request(`/server/api/satellite/${deviceId}`, 'delete');
  //   fetchDevices();
  //   setShowDelWarn();
  //   setDeviceId(false);
  //   preloader();
  // };

  const handleTableIcon = (e, row) => {
    const { dataset } = e.target;
    const {
      id,
    } = row;
    console.log('row', row);
    if (dataset.name === 'del') {
      setDeviceId(id);
      setShowDelWarn();
    } else if (dataset.name === 'edit') {
      console.log('kek');
      // router.push(`/admin/articles/${row._id}`);
      // setDeviceUpdate(true);
      // setDeviceData({
      //   id, name, ipaddr, type, port, config, configured,
      // });
      // toggleOpen();
    }
  };
  const Setting = Config();
  const { columns } = Setting;
  console.log('travelList', travelList);
  return (
    <React.Fragment>
      { travelList.data.length
        ? (
          <Table data={travelList.data} handleIcon={handleTableIcon} columns={columns} keys="_id" />
        ) : <div>Путешествий нет</div>}
      {/* <DeleteWarning confirmDel={delDevice} isOpen={showDelWarn} toggleOpen={setShowDelWarn} /> */}
    </React.Fragment>
  );
};

export default React.memo(TravelsTable);
