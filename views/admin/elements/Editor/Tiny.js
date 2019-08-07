import React, { useState } from 'react';
import { Editor } from '@tinymce/tinymce-react';

const Tiny = ({ className }) => {
  const [text, setText] = useState();

  const handleText = (e) => {
    const value = e.target.getContent();
    setText(value);
  };
  console.log('text', text);
  return (
    <React.Fragment>
      <Editor
        initialValue={text}
        init={{
          menubar: false,
          selector: `.${className}`,
          content_css: '/_next/static/css/styles.chunk.css',
          // inline: true,
          images_upload_base_path: './',
          // images_upload_handler: this.uploadImage,
          relative_urls: false,
          plugins: [
            'image imagetools',
            'lists',
            'powerpaste',
            'link',
            'tinymcespellchecker',
          ],
          toolbar: [
            'undo redo | bold italic underline | fontselect fontsizeselect',
            'forecolor backcolor | alignleft aligncenter alignright alignfull | numlist bullist outdent indent | link | image',
          ],
          valid_elements: 'p[style],strong,em,span[style],a[href],ul,ol,li,br',
          valid_styles: {
            '*': 'font-size,font-family,color,text-decoration,text-align',
          },
          fontsize_formats: '11px 12px 14px 16px 18px 20px 22px 24px 26px 28px 30px 32px 34px 36px 38px 40px 48px 56px 72px 78px 80px 96px 120px 160px 190px',
          powerpaste_word_import: 'clean',
          powerpaste_html_import: 'clean',
          font_formats: 'Roboto;Lobster;',
          setup(ed) {
            ed.on('init', function () {
              this.execCommand('fontName', false, 'Pacifico');
              this.execCommand('fontSize', false, '22px');
            });
          },
        }}
        onChange={handleText}
      />
      <textarea rows="20" cols="10" value={text} />
    </React.Fragment>
  );
};

export default Tiny;
