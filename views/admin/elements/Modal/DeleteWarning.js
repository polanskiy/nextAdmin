import React from 'react';
import Modal from './Modal';

const DeleteWarning = ({ confirmDel, toggleOpen, isOpen }) => (
  <Modal title="Удалить?" isOpen={isOpen} toggleOpen={toggleOpen}>
    <div className="adminBtnsBox" style={{ justifyContent: 'center' }}>
      <button type="button" className="adminBtn" onClick={confirmDel}>Удалить</button>
      <button type="button" className="adminBtn adminDelBtn" onClick={toggleOpen}>Отмена</button>
    </div>
  </Modal>
);

export default DeleteWarning;
