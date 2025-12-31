import React, { useState } from "react";
import "./ContactForm.css";

export default function ContactForm() {
    // const [username, setUsername] = useState("");
    // const [Email, setEmail] = useState("");
    // const [message, setMessage] = useState("");

    const [contacts, setContacts] = useState({
        username: "",
        Email: "",
        message: ""
    })

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setContacts((prev) => ({ ...prev, [name]: value }));
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();
        console.log(contacts);
    }

    return (
        <>
            <div className="container">
                <div className="card">
                    <h1>Contact Form</h1>
                    <form className="contact-form" onSubmit={handleFormSubmit}>
                        <label htmlFor="name"><b>username</b></label>
                        <input
                            type="text"
                            name="username"
                            value={contacts.username}
                            // onChange={(e) => setUsername(e.target.value)}
                            onChange={handleInputChange}
                        />

                        <label htmlFor="Email"><b>Email</b></label>
                        <input
                            type="Email"
                            name="Email"
                            value={contacts.Email}
                            // onChange={(e) => setEmail(e.target.value)}
                            onChange={handleInputChange}

                        />

                        <label htmlFor="message"><b>Message</b></label>
                        <textarea
                            name="message"
                            value={contacts.message}
                            // onChange={(e) => setMessage(e.target.value)}
                            onChange={handleInputChange}
                            placeholder="Your message here..."
                        ></textarea>

                        <button type="submit" className="button">Send Message</button>
                    </form>



                </div>
            </div>
        </>
    )
}