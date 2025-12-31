import React, { useState, useEffect, useRef } from 'react';

// export default function TodoRef() {
//   const nameref = useRef(null);
//   const emailref = useRef(null);
//   const resultref = useRef(null);
//   const [text, setText] = useState([]);
//   const [editIndex, setEditIndex] = useState(null);

//   function handleSubmit(e) {
//     e.preventDefault();
//     const name = nameref.current.value;
//     const email = emailref.current.value;

//     if (editIndex !== null) {
//       const updatedItems = [...text];
//       updatedItems[editIndex] = { name, email };
//       setText(updatedItems);
//       setEditIndex(null);
//     } else {
//       setText([...text, { name, email }]);
//     }

//     nameref.current.value = '';
//     emailref.current.value = '';
//   }

//   function handleEdit(index) {
//     const item = text[index];
//     nameref.current.value = item.name;
//     emailref.current.value = item.email;
//     setEditIndex(index);
//   }

//   function handleDelete(index) {
//     const updatedItems = [...text];
//     updatedItems.splice(index, 1);
//     setText(updatedItems);

//     if (editIndex === index) {
//       nameref.current.value = '';
//       emailref.current.value = '';
//       setEditIndex(null);
//     }
//   }

//   return (
//     <div>
//       <h2>Todo App Uncontrolled</h2>
//       <form onSubmit={handleSubmit}>
//         Name: <input type="text" ref={nameref} />
//         <br />
//         Email: <input type="text" ref={emailref} />
//         <br />
//         <button type="submit">submit</button>
//       </form>

//       <div ref={resultref}>
//         {text.map((item, index) => (
//           <div key={index}>
//             <p>Name: {item.name}</p>
//             <p>Email: {item.email}</p>
//             <button onClick={() => handleEdit(index)}>Edit</button>
//             <button onClick={() => handleDelete(index)}>Delete</button>
//             <hr />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// Todo App Controlled

export default function TodoRef2() {
  const [state, setState] = useState('');
  const [text, setText] = useState([]);
  const [edit, setEdit] = useState(null);

  function handleText(e) {
    setState(e.target.value);
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
    setState('');
  }

  function handleDelete(i) {
    var newArr = [...text];
    newArr.splice(i, 1);
    setText(newArr);
  }
  function handleEdit(i) {
    setState(text[i]);
    setEdit(i);
  }

  return (
    <div>
      <h2>Todo App Controlled</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          id="name"
          value={state}
          onChange={handleText}
        />
        <input type="submit" />
      </form>
      {text.map((el, i) => {
        return (
          <>
            <li key={i}>{el}</li>
            <button onClick={() => handleDelete(i)}>Delete</button>
            <button onClick={() => handleEdit(i)}>Edit</button>
          </>
        );
      })}
        
    </div>
  );
}
