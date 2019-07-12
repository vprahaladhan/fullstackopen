import React from 'react'

const Total = ({ exercises }) => {
    const totalExercises = () => exercises.reduce((total, curr) => total + curr)

    return (
        <div>Total exercises: {totalExercises()}</div>
    )
}

export default Total