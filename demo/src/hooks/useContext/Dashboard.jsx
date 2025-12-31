import React, { useContext } from "react";
import UserContext from "./UserContext";

export default function Dashboard() {
  const { username, age } = useContext(UserContext);

  return (
    <div>
      <h2>Welcome {username}</h2>
      <p>Your age is {age}</p>
    </div>
  );
}
