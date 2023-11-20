import { useEffect, useState } from 'react'
import axios from 'axios'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { TbJson, TbShoppingCartX } from 'react-icons/tb'
import { AiOutlineDelete } from 'react-icons/ai'
import { useCart } from '../hooks/useCart';
import CartTotal from './CartTotal';
import CheemsSad from '/imagen/cheems-sad.png'
import { Link } from 'react-router-dom';


const COMMON_STYLES =
    " flex justify-center items-center rounded-full text-white ";


export function CartItem({ image, price, name, quantity, addToCart, removeFromCart, subtractCart }) {
    return (
        <li className='text-left flex gap-4 mb-4 items-center'>
            <img
                src={image}
                alt={name}
                className='aspect-1 w-20'
            />
            <div>
                <strong>{name}</strong>
                <p>Und.  S/.{price}</p>
            </div>
            <section className='flex gap-8 items-center'>
                <span className='text-xs'>
                </span>
                <div className='flex flex-col gap-1 items-center text-sm'>
                    <button
                        onClick={addToCart}
                        className='bg-slate-600 py-0 px-2 font-bold'>
                        +
                    </button>
                    <span className='text-xs font-semibold'>
                        {quantity}
                    </span>
                    <button
                        onClick={subtractCart}
                        className='bg-slate-600 py-0 px-2 font-bold'>
                        -
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

export default function CartNavigator({ count, className }) {

    const [showCart, setShowCart] = useState(false)

    const { cart, clearCart, addToCart, removeFromCart, subtractCart } = useCart()


    return (
        <aside
            className={className + COMMON_STYLES + 'relative w-8 h-8 bg-slate-600 cursor-pointer'}>
            <AiOutlineShoppingCart
                onClick={() => setShowCart(!showCart)}
            >
            </AiOutlineShoppingCart>
            <aside className={(showCart ? '-right-0' : 'hidden') + ' fixed top-16 w-96 h-full space-x-1 place-items-center text-left bg-gray-500 bg-opacity-100  text-white space-y-5 p-8 scroll-mt-24'}>
                <ul className='flex flex-col'>
                    {cart.map(product => (
                        <CartItem key={product.id}
                            addToCart={() => addToCart(product)}
                            {...product}
                            saveLocal={localStorage.setItem('cart', JSON.stringify(cart))}
                            removeFromCart={() => removeFromCart(product)}
                            subtractCart={() => subtractCart(product)} />
                    ))}
                    {cart.length > 0 ? (
                        <span>
                            <CartTotal />
                        </span>
                    ) : (
                        <div className='flex flex-col justify-center gap-8'>
                            <span className='text-center font-semibold text-lg'>
                                El carrito esta vacio
                            </span>
                            <img className='aspect-1 w-60 ml-14' src={CheemsSad} />
                        </div>
                    )}
                    <div className='flex justify-center place-items-center text-center gap-6'>
                        <button

                            onClick={clearCart}
                            className=' py-2 mt-4 rounded-lg flex justify-center'>
                            <TbShoppingCartX className='w-10 h-10 bg-slate-800 p-2 rounded-lg' />
                        </button>
                        <Link
                            to='/cart' className='rounded bg-slate-400 px-2 mt-3 font-semibold'>
                            Ir al Carrito
                        </Link>
                    </div>
                </ul>
            </aside>
            <div
                className={COMMON_STYLES + 'w-4 h-4 bg-blue-500 text-xs absolute -top-1 -right-1 font-semibold'}>
                {count <= 9 ? count : '+'}
            </div>
        </aside>
    )
}

