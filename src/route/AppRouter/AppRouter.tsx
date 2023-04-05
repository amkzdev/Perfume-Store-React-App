import React from 'react'
// import { useAuth } from '../../api/authentication'
// import { deleteUserInfo, getToken } from 'utils'
import { PrivateRoute } from '../PrivateRoute/PrivateRoute'
import { PublicRoute } from '../PublicRoute/PublicRoute'

const AppRouter = () => {

    // window.onbeforeunload = function() {
    //     deleteUserInfo()
    //  }

    // const auth = useAuth()

    return <PublicRoute />

    // return (auth.loggedIn || !!getToken()
    //     ? <PrivateRoute />
    //     : <PublicRoute />)

}

export { AppRouter }