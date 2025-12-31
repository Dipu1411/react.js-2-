import React, { useState, useEffect } from 'react';

export default function User() {
  const [users, setusers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchUsers() {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/users'
      );
      const data = await response.json();
      setusers(data);
      setLoading(false);
    }

    fetchUsers();
  }, []);

  return (
    <>
      <div>
        <h1>User List</h1>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <ul>
            {users.map(user => (
              <li key={user.id}>
                {user.name} - {user.email}
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
}
