import React, { useState, useEffect } from 'react';
import './FetchApi.css';

export default function FetchApi() {
    const [pokemon, setPokemon] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const API = "https://pokeapi.co/api/v2/pokemon/pikachu";


    const fetchPokemon = async () => {
        try {
            const res = await fetch(API);
            const data = await res.json();
            setPokemon(data);
            setLoading(false);
        }
        catch (err) {
            console.error("Fetch error:", err);
            setError(err.message);
            setLoading(false);
        }

    };


    useEffect(() => {
        fetchPokemon();
    }, []);

    console.log(pokemon);

    if (loading) {
        return <h1>Loading...</h1>;
    }

    if (error) {
        return <h1>Error: {error}</h1>;
    }

    // Check if pokemon data is available before trying to access its properties
    if (pokemon) {
        return (
            <div>
                <h1>{pokemon.name.toUpperCase()}</h1>
                <img
                    src={pokemon.sprites.front_default}
                    alt={pokemon.name}
                />
            </div>
        );
    }

    return <h1>No data to display.</h1>;
}

// setError(null);
// setLoading(true);

// fetch(API)
//     .then((res) => {
//         if (!res.ok) {
//             throw new Error(`HTTP error! status: ${res.status}`);
//         }
//         return res.json();
//     })
//     .then((data) => {
//         setPokemon(data);
//         setLoading(false);
//     })
//     .catch((err) => {
//         console.error("Fetch error:", err);
//         setError(err.message);
//         setLoading(false);
//     });