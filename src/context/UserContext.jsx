import { createContext, useState } from "react"

export const UserContext = createContext()

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState()

    const storeUser = (token) => {
        localStorage.setItem('sockete', JSON.stringify(token.userId))
        setUser(token.userId)
    }

    const cleanUser = () => {
        localStorage.removeItem('sockete')
        localStorage.removeItem('order_number')
        localStorage.removeItem('cart')
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
