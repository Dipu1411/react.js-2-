import React, { useState } from 'react';

function InputForm({ onSubmit }) {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');

  const handleClick = () => {
    onSubmit({ name, age });
    setName('');
    setAge('');
  };

  return (
    <>
      <div style={{ display: 'flex', gap: '0.5rem' }}>
        <input
          type="text"
          placeholder="name"
          value={name}
          onChange={e => setName(e.target.value)}
        />

        <input
          type="number"
          placeholder="Age"
          value={age}
          onChange={e => setAge(e.target.value)}
        />
        <button onClick={handleClick}>Greet!</button>
      </div>
    </>
  );
}

export default InputForm;
