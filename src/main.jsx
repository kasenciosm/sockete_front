import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { FiltersProvider } from './context/Filters.jsx'
import { CartProvider } from './context/Cart.jsx'
import { UserProvider } from './context/UserContext.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <UserProvider>
    <FiltersProvider>
      <CartProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </CartProvider>
    </FiltersProvider>
  </UserProvider>
)
