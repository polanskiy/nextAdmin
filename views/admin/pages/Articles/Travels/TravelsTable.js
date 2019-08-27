import React, { useState } from 'react';
import Table from '../../../elements/Table/Table';
import Config from './TableConfig';
import useToggle from '../../../../../utils/useToggle';
import request from '../../../../../utils/request';
import DeleteWarning from '../../../elements/Modal/DeleteWarning';

const TravelsTable = ({
  travelList, setDeviceUpdate, setDeviceData, toggleOpen, preloader, fetchDevices, deviceData,
  showError, initialData, edit,
}) => {
  const [deviceId, setDeviceId] = useState(false);
  const [showDelWarn, setShowDelWarn] = useToggle(false);

  const delDevice = async () => {
    preloader();
    await request(`/server/api/satellite/${deviceId}`, 'delete');
    fetchDevices();
    setShowDelWarn();
    setDeviceId(false);
    preloader();
  };

  const handleTableIcon = (e, row) => {
    const { dataset } = e.target;
    const {
      id, name, ipaddr, type, port, config, configured,
    } = row;
    if (dataset.name === 'del') {
      setDeviceId(id);
      setShowDelWarn();
    } else if (dataset.name === 'update') {
      setDeviceUpdate(true);
      setDeviceData({
        id, name, ipaddr, type, port, config, configured,
      });
      toggleOpen();
    } else if (dataset.name === 'view') {
      window.open(`/satellite/?id=${id}`);
    } else if (dataset.name === 'reload') {
      setDeviceData({
        id, name, ipaddr, type, port, config, configured,
      });
    }
  };
  const Setting = Config(edit);
  const { columns } = Setting;
  console.log('travelList', travelList);
  return (
    <React.Fragment>
      { travelList.data.length
        ? (
          <Table data={travelList.data} handleIcon={handleTableIcon} columns={columns} keys="_id" />
        ) : <div>Путешествий нет</div>}
      <DeleteWarning confirmDel={delDevice} isOpen={showDelWarn} toggleOpen={setShowDelWarn} />
    </React.Fragment>
  );
};

export default React.memo(TravelsTable);
