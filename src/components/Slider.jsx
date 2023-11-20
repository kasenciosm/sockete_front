import React, { useEffect, useState, useRef } from 'react'
import { BiLeftArrow, BiRightArrow } from 'react-icons/bi';

const featuredProducts = [
    "/imagen/retrosocks.jpeg",
    "/imagen/pack-socks.jpeg",
    "/imagen/family-socks.jpeg",
]

let count = 0
let slideInterval

function Slider() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const slideRef = useRef()

    const removeAnimation = () => {
        slideRef.current.classList.remove('fade-anim')
    }

    useEffect(() => {
        slideRef.current.addEventListener('animationend', removeAnimation)
        slideRef.current.addEventListener('mouseenter', pauseSlider)
        slideRef.current.addEventListener('mouseleave', startSlider)

        startSlider()
        return () => {
            pauseSlider(slideInterval)
        }
    }, [])

    const startSlider = () => {
        slideInterval = setInterval(() => { handleOnNextClick() }, 3000)
    }

    const pauseSlider = () => {
        clearInterval(slideInterval)
    }

    const handleOnNextClick = () => {
        count = (count + 1) % featuredProducts.length
        setCurrentIndex(count)
        slideRef.current.classList.add('fade-anim')
    }
    const handleOnPrevCLick = () => {
        const productsLength = featuredProducts.length
        count = (currentIndex + productsLength - 1) % productsLength
        setCurrentIndex(count)
        slideRef.current.classList.add('fade-anim')
    }



    return (
        <div ref={slideRef} className='w-3/4 select-none relative'>
            <div className='aspect-w-16 aspect-h-5 ml-4 mr-4 transition'>
                <img src={featuredProducts[currentIndex]} alt='socks' />
            </div>

            <div className='absolute w-full top-1/2 trasnform -translate-y-1/2 py-2 px-3 -ml-0
            flex justify-between items-center'>
                <button
                    className='bg-slate-500 text-slate-200 p-2 rounded-full bg-opacity-20
                cursor-pointer hover:bg-opacity-80 transition'
                    onClick={handleOnPrevCLick}><BiLeftArrow /></button>
                <button
                    className='bg-slate-500 text-slate-200 p-2 rounded-full bg-opacity-20
                cursor-pointer hover:bg-opacity-80 transition'
                    onClick={handleOnNextClick}><BiRightArrow /></button>
            </div>
        </div >
    )
}

export default Slider