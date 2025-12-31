import react, { useState, useRef, useEffect } from 'react';

export default function RenderCounter() {
  const [count, setCount] = useState(0);
  const RenderCount = useRef(0);

  useEffect(() => {
    RenderCount.current = RenderCount.current + 1;
  });

  return (
    <>
      <div>
        <p>Button clicked : {count} times</p>
        <p>Component rendered : {RenderCount.current} times</p>
        <button onClick={() => setCount(count + 1)}>Click me</button>
      </div>
    </>
  );
}
