
import React, { useState } from 'react'
import '../styles/card.css'

export const Card = ({ image, title, description, price, handleAgregar, handleAumentar, handleDisminuir, handleEliminar }) => {

    const [added, setAdded] = useState(false); // para saber is esta agregado

    const clickAgregar = () => {
        handleAgregar()
        setAdded(true)

    }
    const clickQuitar = () => {
        handleEliminar()
        setAdded(false)
    }

    return (
        <div className='tarjeta'>
            <img src={image} alt={title} className='tarjeta-imagen' />
            <div className='tarjeta-contenido'>
                <h3 className='tarjeta-titulo'>{title}</h3>
                <p>{description}</p>
                <p className='tarjeta-precio'>{price}</p>

                {added
                    ? <button
                        type='button'
                        className='boton-quitar'
                        onClick={clickQuitar}
                    >
                        Quitar del carrito
                    </button >
                    : <button
                        type='button'
                        className='boton-agregar'
                        onClick={clickAgregar}
                    >
                        Agregar al carrito
                    </button>}

            </div>
        </div>
    )
}
