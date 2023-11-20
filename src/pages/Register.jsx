import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Footer from '../components/Footer'

function Register() {

    const [form, setForm] = useState({
        name: '',
        last_name: '',
        username: '',
        email: '',
        password: '',
    })

    const navigate = useNavigate()

    const handleChange = (event) => {
        const value = event.target.value
        const name = event.target.name
        // console.log(value, name)

        setForm({
            ...form,
            [name]: value
        })
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        const url = 'http://localhost:3000/users'
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(form)
        }

        const response = await fetch(url, options)
        const data = await response.json()

        setForm({
            username: '',
            email: '',
            password: ''

        })

        navigate('/login')
    }

    return (
        <>
            <section className="bg-[url('./public/imagen/four-cordel-socks.jpeg')]">
                <form className='w-96 mx-auto pt-10 pb-10'
                    onSubmit={handleSubmit}>
                    <h1 className='text-center text-3xl font-semibold mb-3'>REGISTRARSE</h1>
                    <div className='flex flex-col gap-4 bg-sky-100 p-8 rounded-lg shadow-lg'>
                        <label className='font-medium'>
                            Nombres
                            <input
                                type="text"
                                name="name"
                                placeholder='Sockete'
                                className='border rounded-lg w-full p-3'
                                onChange={handleChange}
                                required
                                value={form?.name}
                            />
                        </label>
                        <label className='font-medium'>
                            Apellidos
                            <input
                                type="text"
                                name="last_name"
                                placeholder='Socketoncio'
                                className='border rounded-lg w-full p-3'
                                onChange={handleChange}
                                required
                                value={form?.last_name}
                            />
                        </label>
                        <label className='font-medium'>
                            Usuario
                            <input
                                type="text"
                                name="username"
                                placeholder='socketin.socketon'
                                className='border rounded-lg w-full p-3'
                                onChange={handleChange}
                                required
                                value={form?.username}
                            />
                        </label>
                        <label className='font-medium'>
                            Email
                            <input
                                type="text"
                                name="email"
                                placeholder='sockete@sockete.com'
                                className='border rounded-lg w-full p-3'
                                onChange={handleChange}
                                required
                                value={form?.email}
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
                                required
                                value={form?.password}
                            />
                        </label>
                        <input
                            type='submit'
                            value="Registrar"
                            className='w-full bg-sky-400 rounded-lg p-3 font-medium cursor-pointer'
                        />
                    </div>
                </form>
            </section>
            <Footer />
        </>
    )
}

export default Register