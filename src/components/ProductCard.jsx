import React from 'react'
import { AiOutlineHeart } from 'react-icons/ai'
import { BsCartPlus } from 'react-icons/bs'
import { useCart } from '../hooks/useCart'
import { BsCartX } from 'react-icons/bs'

function ProductCard({ product }) {

    const { addToCart, removeFromCart, cart } = useCart()

    const checkProductInCart = product => {
        return cart.some(item => item.id === product.id)
    }

    const { image, name, description, price } = product
    const isProductInCart = checkProductInCart(product)

    return (
        <div className='flex flex-col justify-between cursor-pointer'>
            <div className='aspect-w-1 aspect-h-1'>
                <img src={image} alt='product' />
            </div>
            <h1 className='font-semibold'>{name}</h1>
            <p className='text-xs text-gray-500'>{description}</p>
            <p className='font-semibold text-gray-700'>S/.{price}</p>
            <div className='flex justify-between px-1 pt-2'>
                <button className='bg-gray-800 rounded-full text-white p-1 w-6 h-6'
                    onClick={() => isProductInCart ? removeFromCart(product) : addToCart(product)}
                    style={{ backgroundColor: isProductInCart ? 'slateblue' : 'slategray' }}>
                    {isProductInCart ? <BsCartX /> : <BsCartPlus />}
                </button>
                <AiOutlineHeart
                    className='bg-gray-800 rounded-full text-white p-1 w-6 h-6' />
                {/* <button className='bg-gray-800 text-white px-2 py-1 text-sm rounded'>Comprar</button> */}
            </div>
        </div>
    )
}

export default ProductCard