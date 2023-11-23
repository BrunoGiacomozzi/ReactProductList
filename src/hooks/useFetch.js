import React, { useEffect, useState } from 'react'

export default function useFetch(url) {

    const [data, setData] = useState(null);
    const [isloading, setIsloading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        setIsloading(true);
        fetch(url)
            .then((response) => response.json())
            .then((data) => setData(data))
            .catch((eeror) => setError(error))
            .finally(() => setIsloading(false))
    }, [])

    return {
        data,
        isloading,
        error
    };

}
