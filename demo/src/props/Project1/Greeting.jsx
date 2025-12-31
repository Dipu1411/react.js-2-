import React from 'react';

function Greeting({ name, age }) {
  return (
    <>
      {/* <h1>hello, i am {name}!</h1>
      <h2> i, am {age} years old.</h2> */}

      <div style={{ marginTop: '1rem' }}>
        <h2>Hello, {name || '...'}!</h2>
        {age && <p>You are {age} years old.</p>}
      </div>
    </>
  );
}

export default Greeting;
