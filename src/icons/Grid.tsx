import React from 'react'

export const Grid = ({ isActive }: { isActive: string }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="47.92" height="47.919" viewBox="0 0 47.92 47.919">
            <path id="Path_362" data-name="Path 362" d="M46.6,40.236,36.054,29.691A19.454,19.454,0,1,0,19.5,39a19.322,19.322,0,0,0,10.188-2.943L40.236,46.6A4.5,4.5,0,1,0,46.6,40.236ZM19.5,33A13.5,13.5,0,1,1,33,19.5,13.5,13.5,0,0,1,19.5,33Z" fill={isActive ? "#f0a500" : '#808D93'} />
        </svg>
    )
}
