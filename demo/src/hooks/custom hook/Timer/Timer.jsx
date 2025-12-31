import React from 'react'
import useTimer from './useTimer'

export default function Timer() {
    const time = useTimer();

    return (
        <div>
            <h1>Timer: { time } seconds</h1>
        </div>
    )
}