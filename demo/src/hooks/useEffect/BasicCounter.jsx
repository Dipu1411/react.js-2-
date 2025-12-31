import React, { useState, useEffect } from "react";

export default function BasicCounter() {
    const [date, setDate] = useState("");
    const [count, setCount] = useState(0);

    useEffect(() => {
        setInterval(() => {
            const currentDate = new Date()
            setDate(currentDate.toLocaleTimeString());
        }, 1000)
        console.log("count :", count);
    }, [count]);

    return (
        <div>
            <h1>counter using useEffect</h1>
            <h2>{`Today's date is : ${date}`}</h2>
            <h2>{`count : ${count}`}</h2>
            <button onClick={() => setCount(count + 1)}>click here</button>
        </div>
    )


}