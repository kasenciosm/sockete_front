import React from 'react'

const Title = ({ text, className }) => {
    return (
        <h1 className={className + " text-xl text-gray-900 font-semibold"}>{text}</h1>
    )
}

export default Title