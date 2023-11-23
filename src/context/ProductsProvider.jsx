import React, { useEffect, useState, Provider } from 'react'
import { ProductsContext } from './ProductsContext'
import { fetchProducts } from '../helper/fetchProducts'

export const ProductsProvider = ({ children }) => {

    const [productos, setProductos] = useState([])

    useEffect(() => {
        fetchProducts().then(res =>
            setProductos(res))

    }, [])


    return (
        <ProductsContext.Provider value={productos}>
            {children}
        </ProductsContext.Provider>
    )
}
