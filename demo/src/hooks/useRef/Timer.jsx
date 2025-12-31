import React, { useRef, useEffect, useState } from 'react';

export default function Timer() {
  const [count, setCount] = useState(0);
  const id = useRef(0);
  console.log(id);

  function start() {
    id.current = setInterval(() => {
      setCount(prev => prev + 1);
      console.log(id.current);
    }, 1000);
  }

  function stop() {
    clearInterval(id.current);
  }

  return (
    <div>
      <h1>Timer is {count}</h1>
      <button onClick={start}>Start</button>
      <button onClick={stop}>Stop</button>
    </div>
  );
}
