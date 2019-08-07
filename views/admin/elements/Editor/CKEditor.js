import React from 'react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import CKEditor from '@ckeditor/ckeditor5-react';
// import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials';
// import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph';

const CKEditorWrapper = (props) => {
  const editorConfiguration = {
    // plugins: [Essentials, Paragraph],
    // toolbar: ['bold', 'italic'],
  };
  return (
    <div>
      <CKEditor
        editor={ClassicEditor}
        config={editorConfiguration}
        {...props}
        onInit={(editor) => {
        // You can store the "editor" and use when it is needed.
          console.log('Editor is ready to use!', editor);
        }}
        onChange={(event, editor) => {
          const data = editor.getData();
          console.log({ event, editor, data });
        }}
        onBlur={(editor) => {
          console.log('Blur.', editor);
        }}
        onFocus={(editor) => {
          console.log('Focus.', editor);
        }}
      />
    </div>
  );
};
export default CKEditorWrapper;
