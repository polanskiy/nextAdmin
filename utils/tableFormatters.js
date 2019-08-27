import React from 'react';
import moment from 'moment';

const dateTimeFormat = cell => moment(cell).format('DD.MM.YYYY HH:mm:ss');
const dateFormat = cell => moment(cell).format('DD.MM.YYYY');

const placeholder = (column, colIndex, { filterElement, sortElement }) => (
  <div className="filterBoxTable">
    { filterElement }
    {sortElement}
  </div>
);

export default { dateFormat, placeholder, dateTimeFormat };
