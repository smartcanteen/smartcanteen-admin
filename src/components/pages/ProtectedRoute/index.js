import React from 'react'
import { Route, Redirect } from 'react-router-dom'

const ProtectedRoute = ({component: Component, ...rest }) => {
    // const isAuthenticated = useSelector(state => state.authentication.isAuthenticated)
    const isAuthenticated = false
    return(
        <Route
            {...rest}
            render={
                (props) => (isAuthenticated ? <Component {...props}/> : <Redirect to="/login"/>)
            }
        />
    )
}

export default ProtectedRoute