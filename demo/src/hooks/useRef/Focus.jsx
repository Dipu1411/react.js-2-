import React, { useState, useRef } from 'react';

export default function Input() {
  const [text, setText] = useState('');
  const inputRef = useRef();

  const handleClick = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <input
        ref={inputRef}
        type="text"
        value={text}
        onChange={e => setText(e.target.value)}
        placeholder="Enter Name"
      />
      <button onClick={handleClick}>Submit</button>
    </div>
  );
}
