import React, { useState } from 'react';
import request from '../../../../../utils/request';
import Modal from '../../../elements/Modal/Modal';
import useToggle from '../../../../../utils/useToggle';
import translit from '../../../../../utils/translit';


const NewTravel = ({ travelList, fetchTravels }) => {
  const [isOpen, toggleOpen] = useToggle(false);
  const [title, setTitle] = useState('');

  const createTravel = async () => {
    const newPostion = travelList.length + 1;
    const route = translit(title.toLowerCase()).replace(/\s/g, '_').replace(/,/g, '').replace(/–/g, '-');
    const initialData = {
      title,
      subtitle: '',
      route,
      tabs: [],
      images: {
        header: '',
        tabs: '',
      },
      slides: [],
      public: false,
      position: newPostion,
    };
    await request('/api/travels', 'post', initialData);
    fetchTravels();
    toggleOpen();
    setTitle('');
  };

  return (
    <>
      <button type="button" onClick={toggleOpen} className="adminBtn mgb">
        Добавить
      </button>
      <Modal title="Добавление Путешествия" isOpen={isOpen} toggleOpen={toggleOpen}>
        <input
          type="text"
          placeholder="Название"
          value={title}
          onChange={(e) => { setTitle(e.target.value); }}
          className="adminModalInput"
        />
        <div className="adminBtnsBox">
          <button
            type="button"
            className="adminBtn"
            onClick={title ? createTravel : undefined}
            style={title ? undefined : { background: 'gray' }}
          >
Создать

          </button>
          <button type="button" className="adminBtn danger">Отмена</button>
        </div>
      </Modal>
    </>
  );
};

export default NewTravel;
