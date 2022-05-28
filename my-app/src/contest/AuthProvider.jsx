import React, { createContext, useState } from 'react'

export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
    const [token, setToken] = useState("");

    const handleLogin = async (email, password) => {
        //  api request to reqres.in for the token
        let res = await fetch("https://reqres.in/api/login", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify({ email, password }),
        });

        let data = await res.json()
        setToken(data.token)
        console.log(data.token)
    };
    const handleLogout = () => {
        //  set token back to " " once logged out
        setToken("")
    };

    const value = { token, handleLogin, handleLogout }

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>


}

