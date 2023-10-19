/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { createContext, useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged, signOut} from "firebase/auth";
import app from '../firebase/firebase.config';

export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProvider = ({children}) => {

    const [user,setUser] = useState(null);
    

    const logout = () => {
        console.log('hello');
        return signOut(auth);
    }

    useEffect(() =>{
        const unsuscribe = onAuthStateChanged(auth, loggedUser => {
            setUser(loggedUser);
            
        })
        return () => {
            unsuscribe();
        }
    }, [])

    const authInfo = {
        user,
        logout,
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;