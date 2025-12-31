import React, { useState } from 'react';
import './LoginForm.css';

export default function LoginForm() {
    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");

    const handleFormSubmit = (event) => {
        event.preventDefault();
        console.log({
            user, password
        });
    }

    return (
        <>
            <div className='container'>
                <h1 className='title'>Login Form</h1>
                <form className='login-form' onSubmit={handleFormSubmit}>
                    <label htmlFor="username"><b>Username</b></label>
                    <input className='username' type="text" value={user} onChange={(e) => setUser(e.target.value)} />

                    <label htmlFor="password"><b>Password</b></label>
                    <input className='password' type="password" value={password} onChange={(e) => setPassword(e.target.value)} />

                    <button className='button' type="submit">Login</button>
                </form>
            </div>
        </>
    )
}
