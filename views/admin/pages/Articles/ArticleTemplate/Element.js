import React from 'react';

const Element = ({
  children, modalDel, chunkData, modalAdd, index, length,
}) => (
  <div>
    <div className="adminArticleElementBtns">
      <button type="button" className="adminBtn" onClick={() => (modalAdd('before', index))}>
        +
      </button>
      <button type="button" className="adminBtn adminBtnAbsolute" onClick={() => modalDel(chunkData.id)}>удалить</button>
    </div>
    {children}
    {length - 1 === index && (
    <div className="adminArticleElementBtns">
      <button type="button" className="adminBtn" style={{ margin: '0 auto' }} onClick={() => (modalAdd('after', index))}>+</button>
    </div>
    )}
  </div>
);

export default Element;
