import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { useRecoilValue } from 'recoil'
import { authState } from 'recoil/authentication'

const ProtectedRoute = ({component: Component, ...rest }) => {
    const status = useRecoilValue(authState)
    return(
        <Route
            {...rest}
            render={
                (props) => (status?.isAuthenticated ? <Component {...props}/> : <Redirect to="/login"/>)
            }
        />
    )
}

export default ProtectedRoute