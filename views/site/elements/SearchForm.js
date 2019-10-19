import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'moment/locale/ru';
import '../../../styles/site/datePicker.scss';
import moment from 'moment';
import ruDate from 'date-fns/locale/ru';
import { isAfter } from 'date-fns';
import request from '../../../utils/request';
import useToggle from '../../../utils/useToggle';
import Notification from './Notification/Notification';

const SearchForm = ({ noPlus, vis, secondSearch }) => {
  const [isOpen, toggleOpen] = useToggle(vis);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [city, setCity] = useState('');
  const [way, setWay] = useState('');
  const [type, setType] = useState('');
  const [number, setNumber] = useState('');
  const [parts, setParts] = useState('');
  const [isNotif, toggleNotif] = useState(false);
  const [notif, setNotif] = useState('');
  const [timer, setTimer] = useState(null);
  let isMount = true;

  useEffect(() => () => {
    isMount = false;
  }, []);

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

  const handleMail = async (e) => {
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
    if (number) {
      e.preventDefault();
      try {
        await request('/api/mail', 'post', data);
        setNotif('Вам скоро позвонят!');
        toggleNotif(true);
        setStartDate('');
        setEndDate('');
        setNumber('');
        setParts('');
        setType('');
        setCity('');
        setWay('');
      } catch (e) {
        setNotif('Что-то пошло не так...\nПовторите попытку');
        toggleNotif(true);
      }
      clearTimeout(timer);
      const newTimer = setTimeout(() => {
        if (isMount) toggleNotif(false);
      }, 3000);
      setTimer(newTimer);
    }
  };

  const closeNotif = () => {
    toggleNotif(false);
    clearTimeout(timer);
  };

  return (
    <div className="contentMidWrapper">
      <form>
        <div className="customFormBox">
          <label htmlFor="way" className="way customFormItem">
            <input className="customFormInput" placeholder="Направление" value={way} onChange={(e) => setWay(e.target.value)} />
          </label>
          <label htmlFor="rest" className="rest customFormItem">
            <input className="customFormInput" placeholder="Тип отдыха" value={type} onChange={(e) => { setType(e.target.value); }} />
          </label>
          <label htmlFor="budget" className="number customFormItem">
            <input
              required
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
                <button type="submit" className="customFormItemBtn customSearchBtn" onClick={handleMail}>подобрать</button>
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
          <div className="customFormItem customFormSearchItem customSecondSearchItem">
            <button type="submit" className="customFormItemBtn customSearchBtn" onClick={handleMail}>подобрать</button>
          </div>
          )}
        </div>
      </form>
      <Notification title={notif} isOpen={isNotif} toggleOpen={closeNotif} />
    </div>
  );
};

export default SearchForm;
