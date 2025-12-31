import React from 'react';

const handleClick = () => {
    // console.log(event);
    // console.log(event.target);
    // console.log(event.type);
    alert('Button clicked!');
}

const handleEvent = (name) => {
    alert(`Hello, ${name}!`);
}

export default function Events() {
    return (
        <>
            <button onClick={handleClick}>Click Me</button><br /> <br />
            <button onClick={() => handleClick()}> click 2 </button> <br /> <br />
            {/* inline function */}
            <button onClick={(event) => console.log(event)}> inline function </button><br /><br />
            {/* function components with inline arrow functions */}
            <button onClick={() => alert('i am button 4!')}> click 4 </button><br /><br />
            {/* passing arguments to event handlers */}
            <button onClick={() => handleEvent('devil')}> message from the hell </button>
        </>
    )
}