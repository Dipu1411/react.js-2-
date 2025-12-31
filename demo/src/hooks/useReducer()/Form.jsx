import React, { useReducer } from 'react'

const initialState = {
    name: "",
    email: ""
}

// reducer function

function reducer(state, action) {
    if (action.type === "CHANGE") {
        return {
            ...state,
            [ action.field ]: action.value
        }
    }

    if (action.type === "RESET") {
        return initialState
    }
    return state;
}


export default function Form() {
    const [ state, dispatch ] = useReducer(reducer, initialState)
    return (
        <div>
            <h2>Form</h2>
            <form>
                <input
                    type="text"
                    value={ state.name }
                    placeholder='name'
                    onChange={ (e) =>
                        dispatch({
                            type: "CHANGE",
                            field: "name",
                            value: e.target.value
                        })
                    }
                />
                <br /><br />

                <input
                    type="email"
                    value={ state.email }
                    placeholder='email'
                    onChange={ (e) =>
                        dispatch({
                            type: "CHANGE",
                            field: "email",
                            value: e.target.value
                        })
                    }
                />

                <br /><br />

                <button onClick={ () => dispatch({ type: "RESET" }) }>Reset</button>

                <p>Name : { state.name }</p>
                <p>Email : { state.email }</p>
            </form>
        </div>
    )
}
