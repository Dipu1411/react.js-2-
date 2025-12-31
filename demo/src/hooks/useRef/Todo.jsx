import React, { useState } from 'react';

function Todo() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);
  const [edit, setEdit] = useState(null);

  const addTask = () => {
    if (task.trim()) {
      setTasks([...tasks, task]);
      setTask('');
      console.log(task);
    }
  };

  const handlEdit = index => {
    setTask(tasks[index]);
    setEdit(index);
    console.log(tasks[index]);
  };

  const handlDelete = index => {
    const copy = [...tasks];
    copy.splice(index, 1);
    setTasks(copy);
  };

  return (
    <div>
      <h1>Todo List</h1>
      <input
        type="text"
        placeholder="Enter Name"
        value={task}
        onChange={e => setTask(e.target.value)}
      />
      <button onClick={addTask}>Add</button>

      <ul>
        {tasks.map((item, index) => (
          <li key={index}>
            {item} <button onClick={() => handlEdit(index)}>Edit</button>
            {''}
            <button onClick={() => handlDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todo;
