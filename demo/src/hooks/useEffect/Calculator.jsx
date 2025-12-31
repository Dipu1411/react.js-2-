import React, { useState, useEffect } from 'react';

export default function Calculator() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [sum, setSum] = useState('');

  useEffect(() => {
    setSum(num1 + num2);
  }, [num1, num2]);

  return (
    <div>
      <input
        type="number"
        value={num1}
        onChange={e => setNum1(Number(e.target.value))}
      />
      <input
        type="number"
        value={num2}
        onChange={e => setNum2(Number(e.target.value))}
      />
      <h2>
        Sum of {num1} and {num2}: {sum}
      </h2>
    </div>
  );
}
