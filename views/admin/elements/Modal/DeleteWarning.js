import React from 'react';
import Modal from './Modal';

const DeleteWarning = ({ confirmDel, toggleOpen, isOpen }) => (
  <Modal title="Удалить?" isOpen={isOpen} toggleOpen={toggleOpen}>
    <div>
      <button type="button" onClick={confirmDel}>Удалить</button>
      <button type="button" onClick={toggleOpen}>Отмена</button>
    </div>
  </Modal>
);

export default DeleteWarning;
