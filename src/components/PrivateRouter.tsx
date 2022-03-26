import React from 'react'
import { Navigate } from 'react-router-dom'
import { isAuthenticate } from '../utils/localstorage'

type PrivateRouterProps = {
    children: JSX.Element
}

const PrivateRouter = (props: PrivateRouterProps) => {
    const isAdmin = isAuthenticate()
    if(isAdmin){
        if(isAdmin.user.role == 0) {
            return <Navigate to="/" />
        }
        return props.children
    }
    return <Navigate to="/" />
}

export default PrivateRouter