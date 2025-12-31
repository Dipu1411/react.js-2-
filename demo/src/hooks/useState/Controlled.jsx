import React, { useState } from "react";

export default function ControlledExample() {
    const [name, setName] = useState("");

    return (
        <div>
            <h2>Controlled Component</h2>

            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />

            <p>You typed: {name}</p>
        </div>
    );
}
