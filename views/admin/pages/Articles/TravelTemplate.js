import React, { useState } from 'react';
import Tiny from '../../elements/Editor/TextEditor';
import Uploader from '../../elements/Uploader/Uploader';

const TravelTemplate = () => {
  const [titleData, setTitleData] = useState('');
  const [descrData, setDescrData] = useState('');

  const title = 'travelTemplateTitle';
  const descr = 'travelTemplateDescr';
  return (
    <div className="travelTemplateBox">
      <Tiny
        selector={title}
        title="Заголовок путешествия"
        font="Lobster"
        data={titleData}
        setData={setTitleData}
        size="60px"
      />
      <Tiny
        selector={descr}
        title="Описание путешествия"
        data={descrData}
        setData={setDescrData}
      />
      <div>
        <p>Бэкграунд шапки:</p>
        <Uploader />
      </div>
    </div>
  );
};

export default TravelTemplate;
