import React from 'react'

const Content = ({ parts }) => {
    const courseparts = () => parts.map(part => <p key={part.id}>{part.name} {part.exercises}</p>)

    return (
        <div>{courseparts()}</div>
    )
}

export default Content