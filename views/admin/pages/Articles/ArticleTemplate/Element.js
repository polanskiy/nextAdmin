import React from 'react';

const Element = ({
  children, handleDel, chunkData, handleAdd, index, length,
}) => (
  <div>
    <div className="adminArticleElementBtns">
      <button type="button" className="adminBtn" onClick={() => (handleAdd('before', index))}>
        +
      </button>
      <button type="button" className="adminBtn adminBtnAbsolute" onClick={() => handleDel(chunkData.id)}>удалить</button>
    </div>
    {children}
    {length - 1 === index && (
    <div className="adminArticleElementBtns">
      <button type="button" className="adminBtn" style={{ margin: '0 auto' }} onClick={() => (handleAdd('after', index))}>+</button>
    </div>
    )}
  </div>
);

export default Element;
