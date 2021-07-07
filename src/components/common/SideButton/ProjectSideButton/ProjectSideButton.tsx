import React from 'react';
import './style/ProjectSideButton.scss'
import Star from '../../../../img/yellowstar.png'
import Share from '../../../../img/shareicon.png'
import Fork from '../../../../img/forkblack.png'
import IDE from '../../../../img/toralogobutton.png'
import Chat from '../../../../img/communication80.png'

const ProjectSideButton = () => {
    return (
        <div className = "ProjectSideButton">
            <div className = "ProjectSideButton-like">
                <button type="button"><img src={Star} alt=""/>320</button>
            </div>
            <div className  ="ProjectSideButton-share">
                <button type = "button"><img src = {Share}alt=""/>Share</button>
            </div>
            <div className = "ProjectSideButton-fork">
                <button type="button"><img src={Fork} alt=""/>Fork</button>
            </div>
            <div className = "ProjectSideButton-IDE">
                <button type="button"><img src={IDE} alt=""/>IDE</button>
            </div>
            <div className = "ProjectSideButton-chat">
                <button type="button"><img src={Chat} alt=""/>chat</button>
            </div>
        </div>
    );
};

export default ProjectSideButton;