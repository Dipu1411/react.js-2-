import React, { useState, useRef, useEffect } from 'react';

export default function Login() {
  const [name, setname] = useState('');

  useEffect(() => {
    const savedName = localStorage.getItem('userName');
    if (savedName) {
      setname(savedName);
    }
  }, []);

  const handleLogin = () => {
    localStorage.setItem('userName', name);
    alert('logged in!');
  };

  return (
    <>
      <div className="container mt-5">
        <input
          type="text"
          value={name}
          onChange={e => setname(e.target.value)}
        />
        <button className="btn-primary" onClick={handleLogin}>
          Login
        </button>
        <ul>
          <li>{name}</li>
        </ul>
      </div>
    </>
  );
}
