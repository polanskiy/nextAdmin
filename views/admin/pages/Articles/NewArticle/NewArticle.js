import React, { useState } from 'react';
import request from '../../../../../utils/request';
import Modal from '../../../elements/Modal/Modal';
import useToggle from '../../../../../utils/useToggle';
import translit from '../../../../../utils/translit';


const NewArticle = ({ articleList, fetchArticles }) => {
  const [isOpen, toggleOpen] = useToggle(false);
  const [title, setTitle] = useState('');

  const createArticle = async () => {
    const newPostion = articleList.length + 1;
    const route = translit(title);
    const initialData = {
      title,
      subtitle: '',
      route,
      images: {
        header: '',
      },
      public: false,
      position: newPostion,
    };
    await request('/api/articles', 'post', initialData);
    fetchArticles();
    toggleOpen();
    setTitle('');
  };

  return (
    <React.Fragment>
      <button type="button" onClick={toggleOpen} className="adminBtn mgb">
        Добавить
      </button>
      <Modal title="Добавление Статьи" isOpen={isOpen} toggleOpen={toggleOpen}>
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
            onClick={title ? createArticle : undefined}
            style={title ? undefined : { background: 'gray' }}
          >
            Создать
          </button>
          <button type="button" className="adminBtn danger">Отмена</button>
        </div>
      </Modal>
    </React.Fragment>
  );
};

export default NewArticle;
