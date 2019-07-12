import React from 'react'

const Course = ({ course }) => {

    const partsOfCourse = () => course.parts.map(part => <p key={part.id}>{part.name} {part.exercises}</p>)
    
    return (
        <div>
            <h1>{course.name}</h1>
            {partsOfCourse()}
        </div>
    )
}

export default Course