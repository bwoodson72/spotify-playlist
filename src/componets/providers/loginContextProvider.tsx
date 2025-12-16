'use client'
import {createContext, useState} from 'react'
export const LoginContext = createContext({
    isLoggedIn: false,
    login: () => {},
    logout: () => {}
});

export function LoginContextProvider({children}: { children: React.ReactNode }) {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    return (
        <LoginContext.Provider value={{isLoggedIn, login: () => setIsLoggedIn(true), logout: () => setIsLoggedIn(false)}}>
            {children}
        </LoginContext.Provider>
    )
}
