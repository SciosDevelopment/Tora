import React from 'react';
import './style/MyPageSetProjectItem.scss'
import Profile4 from '../../../../../img/profile4.png'
import Projecticon from '../../../../../img/toralogobutton.png'
import Chat from '../../../../../img/communication80.png'

const MyPageSetProjectItem = () => {
    return (
        <div className = "Mypage-set-project-item-main">
            <div className = "Mypage-set-project-item-profile">
                <img src = {Profile4}/>
            </div>
            <div className = "Mypage-set-project-item-info">
                <p>Project Name</p>
                <p>Project ReadMe</p>
            </div>
            <div className = "Mypage-set-project-item-button">
                <img src = {Projecticon}/>
                <img src = {Chat}/>
            </div>            
        </div>
    );
};

export default MyPageSetProjectItem;