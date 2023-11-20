import React, { useState } from 'react'
import NavItem from './NavItem'
import CartNavigator from './CartNavigator'
import { HiOutlineMenuAlt2, HiOutlineMenuAlt3 } from 'react-icons/hi'
import { RxPerson } from 'react-icons/rx'
import { MdPersonOff } from 'react-icons/md'
import { Link, useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { CartContext } from '../context/Cart'
import { UserContext } from '../context/UserContext'

function NavBar() {
    const [showNav, setShowNav] = useState()
    const { user, cleanUser } = useContext(UserContext)
    const navigate = useNavigate()
    const { cart } = useContext(CartContext)
    const totalItems = cart.length

    const handleLogout = () => {
        cleanUser()
        navigate('/shop')
    }


    return (
        <nav className='md:flex justify-between items-center bg-slate-50 sticky top-0 z-20 p-2 shadow-lg shadow-gray-400'>
            <div className='flex items-center justify-between'>
                <Link to="/home">
                    <img className='w-12 h-12 p-2' src='/imagen/sockete.png' alt='logo' />
                </Link>
                <div className='flex justify-between gap-4'>
                    <CartNavigator className='md:hidden flex' count={totalItems} />
                </div>
                {showNav ? (<HiOutlineMenuAlt2
                    onClick={() => setShowNav(!showNav)}
                    className='md:hidden block w-10 h-10 p-2 cursor-pointer'
                />
                ) : (<HiOutlineMenuAlt3
                    onClick={() => setShowNav(!showNav)}
                    className='md:hidden block w-10 h-10 p-2 cursor-pointer'
                />)}
            </div>
            <ul className={(showNav ? 'left-0' : '-left-full') +
                ' md:static fixed bottom-0 top-16 md:flex md:space-x-9 items-center md:bg-transparent bg-gray-500 bg-opacity-90 md:w-auto w-3/6 md:text-gray-500 text-white md:space-y-0 space-y-5 p-2 transition-left duration-300 '}>
                <NavItem content="Home" href="/home" />
                <NavItem content="Nosotros" href="/about" />
                <NavItem content="Tienda" href="/shop" />
                <NavItem content="Contacto" href="/contact" />
                {!user ?
                    <Link to='/login' className='flex md:hidden justify-center items-center rounded-full text-white relative w-8 h-8 bg-sky-500'>
                        <RxPerson />
                    </Link>
                    : (
                        <button
                            onClick={handleLogout}
                            className='md:hidden flex justify-center items-center rounded-full relative w-8 h-8 bg-sky-950'>
                            <MdPersonOff />
                        </button>
                    )}
            </ul>
            <div className='pr-2 flex justify-between gap-4'>
                {!user ?
                    <Link to='/login'>
                        <button className='hidden md:flex justify-center items-center rounded-full text-white relative w-8 h-8 bg-sky-500'>
                            <RxPerson />
                        </button>
                    </Link>
                    : (
                        <button
                            onClick={handleLogout}
                            className='hidden md:flex justify-center items-center rounded-full relative w-8 h-8 bg-sky-950'>
                            <MdPersonOff />
                        </button>
                    )}
                <CartNavigator className='md:flex hidden' count={totalItems} />
            </div>

        </nav>
    )
}

export default NavBar