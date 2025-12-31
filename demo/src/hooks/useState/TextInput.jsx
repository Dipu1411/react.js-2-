import React, { useState } from 'react';

export default function TextInput() {
  const [text, setText] = useState('');

  const handleChange = e => {
    setText(e.target.value);
  };

  return (
    <>
      <div>
        <input type="text" value={text} onChange={handleChange} />
        <p>You typed: {text}</p>
        <button onClick={() => setText('')}>Clear</button>
      </div>
    </>
  );
}
