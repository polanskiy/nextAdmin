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
    const id = randomId(7);
    let newElement = {};
    const image = {
      value: '',
      repeat: 'no-repeat',
    };
    toggleOpen();
    switch (type) {
      case 'text':
        newElement = {
          id,
          type,
          image,
          gradient: '',
          text: '',
        };
        break;
      case 'slider':
        newElement = {
          id,
          type,
          image,
          gradient: '',
          slides: [],
        };
        break;
      case 'tabs':
        newElement = {
          id,
          type,
          image,
          gradient: '',
          tabs: [],
        };
        break;
      case 'accord':
        newElement = {
          id,
          type,
          image,
          gradient: '',
          tabs: [],
        };
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
      if (item.image.value) {
        axios({
          method: 'delete',
          url: `/api/images/${data._id}`,
          data: { filename: item.image.value.split(`${data._id}/`)[1] },
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
