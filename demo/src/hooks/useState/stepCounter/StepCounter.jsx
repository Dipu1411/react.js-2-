import React, { useState } from 'react';
import './StepCounter.css';


export default function StepCounter() {
    const [count, setCount] = useState(0);
    const [step, setStep] = useState(0);

    const handleIncrement = () => {
        setCount(count + step);
    }

    const handleDecrement = () => {
        setCount(count - step);
    }

    const handleReset = () => {
        setCount(0);
    }

    return (
        <>
            <section className="container step-counter-container">
                <h1 className="title">Step Counter</h1>
                <h2>Count: {count}</h2>
                <div className="steps">
                    <label>Step:</label>
                    <input
                        type="number"
                        //value={step}
                        onChange={(e) => setStep(Number(e.target.value))}
                    />
                    <button className='increment' onClick={handleIncrement} disabled={count >= 100}>Increment</button>
                    <button className='decrement' onClick={handleDecrement} disabled={count <= 0}>Decrement</button>
                    <button className='reset' onClick={handleReset}>Reset</button>
                </div>
            </section>
        </>
    )
}