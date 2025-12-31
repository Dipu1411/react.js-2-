import React, { useState, useEffect } from 'react';
import './CounterWithName.css';

export default function CounterWithName() {
    const [count, setCount] = useState(0);
    const [name, setName] = useState('');

    useEffect(() => {
        console.log('Count value changed:', count);
        console.log('Name value is:', name);
    }, [count, name]);


    return (

        <div className='container'>
            <h1>Counter with Name</h1>
            <h2>{`Count: ${count}`}</h2>
            <button onClick={() => setCount(count + 1)}>Click</button>
            <div className='name'>
                <span>name : {name} </span>
            </div>

            <input className='input'
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
            />
        </div>
    )
}
