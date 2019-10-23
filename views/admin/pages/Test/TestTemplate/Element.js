import React from 'react';

const Element = ({
  children, handleDel, chunkData, handleAdd, index, length,
}) => (
  <div>
    <div className="adminArticleElementBtns">
      <p />
      <button type="button" className="adminBtn" onClick={() => (handleAdd('before', index))}>+</button>
      <button type="button" className="adminBtn" onClick={() => handleDel(chunkData.id)}>удалить</button>
    </div>
    {children}
    {length - 1 === index && <button type="button" className="adminBtn" style={{ textAlign: 'center' }} onClick={() => (handleAdd('after', index))}>+</button>}
  </div>
);

export default Element;
