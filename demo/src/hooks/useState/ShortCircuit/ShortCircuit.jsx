import React, { useState } from "react";
import './ShortCircuit.css';

export default function ShortCircuit() {
    const [isLoggedIn, setIsLoggedIn] = useState(true);
    const [user, setUser] = useState("");

    return (
        <>
            <section className="container short-container">
                <h1 className="title">Short Circuit Evaluation</h1>
                {isLoggedIn && <p>you are logged in!</p>}
                {user ? `Hello, ${user}` : "please log in!"}

                <div className="grid-three-cols">
                    <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
                        Toggle login state
                    </button>
                    <button onClick={() => setUser("divyansh")}> Set User</button>
                    <button onClick={() => setUser("")}> Remove User</button>
                </div>
            </section>
        </>
    )
}