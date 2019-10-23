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

const Elements = () => {
  const [isOpen, toggleOpen] = useToggle(false);
  const [showDelWarn, setShowDelWarn] = useToggle(false);
  const [nowChunkId, setNowChunkId] = useState(null);
  const [place, setPlace] = useState('');
  const { data, setArticleData, updateArticle } = useContext(TemplateCtx);
  const { elements } = data;

  const addElement = (e) => {
    const { name } = e.target.dataset;
    const id = randomId(7);
    let newElement = {};
    toggleOpen();
    switch (name) {
      case 'text':
        newElement = {
          id,
          type: name,
          image: {
            value: '',
            repeat: '',
          },
          gradient: '',
          text: '',
        };
        break;
      case 'slider':
        newElement = {
          id,
          type: name,
          image: {
            value: '',
            repeat: '',
          },
          gradient: '',
          slides: [],
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
      if (item.slides.length) {
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

  const renderElements = () => elements.map((item, i) => {
    switch (item.type) {
      case 'text':
        return (
          <Element
            key={item.id}
            index={i}
            addElement={addElement}
            handleDel={handleDel}
            chunkData={item}
            handleAdd={handleAdd}
          >
            <Text chunkData={item} />
          </Element>
        );
      case 'tabs':
        return <Element>вкладки</Element>;
      case 'slider':
        return (
          <Element
            key={item.id}
            index={i}
            addElement={addElement}
            handleDel={handleDel}
            chunkData={item}
            handleAdd={handleAdd}
          >
            <Slider chunkData={item} />

          </Element>
        );

      default:
        return null;
    }
  });

  console.log('data', data);

  return (
    <div>
      {!elements.length && <button type="button" onClick={toggleOpen}>+</button>}
      <Modal title="Добавление Статьи" isOpen={isOpen} toggleOpen={toggleOpen}>
        <ul onClick={addElement}>
          <li data-name="text">text</li>
          <li data-name="tabs">tabs</li>
          <li data-name="slider">slider</li>
        </ul>
      </Modal>
      <DeleteWarning confirmDel={delElement} isOpen={showDelWarn} toggleOpen={setShowDelWarn} />
      {renderElements()}
    </div>
  );
};

export default Elements;
