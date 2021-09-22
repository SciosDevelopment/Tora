import React,{ FunctionComponent } from 'react';
import './style/ChatListItem.scss'
import Profile from '../../../../../img/profile4.png'

interface ChatListProps {
    key : number,
    name : string,
    text : string,
    time : string,
    alarm : string,
}

const ChatRoomItem:FunctionComponent<ChatListProps> = (Props:ChatListProps) => {

    const {key, name, text, time, alarm} = Props

    return (
        <div className = "ChatList-Item">
            <input type="hidden" id="ChatListKey">{key}</input>
            <div className  ="ChatList-Item-info">
                <div className = "ChatList-Item-profile">
                    <img src = {Profile}/>
                </div>
                <div className  = "ChatList-Item-contents">
                    <div className = "ChatList-Item-user-name">
                        {name}
                    </div>
                    <div className = "ChatList-Item-text">
                        {text}
                    </div>
                </div>
            </div>
            <div className = "ChatList-Item-side">
                <div className = "ChatList-Item-time">
                    {time}
                </div>
                {
                    alarm &&
                    <div className = "ChatList-Item-alarm">
                        {alarm}
                    </div>
                }
                
            </div>
        </div>
    );
};

export default ChatRoomItem;