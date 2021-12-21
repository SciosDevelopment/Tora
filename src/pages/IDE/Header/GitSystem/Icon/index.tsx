import React from 'react'

const GitSystemIcon = (props) => {
    const {icon, title, onAction} = props

    return (
        <button onClick={onAction}>
            <img src = {icon} alt={title}/>
            <p>{title}</p>
        </button>
    )
}

export default GitSystemIcon