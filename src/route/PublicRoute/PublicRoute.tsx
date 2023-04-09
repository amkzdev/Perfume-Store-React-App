import React from 'react'
import {
    BrowserRouter,
    Routes,
    Route,
    Navigate
} from "react-router-dom"
import { Perfumes } from '../../pages/Perfumes/Perfumes'
import { Login, SinglePerfume } from '@pages'
// import Dashboard from '../../components/dashboard/Dashboard'
// import SignIn from '../../pages/Login/SignIn/SignIn'
const PublicRoute = () => {
    return (

        <BrowserRouter>
            <Routes>
                <Route path="/perfumes" element={<Perfumes />} />
                <Route path="/perfume/:id" element={<SinglePerfume />} />
                <Route path="/login" element={<Login />} />
                {/* <Route path="/" element={<Navigate to='/login' />} />
                <Route path='*' element={<Navigate to='/login' />} /> */}
            </Routes>
        </BrowserRouter>
    )
}

export { PublicRoute }