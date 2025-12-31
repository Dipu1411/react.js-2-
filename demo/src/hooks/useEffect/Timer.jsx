import react, { useState, useEffect } from 'react';

export default function Timer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds(prev => prev + 1);
    }, 1000);

    // cleanup function to clear the interval
    return () => {
      clearInterval(timer);
      console.log('Timer stopped');
    };
  }, []);

  return (
    <>
      <div>
        <h1> Time : {seconds}s</h1>
        <button onClick={() => setSeconds(0)}>Reset Timer</button>
      </div>
    </>
  );
}
