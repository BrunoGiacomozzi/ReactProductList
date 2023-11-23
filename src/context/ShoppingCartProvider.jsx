import React, { useReducer } from 'react'
import { ShoppingCartContext } from './ShoppingCartContext'

const inicialState = [];

const comprasReducer = (state = inicialState, action = {}) => {

    switch (action.type) {
        case '[CARRITO] Agragar Compra':
            return [...state, action.payload]

        case '[CARRITO] Aumentar Cantidad':


        case '[CARRITO] Disminuir Cantidad':


        case '[CARRITO] Eliminar Compra':
            return state.filter(compra => compra.id !== action.payload)

        default:
            return state
    }
}

export const ShoppingCartProvider = ({ children }) => {

    const agragarCompra = (compraEntera) => {
        const action = {
            type: '[CARRITO] Agragar Compra',
            payload: compraEntera
        }
        dispatch(action)
    }
    const aumentarCantidad = (id) => {
        const action = {
            type: '[CARRITO] Aumentar Cantidad',
            payload: id
        }
        dispatch(action)
    }
    const disminuirCantidad = (id) => {
        const action = {
            type: '[CARRITO] Disminuir Cantidad',
            payload: id
        }
        dispatch(action)
    }
    const eliminarCompra = (id) => {
        const action = {
            type: '[CARRITO] Eliminar Compra',
            payload: id
        }
        dispatch(action)
    }



    const [listaCompras, dispatch] = useReducer(comprasReducer, inicialState);



    return (
        <ShoppingCartContext.Provider value={{ listaCompras, agragarCompra, aumentarCantidad, disminuirCantidad, eliminarCompra }}>
            {children}
        </ShoppingCartContext.Provider>
    )
}
