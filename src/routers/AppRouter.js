import React, { useEffect, useState } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import { JournalScreen } from '../components/journal/JournalScreen';
import { AuthRouter } from './AuthRouter';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { login } from '../actions/auth';
import { useDispatch } from 'react-redux';
import { PublicRoutes } from './PublicRoutes';
import { PrivateRoutes } from './PrivateRoutes';



export const AppRouter = () => {
    const dispatch = useDispatch();

    const [checking, setChecking] = useState(true);
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    useEffect(() => {
        const auth = getAuth();
        onAuthStateChanged(auth, (user) => { // método de firebase para mantener un usuario logueado
            if (user?.uid) {
                const { uid, displayName } = user;
                dispatch(login(uid, displayName))
                setIsLoggedIn(true)
            } else {
                setIsLoggedIn(false)
            }
            setChecking(false)
        });
    }, []);

    if (checking) {
        return (
            <div className="spinner__container">
                <div className="spinner"></div>
            </div>
        )
    } 

    return (
        <Router>
            <Switch>
                <PublicRoutes 
                    isLoggedIn={ isLoggedIn } 
                    path='/auth' 
                    component={AuthRouter}
                /> {/* notar que si le agrego la prop "exact" nunca va a entrar en las rutas hijas de /auth (/auth/lo-que-sea) */}
                <PrivateRoutes 
                    isLoggedIn={ isLoggedIn } 
                    exact
                    path='/' 
                    component={JournalScreen}
                />
            </Switch>
        </Router>
    )
}
