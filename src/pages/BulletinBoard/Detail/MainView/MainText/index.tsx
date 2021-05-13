import React from 'react';
import './style/BulletinBoardDetailMainText.scss'
import Profile from '../../../../../img/profile4.png'

const BulletinBoardDetailMainText = () => {
    return (
        <div>
            <div className = "BulletinBoard-Detail-view-text">
                <p>I'd like to have an aggregated view (or an alert) when some recipients in my contact list don't receive any of the emails my app sents. Is this possible?</p>
                <p>I checked on the alert thing in the docs but it doesn't seem to do what I need. Although this seems like a pretty common need and there may not be necessary to setup webhooks and own app logic to handle this, wouldn't it?
                </p>
                <p>Thanks</p>
            </div>
            <div className = "BulletinBoard-Detail-view-contents-profile">
                <div className = "BulletinBoard-Detail-view-contents">

                </div>
                <div className = "BulletinBoard-Detail-view-profile">
                    <img src = {Profile}/>
                    <p>sarah</p>
                </div>
            </div>
        </div>
    );
};

export default BulletinBoardDetailMainText;