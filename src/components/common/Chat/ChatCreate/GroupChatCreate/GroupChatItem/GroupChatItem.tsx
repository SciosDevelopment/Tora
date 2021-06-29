import React,{ FunctionComponent } from 'react';
import './style/GroupChatItem.scss'
import Profile from '../../../../../../img/profile4.png'

interface FollowProps {
    key : number,
    name : string,
}

const GroupChatItem:FunctionComponent<FollowProps> = (Props:FollowProps) => {
    const {key, name} = Props

    return (
        <div className = "GroupChat-Item">
            <input type="hidden" id="FollowKey">{key}</input>
            <div className =  "GroupChat-Item-Profile">
                <img src = {Profile}/>{name}
            </div>
            <div className = "GroupChat-Item-button">
                <input type = "checkbox" name="gb_1" id = "gb1" value="groupchat"/>
            </div>
        </div>
    );
};

export default GroupChatItem;