import React, { useReducer } from 'react'

// initial state
const initialState = {
    count: 0
}

// reducer function
function reducer(state, action) {
    if (action.type === "INCREMENT") {
        return {
            count: state.count + 1
        }
    }
    if (action.type === "DECREMENT") {
        return {
            count: state.count - 1
        }
    }
    if (action.type === "RESET") {
        return {
            count: 0
        }
    }

    return state
}

export default function Counter() {
    const [ state, dispatch ] = useReducer(reducer, initialState)
    return (
        <div>
            <h2>Counter</h2>
            <h3>{ state.count }</h3>

            <button onClick={ () => dispatch({ type: "INCREMENT" }) }> + </button>
            <button onClick={ () => dispatch({ type: "DECREMENT" }) }> - </button>
            <button onClick={ () => dispatch({ type: "RESET" }) }> Reset </button>
        </div>
    )
}
