import React,{FunctionComponent} from 'react';
import UserImg from '../../../../../img/profile4.png'

interface UserListProps{
    key : number,
    name : string,
    text : string,
    time : string,
}

const ChatRoomItem:FunctionComponent<UserListProps> = (Props:UserListProps)  => {
    const {key, name, text, time} = Props
    return (
        <div className= "chatroom_item">
            <input type="hidden" id="UserListKey">{key}</input>
            <div className= "userimg">
                <img src= {UserImg}/>
            </div>
            <div className= "userinfo">
                <div className = "name">
                    {name}
                    <div className= "time">
                        {time}
                    </div>
                </div>
                <div className = "text">
                    {text}
                </div>
            </div>
        </div>
    );
};

export default ChatRoomItem;