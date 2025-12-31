import react, { useRef } from 'react';
import './SimpleForm.css';



// uncontrolled components
export default function SimpleForm() {

    const Username = useRef(null);
    const Password = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        const username = Username.current.value;
        const password = Password.current.value;
        console.log("Username:", username);
        console.log("Password:", password);
    }

    return (

        <>
            <div className='data'>
                < form onSubmit={handleSubmit} className='form'>
                    <label htmlFor="">Username</label>
                    <input type="text" ref={Username} />
                    <br />
                    <br />
                    <label htmlFor="">Password</label>
                    <input type="password" ref={Password} />
                    <br />
                    <br />
                    <button type="submit">Submit</button>
                </form >
            </div>
        </>
    )
}