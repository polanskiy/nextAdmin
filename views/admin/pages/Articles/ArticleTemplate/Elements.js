import React, { useContext, useState } from 'react';
import axios from 'axios';
import Element from './Element';
import useToggle from '../../../../../utils/useToggle';
import randomId from '../../../../../utils/randomId';
import Text from './chunks/Text';
import TemplateCtx from './TemplateCtx';
import Modal from '../../../elements/Modal/Modal';
import DeleteWarning from '../../../elements/Modal/DeleteWarning';
import Slider from './chunks/Slider/Slider';
import Tabs from './chunks/Tabs/Tabs';
import Accord from './chunks/Accord/Accord';

const Elements = () => {
  const [isOpen, toggleOpen] = useToggle(false);
  const [showDelWarn, setShowDelWarn] = useToggle(false);
  const [nowChunkId, setNowChunkId] = useState(null);
  const [place, setPlace] = useState('');
  const { data, setArticleData, updateArticle } = useContext(TemplateCtx);
  const { elements } = data;

  const addElement = (e) => {
    const { type } = e.target.dataset;
    const newElement = {
      id: randomId(7),
      type,
      image: '',
      repeat: 'no-repeat',
      gradient: undefined,
    };

    toggleOpen();
    switch (type) {
      case 'text':
        newElement.text = '';
        break;
      case 'slider':
        newElement.slides = [];
        break;
      case 'tabs':
        newElement.tabs = [];
        break;
      case 'accord':
        newElement.tabs = [];
        break;
      default:
        break;
    }

    const newElements = [...elements];

    if (place === 'before') {
      newElements.splice(nowChunkId, 0, newElement);
    } else if (place === 'after') {
      newElements.splice(nowChunkId + 1, 0, newElement);
    } else {
      newElements.push(newElement);
    }
    setArticleData({ data: { ...data, elements: newElements }, isFetching: false });
  };

  const delElement = () => {
    const newElements = elements.filter((item) => {
      if (item.id !== nowChunkId) {
        return item;
      }
      if (item.image) {
        axios({
          method: 'delete',
          url: `/api/images/${data._id}`,
          data: { filename: item.image.split(`${data._id}/`)[1] },
        });
      }
      if (item.slides && item.slides.length) {
        item.slides.forEach((slide) => {
          if (slide.value) {
            axios({
              method: 'delete',
              url: `/api/images/${data._id}`,
              data: { filename: slide.value.split(`${data._id}/`)[1] },
            });
          }
        });
      }
    });

    setArticleData({ data: { ...data, elements: newElements }, isFetching: false });
    setShowDelWarn();
    updateArticle({ ...data, elements: newElements });
  };

  const handleAdd = (newPlace, index) => {
    setNowChunkId(index);
    setPlace(newPlace);
    toggleOpen();
  };

  const handleDel = (chunkId) => {
    setNowChunkId(chunkId);
    setShowDelWarn();
  };

  const renderElements = () => {
    const props = {
      length: elements.length,
      addElement,
      handleDel,
      handleAdd,
    };
    return elements.map((item, i) => {
      props.index = i;
      props.chunkData = item;
      switch (item.type) {
        case 'text':
          return (
            <Element
              key={item.id}
              {...props}
            >
              <Text chunkData={item} />
            </Element>
          );
        case 'tabs':
          return (
            <Element
              key={item.id}
              {...props}
            >
              <Tabs chunkData={item} />
            </Element>
          );
        case 'slider':
          return (
            <Element
              key={item.id}
              {...props}
            >
              <Slider chunkData={item} />
            </Element>
          );
        case 'accord':
          return (
            <Element
              key={item.id}
              {...props}
            >
              <Accord chunkData={item} />
            </Element>
          );

        default:
          return null;
      }
    });
  };

  return (
    <div className="adminArticlesElementsBox">
      {!elements.length && <button type="button" className="adminBtn" onClick={toggleOpen}>+</button>}
      <Modal title="Добавление элемента" isOpen={isOpen} toggleOpen={toggleOpen}>
        <ul onClick={addElement}>
          <li data-type="text" className="adminBtn">Текст</li>
          <li data-type="tabs" className="adminBtn">Вкладки</li>
          <li data-type="slider" className="adminBtn">Карусель</li>
          <li data-type="accord" className="adminBtn">Аккордеон</li>
        </ul>
      </Modal>
      <DeleteWarning confirmDel={delElement} isOpen={showDelWarn} toggleOpen={setShowDelWarn} />
      {renderElements()}
    </div>
  );
};

export default Elements;
