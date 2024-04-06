import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import auth from "../../firebase/firebase.config";

export const AuthContext = createContext(null);

const googleProvider = new GoogleAuthProvider();

const Authprovider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        console.log(email, password)
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signInUser = (email, password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    useEffect(()=>{
        const userInfo = onAuthStateChanged(auth, (currentUser) =>{
            setUser(currentUser);
            setLoading(false);
        })

        return () => userInfo;
    },[])

    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    const signInGoogle = () =>{
        setLoading(true);
        return signInWithPopup(auth, googleProvider)
    }

    const AuthInfo = {user, createUser, signInUser, logOut, loading, signInGoogle}
    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider >
    );
};

Authprovider.propTypes = {
    children : PropTypes.node
}

export default Authprovider;