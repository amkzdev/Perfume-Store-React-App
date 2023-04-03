
import React from 'react'

// import { Layout } from '../../components/Layout/Layout'

import {
    BrowserRouter,
    Routes,
    Route,
    Navigate
} from "react-router-dom"

const PrivateRoute = () => {
    return (
        <BrowserRouter>
            {/* <Layout> */}
                <Routes>
                    {/* <Route path='/dashboard' element={<DashboardLanding />} /> */}
                    <Route path="*" element={<Navigate to={'/map'} />} />
                </Routes>
            {/* </Layout> */}
        </BrowserRouter >
    )
}

export { PrivateRoute }