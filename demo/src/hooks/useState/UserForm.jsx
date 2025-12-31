import React, { useState } from 'react';

export default function UserForm() {
  const [user, setUser] = useState({
    name: '',
    age: '',
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setUser(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <>
      <input
        type="text"
        name="name"
        value={user.name}
        onChange={handleChange}
        placeholder="Enter your name"
      />
      <input
        type="number"
        name="age"
        value={user.age}
        onChange={handleChange}
        placeholder="Enter your age"
      />
    </>
  );
}
