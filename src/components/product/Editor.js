import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import PropTypes from 'prop-types';

const Editor = ({ placeholder }) => {
  const [text, setText] = useState('');

  const handleChange = (value) => {
    setText(value);
  };

  return (
    <div>
      <ReactQuill
        onChange={handleChange}
        value={text}
        modules={Editor.modules}
        bounds=".app"
        placeholder={placeholder}
      />
    </div>
  );
};

Editor.modules = {
  toolbar: [
    [{ header: [] }],
    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
    [{ list: 'ordered' }, { list: 'bullet' }, 'code-block'],
    ['link', 'clean']
  ],
  clipboard: {
    matchVisual: false,
  }
};

Editor.propTypes = {
  placeholder: PropTypes.string
};

Editor.defaultProps = {
  placeholder: 'Enter your text here'
};

export default Editor;
