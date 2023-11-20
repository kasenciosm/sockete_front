import { createContext, useState } from "react";

export const CartContext = createContext()

export function CartProvider({ children }) {

    const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cart')) || [])

    const user = JSON.parse(localStorage.getItem('sockete')).idUser

    const products = JSON.parse(localStorage.getItem('cart'))

    const orderNumber = parseInt(Math.random().toString(10).substr(2, 8));

    const order = {
        user_id: user,
        products: products,
        order_number: orderNumber
    }

    const sendOrder = async () => {

        const url = ('http://localhost:3000/carts')
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(order)
        }

        const response = await fetch(url, options)
        const data = await response.json()
        console.log("Muestra esto: ", data)
        localStorage.removeItem('cart')
        return data

    }

    const addToCart = product => {
        const productInCartIndex = cart.findIndex(item => item.id === product.id)

        if (productInCartIndex >= 0) {
            const newCart = structuredClone(cart)
            newCart[productInCartIndex].quantity += 1
            return setCart(newCart)
        }


        setCart(prevState => ([
            ...prevState,
            {
                ...product,
                quantity: 1
            }
        ]))
    }

    const subtractCart = product => {
        const productInCartIndex = cart.findIndex(item => item.id === product.id)

        if (productInCartIndex >= 0 && product.quantity > 1) {
            const newCart = structuredClone(cart)
            newCart[productInCartIndex].quantity -= 1
            return setCart(newCart)
        } else {

        }
    }

    const removeFromCart = product => {
        setCart(prevState => prevState.filter(item => item.id !== product.id) || localStorage.removeItem('cart'))
    }


    const clearCart = () => {
        localStorage.removeItem('cart')
        return setCart([])
    }

    return (
        <CartContext.Provider value={{
            cart,
            addToCart,
            subtractCart,
            removeFromCart,
            clearCart,
            sendOrder
        }}>
            {children}
        </CartContext.Provider>
    )
}