import React, { useState } from "react";

export default function ToDoObject() {
  const [state, setState] = useState({ name: "", email: "" });
  const [text, setText] = useState([]);
  const [edit, setEdit] = useState(null);

  function handleChange(e) {
    setState({ ...state, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (edit !== null) {
      const updateText = [...text];
      updateText[edit] = state;
      setText(updateText);
      setEdit(null);
    } else {
      setText([...text, state]);
    }
    setState({ name: "", email: "" });
  }

  function handleDelete(i) {
    const newText = [...text];
    newText.splice(i, 1);
    setText(newText);
  }

  function handleEdit(i) {
    setState(text[i]);
    setEdit(i);
  }

  return (
    <>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Name"
          value={state.name}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          id="email"
          placeholder="email"
          value={state.email}
          onChange={handleChange}
        />
        <input type="submit" />

        <ul>
          {text.map((el, i) => (
            <li key={i}>
              Name:{el.name}, Email:{el.email};
              <button onClick={() => handleDelete(i)}>Delete</button>
              <button onClick={() => handleEdit(i)}>Edit</button>
            </li>
          ))}
        </ul>
      </form>
    </>
  );
}
