import { createUserWithEmailAndPassword } from 'firebase/auth';
import { AuthContext } from './AuthContext';
import { auth } from '../Firebase/Firebase.init';

const AuthProvider = ({children}) => {
    
    const registerUser = (email,password)=>{
        return createUserWithEmailAndPassword(auth, email, password)
    }
    
    
    
    
    const authInfo={
        registerUser
    }
    
    
    
    
    
    return (
        <AuthContext value={authInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;