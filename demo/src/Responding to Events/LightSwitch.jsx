import react from 'react';
export default function LightSwitch() {
    function handleClick() {
        const bodyStyle = document.body.style;
        bodyStyle.backgroundColor = bodyStyle.backgroundColor === 'black' ? 'white' : 'black';
        bodyStyle.color = bodyStyle.color === 'white' ? 'black' : 'white';
    }

    return (
        <button onClick={handleClick}>
            Toggle Light
        </button>
    );
}