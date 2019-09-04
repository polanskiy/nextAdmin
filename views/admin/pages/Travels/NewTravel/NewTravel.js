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
    const route = translit(title);
    const initialData = {
      title,
      route,
      tabs: [],
      images: {
        header: '',
        footer: '',
        tabs: '',
      },
      public: false,
      position: newPostion,
    };
    await request('/api/travels', 'post', initialData);
    fetchTravels();
  };

  return (
    <React.Fragment>
      <button type="button" onClick={toggleOpen} className="adminBtn mgb">
        Добавить
      </button>
      <Modal title="Добавление Путешествия" isOpen={isOpen} toggleOpen={toggleOpen}>
        <input type="text" placeholder="Название" value={title} onChange={(e) => { setTitle(e.target.value); }} />
        <button type="button" onClick={createTravel}>Создать</button>
        <button type="button">Отмена</button>
      </Modal>
    </React.Fragment>
  );
};

export default NewTravel;
