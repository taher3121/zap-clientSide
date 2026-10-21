import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { AuthContext } from './AuthContext';
import { auth } from '../Firebase/Firebase.init';
import { useEffect, useState } from 'react';



const provider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {

    const [user, SetUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const registerUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signInUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
        
    }

    const GoogleSignIn = () => {
        setLoading(true)
        return signInWithPopup(auth, provider);
    }

    const LogOut = ()=>{
        setLoading(true);
        signOut(auth)
    }
    
    const updateUserProfile = (profile)=>{
        return updateProfile(auth.currentUser, profile)
    }
    
    useEffect(() =>{
        const unSubscribe = onAuthStateChanged(auth , (currentUser)=>{
            // console.log(auth)
            SetUser(currentUser)
            // console.log(currentUser)
            setLoading(false)
        })

        return ()=> {
            unSubscribe()
        }
    }, [])


    const authInfo = {
        LogOut,
        user,
        loading,
        registerUser,
        signInUser,
        GoogleSignIn,
        updateUserProfile
    }





    return (
        <AuthContext value={authInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;