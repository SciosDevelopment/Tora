import React,{FunctionComponent} from 'react';
import UserImg from '../../../../../img/profile4.png'

interface UserListProps{
    key : number,
    name : string,
    text : string,
}

const UserListItem: FunctionComponent<UserListProps> = (Props:UserListProps) => {
    const {key, name, text} = Props
    return (
        <div className= "userlist_item">
            <input type="hidden" id="UserListKey">{key}</input>
            <div className= "item_userimg">
                <img src= {UserImg}/>
            </div>
            <div className= "item_userinfo">
                <div className = "user_name">
                    {name}
                </div>
                <div className = "user_text">
                    {text}
                </div>
            </div>
        </div>
    );
};

export default UserListItem;