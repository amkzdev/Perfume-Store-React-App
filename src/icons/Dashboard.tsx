import React from 'react'

export const Dashboard = ({ isActive }: { isActive: boolean }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" viewBox="0 0 46 46">
            <path id="view-dashboard" d="M28.556,3V18.333H49V3M28.556,49H49V23.444H28.556M3,49H23.444V33.667H3m0-5.111H23.444V3H3Z" fill={isActive ? "#f0a500" : '#808D93'} />
        </svg>
    )
}
