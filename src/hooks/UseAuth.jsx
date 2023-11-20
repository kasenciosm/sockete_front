import { useState } from "react"

const useAuth = () => {
    const [user, setUser] = useState(
        JSON.parse(localStorage.getItem('sockete') || { data: '' })
    )

    const isAuth = Boolean(user?.username)

    const setAuth = (data) => {
        setUser(data)
        localStorage.setItem('sockete', JSON.stringify(data.accessToken))
    }

    const logout = () => {
        localStorage.removeItem('sockete')
    }

    return (
        user,
        isAuth,
        setAuth,
        logout
    )
}

export default useAuth