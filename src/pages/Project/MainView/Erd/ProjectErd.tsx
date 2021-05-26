import React from 'react';
import './style/ProjectErd.scss'
import chaticon from '../../../../img/communication80.png'
import videoicon from '../../../../img/videomessage80.png'
import profile from '../../../../img/profile4.png'
import likeicon from '../../../../img/heart64.png'
import saveicon from '../../../../img/saveicon.png'
import shareicon from '../../../../img/shareicon.png'
import followicon from '../../../../img/tora-ide-logo@2x.png'


const ProjectErd = () => {
    return (
        <div className = "Project-erd-main">
            <div className = "Project-erd-title-main">
                <div className = "Project-erd-title">
                    <p>Project Name</p>
                </div>
                <div className = "Project-erd-title-button">
                    <div className = "Project-erd-chat">
                        <img src = {chaticon}/>
                    </div>
                    <div className = "Project-erd-video">
                        <img src = {videoicon}/>
                    </div>
                    <div className  = "Project-erd-ide">
                        <img src = {videoicon}/>
                    </div>
                </div>
            </div>
            <div className = "Project-erd-info-main">
                <div className = "Project-erd-info-profile">
                    <img src = {profile}/>
                </div>
                <div className = "Project-erd-info-button">
                    <div className = "Project-erd-info-like">
                        <img src = {likeicon}/>
                        <p>20</p>
                    </div>
                    <div className = "Project-erd-info-save">
                        <img src = {saveicon}/>
                        <p>저장</p>
                    </div>
                    <div className = "Project-erd-info-share">
                        <img src = {shareicon}/>
                        <p>공유</p>
                    </div>
                    <div className = "Project-erd-info-follow">
                        <img src = {followicon}/>
                        <p>팔로우</p>
                    </div>
                </div>
            </div>
            <div className = "Project-erd-view-main">

            </div>
        </div>
    );
};

export default ProjectErd;