import React, { useState, useRef, useEffect } from 'react';

export default function TypingSpeedTest() {
  const [text, setText] = useState('');
  const [startTime, setStartTime] = useState(null);
  const [wpm, setWpm] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [wordCount, setWordCount] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const timerRef = useRef(null);

  const handleChange = e => {
    const inputText = e.target.value;
    if (!startTime && inputText.trim().length === 1) {
      setStartTime(new Date());
    }
    setText(inputText);
  };

  const handleCheck = () => {
    if (!text.trim()) return;

    const endTime = new Date();
    const timeDiffSec = (endTime - startTime) / 1000; // count seconds
    if (timeDiffSec < 1) {
      timeDiffSec = 1;
    }
    const words = text.trim().split(/\s+/).length; // count words
    const calculatedWPM = Math.round((words / timeDiffSec) * 60); // count words per minute

    setWpm(calculatedWPM);
    setWordCount(words);
    setSeconds(timeDiffSec);
    setShowResults(true);
  };

  // clear text after 10 seconds
  clearTimeout(timerRef.current);
  timerRef.current = setTimeout(() => {
    setText('');
    setStartTime(null);
    setWpm(0);
    setSeconds(0);
    setWordCount(0);
    setShowResults(false);
  }, 10000);

  return (
    <>
      <div>
        <h1>Typing Speed Test</h1>
        <textarea
          rows={6}
          cols={50}
          placeholder="start typing..."
          value={text}
          onChange={handleChange}
        ></textarea>
        <br />
        <button onClick={handleCheck}>Check Speed</button>
        {showResults && (
          <div>
            <p>
              <strong>Words: </strong> {wordCount}
            </p>
            <p>
              <strong>Seconds: </strong>
              {seconds}
            </p>
            <p>
              <strong>WPM: </strong>
              {wpm}
            </p>
            <p>
              <em>This text will clear after 10 seconds</em>
            </p>
          </div>
        )}
      </div>
    </>
  );
}
