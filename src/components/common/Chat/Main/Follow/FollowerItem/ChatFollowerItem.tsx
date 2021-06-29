import React,{ FunctionComponent } from 'react';
import './style/ChatFollowerItem.scss'
import Profile from '../../../../../../img/profile4.png'

interface FollowProps {
    key : number,
    name : string,
}
const ChatFollowerItem:FunctionComponent<FollowProps> = (Props:FollowProps) => {

    const {key, name} = Props
    return (
        <div className = "ChatFollower-Item">
            <input type="hidden" id="FollowerKey">{key}</input>
            <div className=  "ChatFollower-Item-Profile">
                <img src = {Profile}/>{name}
            </div>
            <div className = "ChatFollower-Item-deletebutton">
                <input type = "button" value ="삭제"/>
            </div>
        </div>
    );
};

export default ChatFollowerItem;