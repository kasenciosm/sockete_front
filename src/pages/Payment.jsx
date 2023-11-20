import { useEffect, useState } from "react"
import Footer from "../components/Footer"
import axios from "axios"

function Payment() {

    const [cart, setCart] = useState()
    const cartId = 54

    useEffect(() => {
        const fetchCartDetails = async () => {
            const response = await axios.get(`http://localhost:3000/carts/${cartId}`)
            setCart(response.data.cart)
        }
        fetchCartDetails()
    }, [cartId])



    return (
        <>
            <section className="bg-[url('./public/imagen/four-cordel-socks.jpeg')]">
                <div className='w-4/6 mx-auto pt-20 pb-10'>
                    {cart && (
                        <div>
                            {`${product_details.name}`}
                        </div>
                    )}
                    <h1 className='text-left text-3xl font-semibold mb-3 bg-sky-600 rounded-md p-4'>CHECKOUT PEDIDO</h1>
                    <div className='flex flex-col gap-4 bg-sky-100 p-8 rounded-lg shadow-lg'>
                        <div className="flex justify-between">
                            <p className="text-left text-lg font-semibold bg-emerald-500 p-4 w-1/4">Pedido N°:</p>
                            <p className="text-left text-lg font-semibold p-3 border bg-transparent w-1/4"> Status:</p>
                        </div>
                        <h3 className="text-left text-xl border-b-2 font-semibold p-4">Datos del Pedido</h3>
                        <article>
                            <div className="flex flex-col gap-4 mb-4 p-4">
                                <span>Nombre:</span>
                                <span>Fecha del pedido:</span>
                                <p>Lugar de Entrega</p>
                            </div>
                            <h3 className="text-left font-semibold p-4">Resumen del Pedido</h3>
                            <ul className="flex justify-between p-4 font-semibold border-b-4">
                                <li>Foto</li>
                                <li>Nombre</li>
                                <li>Cantidad</li>
                                <li>Precio Unit.</li>
                                <li>Precio Total</li>
                            </ul>
                            <div className="flex justify-end text-right mt-6 p-4">
                                <button className="bg-yellow-400 p-2 text-xs font-semibold">EFECTUAR EL PAGO</button>
                            </div>
                        </article>

                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default Payment