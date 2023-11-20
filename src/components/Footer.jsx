import logo from '/imagen/sockete.png'
import { HiOutlineMail, HiOutlinePhone } from 'react-icons/hi'
import { BsFacebook, BsInstagram } from 'react-icons/bs'
import { FaTiktok } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <section className="xl:px-10 px-8 py-10 bg-slate-200 font-semibold text-sm">
            <div className='justify-between gap-4 sm:flex sm:space-x-5 space-x-0 sm:space-y-0 space-y-3 items-center text-center sm:text-left'>
                <img className='rounded-lg w-12 h-12 mt-4' src={logo} />
                <div className='pb-5'>
                    <ul className='flex flex-col gap-2'>
                        <Link className=' hover:underline hover:text-slate-700' to="/about">¿Quienes Somos?</Link>
                        <Link className=' hover:underline hover:text-slate-700' to="">Sobre los envíos</Link>
                        <Link className=' hover:underline hover:text-slate-700' to="#">Sobre Nuestras Medias</Link>
                        <Link className=' hover:underline hover:text-slate-700' to="#">Preguntas Frecuentes</Link>
                    </ul>
                </div>
                <div className='pb-5'>
                    <ul className='flex flex-col gap-2'>
                        <Link className=' hover:underline hover:text-slate-700' to="#">Servicio al Cliente</Link>
                        <Link className=' hover:underline hover:text-slate-700' to="#">Politica de Cambios y Devoluciones</Link>
                        <Link className=' hover:underline hover:text-slate-700' to="#">Tratamiento de Datos</Link>
                        <Link className=' hover:underline hover:text-slate-700' to="#">Términos y Condiciones</Link>
                    </ul>
                </div>
                <div>
                    <ul className='flex justify-center gap-4'>
                        <Link className='hover:text-slate-700' to="#"><HiOutlineMail /></Link>
                        <Link className='hover:text-slate-700' to="#"><HiOutlinePhone /></Link>
                        <Link className='hover:text-slate-700' to="#"><BsFacebook /></Link>
                        <Link className='hover:text-slate-700' to="#"><BsInstagram /></Link>
                        <Link className='hover:text-slate-700' to="#"><FaTiktok /></Link>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Footer