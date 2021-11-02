import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import PropTypes from 'prop-types'

export const PublicRoutes = ({ isLoggedIn, component: Component, ...rest }) => {
    return (
        <Route {...rest} component={ () => {
            return isLoggedIn
            ?
                <Redirect to='/' />
            : 
                <Component />

        } } />
    )
}

PublicRoutes.propTypes = {
    isLoggedIn: PropTypes.bool.isRequired,
    Component: PropTypes.func
}
