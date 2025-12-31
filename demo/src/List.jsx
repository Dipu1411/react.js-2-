import React, { useState } from "react";

export default function List() {
  const [list, setList] = useState([
    "divyansh",
    "aryan",
    "noor",
    "malik",
    "pihu",
  ]);

  return (
    <>
      <h1>List of Names</h1>
      <ul>
        {list.map((el, i) => (
          <li key={i}>{el}</li>
        ))}
      </ul>
    </>
  );
}
