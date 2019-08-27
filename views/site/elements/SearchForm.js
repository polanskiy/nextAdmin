import React from 'react';
import useToggle from '../../../utils/useToggle';

const SearchForm = () => {
  const [isOpen, toggleOpen] = useToggle(false);

  return (
    <div className="contentWrapper">
      <div className="customFormBox">
        <label htmlFor="way" className="way">
          <input className="customFormItem" placeholder="Направление" />
        </label>
        <label htmlFor="rest" className="rest">
          <input className="customFormItem" placeholder="Тип отдыха" />
        </label>
        <label htmlFor="budget" className="budget">
          <input className="customFormItem" placeholder="Бюджет" />
        </label>
        <div className="customFormItem customFormSearchItem">
          <div role="presentation" className="customFormItemBtn" onClick={() => toggleOpen()}><img src="/static/images/icons/plus.svg" alt="" /></div>
          <div className="customFormItemBtn"><img src="/static/images/icons/search.svg" alt="" /></div>
          <div className="customFormItemBtn customSearchBtn">подобрать</div>
        </div>
      </div>
      <div className={isOpen ? 'customFormBox noMargin vis' : 'customFormBox noMargin invis'}>
        <label htmlFor="calendar" className="calendar">
          <input className="customFormItem" placeholder="Дата вылета" />
        </label>
        <label htmlFor="calendar" className="calendar">
          <input className="customFormItem" placeholder="Дата прилета" />
        </label>
        <label htmlFor="city" className="city">
          <input className="customFormItem" placeholder="Город вылета" />
        </label>
        <label htmlFor="participants" className="participants customFormSearchItem">
          <input className="customFormItem" placeholder="Количество участников" />
        </label>
      </div>
    </div>
  );
};

export default SearchForm;
