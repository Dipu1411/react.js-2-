import React, { useState, useEffect } from "react";

export default function CleanUp() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCount(prevCount => prevCount + 1);
        }, 1000);

        return () => {
            clearInterval(interval);
            console.log("Cleaned up");
        }
    }
    );

    return (
        <div>
            <h1>Count: {count}</h1>
        </div>
    )
}