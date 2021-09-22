import React,{ FunctionComponent } from 'react';
import './style/OpenChatItem.scss'
import Profile from '../../../../../img/profile4.png'

interface ChatRoomProps {
    key : number,
    name : string,
    text : string,
    time : string,
    alarm : string,
}


const OpenChatItem:FunctionComponent<ChatRoomProps> = (Props:ChatRoomProps)=> {
    const {key, name, text, time, alarm} = Props

    return (
        <div className = "OpenChat-Item">
            <input type="hidden" id="OpenChatKey">{key}</input>
            <div className  ="OpenChat-Item-info">
                <div className = "OpenChat-Item-profile">
                    <img src = {Profile}/>
                    <img src = {Profile}/>
                    <img src = {Profile}/>
                    <img src = {Profile}/>
                </div>
                <div className  = "OpenChat-Item-contents">
                    <div className = "OpenChat-Item-user-name">
                        {name}
                    </div>
                    <div className = "OpenChat-Item-text">
                        {text}
                    </div>
                </div>
            </div>
            <div className = "OpenChat-Item-side">
                <div className = "OpenChat-Item-time">
                    {time}
                </div>
                {
                    alarm &&
                <div className = "OpenChat-Item-alarm">
                    {alarm}
                </div>
                }
            </div>
        </div>
    );
};

export default OpenChatItem;