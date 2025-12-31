import React, { useState, useRef } from 'react';
import './Timer2.css';

export default function Timer2() {
  const [count, setCount] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const id = useRef(0);

  function start() {
    if (id.current) return;
    id.current = setInterval(() => {
      setCount(prev => prev + 1);
    }, 1000);
    setIsPaused(false);
  }

  function stop() {
    clearInterval(id.current);
    id.current = 0; // Reset the interval ID
    setIsPaused(true);
  }

  function resume() {
    if (id.current) return;
    id.current = setInterval(() => {
      setCount(prev => prev + 1);
    }, 1000);
    setIsPaused(false);
  }

  function reset() {
    clearInterval(id.current);
    id.current = 0;
    setCount(0);
    setIsPaused(false);
  }

  return (
    <div className="timer-container">
      <h1>Timer is {count}</h1>
      <div className="buttons">
        <button onClick={start} className="button1">
          Start
        </button>
        <button onClick={stop} className="button2">
          Stop
        </button>
        <button onClick={resume} className="button3">
          Resume
        </button>
        <button onClick={reset} className="button4">
          Reset
        </button>
      </div>
    </div>
  );
}
