import React, { useState, useRef, useEffect } from 'react';

export default function TypingSpeed() {
  const [text, setText] = useState('');
  const [wpm, setWpm] = useState(0);
  const [second, setSecond] = useState(0);
  const timer = useRef(null);

  function handleSubmit(e) {
    setText(e.target.value);
    if (!timer.current) {
      timer.current = setInterval(() => {
        setSecond(prevSecond => prevSecond + 1);
      }, 1000);
    }
  }

  useEffect(() => {
    const words = text.trim().split().length;
    if (second > 0) {
      setWpm(Math.round((words / second) * 60));
    }
  });

  const char = text.replace().length;

  return (
    <>
      <div className="typing-speed-container">
        <h1>Typing Speed Test</h1>
        <textarea
          value={text}
          onChange={handleSubmit}
          placeholder="Type here..."
          rows="10"
          cols="50"
        />

        <p>Words per minute: {wpm}</p>
        <p>Characters typed: {char}</p>
        <p>Time elapsed: {second} seconds</p>
      </div>
    </>
  );
}
