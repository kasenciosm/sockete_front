import { createContext, useState } from "react"

export const UserContext = createContext()

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState()

    const storeUser = (data) => {
        localStorage.setItem('sockete', JSON.stringify(data))
        setUser(data)
    }

    const cleanUser = () => {
        localStorage.removeItem('sockete')
        setUser(null)
    }

    return (
        <UserContext.Provider value={
            {
                user,
                storeUser,
                cleanUser
            }
        }>
            {children}
        </UserContext.Provider>
    )
}
