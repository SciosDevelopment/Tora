import React,{FunctionComponent} from 'react';
import UserImg from '../../../../../../img/profile4.png'

interface UserListProps{
    key : number,
    name : string,
}

const NewChatPopupItem:FunctionComponent<UserListProps> = (Props:UserListProps)=> {
    const {key, name} = Props
    return (
        <div className= "newchatpopup_item">
            <input type="hidden" id="NewChatKey">{key}</input>
            <div className= "info">
                <div className= "img">
                    <img src= {UserImg}/>
                </div>
                <div className = "name">
                    {name}
                </div>
            </div>
            <input type="checkbox"/>
        </div>
    );
};

export default NewChatPopupItem;