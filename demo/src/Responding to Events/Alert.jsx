import React from 'react';

function AlertButton({ message, children }) {
  return <button onClick={() => alert(message)}>{children}</button>;
}

export default function Alert() {
  return (
    <div>
      <AlertButton message="play movie">play movie</AlertButton>
      <AlertButton message="upload image">upload image</AlertButton>
    </div>
  );
}
