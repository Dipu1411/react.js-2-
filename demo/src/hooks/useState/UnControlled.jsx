import React, { useRef } from "react";

export default function UnControlled() {
    const nameRef = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("typed : " + nameRef.current.value);
    }

    return (
        <>
            <h2>Uncontrolled Component</h2>
            <input type="text" ref={nameRef} />
            <button onClick={handleSubmit}>Submit</button>
        </>
    );
}