import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'moment/locale/ru';
import '../../../styles/site/datePicker.scss';
import moment from 'moment';
import ruDate from 'date-fns/locale/ru';

const CelebForm = () => {
  const [startDate, setStartDate] = useState('');

  const dateChange = ({ startD }) => {
    let start = null;
    start = startD || startDate;
    const convertStart = moment(start).toDate();
    if (start)setStartDate(convertStart);
  };

  const dpConfig = {
    selectsStart: true,
    showTimeSelect: false,
    className: 'dateInput',
    dateFormat: 'dd.MM.yyyy',
    placeholderText: 'Выберите дату',
    locale: ruDate,
  };
  return (
    <div className="contentMidWrapper">
      <div className="customFormBox">
        <label htmlFor="way" className="way customFormItem">
          <input className="customFormInput" placeholder="Тип праздника" />
        </label>
        <label htmlFor="rest" className="calendar customFormItem">
          <DatePicker
            {...dpConfig}
            selected={startDate}
            startDate={startDate}
            onChange={(date) => dateChange({ startD: date })}
            minDate={Date.now()}
            className="customFormInputDate"
            placeholderText="Дата"
          />
        </label>
        <label htmlFor="budget" className="participants customFormItem">
          <input className="customFormInput" placeholder="Число участников" />
        </label>
        <div className="customFormItem customCelebFormSearchItem">
          <div className="customFormItemBtn customSearchBtn">Заказать праздник</div>
        </div>
      </div>
      <div className="customFormBoxSecond vis">
        <label htmlFor="calendar" className="calendar customFormItem customFormItemLong">
          <input className="customFormInput" placeholder="Особые пожелания" />
        </label>
      </div>
    </div>
  );
};

export default CelebForm;
