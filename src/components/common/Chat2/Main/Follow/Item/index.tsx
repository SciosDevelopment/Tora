import React,{FunctionComponent, useState} from 'react';
import UserImg from '../../../../../../img/profile4.png'
import follow from '../../../../../../img/followbtn.png'
import unfollow from '../../../../../../img/unfollowbtn.png'

interface UserListProps{
    key : number,
    name : string,
    text : string,
}

const FollowViewItem: FunctionComponent<UserListProps> = (Props:UserListProps) => {

    const followbtn = { follow, unfollow }

    const [isfollow, setIsFollow] = useState(followbtn.follow);


    const {key, name, text} = Props
    return (
        <div className= "followlist_item">
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
            <button className= "item_followbtn" onClick={() => setIsFollow((followbtn.unfollow))}>
                <img src={isfollow}/>
            </button>
        </div>
    );
};

export default FollowViewItem;