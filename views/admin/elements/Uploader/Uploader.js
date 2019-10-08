import React, { useRef } from 'react';
import axios from 'axios';

const Uploader = ({ updateImage, link = '', thumb = false }) => {
  const uploadVideo = (e) => {
    const file = e.target.files;
    const formData = new FormData();
    for (let i = 0; i < file.length; i += 1) {
      formData.append('image', file[i]);
    }
    console.log('thumb', thumb);
    axios({
      method: 'post',
      url: `/api/images/${link}/?thumb=${thumb}`,
      data: formData,
    })
      .then((res) => {
        console.log('res.data', res.data);
        updateImage(res.data.images.filename);
      });
    e.target.value = null;
  };

  const Input = useRef(null);
  const onClick = (e) => {
    e.preventDefault();
    Input.current.click();
  };

  return (
    <React.Fragment>
      <button type="button" onClick={onClick} className="adminBtn">
        <span>Загрузить</span>
      </button>
      <input
        ref={Input}
        // multiple
        style={{ display: 'none' }}
        type="file"
        id="files"
        onChange={e => uploadVideo(e)}
        accept="image/*"
      />
    </React.Fragment>
  );
};

export default Uploader;
