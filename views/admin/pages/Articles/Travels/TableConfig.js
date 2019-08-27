import React from 'react';
import { textFilter } from 'react-bootstrap-table2-filter';
// import { BtnTable } from '../../../styles/Common';
// import { ReactComponent as Trash } from '../../../../../static/images/icons/del.svg';
// import { ReactComponent as Edit } from '../../../../../static/images/icons/edit.svg';
// import { ReactComponent as Config } from '../../../images/config.svg';
// import { ReactComponent as Update } from '../../../images/update.svg';
// import { ReactComponent as View } from '../../../images/eye.svg';
import formatter from '../../../../../utils/tableFormatters';
// import { div } from '../../../styles/Table';


export default function () {
  function iconFormatter() {
    return (
      <React.Fragment>
        <div data-name="edit" bg="main">edit</div>
        <div data-name="del" bg="red">delete</div>
      </React.Fragment>
    );
  }
  return {
    columns: [
      {
        dataField: 'title',
        text: 'Название',
        sort: true,
        sortCaret: order => (
          <React.Fragment>
            {order ? order === 'asc' ? <div deg="-90deg">&#8249;</div> : <div deg="90deg">&#8249;</div> : <div deg="90deg">&#8249;</div>}
          </React.Fragment>
        ),
        editable: false,
        headerStyle: {
          width: 80,
        },
      },
      {
        dataField: 'createdAt',
        text: 'Создан',
        editable: false,
        formatter: formatter.dateFormat,
        sort: true,
        sortCaret: order => (
          <React.Fragment>
            {order ? order === 'asc' ? <div deg="-90deg">&#8249;</div> : <div deg="90deg">&#8249;</div> : <div deg="90deg">&#8249;</div>}
          </React.Fragment>
        ),
        headerStyle: {
          width: 110,
        },
      },
      {
        dataField: 'updatedAt',
        text: 'Изменен',
        editable: false,
        formatter: formatter.dateFormat,
        sort: true,
        sortCaret: order => (
          <React.Fragment>
            {order ? order === 'asc' ? <div deg="-90deg">&#8249;</div> : <div deg="90deg">&#8249;</div> : <div deg="90deg">&#8249;</div>}
          </React.Fragment>
        ),
        headerStyle: {
          width: 110,
        },
      },
      {
        dataField: 'Settings',
        text: ' ',
        isDummyField: true,
        formatter: iconFormatter,
        editable: false,
        headerStyle: {
          width: 200,
        },
      },
    ],
  };
}
