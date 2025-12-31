import React, { useState } from 'react';

export default function Scounter() {
    const [count, setCount] = useState(0)
    const [step, setStep] = useState(0)

    const handleIncrement = () => {
        setCount(count + step)
    }

    const handleDecrement = () => {
        setCount(count - step)
    }

    const handleReset = () => {
        setCount(0)
    }

    return (
        <>
            <section>
                <div>
                    <h1> Step Counter </h1>
                    <h2> count : {count} </h2>

                    <label> Steps : </label>
                    <input
                        type="number"
                        onChange={(e) => setStep(Number(e.target.value))}
                    />

                    <button onClick={handleIncrement} disabled={count >= 100}>
                        Increment
                    </button>

                    <button onClick={handleDecrement} disabled={count < 0}>
                        Decrement
                    </button>

                    <button onClick={handleReset}>
                        Reset
                    </button>

                </div>
            </section>
        </>
    )
}