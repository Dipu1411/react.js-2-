import React from 'react';

export default function Toolbar() {
  return (
    <div
      onClick={() => {
        alert('i am a toolbar!');
      }}
    >
      <button onClick={() => alert('playing!!')}>play</button>
      <button onClick={() => alert('uploading!!')}>upload image</button>
    </div>
  );
}
