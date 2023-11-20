import { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import Footer from '../components/Footer'
import Swal from 'sweetalert2'
import { UserContext } from '../context/UserContext'

// const MySwal = withReactionContent(Swal

const Login = () => {

    const { storeUser } = useContext(UserContext)

    const [form, setForm] = useState({
        username: '',
        password: '',
    })

    const navigate = useNavigate()

    const handleChange = (event) => {
        const value = event.target.value
        const name = event.target.name

        setForm({ ...form, [name]: value })
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        const url = `http://localhost:3000/auth/signin`
        const options = {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(form)
        }
        const response = await fetch(url, options)
        const data = await response.json()
        setForm({ username: '', password: '' })

        if (data.accessToken) {
            setTimeout(() => {
                storeUser(data)
                navigate('/home')
            }, 2000)
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Credenciales incorrectas!',
                imageUrl: '/imagen/only_cheems.png',
                imageWidth: 100,
                imageHeight: 150,
                imageAlt: "Cheems"
            })
        }


    }


    return (
        <>
            <section className="bg-[url('./public/imagen/four-cordel-socks.jpeg')]">
                <form className='w-96 mx-auto pt-20 pb-10'
                    onSubmit={handleSubmit}>
                    <h1 className='text-center text-3xl font-semibold mb-3'>INGRESAR</h1>
                    <div className='flex flex-col gap-4 bg-sky-100 p-8 rounded-lg shadow-lg'>
                        <label className='font-medium'>
                            Username
                            <input
                                type="text"
                                name="username"
                                placeholder='Ingresa tu usuario'
                                className='border rounded-lg w-full p-3'
                                onChange={handleChange}
                                // required
                                value={form?.username}
                            />
                        </label>
                        <label className='font-medium'>
                            Password
                            <input
                                type="password"
                                name="password"
                                placeholder='*******'
                                className='border rounded-lg w-full p-3'
                                onChange={handleChange}
                                // required
                                value={form?.password}
                            />
                        </label>
                        <input
                            type='submit'
                            value="Login"
                            className='w-full bg-sky-400 rounded-lg p-3 font-medium cursor-pointer'
                        />
                        <h3 className="text-center">¿Aún no tienes cuenta?</h3>
                        <Link to='/register' className="hover:underline hover:text-blue-950 text-center bg-yellow-400 rounded-lg p-3">Registrarse</Link>
                    </div>
                </form>
            </section>
            <Footer />
        </>
    )

}
export default Login