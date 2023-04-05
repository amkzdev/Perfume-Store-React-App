import React from 'react'
import {
    BrowserRouter,
    Routes,
    Route,
    Navigate
} from "react-router-dom"
import { Perfumes } from '../../pages/Perfumes/Perfumes'
// import Dashboard from '../../components/dashboard/Dashboard'
// import SignIn from '../../pages/Login/SignIn/SignIn'
const PublicRoute = () => {
    return (

        <BrowserRouter>
            <Routes>
                <Route path="/perfumes" element={<Perfumes />} />
                {/* <Route path="/" element={<Navigate to='/login' />} />
                <Route path='*' element={<Navigate to='/login' />} /> */}
            </Routes>
        </BrowserRouter>
    )
}

export { PublicRoute }