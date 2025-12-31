import React from 'react';
// import './App.css';
import UserProfile from './project2/UserProfile';

export default function App() {
  return (
    <div>
      <h1> user Profile </h1>{' '}
      <UserProfile name="divyansh" age={20} isOnline={true} />{' '}
      <UserProfile name="dipu" age={21} isOnline={false} />{' '}
      <UserProfile name="chaman" age={12} isOnline={true} />{' '}
    </div>
  );
}
