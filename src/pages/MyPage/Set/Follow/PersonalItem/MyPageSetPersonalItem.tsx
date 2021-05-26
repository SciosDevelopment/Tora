import React from 'react';
import './style/MyPageSetPersonalItem.scss'
import Profile4 from '../../../../../img/profile4.png'
import Projecticon from '../../../../../img/toralogobutton.png'
import Chat from '../../../../../img/communication80.png'

const MyPageSetPersonalItem = () => {
    return (
        <div className = "Mypage-set-Personal-item-main">
            <div className = "Mypage-set-Personal-item-profile">
                <img src = {Profile4}/>
            </div>
            <div className = "Mypage-set-Personal-item-info">
                <p>Name</p>
                <p>Manager</p>
                <p>Type Script</p>
                <p>e-mail</p> 
            </div>
            <div className = "Mypage-set-Personal-item-button">
                <img src = {Projecticon}/>
                <img src = {Chat}/>
            </div>            
        </div>
    );
};

export default MyPageSetPersonalItem;