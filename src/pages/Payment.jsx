import { useEffect, useState } from "react"
import Footer from "../components/Footer"
import axios from "axios"

function Payment() {

    const [cart, setCart] = useState(null)
    const orderNumber = JSON.parse(localStorage.getItem('order_number'))
    // console.log(orderNumber)

    useEffect(() => {
        const fetchCartDetails = async () => {
            try {
                const response = await fetch(`http://localhost:3000/carts/${orderNumber}`)
                const data = await response.json()
                setCart(data)
            } catch (error) {
                console.error(error)
            }
        }
        fetchCartDetails()
    }, [orderNumber])


    return (
        <>
            {cart && (
                <section className="bg-[url('./public/imagen/four-cordel-socks.jpeg')]">
                    <div className='w-4/6 mx-auto pt-20 pb-10'>
                        <h1 className='text-left text-3xl font-semibold mb-3 bg-sky-600 rounded-md p-4'>CHECKOUT PEDIDO</h1>
                        <div className='flex flex-col gap-4 bg-sky-100 p-8 rounded-lg shadow-lg'>
                            <div className="flex justify-between">
                                <p className="text-left text-lg font-semibold bg-emerald-500 p-4 w-1/3 items-center">Pedido N°: {cart.order_number}</p>
                                <p className="text-left text-lg font-semibold p-3 border bg-transparent w-1/4"> Status:</p>
                            </div>
                            <h3 className="text-left text-xl border-b-2 font-semibold p-4">Datos del Pedido</h3>
                            <article>

                                <div className="flex flex-col gap-4 mb-4 p-4">
                                    <span className="font-semibold">Nombre: {cart.user.name} {cart.user.last_name}</span>
                                    <span className="font-semibold">Fecha del pedido: {cart.created_at}</span>
                                    <p className="font-semibold">Lugar de Entrega</p>
                                </div>
                                <h3 className="text-left font-semibold p-4  border-b-4">Resumen del Pedido</h3>
                                <ul className="">
                                    <li className="grid grid-cols-5 text-center font-semibold p-6  border-b-4">
                                        <p>Foto</p>
                                        <p>Nombre</p>
                                        <p>Cantidad</p>
                                        <p>Precio Unitario</p>
                                        <p>Precio Total</p>
                                    </li>
                                </ul>
                                {cart.product_details.map((product, index) => (
                                    <li className="grid grid-cols-5 text-center gap-10 p-4 items-center"
                                        key={index} >
                                        <img className="ml-12" src={product.image} width='50px' />
                                        <p>{product.name}</p>
                                        <p>{product.quantity}</p>
                                        <p>{product.price}</p>
                                        <p>S/. </p>
                                    </li>

                                ))}
                                <div className="flex justify-end text-right mt-6 p-4">
                                    <button className="bg-yellow-400 p-2 text-xs font-semibold">EFECTUAR EL PAGO</button>
                                </div>
                            </article>

                        </div>
                    </div>
                </section>
            )}
            <Footer />
        </>
    )
}

export default Payment