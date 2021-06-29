import React,{ FunctionComponent } from 'react';
import './style/ChatFollowItem.scss'
import Profile from '../../../../../../img/profile4.png'
import Message from '../../../../../../img/chatroomicon.png'

interface FollowProps {
    key : number,
    name : string,
}
const ChatFollowerItem:FunctionComponent<FollowProps> = (Props:FollowProps) => {

    const {key, name} = Props
    return (
        <div className = "ChatFollow-Item">
            <input type="hidden" id="FollowKey">{key}</input>
            <div className=  "ChatFollow-Item-Profile">
                <img src = {Profile}/>{name}
            </div>
            <div className = "ChatFollow-Item-button">
                <input type = "button" value ="팔로우"/>
                <img src = {Message}/>
            </div>
        </div>
    );
};

export default ChatFollowerItem;