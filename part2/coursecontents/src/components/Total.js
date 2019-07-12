import React from 'react'

const Total = ({ parts }) => {
    const exercises = () => parts.reduce((total, curr) => total + curr)

    return (
        <div>Total exercises: {exercises()}</div>
    )
}

export default Total