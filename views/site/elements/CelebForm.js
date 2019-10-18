import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'moment/locale/ru';
import '../../../styles/site/datePicker.scss';
import moment from 'moment';
import ruDate from 'date-fns/locale/ru';
import request from '../../../utils/request';
import Notification from './Notification/Notification';

const CelebForm = () => {
  const [startDate, setStartDate] = useState('');
  const [type, setType] = useState('');
  const [number, setNumber] = useState('');
  const [parts, setParts] = useState('');
  const [name, setName] = useState('');
  const [mail, setMail] = useState('');
  const [wishes, setWishes] = useState('');
  const [isNotif, toggleNotif] = useState(false);
  const [notif, setNotif] = useState('');
  const [timer, setTimer] = useState(null);
  let isMount = true;

  useEffect(() => () => {
    isMount = false;
  }, []);

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

  const handleMail = async (e) => {
    const data = {
      title: 'События',
      start: moment(startDate).format('DD.MM.YY'),
      type,
      wishes,
      phone: number,
      members: parts,
      name,
      mail,
    };
    if (number && name) {
      e.preventDefault();
      try {
        await request('/api/mail', 'post', data);
        setNotif('Вам скоро позвонят!');
        toggleNotif(true);
        setStartDate('');
        setNumber('');
        setParts('');
        setType('');
        setName('');
        setWishes('');
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
            <input
              className="customFormInput"
              placeholder="Тип праздника"
              value={type}
              onChange={(e) => {
                setType(e.target.value);
              }}
            />
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
          <label htmlFor="budget" className="participants members customFormItem">
            <input
              className="customFormInput"
              placeholder="Число участников"
              value={parts}
              onChange={(e) => {
                setParts(e.target.value);
              }}
            />
          </label>
        </div>
        <div className="customFormBoxSecond vis">
          <label htmlFor="way" className="name customFormItem">
            <input
              required
              className="customFormInput"
              placeholder="Ваше имя"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
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
          <label htmlFor="budget" className="email customFormItem">
            <input
              className="customFormInput"
              placeholder="Ваш e-mail"
              value={mail}
              onChange={(e) => {
                setMail(e.target.value);
              }}
            />
          </label>
        </div>
        <div className="customFormBoxSecond vis">
          <label htmlFor="calendar" className="calendar wishes customFormItem customFormItemLong">
            <input className="customFormInput" placeholder="Особые пожелания" value={wishes} onChange={(e) => { setWishes(e.target.value); }} />
          </label>
          <div className="customFormItem customCelebFormSearchItem">
            <button type="submit" className="customFormItemBtn customSearchBtn" onClick={handleMail}>Заказать праздник</button>
          </div>
        </div>
        <Notification title={notif} isOpen={isNotif} toggleOpen={closeNotif} />
      </form>
    </div>
  );
};

export default CelebForm;
