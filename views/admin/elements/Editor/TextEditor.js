import React, { useEffect } from 'react';
import dynamic from 'next/dynamic';
import axios from 'axios';
import { Editor } from '@tinymce/tinymce-react';

const TextEditor = ({
  selector, font, title, data, setData, size, handleFocus, name,
}) => {
  useEffect(() => {
    dynamic(() => import('../../../../public/tinymce/tinymce.min'));
    dynamic(() => import('../../../../public/tinymce/themes/silver/theme.min'));
  }, []);

  const handleLocalImg = (e, success) => {
    const blob = e.blob();
    const formData = new FormData();
    formData.append('image', blob);
    axios({
      method: 'post',
      url: `/api/images/${name}`,
      data: formData,
    })
      .then((res) => {
        success(res.data.images.url);
      });
  };

  return (
    <div>
      <p className="adminEditorTitle">
        {title}
        :
      </p>
      <div className={`${selector}`}>
        <Editor
          initialValue={data}
          // apiKey="ferbxo2i5dzep5bkr3ijc3ex5a5fffycvhnqmvsmqd9f66z5"
          init={{
            menubar: false,
            branding: false,
            resize: false,
            max_width: 800,
            max_height: 300,
            language: 'ru',
            selector: `.${selector}`,
            content_css: '/_next/static/css/styles.chunk.css',
            // inline: true,
            images_upload_base_path: '/static/images/',
            images_upload_handler: handleLocalImg,
            relative_urls: false,
            plugins: [
              'image imagetools',
              'lists',
              'link',
              'autoresize',
            ],
            toolbar: [
              'undo redo | bold italic underline | fontselect fontsizeselect',
              'forecolor backcolor | alignleft aligncenter alignright alignfull | numlist bullist outdent indent | link | image',
            ],
            image_advtab: true,
            valid_elements: 'p[style],strong,em,span[style],a[href],ul,ol,li,br,img[src|style|alt]',
            valid_styles: {
              '*': 'font-size,font-family,color,text-decoration,text-align,border,margin,border-style,border-width,margin-left,margin-right,margin-top,margin-bottom,width,height,float',
            },
            fontsize_formats: '11px 12px 14px 16px 18px 20px 22px 24px 26px 28px 30px 32px 34px 36px 38px 40px 45px 56px 60px 72px 78px 80px',
            powerpaste_allow_local_images: true,
            powerpaste_word_import: 'clean',
            powerpaste_html_import: 'clean',
            font_formats: 'Roboto;Lobster;',
            setup(ed) {
              ed.on('init', () => {
                // this.execCommand('fontName', false, font || 'Roboto');
                // this.execCommand('fontSize', false, size || '16px');
                handleFocus();
              });
            },
          }}
          onChange={(e) => { setData(e.target.getContent()); }}
        />
      </div>
    </div>

  );
};

export default TextEditor;
