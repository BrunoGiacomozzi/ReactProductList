import React from 'react'
import ReactDOM from 'react-dom/client'
import { ShoppingCart } from './ShoppingCart.jsx'
import './styles/card.css'
import './styles/lists.css'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <React.StrictMode>
      <ShoppingCart />
    </React.StrictMode>,
  </BrowserRouter>
)
