import React, { useState } from 'react'

export default function Array() {
    const [items, setItems] = useState(["apple", "banana", "orange", "mango"]);

    return (
        <div>
            {
                items.map((el, i) => {
                    return <li>
                        {el}
                    </li>
                })
            }
        </div>
    )
}
