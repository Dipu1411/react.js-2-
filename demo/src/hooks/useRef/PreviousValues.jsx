import React, { useState, useEffect, useRef } from 'react';

export default function PreviousValue() {
  const [count, setCount] = useState(0);
  const prevCount = useRef(0);

  useEffect(() => {
    prevCount.current = count;
  }, [count]);

  return (
    <div>
      <h1>Current Count: {count}</h1>
      <h1>Previous Count: {prevCount.current}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
