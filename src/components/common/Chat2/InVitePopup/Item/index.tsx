import React,{FunctionComponent} from 'react';
import UserImg from '../../../../../img/profile4.png'

interface UserListProps{
    key : number,
    name : string,
}

const InVitePopupItem:FunctionComponent<UserListProps> = (Props:UserListProps)=> {
    const {key, name} = Props
    return (
        <div className= "invitepopup_item">
            <input type="hidden" id="UserListKey">{key}</input>
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

export default InVitePopupItem;