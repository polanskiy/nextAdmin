import React, { Component} from 'react';
import { EditorState, convertToRaw, ContentState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';


class EditorComponent extends Component {
  constructor(props) {
    super(props);
    const html = '<p>Hey this <strong>editor</strong> rocks 😀</p>';
    const contentBlock = htmlToDraft(html);
    if (contentBlock) {
      const contentState = ContentState.createFromBlockArray(contentBlock.contentBlocks);
      const editorState = EditorState.createWithContent(contentState);
      this.state = {
        editorState,
      };
    }
  }

   handleEditor = (editorState) => {
     this.setState({
       editorState,
     });
   }

   handleImage = (e) => {
  console.log('eee', e)
   }

   render() {
     const { editorState } = this.state;

     return (
       <div>
         <Editor
           editorState={editorState}
           onEditorStateChange={this.handleEditor}
           toolbar={{
            image: {
              className: undefined,
              component: undefined,
              popupClassName: undefined,
              urlEnabled: true,
              uploadEnabled: true,
              alignmentEnabled: true,
              uploadCallback: this.handleImage,
              previewImage: false,
            },
           }}
           localization={{
             locale: 'ru',
           }}
         />
         <textarea
           rows="20"
           onChange={(e) => { console.log(e); }}
           value={draftToHtml(convertToRaw(editorState.getCurrentContent()))}
         />
       </div>

     );
   }
}

export default EditorComponent;
