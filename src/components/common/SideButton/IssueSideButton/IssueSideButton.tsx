import React from 'react';
import './style/IssueSideButton.scss'
import Star from '../../../../img/yellowstar.png'
import Share from '../../../../img/shareicon.png'
import Save from '../../../../img/filesave.png'
import UPArrow from '../../../../img/uparrow.png'
import Close from '../../../../img/closeicon.png'

const IssueSideButton = () => {
    return (
        <div className = "IssueSideButton">
            <div className = "IssueSideButton-like">
                <button type="button"><img src={Star} alt=""/>320</button>
            </div>
            <div className = "IssueSideButton-save">
                <button type="button"><img src={Save} alt=""/>Save</button>
            </div>
            <div className  ="IssueSideButton-share">
                <button type = "button"><img src = {Share}alt=""/>Share</button>
            </div>
            <div className = "IssueSideButton-upload">
                <button type="button"><img src={UPArrow} alt=""/>UPLoad</button>
            </div>
            <div className = "IssueSideButton-close">
                <button type="button"><img src={Close} alt=""/>Close</button>
            </div>
        </div>
    );
};

export default IssueSideButton;