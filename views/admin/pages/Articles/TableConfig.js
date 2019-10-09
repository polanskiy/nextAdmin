import React from 'react';
import xss from 'xss';
import { textFilter } from 'react-bootstrap-table2-filter';
import xssOptions from '../../../../utils/xssOptions';
import { Link } from '../../../../routes';
import Edit from '../../../../public/static/images/icons/edit.svg';
import True from '../../../../public/static/images/icons/trrue.svg';
import False from '../../../../public/static/images/icons/false.svg';
import Trash from '../../../../public/static/images/icons/garbage.svg';
import formatter from '../../../../utils/tableFormatters';

export default function () {
  const iconFormatter = (cell, row) => (
    <div className="flexItems">
      <Link route={`/admin/articles/${row._id}`}>
        <div className="tableIcon">
          <Edit fill="white" />
        </div>
      </Link>
      <div data-name="del" className="tableIcon danger">
        <Trash fill="white" />
      </div>
    </div>
  );
  const publicFormatter = (cell, row) => (
    <>
      <div className="tableIcon">
        {row.public
          ? (
            <True fill="white" />
          )
          : (
            <False fill="white" />
          )}
      </div>
    </>
  );

  function nameFormatter(cell, row) {
    return (
      <div
        className="nameFormatterBox"
        dangerouslySetInnerHTML={{ __html: xss(row.title, xssOptions) }}
      />
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
        dataField: 'title',
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
        dataField: 'public',
        text: 'Опубликовано',
        sort: true,
        sortCaret: (order) => (
          <>
            {order ? order === 'asc' ? <div className="carretTop"><i className="tableArrow" /></div> : <div className="carret"><i className="tableArrow" /></div> : <div className="carret"><i className="tableArrow" /></div>}
          </>
        ),
        editable: false,
        formatter: publicFormatter,
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
