import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import PropTypes from 'prop-types'

export const PrivateRoutes = ({ isLoggedIn, component: Component, ...rest }) => {
    return (
        <Route {...rest} component={ () => {
            return isLoggedIn
            ?
                <Component />
            : 
                <Redirect to='/auth/login' />
        } } />
    )
}

PrivateRoutes.propTypes = {
    isLoggedIn: PropTypes.bool.isRequired,
    Component: PropTypes.func
}
