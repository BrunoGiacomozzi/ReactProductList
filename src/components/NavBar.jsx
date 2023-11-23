import React from 'react'
import { Badge } from '@mui/material'
import { ShoppingCart } from '@mui/icons-material'
import { NavLink } from 'react-router-dom'

export const NavBar = () => {
    return (


        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <NavLink to='/' className="navbar-brand"> Carrito </NavLink>
                <NavLink to='/' className="nav-link active" >Compras</NavLink>
                <NavLink to='/carrito'
                ><Badge badgeContent={4} color="secondary">
                        <ShoppingCart color="action" />
                    </Badge>
                </NavLink>

            </div>
        </nav>

    )
}
