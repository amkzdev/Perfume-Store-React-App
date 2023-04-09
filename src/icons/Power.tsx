import React from 'react'

export const Power = ({ color }: { color?: string }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="122.766" height="140.304" viewBox="0 0 122.766 140.304">
            <path id="switch" d="M80.921,20.085v18.63a43.777,43.777,0,1,1-35.076,0V20.085a61.383,61.383,0,1,0,35.076,0ZM54.614,0H72.152V70.152H54.614Z" transform="translate(-2)" fill={color || "#384A52"} />
        </svg>
    )
}
