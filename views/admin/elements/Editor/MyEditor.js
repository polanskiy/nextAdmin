import React from 'react';

const MyEditor = () => {
// const inputEl = useRef(null);
// const [text, setText] = useState('');
  const handleChange = (e) => {
    console.log('e', e.target.innerHTML);
  };

  const handleNewLine = (e) => {

  };
  return (
    <div>
      <div role="presentation" contentEditable="true" spellCheck="false" onInput={handleChange} onKeyDown={handleNewLine}/>
    </div>
  );
};
export default MyEditor;
