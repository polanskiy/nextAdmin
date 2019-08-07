import React from 'react';
import Editor from '../../elements/Editor/Editor';

const TravelTemplate = () => (
  <div className="travelTemplateBox">
    <Editor />
    <input type="text" placeholder="Подзаголовок" />
    <input type="file" placeholder="Картинка шапки" />
    <textarea name="" id="" cols="30" rows="10" placeholder="Текст описания" />
  </div>
);

export default TravelTemplate;
