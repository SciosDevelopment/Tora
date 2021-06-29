import React from 'react';
import './style/SettingPersonalItem.scss'
import Profile4 from '../../../../../img/profile4.png'
import Projecticon from '../../../../../img/toralogobutton.png'
import Chat from '../../../../../img/communication80.png'

const SettingPersonalItem = () => {
    return (
        <div className = "Setting-personal-item-main">
            <div className = "Setting-personal-item-profile">
                <img src = {Profile4} alt=""/>
            </div>
            <div className = "Setting-personal-item-info">
                <p>Name</p>
                <p>Manager</p>
                <p>Type Script</p>
                <p>e-mail</p> 
            </div>
            <div className = "Setting-personal-item-button">
                <img src = {Projecticon} alt=""/>
                <img src = {Chat} alt=""/>
            </div>            
        </div>
    )
}

export default SettingPersonalItem