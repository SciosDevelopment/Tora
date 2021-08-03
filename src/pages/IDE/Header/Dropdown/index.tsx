import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import LogoImg from '../../../img/tora-ide-logo@2x.png'
import DropdownItem from './Item'
import './style/Dropdown.scss'

const Dropdown = (props) => {
    const {title, data} = props
    
    return (
        <div className = "dropdown-main">
            <button className = "dropdown-btn">{title}</button>
            <div className = "dropdown-contents">
                {
                data.map((item) => 
                    <DropdownItem 
                     title = {item.title}
                     onAction={item.onAction}/>)}
            </div>               
        </div>
    )
}

export default Dropdown