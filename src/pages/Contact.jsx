import React, { useState } from 'react'

function Contact() {

    const [messageTitle, setMessageTitle] = useState('')
    const [messageBody, setMessageBody] = useState('')


    const [messageInfo, setMessageInfo] = useState({
        title: '',
        body: ''
    })


    const handleSubmit = (e) => {
        e.preventDefault()
    }

    const handleChange = ({ target }) => {
        const { value, name } = target
        setMessageInfo({ ...messageInfo, [name]: value })
    }

    const { title, body } = messageInfo

    return (
        <div className="mt-10 max-w-md mx-auto text-center font-semibold">
            <h1 className="mt-10 max-w-md mx-auto text-center text-2xl font-semibold">
                Bienvenido a nuestra pagina de <span className="text-yellow-500">Contacto</span>
            </h1>
            <form onSubmit={handleSubmit} className="mt-20 space-y-5">
                <input
                    type="text"
                    value={title}
                    name='title'
                    // onChange={(e) => setMessageTitle(e.target.value)}
                    onChange={handleChange}
                    className="border-b w-full outline-none"
                    placeholder="Message title"
                />
                <textarea
                    placeholder="Your message"
                    value={body}
                    name='body'
                    // onChange={(e) => setMessageBody(e.target.value)}
                    onChange={handleChange}
                    className="w-full resize-none border-b outline-none h-36"
                ></textarea>
                <input
                    className="px-5 py-2 cursor-pointer"
                    type="submit"
                    value="Enviar"
                />
            </form>
        </div>
    )
}

export default Contact