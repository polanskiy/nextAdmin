import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'moment/locale/ru';
import '../../../styles/site/datePicker.scss';
import moment from 'moment';
import ruDate from 'date-fns/locale/ru';
import { isAfter } from 'date-fns';
import request from '../../../utils/request';
import useToggle from '../../../utils/useToggle';

const SearchForm = ({ noPlus, vis, secondSearch }) => {
  const [isOpen, toggleOpen] = useToggle(vis);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [city, setCity] = useState('');
  const [way, setWay] = useState('');
  const [type, setType] = useState('');
  const [number, setNumber] = useState('');
  const [parts, setParts] = useState('');

  const dateChange = ({ startD, endD }) => {
    const defaultStartDate = startDate || moment().endOf('day');
    const defaultEndDate = endDate || Date.now();
    const newStartDate = startD || defaultStartDate;
    let newEndDate = endD || defaultEndDate;
    newEndDate = isAfter(newStartDate, newEndDate) ? newStartDate : newEndDate;
    const time = moment(newStartDate);
    const endTime = moment(newEndDate);
    setStartDate(time.toDate());
    setEndDate(endTime.toDate());
  };

  const dpConfig = {
    selectsStart: true,
    showTimeSelect: false,
    className: 'dateInput',
    dateFormat: 'dd.MM.yyyy',
    placeholderText: 'Выберите дату',
    locale: ruDate,
  };

  const handleMail = () => {
    const data = {
      title: 'Путешествия',
      start: moment(startDate).format('DD.MM.YY'),
      end: moment(endDate).format('DD.MM.YY'),
      type,
      city,
      phone: number,
      members: parts,
      way,
    };
    request('/api/mail', 'post', data);
  };

  return (
    <div className="contentMidWrapper">
      <div className="customFormBox">
        <label htmlFor="way" className="way customFormItem">
          <input className="customFormInput" placeholder="Направление" value={way} onChange={(e) => setWay(e.target.value)} />
        </label>
        <label htmlFor="rest" className="rest customFormItem">
          <input className="customFormInput" placeholder="Тип отдыха" value={type} onChange={(e) => { setType(e.target.value); }} />
        </label>
        <label htmlFor="budget" className="number customFormItem">
          <input
            className="customFormInput"
            placeholder="Ваш телефон"
            value={number}
            onChange={(e) => {
              setNumber(e.target.value);
            }}
          />
        </label>
        {!secondSearch
          ? (
            <div className="customFormItem customFormSearchItem">
              {!noPlus && <div role="presentation" className="customFormItemBtn" onClick={() => toggleOpen()}><img src="/static/images/icons/plus.svg" alt="" /></div>}
              {/* <div className="customFormItemBtn"><img src="/static/images/icons/search.svg" alt="" /></div> */}
              <div className="customFormItemBtn customSearchBtn" onClick={handleMail}>подобрать</div>
            </div>
          )
          : (
            <label htmlFor="city" className="city customFormItem">
              <input className="customFormInput" placeholder="Город вылета" value={city} onChange={(e) => { setCity(e.target.value); }} />
            </label>
          )}

      </div>
      <div className={isOpen ? 'customFormBoxSecond vis' : 'customFormBoxSecond invis'}>
        <label htmlFor="calendar" className="calendar customFormItem">
          <DatePicker
            {...dpConfig}
            selected={startDate}
            selectsStart
            startDate={startDate}
            endDate={endDate}
            onChange={(date) => dateChange({ startD: date })}
            minDate={Date.now()}
            className="customFormInputDate"
            placeholderText="Дата вылета"
          />
        </label>
        <label htmlFor="calendar" className="calendar customFormItem">
          <DatePicker
            {...dpConfig}
            selected={endDate}
            selectsEnd
            startDate={startDate}
            endDate={endDate}
            minDate={startDate || Date.now()}
            onChange={(date) => dateChange({ endD: date })}
            className="customFormInputDate"
            placeholderText="Дата прилета"
          />
        </label>
        {!secondSearch && (
        <label htmlFor="city" className="city customFormItem">
          <input className="customFormInput" placeholder="Город вылета" value={city} onChange={(e) => { setCity(e.target.value); }} />
        </label>
        )}
        <label htmlFor="participants" className="participants customFormSearchItem customFormItem">
          <input className="customFormInput" placeholder="Число участников" value={parts} onChange={(e) => { setParts(e.target.value); }} />
        </label>
        {secondSearch && (
        <div className="customFormItem customFormSearchItem customSecondSearchItem" onClick={handleMail}>
          <div className="customFormItemBtn customSearchBtn">подобрать</div>
        </div>
        )}
      </div>
    </div>
  );
};

export default SearchForm;
