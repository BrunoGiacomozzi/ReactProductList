import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { NavBar } from './components/NavBar'
import { ComprasPage } from './pages/ComprasPage'
import { CarritoPage } from './pages/CarritoPage'
import { ProductsProvider } from './context/ProductsProvider'
import { ShoppingCartProvider } from './context/ShoppingCartProvider'


export const ShoppingCart = () => {
    return (
        <ProductsProvider>
            <ShoppingCartProvider>
                <NavBar></NavBar>
                <div className='container'>
                    <Routes>
                        <Route path='/' element={<ComprasPage></ComprasPage>}></Route>
                        <Route path='/carrito' element={<CarritoPage></CarritoPage>}></Route>
                        <Route path='/*' element={<Navigate to='/' />} ></Route>
                    </Routes>
                </div>
            </ShoppingCartProvider>
        </ProductsProvider>
    )
}
