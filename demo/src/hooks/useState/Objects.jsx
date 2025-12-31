import React, { useState } from 'react'

export default function Objects() {
    const [person, setPerson] = useState({ name: "John", age: 30, city: "New York" });

    return (
        <div>
            <h1>{person.name}</h1>
            <h1>{person.age}</h1>
            <h1>{person.city}</h1>
        </div>
    )
}
