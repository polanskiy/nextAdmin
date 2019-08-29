import React from 'react';
import { Editor } from '@tinymce/tinymce-react';

const TextEditor = ({
  selector, font, title, data, setData, size, handleFocus,
}) => (
  <React.Fragment>
    <p className="adminEditorTitle">
      {title}
        :
    </p>
    <div className={`${selector}`}>
      <Editor
        initialValue={data}
        apiKey="ferbxo2i5dzep5bkr3ijc3ex5a5fffycvhnqmvsmqd9f66z5"
        init={{
          menubar: false,
          branding: false,
          resize: false,
          max_width: 800,
          max_height: 300,
          selector: `.${selector}`,
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
            'autoresize',
          ],
          toolbar: [
            'undo redo | bold italic underline | fontselect fontsizeselect',
            'forecolor backcolor | alignleft aligncenter alignright alignfull | numlist bullist outdent indent | link | image',
          ],
          valid_elements: 'p[style],strong,em,span[style],a[href],ul,ol,li,br',
          valid_styles: {
            '*': 'font-size,font-family,color,text-decoration,text-align',
          },
          fontsize_formats: '11px 12px 14px 16px 18px 20px 22px 24px 26px 28px 30px 32px 34px 36px 38px 40px 45px 56px 60px 72px 78px 80px',
          powerpaste_word_import: 'clean',
          powerpaste_html_import: 'clean',
          font_formats: 'Roboto;Lobster;',
          setup(ed) {
            ed.on('init', function kek() {
              this.execCommand('fontName', false, font || 'Roboto');
              this.execCommand('fontSize', false, size || '16px');
              handleFocus();
            });
          },
        }}
        onBlur={e => setData(e.target.getContent())}
      />
    </div>
  </React.Fragment>

);

export default TextEditor;
