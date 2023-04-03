import React from 'react'
import {
    BrowserRouter,
    Routes,
    Route,
    Navigate
} from "react-router-dom"
import Dashboard from '../../components/dashboard/Dashboard'
import SignIn from '../../pages/Login/SignIn/SignIn'
const PublicRoute = () => {
    return (

        <BrowserRouter>
            <Routes>
                {/* <Route path="/login" element={<SignIn />} />
                <Route path="/" element={<Navigate to='/login' />} />
                <Route path='*' element={<Navigate to='/login' />} /> */}
            </Routes>
        </BrowserRouter>
    )
}

export { PublicRoute }