import React from 'react';

export default function EventProps() {

    const handleWelcomeUser = (name) => {
        alert(`Welcome, ${name}!`);
    }

    const handleHover = () => {
        console.log('welcome to hell');
    }

    return (
        <>                                                                                                                                 
            <WelcomeUser onClick={() => handleWelcomeUser("devil")}
                onMouseEnter={handleHover} />
        </>
    );
}

const WelcomeUser = (props) => {
    const { onClick, onMouseEnter } = props;
    const handleGreeting = () => {
        console.log("this is your world.");
        props.onClick();
    };

    return (
        <>
            <button onClick={onClick}>click</button>
            <button onMouseEnter={onMouseEnter}>hover</button>
            <button onClick={handleGreeting}>greeting</button>
        </>

    );
}