import React from 'react';
import './style/ProjectFollowItem.scss'
import Profile4 from '../../../../../img/profile4.png'
import Projecticon from '../../../../../img/toralogobutton.png'
import Chat from '../../../../../img/communication80.png'
import Modify from '../../../../../img/modify.png'

const ProjectFollowItem = () => {
    return (
        <div className = "ProjectFollow-Item-main">
            <div className = "ProjectFollow-Item-profile">
                <img src = {Profile4}/>
            </div>
            <div className = "ProjectFollow-Item-info">
                <p>Name</p>
                <p>Manager</p>
                <p>Type Script</p>
                <p>e-mail</p> 
            </div>
            <div className = "ProjectFollow-Item-side">
                <div className = "ProjectFollow-Item-set">
                    <img src = {Modify}/>
                </div>
                <div className = "ProjectFollow-Item-button">
                    <img src = {Projecticon}/>
                    <img src = {Chat}/>
                </div>  
            </div>          
        </div>
    );
};

export default ProjectFollowItem;