import React from 'react'
import { Link } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import validator from 'validator'
import { removeError, setError } from '../../actions/ui';
import { useDispatch, useSelector } from 'react-redux';
import { startRegister } from '../../actions/auth';

export const RegisterScreen = () => {
    const dispatch = useDispatch();
    const { msgError } = useSelector( state => (state.ui))

    const [ formState,
        handleInputChange
    ] = useForm({
        'name': 'Johansen',
        'email': 'Johansen@dev.com',
        'password': 123456,
        'password_confirm': 123456
    });
    const { name, email, password, password_confirm } = formState;

    const handleRegister = (e) => {
        e.preventDefault()
        /* dispatch(startLoginEmailPassword(
            12345,
            'Hernando'
        )) */
        if (isFormValid()) {
            dispatch( startRegister(name, email, password) )
        }
    }
    const isFormValid = () => {
        if ( name.trim().length === 0 ) {
            dispatch(setError("name is required"));
            return false;
        } else if ( !validator.isEmail(email) ) {
            dispatch(setError("Email isn't valid"));
            return false;
        } else if ( password !== password_confirm ) {
            dispatch(setError("Passwords should match each other"));
            return false;
        } else if ( password.length < 5 ) {
            dispatch(setError("Passwords should have at least 6 characters"));
            return false;
        } else {
            dispatch(removeError());

            return true;
        }
    }
    
    return (
        <div>
            <h3 className="auth__title  mb-1">Register</h3>
            <form onSubmit={ handleRegister }>
                <input
                    type="text"
                    placeholder="Name"
                    name="name"
                    className="auth__input"
                    autoComplete="off"
                    onChange={ handleInputChange }
                    value={ name }
                />
                <input
                    type="text"
                    placeholder="Email"
                    name="email"
                    className="auth__input"
                    autoComplete="off"
                    onChange={ handleInputChange }
                    value={ email }
                />
                <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    className="auth__input"
                    onChange={ handleInputChange }
                    value={ password }
                />
                <input
                    type="password"
                    placeholder="Password Confirm"
                    name="password_confirm"
                    className="auth__input"
                    onChange={ handleInputChange }
                    value={ password_confirm }
                />

                {
                    msgError &&
                    <div className="auth__alert-error">
                        {msgError}
                    </div>
                }

                <button
                    type="submit"
                    className="btn btn-primary btn-block mb-5"
                >
                    Register
                </button>

                <Link
                    className="link"
                    to='/auth/login'
                >
                    Already registered?
                </Link>
            </form>
        </div>
    )
}
