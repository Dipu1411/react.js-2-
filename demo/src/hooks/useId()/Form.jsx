import React, { useId } from 'react';

export default function Form() {
    const id = useId();
    return(
        <form>
            <label htmlFor={id + "-username"}>Username : </label>
            <input id={id + "-username"} type="text" /><br /><br />

            <label htmlFor={id + "-email"}>Email : </label>
            <input id={id + "-email"} type="email" /><br /><br />
            <button type="submit">Submit</button>
        </form>
    )
}
