import React from 'react';
import Plus from '../../../../../static/images/icons/plus.svg';

const Element = ({
  children, modalDel, chunkData, modalAdd, index, length,
}) => (
  <>
    <div className="adminArticleElementBtns">
      <button type="button" className="adminBtn adminBtnPlus" onClick={() => (modalAdd('before', index))}>
        <Plus />
      </button>
      <button type="button" className="adminBtn adminBtnAbsolute adminDelBtn" onClick={() => modalDel(chunkData.id)}>Удалить</button>
    </div>
    {children}
    {length - 1 === index && (
    <div className="adminArticleElementBtns">
      <button type="button" className="adminBtn adminBtnPlus" style={{ margin: '0 auto' }} onClick={() => (modalAdd('after', index))}><Plus /></button>
    </div>
    )}
  </>
);

export default Element;
