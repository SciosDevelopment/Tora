import React, {useState} from 'react'
import './style/DropdownItem.scss'

const DropdownItem = (props) => {
    const {title, shortcut, onAction} = props
    
    return (
        <a className="dropdown-item" onClick={onAction}> {title} </a>
    )
}

export default DropdownItem