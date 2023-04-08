import React from 'react'
import { useParams } from 'react-router-dom'

export const SinglePerfume = () => {
    const { id } = useParams()
    return (
        <div>SinglePerfume Id is {id}</div>
    )
}
