import React from 'react';

export default function userProfile({ name, age, isOnline }) {
  return (
    <>
      <div
        style={{
          border: '1px solid gray',
          padding: '10px',
          margin: '10px',
        }}
      >
        <h2>{name}</h2>
        <p>Age: {age}</p>
        <p>
          status:{''}
          <span
            style={{
              color: isOnline ? 'green' : 'red',
              fontWeight: 'bold',
            }}
          >
            {isOnline ? 'online' : 'offline'}
          </span>
        </p>
      </div>
    </>
  );
}
