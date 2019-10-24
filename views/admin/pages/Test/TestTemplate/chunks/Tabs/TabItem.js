import React, { useState, useEffect } from 'react';
import TextEditor from '../../../../../elements/Editor/TextEditor';
import Modal from '../../../../../elements/Modal/Modal';
import useToggle from '../../../../../../../utils/useToggle';
import request from '../../../../../../../utils/request';

const TabItem = ({
  tab, chunkData, data, handleFocus, setArticleData, updateArticle,
}) => {
  const [isOpen, toggleOpen] = useToggle(false);
  const [iconList, setIconList] = useState({ data: [], isFetching: false });
  const [nowIcon, setNowIcon] = useState('');
  let isMount = true;

  useEffect(() => () => {
    isMount = false;
  }, []);

  const handleElement = (newTabs, update) => {
    const newElements = data.elements.map((item) => {
      if (item.id === chunkData.id) {
        const newItem = { ...item };
        newItem.tabs = newTabs;
        return newItem;
      }
      return item;
    });
    const newData = { ...data, elements: newElements };
    setArticleData({ data: newData, isFetching: false });
    if (update) updateArticle(newData);
  };

  const handleTabName = (e) => {
    const name = e.target.value;
    const newTabs = chunkData.tabs.map((item) => {
      const newTab = { ...item };
      if (newTab.id === tab.id) {
        newTab.name = name;
        return newTab;
      }
      return item;
    });
    handleElement(newTabs);
  };

  const handleTabValue = (value) => {
    const newTabs = chunkData.tabs.map((item) => {
      const newTab = { ...item };
      if (newTab.id === tab.id) {
        newTab.value = value;
        return newTab;
      }
      return item;
    });
    handleElement(newTabs);
  };

  const fetchImages = async () => {
    try {
      setIconList({ data: [], isFetching: true });
      toggleOpen();
      const res = await request('/api/images/useIcons/', 'get');
      if (isMount) setIconList({ data: res.data, isFetching: false });
    } catch (e) {
      console.log('ошибка загрузки изображений');
      setIconList({ data: [], isFetching: false });
    }
  };

  const handleIcon = () => {
    const newTabs = chunkData.tabs.map((item) => {
      const newTab = { ...item };
      if (newTab.id === tab.id) {
        newTab.icon = nowIcon;
        return newTab;
      }
      return item;
    });
    toggleOpen();
    handleElement(newTabs);
  };

  const handleDelete = async () => {
    const newTabs = chunkData.tabs.filter((item) => item.id !== tab.id);
    handleElement(newTabs, true);
  };

  const renderIcons = () => iconList.data.map((img) => (
    <div
      role="presentation"
      key={img.name}
      onClick={() => setNowIcon(img.url)}
    >
      <img
        src={img.url}
        alt={`${img.name}`}
        style={{ border: nowIcon === img.url ? '3px solid red' : '3px solid transparent' }}
      />
    </div>
  ));

  return (
    <div className="adminTabItemBox">
      <div className="adminEditorTitle">
        <div className="adminTabSettings">
          <div>
            <p>Заголовок вкладки:</p>
            <input type="text" value={tab.name} onChange={handleTabName} className="adminArticleInput" />
          </div>
          <div className="adminTabIconBox">
            <p>Иконка:</p>
            <div>
              {tab.icon ? <img src={tab.icon} alt="" /> : <p>иконки нет</p>}
              <button type="button" className="adminBtn" onClick={fetchImages}>Выбрать</button>
            </div>
          </div>
        </div>
        <button type="button" className="adminBtn adminDelBtn" onClick={handleDelete}>Удалить</button>
      </div>
      <div>
        <TextEditor
          selector={tab.id}
          title="Текст вкладки"
          data={tab.value}
          setData={handleTabValue}
          handleFocus={handleFocus}
        />
      </div>
      <Modal title="Выберите иконку" isOpen={isOpen} toggleOpen={toggleOpen}>
        <div className="adminMediaIconBox">
          {renderIcons()}
        </div>
        <div className="adminBtnsBox center">
          <button
            type="button"
            className="adminBtn"
            onClick={nowIcon ? handleIcon : undefined}
            style={nowIcon ? undefined : { background: 'gray' }}
          >
            Применить
          </button>
          <button type="button" className="adminBtn danger">Отмена</button>
        </div>
      </Modal>
    </div>
  );
};

export default TabItem;
