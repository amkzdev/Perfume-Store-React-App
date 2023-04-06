import React, { useState } from 'react'

import { Box, IconButton } from '@mui/material'
import { Dashboard, Home, Grid, Backup, UserCheck } from '@icons'

const IconComponent = ({ icon, id, isActive, onClick }: { icon: Function, id: number, isActive: boolean, onClick: Function }) => {
    return <IconButton onClick={() => onClick(id)}>
        {icon({ isActive })}
    </IconButton>
}

const menuItems = [
    { id: 1, icon: Home, },
    { id: 2, icon: Dashboard, },
    { id: 3, icon: Grid, },
    { id: 4, icon: Backup },
    { id: 5, icon: UserCheck },
]

export const Footer = () => {

    const [selectedSection, setSelectedSection] = useState<number>(1)

    return (
        <Box sx={{ bottom: 0, left: 0, width: '100%', boxSizing: 'border-box', position: 'fixed', display: 'flex', backgroundColor: "#130D08", alignItems:'center',justifyContent:'space-around',p:1.5 }}>
            {menuItems.map(menu => <IconComponent icon={menu.icon} id={menu.id} onClick={() => setSelectedSection(menu.id)} isActive={selectedSection === menu.id} />)}
        </Box>
    )
}
