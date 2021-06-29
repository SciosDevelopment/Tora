import React,{Component} from 'react';
import './style/ChatMainViewProfile.scss'
import Profileimg from '../../../../../img/profile4.png'

const ChatMainViewProfile = (props) => {

    // const { followed, handleFollowClick} = props;

      
    return (
        <div className = "ChatMain-Profile">
            <div className = "ChatMain-Profile-img">
                <img src = {Profileimg}/>
            </div>
            <div className = "ChatMain-Profile-info">
                <div className = "ChatMain-Profile-name">
                    <p>Nicolas Serrano</p>
                </div>
                <div className = "ChatMain-Profile-introduction">
                    <p>자기소개</p>
                </div>
            </div>
            <div className = "ChatMain-Profile-follow-button">
                <input type ="button" value="팔로우"/>
            </div>
        </div>
    );
};

export default ChatMainViewProfile;