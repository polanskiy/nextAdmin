import React from 'react';
import axios from 'axios';
import { Editor } from '@tinymce/tinymce-react';

const TextEditor = ({
  selector, title, data, setData, handleFocus, name, height = 300, setDeleteImg,
}) => {
  const handleLocalImg = (e, success) => {
    const blob = e.blob();
    const formData = new FormData();
    formData.append('image', blob);
    axios({
      method: 'post',
      url: `/api/images/${name}?thumb=false`,
      data: formData,
    })
      .then((res) => {
        success(res.data.images.url);
      });
  };

  const handleDeleteImg = (src) => {
    console.log('handleDeleteImg', src);
    // axios({
    //   method: 'delete',
    //   url: `/api/images/${name}`,
    //   data: { filename: src.split(`${name}/`)[1] },
    // });
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
            max_height: height,
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
              'searchreplace',
              'table',
              'code',
              'wordcount',
              'noneditable',
            ],
            noneditable_noneditable_class: 'mceNonEditable',
            toolbar: [
              'undo redo | bold italic underline | fontselect fontsizeselect | formatselect blockquote',
              'forecolor backcolor | alignleft aligncenter alignright alignjustify | numlist bullist outdent indent | link | image | searchreplace | table ',
            ],
            table_default_attributes: {
              border: '2',
            },
            table_class_list: [
              { title: 'None', value: '' },
              { title: 'Dog', value: 'dog' },
              { title: 'Cat', value: 'cat' },
            ],
            image_advtab: true,
            valid_elements: 'p[style],strong,em,span[style],a[href],ul,ol,li,br,img[src|style|alt],table,td,tr,th,h1[style],h2[style],h3[style]',
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
              ed.on('KeyDown', (e) => {
                if (e.keyCode == 8 || e.keyCode == 46) { // delete & backspace keys
                  const selectedNode = ed.selection.getNode(); // get the selected node (element) in the editor
                  if (selectedNode && selectedNode.nodeName == 'IMG') {
                    setDeleteImg(selectedNode.src); // A callback that will let me invoke the deletion of the image on the server if appropriate for the image source.
                  }
                }
              });
            },
          }}
          onChange={(e) => { setData(e.target.getContent()); console.log('kek'); }}
        />
      </div>
    </div>

  );
};

export default TextEditor;
