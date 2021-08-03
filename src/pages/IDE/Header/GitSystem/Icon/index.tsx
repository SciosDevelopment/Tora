import React from 'react'
import './style/GitSystemIcon.scss'

const GitSystemIcon = (props) => {
    const {icon, title, onAction} = props

    return (
        <div className = "GitSystem-icon-wrapper" onClick={onAction}>
            <img src = {icon} alt=""/>
            <p>{title}</p>
        </div>
    )
}

export default GitSystemIcon