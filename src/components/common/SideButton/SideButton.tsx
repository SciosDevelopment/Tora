import React from 'react';
import './style/SideButton.scss'
import Star from '../../../img/yellowstar.png'
import FileSave from '../../../img/filesave.png'
import Share from '../../../img/shareicon.png'

const SideButton = () => {
    return (
        <div className = "SideButton">
            <div className = "SideButton-like">
                <button type="button"><img src={Star} alt=""/>320</button>
            </div>
            <div className = "SideButton-follow">
                <input type= "button" value = "팔로우"/>
            </div>
            <div className = "SideButton-save">
                <button type="button"><img src={FileSave} alt=""/>Save</button>
            </div>
            <div className  ="SideButton-share">
                <button type = "button"><img src = {Share}alt=""/>Share</button>
            </div>
        </div>
    );
};

export default SideButton;