import React from 'react'
import Part from './Part'

const Content = ({ parts }) => {
    const courseparts = () => parts.map((part, index) => <p key={index}><Part name={part}/></p>)

    return (
        <div>{courseparts()}</div>
    )
}

export default Content