import React from "react"
import useToggle from "./useToggle"

export default function Toggle() {
    const [ value, toggleValue ] = useToggle();

    return (
        <>
            <button onClick={ toggleValue }> Toggle </button>
            <p>{ value ? "on" : "off" } </p>
        </>
    )
}