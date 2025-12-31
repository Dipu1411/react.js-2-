import React, { useState, useEffect } from 'react'

export default function useFetch(url) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then((result) => {
                setData(result);
                setLoading(false);
            })
    }, [url]);
    return [data, loading];
}