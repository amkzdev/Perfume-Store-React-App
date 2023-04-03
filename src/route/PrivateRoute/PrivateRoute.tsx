
import React from 'react'

import { AddLevel, AddSubgroup, EditLevel, EditSubgroup, LocationList, AddLocation, CheckLists, AddCheckList, DashboardLanding, LandingMap, LocationInfo, Userlist, AddUser, RoleList, AddRole, EditRole, UserRoleDetail, ReportDetail, ReportSearch, AddReport } from 'pages'
import { LevelList } from 'pages/LevelList/LevelList'
import { Layout } from '../../components/Layout/Layout'
import { SubgroupList } from 'pages/SubgroupList/SubgroupList'

import {
    BrowserRouter,
    Routes,
    Route,
    Navigate
} from "react-router-dom"
import { EditChecklist } from 'pages/EditChecklist/EditChecklist'

const PrivateRoute = () => {
    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route path='/dashboard' element={<DashboardLanding />} />
                    <Route path='/sub-group/list' element={<SubgroupList />} />
                    <Route path='/sub-group/add' element={<AddSubgroup />} />
                    <Route path='/sub-group/edit/:id' element={<EditSubgroup />} />
                    <Route path='/level/list' element={<LevelList />} />
                    <Route path='/level/add' element={<AddLevel />} />
                    <Route path='/level/edit/:id' element={<EditLevel />} />
                    <Route path='/location/list' element={<LocationList />} />
                    <Route path='/location/add/:parentId' element={<AddLocation />} />
                    <Route path='/location/info/:id' element={<LocationInfo />} />
                    <Route path='/checklist/list' element={<CheckLists />} />
                    <Route path='/checklist/add' element={<AddCheckList />} />
                    <Route path='/checklist/edit/:id' element={<EditChecklist />} />
                    <Route path='/users/list' element={<Userlist />} />
                    <Route path='/user/add' element={<AddUser />} />
                    <Route path='/userrole/:id' element={<UserRoleDetail />} />
                    <Route path='/role/list' element={<RoleList />} />
                    <Route path='/role/add' element={<AddRole />} />
                    <Route path='/role/edit/:id' element={<EditRole />} />
                    <Route path='/map' element={<LandingMap />} />
                    <Route path='/report/:id' element={<ReportDetail />} />
                    <Route path='/reportsearch' element={<ReportSearch />} />
                    <Route path='/report/add' element={<AddReport />} />
                    <Route path="*" element={<Navigate to={'/map'} />} />
                </Routes>
            </Layout>
        </BrowserRouter >
    )
}

export { PrivateRoute }