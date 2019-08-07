import React from 'react';
import Editor from '../../elements/Editor/Editor';
import Tiny from '../../elements/Editor/Tiny';
// import MyEditor from '../../elements/Editor/MyEditor';

const TravelTemplate = () => {
  const title = 'travelTemplateTitle';
  const descr = 'travelTemplateDescr';
  return (
    <div className="travelTemplateBox">
      {/* <Editor /> */}
      {/* <MyEditor /> */}
      <div className={title}><Tiny className={title} /></div>
      <div className={descr}><Tiny className={descr} /></div>
      <input type="text" placeholder="Подзаголовок" />
      <input type="file" placeholder="Картинка шапки" />
      <textarea name="" id="" cols="30" rows="10" placeholder="Текст описания" />
    </div>
  );
};

export default TravelTemplate;
