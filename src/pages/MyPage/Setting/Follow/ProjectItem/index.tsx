import React from 'react'
import './style/SettingProjectItem.scss'
import Profile4 from '../../../../../img/profile4.png'
import Projecticon from '../../../../../img/toralogobutton.png'
import Chat from '../../../../../img/communication80.png'

const SettingProjectItem = () => {
    return (
        <div className = "Setting-project-item-main">
            <div className = "Setting-project-item-profile">
                <img src = {Profile4} alt=""/>
            </div>
            <div className = "Setting-project-item-info">
                <p>Project Name</p>
                <p>Project ReadMe</p>
            </div>
            <div className = "Setting-project-item-button">
                <img src = {Projecticon} alt=""/>
                <img src = {Chat} alt=""/>
            </div>            
        </div>
    )
}

export default SettingProjectItem