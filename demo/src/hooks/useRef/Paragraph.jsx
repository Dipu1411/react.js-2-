import React, { useRef } from 'react';

export default function Paragraph() {
  const paragraphRef = useRef(null);

  function handleClick() {
    if (paragraphRef.current) {
      paragraphRef.current.style.color = 'blue';
    }
  }

  return (
    <>
      <div>
        <p ref={paragraphRef}>This is a paragraph that will change color.</p>
        <button onClick={handleClick}>Change color</button>
      </div>
    </>
  );
}
