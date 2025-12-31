import React, { useState } from "react";

export default function DerivedState() {
    const [users, setUsers] = useState([
        { name: "dipu", age: 24 },
        { name: "sipu", age: 22 },
        { name: "tipu", age: 26 },
        { name: "lipu", age: 28 }
    ])

    return (
        <>
            <h2>User List</h2>
            <ul>
                {users.map((createElem, index) => {
                    return (
                        <li key={index}>
                            {createElem.name} - {createElem.age} years old
                        </li>
                    )
                })}
            </ul>
        </>
    )
}
