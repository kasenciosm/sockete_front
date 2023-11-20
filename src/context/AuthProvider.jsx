import React, { createContext, useState, useContext } from 'react'

const AuthContext = createContext()

function AuthProvider({ children }) {
    const [profile, setProfile] = useState({
        name: '',
        avatar: '',
    })
    return (
        <AuthContext.Provider value={{ profile, setProfile }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider

export const useAuth = () => useContext(AuthContext)