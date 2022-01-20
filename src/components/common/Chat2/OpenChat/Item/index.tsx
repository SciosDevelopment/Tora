import React,{FunctionComponent} from 'react';
import OpenChat from '../../../../../img/openchat.png'
import PerSon from '../../../../../img/chatmainicon.png'

interface OpenChatListProps{
    key : number,
    name : string,
    text1 : string,
    text2 : string,
    time : string,
    number : string,
}
const OpenChatListItem:FunctionComponent<OpenChatListProps> = (Props:OpenChatListProps) => {
    const {key, name, text1, text2, time, number} = Props

    return (
        <div className= "openchat_item">
            <input type="hidden" id="UserListKey">{key}</input>
            <div className= "img">
                <img src= {OpenChat}/>
            </div>
            <div className= "info">
                <div className = "name">
                    {name}
                </div>
                <div className = "text">
                    {text1}
                </div>
            </div>
            <div className = "side">
                <div className= "time">
                    {time}
                </div>
                <div className= "personnel">
                    <img src = {PerSon}/>
                    {number}
                </div>
            </div>
        </div>
    );
};

export default OpenChatListItem ;