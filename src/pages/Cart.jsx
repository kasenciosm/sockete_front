import React, { useEffect } from 'react'
import { useCart } from '../hooks/useCart';
import CartTotal from '../components/CartTotal';
import CheemsSad from '/imagen/cheems-sad.png'
import { AiOutlineDelete } from 'react-icons/ai'
import { TbShoppingCartX } from 'react-icons/tb'
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import axios from 'axios';



function CartItems({ image, price, name, quantity, addToCart, removeFromCart, subtractCart }) {
    return (
        <li className='text-left flex justify-between gap-4 mb-4 items-center'>
            <article className='flex gap-4 items-center'>
                <img
                    src={image}
                    alt={name}
                    className='aspect-1 w-28 shadow-lg'
                />
                <strong>{name}</strong>
                <p>Und.  S/.{price}</p>
            </article>

            <section className='flex gap-10 items-center'>
                <span className='text-xs'>
                </span>
                <div className='flex  gap-6 items-center text-sm'>
                    <button
                        onClick={subtractCart}
                        className='bg-sky-300 py-1 px-2 font-bold'>
                        -
                    </button>
                    <span className='text-xs font-semibold'>
                        {quantity}
                    </span>
                    <button
                        onClick={addToCart}
                        className='bg-sky-300 py-1 px-2 font-bold'>
                        +
                    </button>
                </div>
                <button
                    onClick={removeFromCart}>
                    <AiOutlineDelete className='h-5 w-5' />
                </button>
            </section>
        </li>
    )
}

export default function Cart() {
    const { cart, clearCart, addToCart, removeFromCart, subtractCart, sendOrder } = useCart()

    return (
        <>
            <h1 className='text-center text-lg font-bold p-10 border-b-2 mb-10'>Tu Carrito amigo Sock-ete </h1>
            <div className='max-w-screen-xl m-auto w-full px-6'>
                <ul>
                    {cart.map(product => (
                        <CartItems key={product.id}
                            addToCart={() => addToCart(product)}
                            {...product}
                            removeFromCart={() => removeFromCart(product)}
                            subtractCart={() => subtractCart(product)} />
                    ))}
                    {cart.length > 0 ? (
                        <span>
                            <CartTotal />
                            <div className='flex justify-center items-center text-center gap-6'>
                                <button
                                    onClick={clearCart}
                                    className=' py-2 mt-4 rounded-lg flex justify-center'>
                                    <TbShoppingCartX className='w-10 h-10 bg-sky-600 p-2 rounded-lg' />
                                </button>
                                <Link to='/payment'>
                                    <button
                                        onClick={sendOrder}
                                        className='font-bold bg-yellow-400 px-2 py-2 text-center mt-3 rounded-md'>
                                        Ir a pagar
                                    </button>
                                </Link>
                            </div>
                        </span>
                    ) : (
                        <div className='flex flex-col justify-center gap-10 items-center'>
                            <span className='text-center font-semibold text-lg'>
                                El carrito esta vacio
                            </span>
                            <img className='aspect-16/9 w-96' src={CheemsSad} />
                            <Link to='/shop'
                                className='font-bold bg-yellow-400 px-2 py-2 text-center mt-3 rounded-md'>
                                Ir a la Tienda
                            </Link>
                        </div>

                    )}

                </ul>
            </div>
            <Footer />
        </>
    )
}