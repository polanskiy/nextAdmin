import React, { useRef } from 'react';
import axios from 'axios';

const Uploader = () => {
  const uploadVideo = (e) => {
    const file = e.target.files;
    const formData = new FormData();
    for (let i = 0; i < file.length; i += 1) {
      formData.append('image', file[i]);
    }
    console.log('formData', formData);
    axios({
      method: 'post',
      url: '/api/images',
      data: formData,
    })
      .then((res) => {
        console.log('res', res);
      });
    e.target.value = null;
  };

  const Input = useRef(null);
  const onClick = (e) => {
    e.preventDefault();
    Input.current.click();
  };

  const fetchImages = () => {
    axios({
      method: 'get',
      url: 'http://localhost:3000/api/images',
    })
      .then((res) => {
        console.log('reees', res);
      });
  };

  return (
    <form style={{ marginBottom: 10 }}>
      <button type="button" onClick={onClick}>
        <span>Добавить</span>
      </button>
      <button type="button" onClick={fetchImages}>
        <span>взять</span>
      </button>
      <input
        ref={Input}
        multiple
        style={{ display: 'none' }}
        type="file"
        id="files"
        name="image"
        onChange={e => uploadVideo(e)}
        accept="image/*"
      />
    </form>
  );
};

export default Uploader;
