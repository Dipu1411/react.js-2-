import React, { useState, useEffect } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0); // count=0 initially

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <>
      <div>
        <p> we clicked {count} times</p>
        <button onClick={increment}>Click me</button>
      </div>
    </>
  );
}
