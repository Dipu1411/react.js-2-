import React, { useState, useRef, useEffect } from 'react';

export default function TodoAppWithLocalStorage() {
  const [task, settask] = useState('');
  const [todos, setTodos] = useState([]);

  // load todos from localStorage on mount

  useEffect(() => {
    const storeTodos = JSON.parse(localStorage.getItem('todos')) || [];
    setTodos(storeTodos);
  }, []);

  // save todos to localStorage on change
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = () => {
    if (task.trim()) {
      setTodos([...todos, task]);
      settask('');
    }
  };

  return (
    <>
      <div>
        <h1>Todo List</h1>
        <input
          type="text"
          value={task}
          onChange={e => settask(e.target.value)}
        />
        <button onClick={addTodo}>Add Todo</button>
        <ul>
          {todos.map((todo, index) => (
            <li key={index}>{todo}</li>
          ))}
        </ul>
      </div>
    </>
  );
}
