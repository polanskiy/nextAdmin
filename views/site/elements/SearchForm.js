import React from 'react';
import useToggle from '../../../utils/useToggle';

const SearchForm = () => {
  const [isOpen, toggleOpen] = useToggle(false);

  return (
    <div className="contentMidWrapper">
      <div className="customFormBox">
        <label htmlFor="way" className="way customFormItem">
          <input className="customFormInput" placeholder="Направление" />
        </label>
        <label htmlFor="rest" className="rest customFormItem">
          <input className="customFormInput" placeholder="Тип отдыха" />
        </label>
        <label htmlFor="budget" className="budget customFormItem">
          <input className="customFormInput" placeholder="Бюджет" />
        </label>
        <div className="customFormItem customFormSearchItem">
          <div role="presentation" className="customFormItemBtn" onClick={() => toggleOpen()}><img src="/static/images/icons/plus.svg" alt="" /></div>
          <div className="customFormItemBtn"><img src="/static/images/icons/search.svg" alt="" /></div>
          <div className="customFormItemBtn customSearchBtn">подобрать</div>
        </div>
      </div>
      <div className={isOpen ? 'customFormBoxSecond vis' : 'customFormBoxSecond invis'}>
        <label htmlFor="calendar" className="calendar customFormItem">
          <input className="customFormInput" placeholder="Дата вылета" />
        </label>
        <label htmlFor="calendar" className="calendar customFormItem">
          <input className="customFormInput" placeholder="Дата прилета" />
        </label>
        <label htmlFor="city" className="city customFormItem">
          <input className="customFormInput" placeholder="Город вылета" />
        </label>
        <label htmlFor="participants" className="participants customFormSearchItem customFormItem">
          <input className="customFormInput" placeholder="Количество участников" />
        </label>
      </div>
    </div>
  );
};

export default SearchForm;
