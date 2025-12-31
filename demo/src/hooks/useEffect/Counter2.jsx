import react, { useState, useEffect } from 'react';

export default function Counter2() {
  const [count, setCount] = useState(0); // count=0 initially

  useEffect(() => {
    console.log(`You clicked ${count} times`);
  }, [count]);

  return (
    <>
      <div>
        <h1>{count}</h1>
        <button onClick={() => setCount(count + 1)}>Increment</button>
      </div>
    </>
  );
}
