import React, { useContext, useEffect, useState } from 'react'
import { auth } from "../firebase";

const AuthContext = React.createContext()

export const useAuth = () => {
    return useContext(AuthContext);
}

export const AuthProvider = ({ children }) => {

    const [currentUser, setCurrentUser] = useState()
    const [loading, setLoading] = useState(true)

    const signup = (email, password) => {
        return auth.createUserWithEmailAndPassword(email, password);

    }
    const resetPassword = (email) => { 
        return auth.sendPasswordResetEmail(email)
     }
    const login = (email,password)=>{
        return auth.signInWithEmailAndPassword(email,password)
    }

    useEffect(() => {

    const unsubscribe =    auth.onAuthStateChanged((user) => {
            setCurrentUser(user)
            setLoading(false);
        })
        return unsubscribe;
    }, [])


    const value = {
        currentUser,
        signup,
        login,
        resetPassword
    }
    return (
        <AuthContext.Provider value={value} >
            {!loading && children}
        </AuthContext.Provider>
    )
}

