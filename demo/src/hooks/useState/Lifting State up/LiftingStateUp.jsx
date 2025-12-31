import React, { useState } from "react";
import './LiftingStateUp.css';

function tocelsius(fahrenheit) {
    return ((fahrenheit - 32) * 5) / 9;
}

function toFahrenheit(celsius) {
    return (celsius * 9) / 5 + 32;
}

function TemperatureInput({ label, value, onChange }) {
    return (
        <div>
            <label>Enter temperature in {label}:</label>
            <input value={value} onChange={e => onChange(e.target.value)} />
        </div>
    )
}

export default function TemperatureConverter() {
    const [temperature, setTemperature] = useState('');
    const [scale, setScale] = useState('');

    const celsius = scale === 'f' ? tocelsius(temperature) : temperature;
    const fahrenheit = scale === 'c' ? toFahrenheit(temperature) : temperature;

    return (
        <>
            <h2>Temperature Converter</h2>
            <TemperatureInput
                label="celsius"
                value={celsius}
                onChange={(val) => {
                    setTemperature(val);
                    setScale('c');
                }
                }
            />

            <TemperatureInput
                label="fahrenheit"
                value={fahrenheit}
                onChange={(val) => {
                    setTemperature(val);
                    setScale('f');
                }
                }
            />
        </>
    )
}    
