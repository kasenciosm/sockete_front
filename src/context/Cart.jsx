import { createContext, useState } from "react";


export const CartContext = createContext()

export function CartProvider({ children }) {

    const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cart')) || [])

    const user_id = localStorage.getItem('sockete')

    const products = JSON.parse(localStorage.getItem('cart'))

    const orderNumber = parseInt(Math.random().toString(10).substr(2, 8));
    localStorage.setItem('order_number', orderNumber)

    const sendOrder = async () => {
        if (products && products.length > 0) {
            const total_price = products.reduce((acc, product) => {
                const priceProduct = product.priceProduct || 0;
                const product_total_price = typeof priceProduct === 'number' ? priceProduct : 0
                return acc + product_total_price;
            }, 0);

            const order = {
                user_id: user_id,
                products: products,
                order_number: orderNumber,
                total_price: total_price
            };

            try {
                const url = 'http://localhost:3000/carts';
                const options = {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(order)
                };

                const response = await fetch(url, options);
                const data = await response.json();

                localStorage.removeItem('cart');
                console.log('Pedido enviado correctamente', data);
                // alert('Pedido enviado con éxito');
            } catch (error) {
                console.error('Error al enviar el pedido:', error);
            }
        } else {
            console.log('No hay productos en el carrito para enviar el pedido.');
        }
    };


    const addToCart = product => {
        const productInCartIndex = cart.findIndex(item => item.id === product.id)

        if (productInCartIndex >= 0) {
            const newCart = structuredClone(cart)
            newCart[productInCartIndex].quantity += 1
            newCart[productInCartIndex].priceProduct = newCart[productInCartIndex].quantity * newCart[productInCartIndex].price
            return setCart(newCart)
        }

        const { quantity, price } = product

        setCart(prevState => ([
            ...prevState,
            {
                ...product,
                quantity: 1,
                priceProduct: quantity * price
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