import React from 'react';

export default function HandleClick() {
  const handleClick = () => {
    alert('button clicked');
  };

  return (
    <>
      <button onClick={handleClick}>Click Me</button>
    </>
  );
}
