import React from 'react';
import { textFilter } from 'react-bootstrap-table2-filter';
import { Link } from '../../../../routes';
import Edit from '../../../../static/images/icons/edit.svg';
import formatter from '../../../../utils/tableFormatters';
import i from '../../../../utils/i18n';

export default function () {
  const iconFormatter = (cell, row) => (
    <div className="flexItems">
      <Link route={`/admin/pages/${row.name}`}>
        <div className="tableIcon">
          <Edit fill="white" />
        </div>
      </Link>
    </div>
  );

  function nameFormatter(cell, row) {
    return (
      <div>
        {i(row.name)}
      </div>
    );
  }

  const placeholder = (column, colIndex, { filterElement, sortElement }) => (
    <div className="filterBoxTable">
      { filterElement }
      {sortElement}
    </div>
  );

  return {
    columns: [
      {
        dataField: 'name',
        text: 'Название',
        sort: true,
        sortCaret: (order) => (
          <>
            {order ? order === 'asc' ? <div className="carretTop"><i className="tableArrow" /></div> : <div className="carret"><i className="tableArrow" /></div> : <div className="carret"><i className="tableArrow" /></div>}
          </>
        ),
        editable: false,
        formatter: nameFormatter,
        headerFormatter: placeholder,
        filter: textFilter({
          className: 'customPlaceholder',
          placeholder: 'Название',
        }),
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
        sortCaret: (order) => (
          <>
            {order ? order === 'asc' ? <div className="carretTop"><i className="tableArrow" /></div> : <div className="carret"><i className="tableArrow" /></div> : <div className="carret"><i className="tableArrow" /></div>}
          </>
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
        sortCaret: (order) => (
          <>
            {order ? order === 'asc' ? <div className="carretTop"><i className="tableArrow" /></div> : <div className="carret"><i className="tableArrow" /></div> : <div className="carret"><i className="tableArrow" /></div>}
          </>
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
          width: 30,
        },
      },
    ],
  };
}
