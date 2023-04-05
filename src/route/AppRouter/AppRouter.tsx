import React from 'react'
// import { useAuth } from '../../api/authentication'
// import { deleteUserInfo, getToken } from 'utils'
import { PrivateRoute } from '../PrivateRoute/PrivateRoute'
import { PublicRoute } from '../PublicRoute/PublicRoute'
import { Layout } from '@components'

const AppRouter = () => {

    // const auth = useAuth()

    return <Layout><PublicRoute /></Layout>

    // return (auth.loggedIn || !!getToken()
    //     ? <PrivateRoute />
    //     : <PublicRoute />)

}

export { AppRouter }