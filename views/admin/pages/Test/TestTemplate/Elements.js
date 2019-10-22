import React from 'react';
import Element from './Element';
import useToggle from '../../../../../utils/useToggle';
import randomId from '../../../../../utils/randomId';

const Elements = ({ data, setData }) => {
  const [isOpen, toggleOpen] = useToggle;

  const { elements } = data;
  const renderElements = () => elements.map((item) => {
    switch (item.type) {
      case 'text':
        return <Element>текст</Element>;
      case 'tabs':
        return <Element>вкладки</Element>;
      case 'slider':
        return <Element>слайдер</Element>;

      default:
        return null;
    }
  });

  const addElement = (e) => {
    const { name } = e.target;
    const id = randomId(7);
    let newElement = {};
    switch (name) {
      case 'text':
        newElement = {
          id,
          image: {
            value: '',
            repeat: '',
          },
          gradient: '',
          text: '',
        };
        break;

      default:
        break;
    }
    const newElements = [...elements];
    newElements.push();
    setData({ data: { ...data, elements: [...elements] }, isFetching: false });
  };

  return (
    <div>
      {elements.length && <button type="button" onClick={toggleOpen}>+</button>}
      {isOpen
      && (
      <ul onClick={addElement}>
        <li name="text">text</li>
        <li name="tabs">tabs</li>
        <li name="slider">slider</li>
      </ul>
      )}
      {renderElements()}
    </div>
  );
};

export default Elements;
