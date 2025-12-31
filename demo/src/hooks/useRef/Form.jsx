import react, { useState, useRef } from 'react';

export default function Form() {
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();

  const emailRegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegExp = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    const name = nameRef.current.value.trim();
    const email = emailRef.current.value.trim();
    const password = passwordRef.current.value.trim();
    if (!name) {
      setError('Name is required');
      return;
    }
    if (!email) {
      setError('Email is required');
      return;
    }
    if (!emailRegExp.test(email)) {
      setError('Invalid email format');
      return;
    }
    if (!password) {
      setError('Password is required');
      return;
    }
    if (!passwordRegExp.test(password)) {
      setError(
        'Password must be at least 8 characters long and contain at least one letter and one number'
      );
      return;
    } else {
      setError('');
      setSuccess('Form submitted successfully!');
    }
    nameRef.current.value = '';
    emailRef.current.value = '';
    passwordRef.current.value = '';
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" ref={nameRef} />
        </label>
        <br />
        <br />
        <label>
          Email:
          <input type="email" ref={emailRef} />
        </label>
        <br />
        <br />
        <label>
          Password:
          <input type="password" ref={passwordRef} />
          {error && <div style={{ color: 'red' }}>{error}</div>}
        </label>
        <br />
        <br />
        <button type="submit">Submit</button>
      </form>
      {success && <div style={{ color: 'green' }}>{success}</div>}
    </div>
  );
}
