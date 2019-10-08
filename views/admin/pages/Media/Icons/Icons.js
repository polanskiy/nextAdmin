import React, { useEffect, useState } from 'react';
import request from '../../../../../utils/request';
import Uploader from '../../../elements/Uploader/Uploader';
import useToggle from '../../../../../utils/useToggle';
import DeleteWarning from '../../../elements/Modal/DeleteWarning';
import Modal from '../../../elements/Modal/Modal';

const Icons = () => {
  const [iconList, setIconList] = useState({ data: [], isFetching: false });
  const [nowIcon, setNowIcon] = useState(null);
  const [showDelWarn, setShowDelWarn] = useToggle(false);
  const [isOpen, toggleOpen] = useToggle(false);
  let isMount = true;

  const fetchImages = async () => {
    try {
      setIconList({ data: [], isFetching: true });
      const res = await request('/api/images/useIcons/', 'get');
      console.log('res', res);
      if (isMount) setIconList({ data: res.data, isFetching: false });
    } catch (e) {
      console.log('ошибка загрузки изображений');
      setIconList({ data: [], isFetching: false });
    }
  };

  useEffect(() => {
    fetchImages();
    return () => {
      isMount = false;
    };
  }, []);

  const deleteImage = async () => {
    await request('/api/images/useIcons', 'delete', {
      filename: nowIcon,
    });
    fetchImages();
    setShowDelWarn();
  };

  const renderIcons = () => iconList.data.map(img => (
    <div
      role="presentation"
      key={img.name}
      onClick={() => setNowIcon(img.name)}
    >
      <img
        src={img.url}
        alt={`${img.name}`}
        style={{ border: nowIcon === img.name ? '3px solid red' : '3px solid transparent' }}
      />
    </div>
  ));

  return (
    <div>
      <p>Иконки путешествий:</p>
      <div className="adminUploadIcon">
        <Uploader link="useIcons" updateImage={fetchImages} />
        <button
          type="button"
          className="adminBtn danger"
          onClick={nowIcon ? setShowDelWarn : toggleOpen}
        >
          Удалить
        </button>
      </div>
      <div className="adminMediaIconBox">
        {iconList.isFetching
          ? <div>загрузка изображений</div> : renderIcons()}
      </div>
      <DeleteWarning confirmDel={deleteImage} isOpen={showDelWarn} toggleOpen={setShowDelWarn} />
      <Modal title="Нужно выбрать иконку" isOpen={isOpen} toggleOpen={toggleOpen}>
        <div className="adminModalTitle">
          <button
            type="button"
            className="adminBtn"
            onClick={toggleOpen}
          >
          OK
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default Icons;
