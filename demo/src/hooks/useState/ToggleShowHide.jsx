import react, { useState, useEffect } from 'react';

export default function ToggleText() {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <>
      <div>
        <button onClick={() => setIsVisible(!isVisible)}>
          {isVisible ? 'hide' : 'show'}
        </button>

        {isVisible && <p>hello, i am visible!</p>}
      </div>
    </>
  );
}
