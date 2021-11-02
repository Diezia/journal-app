import { googleAuthProvider } from "../firebase/firebase-config";
import { 
    signInWithPopup, getAuth, 
    createUserWithEmailAndPassword, 
    updateProfile, 
    signInWithEmailAndPassword,
    signOut 
} from 'firebase/auth'
import { types } from "../types/types";
import { disableLoginButton, enableLoginButton } from "./ui";


export const startLoginEmailPassword = ( email, password ) => {
    return (dispatch) => {
        dispatch( disableLoginButton() )

        // if credentials === values : sign in
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
            .then( async (userCredential) => {
                const user = userCredential.user;
                await dispatch(login(user.uid, user.displayName));
                dispatch(enableLoginButton())
            })
            .catch((error) => {
                console.log(error.message);
                dispatch(enableLoginButton())
            });
    }
}

export const startGoogleLogin = () => {
    return (dispatch) => {
        const auth = getAuth();
        signInWithPopup(auth, googleAuthProvider)
            .then( ({ user }) => {
                dispatch( login(user.uid, user.displayName))
            })
            .catch((error) => {
                // Handle Errors here.
                const errorMessage = error.message;
                console.log(errorMessage)
            });
    }
}


export const login = (uid, displayName) => ({
    type: types.login,
    payload: {
        uid,
        displayName
    }
})

export const startRegister = (name, email, pass) => {
    return( dispatch ) => {
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, pass)
            .then( async ({ user }) => {
                await updateProfile(auth.currentUser, {displayName: name })
                dispatch(login(user.uid, user.displayName))
            })
            .catch( e => console.log(e))
    }
}

export const startLogout = () => {
    return (dispatch) => {
        const auth = getAuth();
        signOut(auth).then(() => {
            dispatch(logout())
        }).catch((error) => {
            console.log(error)
        });
    }
}
const logout = () => ({
    type: types.logout
})



