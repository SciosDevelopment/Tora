import React,{FunctionComponent} from 'react';
import UserImg from '../../../../../img/profile4.png'

interface ChatAddProps{
    key : number,
    name : string,
}

const ChatRoomItem:FunctionComponent<ChatAddProps> = (Props:ChatAddProps)  => {
    const {key, name} = Props
    return (
        <div className= "chatadd_item">
            <input type="hidden" id="chataddKey">{key}</input>
            <div className= "img">
                <img src= {UserImg}/>
            </div>
            <div className = "name">
                {name}
            </div>
        </div>
    );
};

export default ChatRoomItem;