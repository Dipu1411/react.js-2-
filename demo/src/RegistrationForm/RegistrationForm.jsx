import React, { useState } from 'react';
import './RegistrationForm.css';


export default function RegistrationForm() {
    const [user, setUser] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        phoneNumber: ""
    })

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUser((prev) => ({ ...prev, [name]: value }))
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();
        console.log(user);
    };

    return (
        <>
            <form onSubmit={handleFormSubmit}>
                <div className="container">
                    <h1>Sign Up</h1>
                    <p>please fill in this form to create an ccount.</p>

                    <label htmlFor="firstName">
                        <b>First Name</b>
                    </label>

                    <input
                        type="text"
                        name="firstName"
                        value={user.firstName}
                        onChange={handleInputChange}
                    />

                    <label htmlFor="lastName">
                        <b>Last Name</b>
                    </label>

                    <input
                        type="text"
                        name="lastName"
                        value={user.lastName}
                        onChange={handleInputChange}
                    />

                    <label htmlFor="email">
                        <b>Email</b>
                    </label>

                    <input
                        type="email"
                        name="email"
                        value={user.email}
                        onChange={handleInputChange}
                    />

                    <label htmlFor="password">
                        <b>password</b>
                    </label>

                    <input
                        type="password"
                        name="password"
                        value={user.password}
                        onChange={handleInputChange}
                    />

                    <label htmlFor="phoneNumber">
                        <b>Phone Number</b>
                    </label>

                    <input
                        type="number"
                        name="phoneNumber"
                        value={user.phoneNumber}
                        onChange={handleInputChange}
                    />

                    <div className="clearFix">
                        <button type="submit" className="btn">
                            Sign Up
                        </button>
                    </div>
                </div>
            </form>
        </>
    )
}