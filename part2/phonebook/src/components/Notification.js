import React from 'react'

const Notification = ({message}) => {

    const msgStyle = {
        color: 'green',
        background: 'lightgrey',
        fontSize: 20,
        borderStyle: 'solid',
        borderRadius: 5,
        padding: 10,
        marginBottom: 10
    }

    return <div style={msgStyle}>{message}</div>
}

export default Notification