import React from 'react'

const Total = ({ parts }) => {
    const exercises = () => parts.reduce((total, curr) => total + curr)

    return (
        <div><b>total of {exercises()} exercises</b></div>
    )
}

export default Total