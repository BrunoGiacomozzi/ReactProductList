import React from 'react'
import useFetch from '../hooks/useFetch'

export const HookApp = () => {

    const url = '';

    const { data, isloading, error } = useFetch(url)
    return (
        <div className='container'>
            <h1>Hook de fetch ejemplo:</h1>
            <div className='lista-fetch'>
                <ul>
                    {error && <li>Error: {error}</li>}
                    {isloading && <p>Loading.....</p>}
                    {
                        data?.map((user) => (
                            <li key={user.id}>{user.name}</li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}
